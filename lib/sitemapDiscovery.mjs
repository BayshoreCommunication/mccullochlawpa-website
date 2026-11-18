import fs from "node:fs";
import path from "node:path";

const PAGE_FILE_REGEX = /^page\.(tsx|ts|jsx|js|mdx)$/;
const EXCLUDED_DIRS = new Set(["api", "private"]);

/**
 * Checks whether an App Router segment is a route group (e.g. `(seo-services)`).
 * @param {string} segment
 * @returns {boolean}
 */
function isRouteGroup(segment) {
  return (
    segment.startsWith("(") &&
    segment.endsWith(")") &&
    !segment.startsWith("(.)") &&
    !segment.startsWith("(..)") &&
    !segment.startsWith("(...)")
  );
}

/**
 * Checks whether an App Router segment should be skipped from static route discovery.
 * @param {string} segment
 * @returns {boolean}
 */
function shouldSkipSegment(segment) {
  if (!segment) return true;
  if (EXCLUDED_DIRS.has(segment)) return true;
  if (segment.startsWith(".") || segment.startsWith("_") || segment.startsWith("@")) {
    return true;
  }
  if (segment.includes("[") || segment.includes("]")) {
    return true;
  }
  if (
    segment.startsWith("(.)") ||
    segment.startsWith("(..)") ||
    segment.startsWith("(...)")
  ) {
    return true;
  }
  return false;
}

/**
 * Normalizes raw App Router segments into a sitemap route descriptor.
 * @param {string[]} rawSegments
 * @param {string} lastModifiedIso
 * @returns {{ path: string; lastModified: string; changeFrequency: "daily" | "weekly"; priority: number } | null}
 */
function buildRouteEntry(rawSegments, lastModifiedIso) {
  const urlSegments = [];
  let isSeoService = false;

  for (const segment of rawSegments) {
    if (shouldSkipSegment(segment)) {
      return null;
    }
    if (isRouteGroup(segment)) {
      if (segment === "(seo-services)") {
        isSeoService = true;
      }
      continue;
    }
    urlSegments.push(segment);
  }

  const routePath = urlSegments.length === 0 ? "" : `/${urlSegments.join("/")}`;

  if (routePath === "") {
    return {
      path: "",
      lastModified: lastModifiedIso,
      changeFrequency: "daily",
      priority: 1.0,
    };
  }

  return {
    path: routePath,
    lastModified: lastModifiedIso,
    changeFrequency: routePath === "/blogs" ? "daily" : "weekly",
    priority: isSeoService ? 0.9 : 0.8,
  };
}

/**
 * Recursively discovers all static & grouped App Router page routes under `appDir`.
 * Skips dynamic segments (`[slug]`), API/private folders, parallel/intercepted slots,
 * and pages explicitly marked with `index: false` in metadata.
 * @param {string} [appDir]
 * @returns {Array<{ path: string; lastModified: string; changeFrequency: "daily" | "weekly"; priority: number }>}
 */
export function discoverAppRoutes(appDir = path.join(process.cwd(), "app")) {
  if (!fs.existsSync(appDir)) {
    return [];
  }

  /** @type {Array<{ path: string; lastModified: string; changeFrequency: "daily" | "weekly"; priority: number }>} */
  const discovered = [];

  /**
   * @param {string} currentDir
   * @param {string[]} rawSegments
   */
  function walk(currentDir, rawSegments) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    let pageFile = null;

    for (const entry of entries) {
      if (entry.isFile() && PAGE_FILE_REGEX.test(entry.name)) {
        pageFile = entry.name;
        break;
      }
    }

    if (pageFile) {
      const fullPath = path.join(currentDir, pageFile);
      const source = fs.readFileSync(fullPath, "utf8");
      if (!/\bindex\s*:\s*false\b/.test(source)) {
        const mtimeIso = fs.statSync(fullPath).mtime.toISOString();
        const entryObj = buildRouteEntry(rawSegments, mtimeIso);
        if (entryObj) {
          discovered.push(entryObj);
        }
      }
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (shouldSkipSegment(entry.name)) continue;
      walk(path.join(currentDir, entry.name), [...rawSegments, entry.name]);
    }
  }

  walk(appDir, []);

  return sortAndDedupeRoutes(discovered);
}

/**
 * Parses Next.js `.next/server/app-paths-manifest.json` as a fallback when `app/`
 * source files are not present in the runtime container.
 * @param {string} [manifestPath]
 * @returns {Array<{ path: string; lastModified: string; changeFrequency: "daily" | "weekly"; priority: number }>}
 */
export function parseAppPathsManifest(
  manifestPath = path.join(process.cwd(), ".next/server/app-paths-manifest.json")
) {
  if (!fs.existsSync(manifestPath)) {
    return [];
  }

  try {
    const raw = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const nowIso = fs.statSync(manifestPath).mtime.toISOString();
    const routes = [];

    for (const key of Object.keys(raw)) {
      if (key !== "/page" && !key.endsWith("/page")) {
        continue;
      }
      const trimmed = key === "/page" ? "" : key.slice(0, -"/page".length);
      const rawSegments = trimmed ? trimmed.replace(/^\/+/, "").split("/") : [];
      const entryObj = buildRouteEntry(rawSegments, nowIso);
      if (entryObj) {
        routes.push(entryObj);
      }
    }

    return sortAndDedupeRoutes(routes);
  } catch {
    return [];
  }
}

/**
 * Deduplicates and deterministically sorts discovered route entries.
 * @param {Array<{ path: string; lastModified: string; changeFrequency: "daily" | "weekly"; priority: number }>} routes
 */
function sortAndDedupeRoutes(routes) {
  const byPath = new Map();
  for (const item of routes) {
    const existing = byPath.get(item.path);
    if (!existing || item.priority > existing.priority) {
      byPath.set(item.path, item);
    }
  }
  return Array.from(byPath.values()).sort((a, b) => {
    if (a.path === "") return -1;
    if (b.path === "") return 1;
    return a.path.localeCompare(b.path);
  });
}

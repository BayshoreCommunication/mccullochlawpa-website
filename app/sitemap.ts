import { MetadataRoute } from "next";
import { PersonalInjuryServices, CriminalInjuryServices } from "@/config/data";
import { staticBlogs } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";
import {
  discoverAppRoutes,
  parseAppPathsManifest,
} from "@/lib/sitemapDiscovery.mjs";
import generatedAppRoutes from "@/lib/sitemap-routes.generated.json";

const BASE_URL = "https://www.mcfloridalaw.com";

export const dynamic = "force-dynamic";

interface DiscoveredRoute {
  path: string;
  lastModified?: string;
  changeFrequency?: "daily" | "weekly";
  priority?: number;
}

interface RemoteBlogPost {
  slug?: string;
  published?: boolean;
  updatedAt?: string;
  createdAt?: string;
}

interface StaticBlogEntry {
  slug: string;
  published?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

function toValidDate(value?: string | Date): Date {
  if (!value) return new Date();
  const parsed = value instanceof Date ? value : new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function normalizeRoutePath(routePath: string): string {
  const trimmed = routePath.trim();
  if (!trimmed || trimmed === "/") return "";
  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

function getAppRouterPages(): DiscoveredRoute[] {
  const liveRoutes = discoverAppRoutes() as DiscoveredRoute[];
  if (liveRoutes.length > 0) {
    return liveRoutes;
  }

  const manifestRoutes = parseAppPathsManifest() as DiscoveredRoute[];
  if (manifestRoutes.length > 0) {
    return manifestRoutes;
  }

  return generatedAppRoutes as DiscoveredRoute[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entriesByUrl = new Map<string, MetadataRoute.Sitemap[number]>();

  const addEntry = (
    routePath: string,
    options: Omit<MetadataRoute.Sitemap[number], "url">
  ) => {
    const normalizedPath = normalizeRoutePath(routePath);
    const url = `${BASE_URL}${normalizedPath}`;
    if (!entriesByUrl.has(url)) {
      entriesByUrl.set(url, { url, ...options });
    }
  };

  // 1. Auto-discovered App Router Static & SEO Landing Pages (app/**/page.*)
  for (const route of getAppRouterPages()) {
    addEntry(route.path, {
      lastModified: toValidDate(route.lastModified),
      changeFrequency: route.changeFrequency ?? "weekly",
      priority: route.priority ?? (route.path === "" ? 1.0 : 0.8),
    });
  }

  // 2. Dynamic Practice Area / Service Pages (/practice/[slug])
  for (const service of [...PersonalInjuryServices, ...CriminalInjuryServices]) {
    if (!service.slug) continue;
    const cleanSlug = service.slug.trim().replace(/^\/+/, "");
    addEntry(`/practice/${cleanSlug}`, {
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // 3. Static Blog Pages (/blogs/[slug])
  const staticSlugs = new Set<string>();
  for (const rawBlog of staticBlogs as StaticBlogEntry[]) {
    if (rawBlog.published === false || !rawBlog.slug) continue;
    const cleanSlug = rawBlog.slug.trim().replace(/^\/+/, "");
    staticSlugs.add(cleanSlug);
    addEntry(`/blogs/${cleanSlug}`, {
      lastModified: toValidDate(rawBlog.updatedAt || rawBlog.createdAt),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  // 4. Live Dynamic CMS Blog Pages (/blogs/[slug]) fetched fresh per request
  try {
    const blogData = await GetAllPostData({ noStore: true });
    if (blogData && Array.isArray(blogData.data)) {
      for (const blog of blogData.data as RemoteBlogPost[]) {
        if (!blog?.published || !blog.slug) continue;
        const cleanSlug = blog.slug.trim().replace(/^\/+/, "");
        if (!cleanSlug || staticSlugs.has(cleanSlug)) continue;
        addEntry(`/blogs/${cleanSlug}`, {
          lastModified: toValidDate(blog.updatedAt || blog.createdAt),
          changeFrequency: "weekly",
          priority: 0.6,
        });
      }
    }
  } catch (error) {
    console.error("Failed to fetch dynamic blogs for sitemap:", error);
  }

  return Array.from(entriesByUrl.values());
}

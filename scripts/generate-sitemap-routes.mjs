import fs from "node:fs";
import path from "node:path";
import { discoverAppRoutes } from "../lib/sitemapDiscovery.mjs";

const appDir = path.join(process.cwd(), "app");
const outputPath = path.join(process.cwd(), "lib", "sitemap-routes.generated.json");

const routes = discoverAppRoutes(appDir);
fs.writeFileSync(outputPath, `${JSON.stringify(routes, null, 2)}\n`, "utf8");

console.log(
  `Generated ${routes.length} static sitemap route(s) -> ${path.relative(process.cwd(), outputPath)}`
);

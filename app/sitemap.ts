import { MetadataRoute } from "next";
import { PersonalInjuryServices, CriminalInjuryServices } from "@/config/data";
import { staticBlogs } from "@/components/static-blogs/staticBlogData";
import GetAllPostData from "@/lib/GetPostData";

const BASE_URL = "https://www.mcfloridalaw.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Core Static Pages
  const staticRoutes = [
    "",
    "/about",
    "/practice",
    "/testimonials",
    "/blogs",
    "/contact",
    "/criminal-defense-attorney",
    "/dui-defense-attorney",
    "/help",
    "/team",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Practice Area / Service Pages
  const practiceRoutes = [
    ...PersonalInjuryServices.map((service) => service.slug),
    ...CriminalInjuryServices.map((service) => service.slug),
  ].map((slug) => ({
    url: `${BASE_URL}/practice/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Static Blog Pages
  const staticBlogRoutes = staticBlogs.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: blog.createdAt ? new Date(blog.createdAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 4. Dynamic Blog Pages
  let dynamicBlogRoutes: MetadataRoute.Sitemap = [];
  const staticSlugs = new Set(staticBlogs.map((blog) => blog.slug));

  try {
    const blogData = await GetAllPostData();
    if (blogData && Array.isArray(blogData.data)) {
      dynamicBlogRoutes = blogData.data
        .filter((blog: any) => blog.published && blog.slug && !staticSlugs.has(blog.slug))
        .map((blog: any) => ({
          url: `${BASE_URL}/blogs/${blog.slug}`,
          lastModified: blog.updatedAt ? new Date(blog.updatedAt) : (blog.createdAt ? new Date(blog.createdAt) : new Date()),
          changeFrequency: "weekly" as const,
          priority: 0.6,
        }));
    }
  } catch (error) {
    console.error("Failed to fetch dynamic blogs for sitemap:", error);
  }

  return [
    ...staticRoutes,
    ...practiceRoutes,
    ...staticBlogRoutes,
    ...dynamicBlogRoutes,
  ];
}

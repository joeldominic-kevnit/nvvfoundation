import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import destinations from "@/lib/destinations";

const siteUrl = "https://nvvfoundation.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/apply",
    "/blogs",
    "/contact",
    "/courses",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: new Date(),
  }));

  const destinationRoutes = Object.values(destinations).map((d) => ({
    url: `${siteUrl}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes, ...destinationRoutes];
}

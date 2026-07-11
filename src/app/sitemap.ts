import { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://gdg.cvr.ac.in";

  const posts = await getPublishedPosts().catch((err) => {
    console.error("Failed to fetch posts for sitemap:", err);
    return [];
  });

  // Static routes
  const staticRoutes = ["", "/team", "/events", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}

import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";

const SITE_ORIGIN = "https://www.rarelm.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_ORIGIN}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_ORIGIN}/vision/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/founder/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/join/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_ORIGIN}/contact-us/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_ORIGIN}/faq/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/pagestock/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_ORIGIN}/original-tag/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/qac/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/blog/`,
      lastModified: posts[0]
        ? new Date(posts[0].published_at)
        : new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_ORIGIN}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

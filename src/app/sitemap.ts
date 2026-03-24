import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = "https://kenitech.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-03-23"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/devops-consulting`,
      lastModified: new Date("2026-03-23"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/infrastructure-audit`,
      lastModified: new Date("2026-03-23"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/platform`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/healthcheck`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-03-23"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}

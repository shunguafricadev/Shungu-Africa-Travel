import type { MetadataRoute } from "next";

import { activities } from "@/data/activities";
import { blogs } from "@/data/blogs";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { transfers } from "@/data/transfers";
import { SITE_URL } from "@/lib/seo/siteUrl";

const staticRoutes = [
  ["/", 1, "weekly"],
  ["/about", 0.7, "monthly"],
  ["/activities", 0.9, "weekly"],
  ["/destinations", 0.9, "weekly"],
  ["/transfers", 0.8, "weekly"],
  ["/packages", 0.8, "weekly"],
  ["/blog", 0.7, "weekly"],
  ["/contact", 0.6, "monthly"],
  ["/enquire", 0.6, "monthly"],
] as const;

function entry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]): MetadataRoute.Sitemap[number] {
  return {
    url: path === "/" ? SITE_URL : new URL(path, SITE_URL).toString(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(([path, priority, changeFrequency]) =>
      entry(path, priority, changeFrequency),
    ),
    ...activities.map((item) => entry(`/activities/${item.slug}`, 0.8, "monthly")),
    ...destinations.map((item) => entry(`/destinations/${item.slug}`, 0.8, "monthly")),
    ...transfers.map((item) => entry(`/transfers/${item.slug}`, 0.7, "monthly")),
    ...packages.map((item) => entry(`/packages/${item.slug}`, 0.7, "monthly")),
    ...blogs
      .filter((item) => item.content?.length)
      .map((item) => entry(`/blog/${item.slug}`, 0.7, "monthly")),
  ];
}

import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/confidentialitate/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/cookies/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}

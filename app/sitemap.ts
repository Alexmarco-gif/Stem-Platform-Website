import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thestemgrid.com";
  const lastModified = new Date("2026-08-20");
  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/product`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pilot`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 }
  ];
}

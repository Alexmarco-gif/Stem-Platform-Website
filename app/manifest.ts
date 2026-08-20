import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stem Cogent Decision Intelligence Platform",
    short_name: "Stem Cogent",
    description: "Know which changes matter to your fintech—and what decision they require.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F6FA",
    theme_color: "#2A4BFF",
    icons: [{ src: "/v4.png", sizes: "331x333", type: "image/png" }]
  };
}

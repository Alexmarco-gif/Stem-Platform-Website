import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stem Cogent Decision Intelligence Platform",
    short_name: "Stem Cogent",
    description: "Nigeria-first decision intelligence for financial services.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F8FF",
    theme_color: "#07112B",
    icons: [{ src: "/v4.png", sizes: "331x333", type: "image/png" }]
  };
}

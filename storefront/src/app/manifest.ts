// File: src/app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Solution Sahab",
    short_name: "Solution Sahab",
    description:
      "Invisible grills, pleated mosquito mesh, honeycomb partitions and security mesh across Delhi NCR.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1B4D8E",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

// File: src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
        // contentsignals.org: how crawlers may use the content.
        other: { "Content-Signal": "search=yes, ai-input=yes, ai-train=yes" },
      },
    ],
    sitemap: "https://solutionsahab.com/sitemap.xml",
  };
}

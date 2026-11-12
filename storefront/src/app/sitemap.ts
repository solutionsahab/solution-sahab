// File: src/app/sitemap.ts
import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { USE_CASE_PAGES } from "@/lib/use-case-pages";
import { CITY_PAGES } from "@/lib/city-pages";
import { PRODUCT_CONFIGS, type ProductPageConfig } from "@/lib/product-page-configs";

const productImages = (c: ProductPageConfig) => [
  c.hero.heroImage,
  c.benefits.image,
  ...c.applications.areas.map((a) => a.imageUrl),
];

// Google ties each photo to one page, so a photo is listed only under the first page that uses it:
// products, then use-case pages, then city pages, then blog posts. A new city photo lands on its city page.
function imageOwners(baseUrl: string): Map<string, string[]> {
  const pages: [string, (string | undefined)[]][] = [
    ...Object.values(PRODUCT_CONFIGS).map((c) => [c.metadata.canonical, productImages(c)] as [string, string[]]),
    ...Object.values(USE_CASE_PAGES).map((c) => [c.metadata.canonical, productImages(c)] as [string, string[]]),
    ...Object.values(CITY_PAGES).map((c) => [c.metadata.canonical, productImages(c)] as [string, string[]]),
    ...BLOG_POSTS.map((p): [string, (string | undefined)[]] => [
      `${baseUrl}/${p.slug}`,
      [p.image?.src, ...(p.images ?? []).map((i) => i.src)],
    ]),
  ];
  const claimed = new Set<string>();
  const owners = new Map<string, string[]>();
  for (const [url, srcs] of pages) {
    const own = srcs.filter((s): s is string => !!s && !claimed.has(s));
    own.forEach((s) => claimed.add(s));
    if (own.length) owners.set(url, [...new Set(own)].map((s) => (s.startsWith("http") ? s : `${baseUrl}${s}`)));
  }
  return owners;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://solutionsahab.com";
  const currentDate = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/invisible-grills`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pleated-mesh`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/honeycomb-partition`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aluminum-mesh-partition`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/automatic-weather-screen`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skylight`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ceiling-cloth-hanger`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/who-we-are`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-team`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog-list`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.datePublished,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const useCasePages: MetadataRoute.Sitemap = Object.values(USE_CASE_PAGES).map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // City landing pages are not linked from the site, so the sitemap is how Google finds them.
  const cityPages: MetadataRoute.Sitemap = Object.values(CITY_PAGES).map((page) => ({
    url: page.metadata.canonical,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const owners = imageOwners(baseUrl);
  return [...staticPages, ...useCasePages, ...cityPages, ...blogPosts].map((entry) => {
    const images = owners.get(entry.url);
    return images ? { ...entry, images } : entry;
  });
}

// File: src/lib/seo.ts
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";

export const SITE = "https://solutionsahab.com";

export interface PageImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface PageMetaInput {
  /** Absolute route path, e.g. "/who-we-are" or "/blog-list" */
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  image?: PageImage;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

const DEFAULT_IMAGE: PageImage = {
  url: "/og/home.jpg",
  alt: "Solution Sahab invisible grill and pleated mesh installation",
  width: 1200,
  height: 630,
};

/** Branded card from scripts/make-og.py, named after the first path segment ("/" -> home). */
function ogCard(path: string, title: string): PageImage | undefined {
  const url = `/og/${path.split("/")[1] || "home"}.jpg`;
  return existsSync(join(process.cwd(), "public", url)) ? { url, alt: title } : undefined;
}

export function buildPageMetadata({
  path,
  title,
  description,
  keywords,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetaInput): Metadata {
  const url = `${SITE}${path}`;
  const ogImage = image ?? ogCard(path, title) ?? DEFAULT_IMAGE;

  return {
    title,
    description,
    // null stops pages without their own keywords inheriting the home page list.
    keywords: keywords?.length ? keywords : null,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Solution Sahab",
      locale: "en_IN",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: ogImage.url,
          width: ogImage.width ?? 1200,
          height: ogImage.height ?? 630,
          alt: ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

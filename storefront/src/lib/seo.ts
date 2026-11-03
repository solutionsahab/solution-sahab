// File: src/lib/seo.ts
import type { Metadata } from "next";
import { ASSETS } from "@/lib/constants";

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
  url: ASSETS.HERO_IMAGE_HOME,
  alt: "Solution Sahab invisible grill and pleated mesh installation",
  width: 1200,
  height: 630,
};

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
  const ogImage = image ?? DEFAULT_IMAGE;

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

// File: src/lib/product-metadata.ts
import type { Metadata } from "next";
import type { ProductDetail } from "@/lib/products";

const SITE = "https://solutionsahab.com";

export function buildProductMetadata(product: ProductDetail): Metadata {
  const url = `${SITE}/${product.slug}`;
  const image = product.hero.imageUrl;

  return {
    title: product.meta.title,
    description: product.meta.description,
    keywords: product.meta.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: product.meta.title,
      description: product.meta.description,
      url,
      siteName: "Solution Sahab",
      locale: "en_IN",
      type: "website",
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: product.hero.imageAlt || product.name,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: product.meta.title,
      description: product.meta.description,
      images: image ? [image] : [],
    },
  };
}

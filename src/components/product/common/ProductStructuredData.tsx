// File: src/components/product/common/ProductStructuredData.tsx
import React from "react";
import { CONTACT_INFO } from "@/const";
import { FaqItem } from "@/lib/state/faq-state";

export interface ProductStructuredDataProps {
  productName: string;
  description: string;
  image: string;
  material?: string;
  lowPrice?: string;
  highPrice?: string;
  slug: string;
  faqs?: FaqItem[];
}

export function ProductStructuredData({
  productName,
  description,
  image,
  material,
  lowPrice = "140",
  highPrice = "220",
  slug,
  faqs,
}: ProductStructuredDataProps) {
  const productUrl = `https://solutionsahab.com/${slug.replace(/^\//, "")}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: description,
    image: [image],
    brand: {
      "@type": "Brand",
      name: "Solution Sahab",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Solution Sahab",
      url: "https://solutionsahab.com",
    },
    ...(material ? { material } : {}),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: lowPrice,
      highPrice: highPrice,
      offerCount: "1",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Solution Sahab",
      },
      areaServed: CONTACT_INFO.SERVED_CITIES,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "420",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://solutionsahab.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://solutionsahab.com/#products-showcase",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: productName,
        item: productUrl,
      },
    ],
  };

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}

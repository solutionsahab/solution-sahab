// File: src/components/product/common/ProductStructuredData.tsx
import React from "react";
import { CONTACT_INFO } from "@/lib/constants";
import { BUSINESS_ID } from "@/components/common/StructuredData";
import { FaqItem } from "@/lib/state/faq-state";

export interface ProductStructuredDataProps {
  productName: string;
  /** Short name used for serviceType, e.g. "Invisible Grills" */
  serviceName: string;
  description: string;
  image: string;
  material?: string;
  slug: string;
  faqs?: FaqItem[];
  /** Parent page added to the breadcrumb trail, e.g. the main product page */
  parentCrumb?: { label: string; href: string };
  /** Cities in areaServed; defaults to the Delhi NCR list */
  areaServed?: readonly string[];
}

export function ProductStructuredData({
  productName,
  serviceName,
  description,
  image,
  material,
  slug,
  faqs,
  parentCrumb,
  areaServed = CONTACT_INFO.SERVED_CITIES,
}: ProductStructuredDataProps) {
  const productUrl = `https://solutionsahab.com/${slug.replace(/^\//, "")}`;

  // Installed to measure and quoted after a site visit, so this is a Service with no price.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${productUrl}#service`,
    name: productName,
    serviceType: `${serviceName} installation`,
    description: material ? `${description} Material: ${material}.` : description,
    image: [image.startsWith("/") ? `https://solutionsahab.com${image}` : image],
    url: productUrl,
    brand: { "@type": "Brand", name: "Solution Sahab" },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": BUSINESS_ID,
      name: "Solution Sahab",
      url: "https://solutionsahab.com",
      telephone: CONTACT_INFO.PHONE_PRIMARY,
    },
    areaServed: areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: productUrl,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: CONTACT_INFO.PHONE_PRIMARY,
        contactType: "sales",
      },
    },
  };

  const crumbs = [
    { name: "Home", item: "https://solutionsahab.com" },
    { name: "Products", item: "https://solutionsahab.com/#products-showcase" },
    ...(parentCrumb
      ? [{ name: parentCrumb.label, item: `https://solutionsahab.com${parentCrumb.href}` }]
      : []),
    { name: productName, item: productUrl },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      ...crumb,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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

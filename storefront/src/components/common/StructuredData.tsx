// File: src/components/common/StructuredData.tsx
import React from "react";
import { ASSETS, CONTACT_INFO } from "@/lib/constants";
import { PRODUCT_LINKS } from "@/lib/site-links";

export const BUSINESS_ID = "https://solutionsahab.com/#business";

export function StructuredData() {
  const localBusinessSchema = {
    // LocalBusiness listed too: some parsers don't map the subtype to LocalBusiness/Organization.
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: "Solution Sahab",
    alternateName: "Solution Sahab",
    url: "https://solutionsahab.com",
    logo: "https://solutionsahab.com/images/logo.png",
    image: ASSETS.HERO_IMAGE_HOME,
    description:
      "Engineered architectural safety & luxury fenestration systems: custom invisible grills, pleated mosquito mesh, honeycomb partitions, and security screens across Delhi NCR.",
    telephone: CONTACT_INFO.PHONE_PRIMARY,
    email: CONTACT_INFO.EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.HEAD_OFFICE,
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110041",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6692",
      longitude: "77.0654",
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Greater Noida" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "City", name: "Ghaziabad" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    hasMap: CONTACT_INFO.GOOGLE_MAPS_URL,
    contactPoint: [
      CONTACT_INFO.PHONE_PRIMARY,
      CONTACT_INFO.PHONE_ALT_1,
      CONTACT_INFO.PHONE_ALT_2,
      CONTACT_INFO.PHONE_ALT_3,
    ].map((telephone) => ({
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    })),
    sameAs: [
      CONTACT_INFO.GOOGLE_MAPS_URL,
      CONTACT_INFO.INSTAGRAM_URL,
      CONTACT_INFO.YOUTUBE_URL,
      CONTACT_INFO.WHATSAPP_URL,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solution Sahab products and installation",
      itemListElement: PRODUCT_LINKS.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: p.label,
          description: p.description,
          url: `https://solutionsahab.com${p.href}`,
          provider: { "@id": BUSINESS_ID },
        },
      })),
    },
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
      {
        "@type": "WebSite",
        "@id": "https://solutionsahab.com/#website",
        name: "Solution Sahab",
        url: "https://solutionsahab.com",
        inLanguage: "en-IN",
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}

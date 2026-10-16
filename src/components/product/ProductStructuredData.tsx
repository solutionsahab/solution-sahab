import React from "react";
import { ASSETS, CONTACT_INFO } from "@/const";

export function ProductStructuredData() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Architectural Grade Invisible Grills for Modern Balconies",
    description:
      "Safe fenestration solutions utilizing 316-grade stainless steel cables with tensioned installation, preserving panoramic views while protecting children and pets in Delhi NCR high-rises.",
    image: [ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS],
    brand: {
      "@type": "Brand",
      name: "Solution Sahab",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Solution Sahab",
      url: "https://solutionsahab.com",
    },
    material: "AISI 316 Marine Grade Stainless Steel Wire",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "140",
      highPrice: "220",
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
        name: "Invisible Grills",
        item: "https://solutionsahab.com/invisible-grills",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do invisible grills endure high humidity and coastal weather?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our cables are composed of authentic AISI 316 Marine Grade stainless steel alloyed with 2-3% molybdenum. This composition prevents pitting and crevice corrosion even in coastal salt air or heavy urban industrial rain. Furthermore, each cable is protected by a transparent, UV-stabilized nylon sheath that prevents discoloration.",
        },
      },
      {
        "@type": "Question",
        name: "Can pigeons or small birds pass through invisible grills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When installed with our 50mm (2-inch) spacing pitch, adult pigeons cannot enter balconies or roost. Unlike flimsy bird nets that tear, get dusty, or trap birds, high-tensile stainless steel invisible grills provide an unyielding physical barrier without harboring pests or obstructing outward visibility.",
        },
      },
      {
        "@type": "Question",
        name: "How are the structural tracks anchored into walls and concrete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use heavy-gauge 6063-T6 extruded aluminum tracking rails secured directly into RCC structural concrete, lintels, or brickwork using heavy-duty stainless steel anchor expansion bolts spaced every 200mm. The tracks are covered with matching snap-on caps, keeping all screws hidden from moisture and aesthetic view.",
        },
      },
      {
        "@type": "Question",
        name: "What is the standard installation turnaround time across Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Following your  laser measurement, profiles are prefabricated at our Nangloi/Nilothi manufacturing unit. A typical 2-balcony residential apartment takes approximately 4 to 6 hours for complete, tidy, dust-controlled installation. Most projects are completed within 48 to 72 hours of initial site confirmation.",
        },
      },
      {
        "@type": "Question",
        name: "Do invisible grills comply with housing society (RWA) guidelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Modern condominium RWAs in Gurugram, Noida, and South Delhi strictly prohibit conventional black iron grilles because they disrupt uniform building elevation aesthetics. Because invisible grills maintain optical transparency from ground level, they are widely approved by residential architect associations and RWAs.",
        },
      },
    ],
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

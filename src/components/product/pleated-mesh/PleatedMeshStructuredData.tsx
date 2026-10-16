// File: src/components/product/pleated-mesh/PleatedMeshStructuredData.tsx
import React from "react";
import { ASSETS, CONTACT_INFO } from "@/const";

export function PleatedMeshStructuredData() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Architectural Pleated Mosquito Mesh for Doors and Windows",
    description:
      "Retractable pleated insect screen system featuring tear-resistant PVC-coated polyester accordion mesh, German Kevlar guide cords, and Jindal T6 6063 architectural aluminum frames across Delhi NCR.",
    image: [ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH],
    brand: {
      "@type": "Brand",
      name: "Solution Sahab",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Solution Sahab",
      url: "https://solutionsahab.com",
    },
    material: "Jindal T6 6063 Aluminum and PVC-Coated Polyester Mesh",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "180",
      highPrice: "320",
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
      reviewCount: "380",
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
        name: "Pleated Mosquito Mesh",
        item: "https://solutionsahab.com/pleated-mesh",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does pleated mosquito mesh block natural airflow or darken the room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Our pleated mesh utilizes an optimized 18x16 weave structure with over 85% open surface porosity. It allows natural cross-ventilation and sunlight to flow freely into your home while creating an impenetrable physical barrier against mosquitoes and insects.",
        },
      },
      {
        "@type": "Question",
        name: "How do I clean and maintain pleated mosquito mesh in dusty Delhi weather?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pleated mesh requires minimal maintenance. Because the polyester fibers are PVC-coated, dust does not penetrate the material. You can clean it in minutes using a handheld vacuum with a soft brush nozzle or gently wipe it with a damp microfiber cloth without removing the frame.",
        },
      },
      {
        "@type": "Question",
        name: "Can household pets or strong balcony winds damage the mesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our mesh is heat-pleated from high-tensile polyester reinforced with internal German Kevlar cords. It withstands pet curiosity and holds firmly inside its aluminum guide tracks against gusty Delhi NCR balcony winds without blowing out or fraying.",
        },
      },
      {
        "@type": "Question",
        name: "Can pleated mesh be fitted onto existing UPVC, aluminum, or wooden doors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our slim 40mm mounting profiles are custom-machined to install flush against all standard UPVC sliding systems, wooden French doors, and aluminum casement frames without altering your existing glass shutters.",
        },
      },
      {
        "@type": "Question",
        name: "How long does measurement and installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our technician visits your home with physical frame color swatches and mesh samples, takes laser measurements, and provides an exact quote. Following confirmation, installation is completed in 2 to 4 hours with clean, dust-controlled tools.",
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

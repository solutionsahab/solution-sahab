// File: src/components/common/StructuredData.tsx
import React from "react";
import { ASSETS, CONTACT_INFO } from "@/const";

export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
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
    priceRange: "₹₹",
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
    sameAs: [CONTACT_INFO.WHATSAPP_URL],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are invisible grills really 100% safe for toddlers, children, and pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our invisible grills utilize 316 Marine Grade stainless steel cables with an individual tensile load capacity exceeding 400kg. The wires are installed with strict 2-inch (50mm) or 3-inch (75mm) vertical/horizontal gaps, making it mechanically impossible for a child's head or body to slip through. Pets such as cats and dogs cannot squeeze between or sever the cables.",
        },
      },
      {
        "@type": "Question",
        name: "Can invisible grills be cut during a fire emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, and this is their greatest safety advantage over traditional welded iron grills! In the event of a fire evacuation, fire rescue teams or homeowners equipped with wire cutters can sever the cables in under 15 seconds to create a full exit hatch, preventing entrapment.",
        },
      },
      {
        "@type": "Question",
        name: "How does the pleated mosquito mesh slide without jumping tracks or tearing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use high-tension German kevlar-reinforced cords threaded through each accordion fold of the polyester mesh. The screen operates on a low-profile bottom track (3mm height) with magnetic side catches, ensuring it glides smoothly with a single finger touch and never derails even under gusty balcony breezes.",
        },
      },
      {
        "@type": "Question",
        name: "What is the warranty and expected lifespan in harsh Delhi NCR weather?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because AISI 316 contains molybdenum, it has exceptional resistance to chlorides, monsoon humidity, and Delhi urban pollution. Our invisible grills carry a 10-Year Rust Guarantee and have an expected field lifespan of 15+ years without painting or rust maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "Which Delhi NCR areas do you service with on-site consultations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We operate fully equipped direct vans covering all of South Delhi (Vasant Kunj, Saket, Greater Kailash), West Delhi (Dwarka, Punjabi Bagh, Janakpuri), North/Central Delhi, as well as Gurgaon (all DLF phases, Golf Course Road, Sohna Road), Noida & Greater Noida (Expressway, Sector 150, Noida Extension), Ghaziabad (Indirapuram), and Faridabad.",
        },
      },
    ],
  };

  const productCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Solution Sahab Architectural Fenestration & Safety Products",
    itemListElement: [
      {
        "@type": "Product",
        position: 1,
        name: "Invisible Grills for Balconies",
        description:
          "Sleek high-tensile 316 stainless steel cable system designed for balconies, French windows, and open terraces without blocking the view.",
        image: ASSETS.PRODUCTS.INVISIBLE_GRILLS,
        brand: { "@type": "Brand", name: "Solution Sahab" },
      },
      {
        "@type": "Product",
        position: 2,
        name: "Pleated Mosquito Mesh",
        description:
          "Retractable accordion mesh systems for sliding balcony doors, French casements, and wide spans. 100% insect block with natural airflow.",
        image: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
        brand: { "@type": "Brand", name: "Solution Sahab" },
      },
      {
        "@type": "Product",
        position: 3,
        name: "Aluminum Security Mesh",
        description:
          "Heavy-gauge aluminum security mesh integrated into sturdy structural frames. Prevents unauthorized entry and withstands blade-cut attacks.",
        image: ASSETS.PRODUCTS.ALUMINUM_SECURITY_MESH,
        brand: { "@type": "Brand", name: "Solution Sahab" },
      },
      {
        "@type": "Product",
        position: 4,
        name: "Acoustic Honeycomb Partitions",
        description:
          "Insulated folding partitions that isolate noise, modulate temperature, and instantly create modular zones in modern residences and office suites.",
        brand: { "@type": "Brand", name: "Solution Sahab" },
      },
      {
        "@type": "Product",
        position: 5,
        name: "Motorized Weather Screens",
        description:
          "High-wind rated motorized zip-track drop screens to protect open balconies and outdoor dining spaces from Delhi dust storms, heavy monsoons, and scorching sun.",
        brand: { "@type": "Brand", name: "Solution Sahab" },
      },
      {
        "@type": "Product",
        position: 6,
        name: "Skylights & Ceiling Cloth Hangers",
        description:
          "Precision architectural glass skylights for luxury stairwells paired with space-saving aluminum pulley ceiling cloth drying systems for utility balconies.",
        brand: { "@type": "Brand", name: "Solution Sahab" },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productCatalogSchema),
        }}
      />
    </>
  );
}

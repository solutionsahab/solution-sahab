// File: src/lib/site-links.ts
import type { RelatedLink } from "@/components/common/RelatedLinks";

/**
 * Internal link groups. Descriptions are drawn from copy already published on
 * the site (product page metadata and the homepage product schema).
 */
export const PRODUCT_LINKS: RelatedLink[] = [
  {
    label: "Invisible Grills",
    href: "/invisible-grills",
    description:
      "316 marine-grade stainless steel cables with 400kgf+ tensile capacity and 5-year anti-rust warranty.",
  },
  {
    label: "Pleated Mesh",
    href: "/pleated-mesh",
    description:
      "Retractable accordion insect screens for sliding balcony doors, French casements and wide spans.",
  },
  {
    label: "Honeycomb Partition",
    href: "/honeycomb-partition",
    description:
      "Insulated folding partitions that isolate noise, modulate temperature and create modular zones.",
  },
  {
    label: "Aluminum Mesh Partition",
    href: "/aluminum-mesh-partition",
    description:
      "Heavy-gauge aluminum security mesh integrated into sturdy structural frames.",
  },
  {
    label: "Automatic Weather Screen",
    href: "/automatic-weather-screen",
    description:
      "High-wind rated motorized zip-track drop screens for balconies and outdoor spaces.",
  },
  {
    label: "Skylight",
    href: "/skylight",
    description:
      "Precision architectural glass skylights for stairwells and luxury residential volumes.",
  },
  {
    label: "Ceiling Cloth Hanger",
    href: "/ceiling-cloth-hanger",
    description:
      "Space-saving aluminium pulley ceiling cloth drying systems for utility balconies.",
  },
];

export const INFO_LINKS: RelatedLink[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    description: "Our story, values, product portfolio and dealership program.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    description: "Installation photos from Gurgaon, Noida, exhibitions and factory.",
  },
  {
    label: "Our Team",
    href: "/our-team",
    description: "The people behind Solution Sahab.",
  },
  {
    label: "Blog",
    href: "/blog-list",
    description: "Guides on invisible grills, pleated mesh and balcony safety.",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    description: "How solutionsahab.com collects, uses and protects your data.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    description: "Phone, addresses, regional partners and a site visit form.",
  },
];

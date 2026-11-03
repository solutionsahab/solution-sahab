// File: src/lib/constants.ts
// Central constants for Solution Sahab: asset paths and contact details.
// Secrets and CRM settings live in .env (see src/lib/crm.ts), never here.

export const ASSETS = {
  // Brand Logo (local file)
  LOGO_LOCAL: "/images/logo.png",

  // Hero Banners
  HERO_IMAGE_HOME: "/images/hero/hero-home.jpg",
  HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS: "/images/products/invisible-grills.jpg",

  // Product Catalog Images
  PRODUCTS: {
    INVISIBLE_GRILLS: "/images/products/invisible-grills.jpg",
    PLEATED_MOSQUITO_MESH: "/images/products/pleated-mesh.jpg",
    ALUMINUM_SECURITY_MESH: "/images/products/aluminum-mesh-partition.jpg",
    HONEYCOMB_PARTITIONS: "/images/products/honeycomb-partition.jpg",
    WEATHER_SCREENS: "/images/products/automatic-weather-screen.jpg",
    CEILING_CLOTH_HANGER: "/images/products/ceiling-cloth-hanger.jpg",
    SKYLIGHT: "/images/products/skylight.jpg",
  },

  // Architectural Typologies Images
  TYPOLOGIES: {
    HIGH_RISE: "/images/typologies/high-rise.jpg",
    FRENCH_WINDOWS: "/images/typologies/french-windows.jpg",
    STAIRWELL_VOIDS: "/images/typologies/stairwell-voids.jpg",
    TERRACE_OPENINGS: "/images/typologies/terrace-openings.jpg",
  },

  // Project Gallery Images
  GALLERY: {
    GURGAON_HIGHRISE: "/images/gallery/gurgaon-highrise.jpg",
    TRADE_FAIR_EXPO: "/images/gallery/trade-fair-expo.jpg",
    NOIDA_VILLA: "/images/gallery/noida-villa.jpg",
    FACTORY_QC: "/images/gallery/factory-qc.jpg",
    PARUL_ENT_HISAR_1: "/images/gallery/parul-ent-hisar-1.jpg",
    PARUL_ENT_HISAR_2: "/images/gallery/parul-ent-hisar-2.jpg",
    PARUL_ENT_HISAR_3: "/images/gallery/parul-ent-hisar-3.jpg",
  },

  // Official Certifications
  CERTIFICATES: {
    ISO_9001: "/images/certificates/iso-9001-certificate.jpg",
    NABL_TENSILE: "/images/certificates/nabl-tensile-test-report.jpg",
    METALLURGY: "/images/certificates/metallurgy-compliance-certificate.jpg",
  },
};

export const CONTACT_INFO = {
  PHONE_PRIMARY: "+91 9971-143-143",
  PHONE_PRIMARY_RAW: "+919971143143",
  PHONE_ALT_1: "+91 8800-124-345",
  PHONE_ALT_1_RAW: "+918800124345",
  PHONE_ALT_2: "+91 9999-277-255",
  PHONE_ALT_2_RAW: "+919999277255",
  PHONE_ALT_3: "+91 9311-559-977",
  PHONE_ALT_3_RAW: "+919311559977",
  PHONE_ALT_4: "+91 9990-381-116",
  PHONE_ALT_4_RAW: "+919990381116",
  WHATSAPP_NUMBER: "919971143143",
  WHATSAPP_URL: "https://wa.me/919971143143",
  GOOGLE_MAPS_URL: "https://maps.app.goo.gl/qWAbFe2HWvLwrDyLA",
  INSTAGRAM_URL: "https://www.instagram.com/solutionsahab/",
  YOUTUBE_URL: "https://www.youtube.com/@solutionsahab",
  EMAIL: "solutionsahab@gmail.com",
  HEAD_OFFICE:
    "35, Kh.No.-7/8, Road No. 5, Shri Ram Colony, Nilothi Extn. Nangloi, New Delhi-110041",
  BRANCH_OFFICE: "B- 45 first floor indra enclave near ignou university new delhi - 110068",
  SERVED_CITIES: [
    "Delhi",
    "New Delhi",
    "Gurugram",
    "Noida",
    "Greater Noida",
    "Faridabad",
    "Ghaziabad",
  ],
};

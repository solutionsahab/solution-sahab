// File: src/lib/constants.ts
// Central constants for Solution Sahab: asset paths and contact details.
// Secrets and CRM settings live in .env (see src/lib/crm.ts), never here.

export const ASSETS = {
  // Brand Logo (local file)
  LOGO_LOCAL: "/images/logo.png",

  // Hero Banners
  HERO_IMAGE_HOME: "/images/hero/hero-home.jpg",
  HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS: "/images/products/invisible-grills/hero-balcony-view.webp",
  // Home hero slides only; product pages and cards keep the PRODUCTS.* images
  HERO_IMAGE_HOME_INVISIBLE_GRILLS: "/images/hero/hero-invisible-grills-v3.webp",
  HERO_IMAGE_HOME_PLEATED_MESH: "/images/hero/hero-pleated-mesh-v3.webp",
  HERO_IMAGE_HOME_HONEYCOMB: "/images/hero/hero-honeycomb-partition-v3.webp",
  HERO_IMAGE_HOME_ALUMINUM_MESH: "/images/hero/hero-aluminum-security-mesh-v3.webp",
  HERO_IMAGE_HOME_WEATHER_SCREEN: "/images/hero/hero-weather-screen-v3.webp",
  HERO_IMAGE_HOME_SKYLIGHT: "/images/hero/hero-skylight-v3.webp",

  // Product Catalog Images
  PRODUCTS: {
    INVISIBLE_GRILLS: "/images/products/invisible-grills/hero-balcony-view.webp",
    PLEATED_MOSQUITO_MESH: "/images/products/pleated-mesh.jpg",
    ALUMINUM_SECURITY_MESH: "/images/products/aluminum-mesh/hero-terrace-doors.webp",
    HONEYCOMB_PARTITIONS: "/images/products/honeycomb/hero-wide-partition.webp",
    WEATHER_SCREENS: "/images/products/weather-screen/hero-terrace-lowered.webp",
    CEILING_CLOTH_HANGER: "/images/products/ceiling-cloth-hanger.jpg",
    SKYLIGHT: "/images/products/skylight.jpg",
  },

  // Real installation photos (4:3) used on product and use-case pages
  PHOTOS: {
    INVISIBLE_GRILLS: {
      HERO: "/images/products/invisible-grills/hero-balcony-view.webp",
      CURVED_BALCONY: "/images/products/invisible-grills/curved-highrise-balcony.webp",
      BALCONY_SUNSET: "/images/products/invisible-grills/balcony-sunset.webp",
      WINDOW: "/images/products/invisible-grills/window-opening.webp",
      ROOFTOP: "/images/products/invisible-grills/rooftop-terrace.webp",
      ROOFTOP_MONKEYS: "/images/products/invisible-grills/rooftop-monkeys.webp",
      CABLE_CLOSEUP: "/images/products/invisible-grills/cable-closeup.webp",
      FULL_HEIGHT: "/images/products/invisible-grills/full-height-balcony.webp",
      FACADE: "/images/products/invisible-grills/apartment-facade.webp",
      GREEN_VIEW: "/images/products/invisible-grills/balcony-green-view.webp",
      COURTYARD_VOID: "/images/products/invisible-grills/courtyard-void.webp",
      EVENING_BALCONY: "/images/products/invisible-grills/evening-balcony.webp",
      SCHOOL_CORRIDOR: "/images/gallery/trade-fair-expo.jpg",
    },
    PLEATED_MESH: {
      HERO: "/images/products/pleated-mesh/hero-facade.webp",
      WINDOW: "/images/products/pleated-mesh/ground-floor-window.webp",
      BALCONY: "/images/products/pleated-mesh/balcony-enclosure.webp",
      CASEMENT: "/images/products/pleated-mesh/casement-window.webp",
      DOOR: "/images/products/pleated-mesh/entrance-door.webp",
      TERRACE: "/images/products/pleated-mesh/terrace-night.webp",
    },
    ALUMINUM_MESH: {
      HERO: "/images/products/aluminum-mesh/hero-terrace-doors.webp",
      DOORS_OPEN: "/images/products/aluminum-mesh/terrace-doors-open.webp",
      DOOR: "/images/products/aluminum-mesh/entrance-door.webp",
      SLIDING: "/images/products/aluminum-mesh/sliding-doors.webp",
      PARTITION: "/images/products/aluminum-mesh/interior-partition.webp",
      SHOPFRONT: "/images/products/aluminum-mesh/shopfront-windows.webp",
    },
    HONEYCOMB: {
      HERO: "/images/products/honeycomb/hero-wide-partition.webp",
      WOOD_FINISH: "/images/products/honeycomb/wood-finish-home.webp",
      DIVIDER: "/images/products/honeycomb/room-divider.webp",
      COMMERCIAL: "/images/products/honeycomb/commercial-partition.webp",
      DUET_CORRIDOR: "/images/products/honeycomb/duet-corridor.webp",
    },
    WEATHER_SCREEN: {
      HERO: "/images/products/weather-screen/hero-terrace-lowered.webp",
      RAISED: "/images/products/weather-screen/terrace-raised.webp",
      PERGOLA: "/images/products/weather-screen/pergola-screen.webp",
      SEATING: "/images/products/weather-screen/outdoor-seating.webp",
    },
    PERGOLA: {
      LOUVRED_TERRACE: "/images/products/pergola/louvred-roof-terrace.webp",
      TERRACE_KITCHEN: "/images/products/pergola/terrace-kitchen.webp",
    },
    CLOTH_HANGER: {
      HERO: "/images/products/ceiling-cloth-hanger/hero-with-clothes.webp",
      BALCONY: "/images/products/ceiling-cloth-hanger/balcony-installed.webp",
      APARTMENT: "/images/products/ceiling-cloth-hanger/apartment-balcony.webp",
      UTILITY: "/images/products/ceiling-cloth-hanger/utility-balcony.webp",
      INDOOR: "/images/products/ceiling-cloth-hanger/indoor-laundry.webp",
      COVERED_BALCONY: "/images/products/ceiling-cloth-hanger/covered-balcony.webp",
    },
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
    EXHIBITION_STALL: "/images/gallery/exhibition-stall.webp",
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
  PHONE_ALT_1: "+91 9999-277-255",
  PHONE_ALT_1_RAW: "+919999277255",
  PHONE_ALT_2: "+91 9990-381-116",
  PHONE_ALT_2_RAW: "+919990381116",
  PHONE_ALT_3: "+91 9311-559-977",
  PHONE_ALT_3_RAW: "+919311559977",
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

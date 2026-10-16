// File: src/lib/const.js
// Central Constants File for Solution Sahab
// Contains all Assets, Image URLs, Contact Information, and CRM API Configuration

const IMG_HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS = "https://lh3.googleusercontent.com/aida-public/AB6AXuDADhhQJJ5w2pvAbFm97RmWqSb0EZ8Rc-xnlcw16p7WB_C745FiXVAzm6JJ-pP9-cYwF1OIkYi8OJ7gpp7CtM89OQar7YDVVdliNjHb5Z_sILuGmPp-QJvbSUBrpE0L5cP0yKWv_HCD4stf0_Oybo9maoTPB8xZmjbWMitovYGtp_4XOCgk3j1cLYeu5RC8w1Z6CYfE99kPUjCY6B2XiiAXrOdNSZeo6QkytmwVuBHPu8PDHgLR9GLr9w";
const IMG_HIGH_RISE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDDfkhhh6aNAbnEQ72s2RqNto1PTuapBNc5tfDhR09KFJixGqfVJTe_dM6VW7tU02Zj0fwCR212CzZXht36zs12GpvlZyPZHMotm-ct9rwxzP97ZWafsUwD9Lnp_IxnWAKtiXRmkIaH659TadIktEXFavbyIlHn3XDD0vCsfQy19f77UQM9ef8sxopE3yqgFx83HfysbLEFokVvYRDiGF0LzE2PRMFB6gJ_xncAVVcqiD5o2uiAEKEhWA";
const IMG_FRENCH_WINDOWS = "https://lh3.googleusercontent.com/aida-public/AB6AXuDaWHarnULrCFmYuY6xJOuHKXTr7_nNBGs_Wz1d02j0-uXzOxwGbKBE9lcz4Zr9Ir6DJcicEBcdomb9bs94l6Q0q-yTOCOyElbrhnei8uHV1i-vlUHgx89n-5fXVUq6g6rYafbOjvs7eJbk__a9KIjRl7CzBUJx9Kjf-qRlD01pTTSm3ulESvo0OPS1Dr92ul9zNoKKonJvUd2EJ_kTxLZBIjRLgryCd5E81BNNfPDml5diPNr1mN8yVg";
const IMG_STAIRWELL_VOIDS = "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rkcBz29oMKE35Ckc1YEt240w-SpWRwFo8kOwfxkh5z3F6UkUZxzEh5ICvlCgQ1zPGU6TRGHN-Q6UqaB_t6KiP17C7T7XBwLUgyDaepaGSi0Kvk_tGlNpMQ_M2EMQu8PcvJHvj3bSE3GjNg2C02mu37NQuv2yUJNiMW63MloJVKc95mFI5xrGYU-K7SAUovZeFuDDkqnK7tFX4iYmD87JSt8-vZFNyP3JbP80A3rD3SFm0wTRZRO33Q";
const IMG_TERRACE_OPENINGS = "https://lh3.googleusercontent.com/aida-public/AB6AXuD4k7-upUWc7QDRpSM0GK_0YWcUFQv07WAFomX5FtGF0pjRup7uNmH6difLZB35eNGhSLtSaeF7u-3gnDEBsFg-Am3fyPcXl_R-vJTbFwUM9GntzTW9bUIcMF65FstPClmBL71wUDTLL8uaK1h4Tu6Li7vm3l2KlPgIfr6dPeNsDeQL1lQ7Bfy2Q6WbRLoqQn2VUUcsopXirlB_5iEeUzoKI0SZSXjmEFjyXcqAp7ehxxaFCX0R8NvPTA";

export const ASSETS = {
  // Brand Logo (local file; the old hosted URL is expired and unused)
  LOGO_LOCAL: "/images/logo.png",

  // Hero Banners
  HERO_IMAGE_HOME:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=756,fit=crop,f=jpeg/A3QrolLwe7UBnQrp/invisible-grill-installation-in-patna-AzgPP9K1HInCMyJS.jpeg",
  HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS:
    IMG_HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS,

  // Product Catalog Images
  PRODUCTS: {
    INVISIBLE_GRILLS:
      IMG_HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS,
    PLEATED_MOSQUITO_MESH:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=756,fit=crop,f=jpeg/A3QrolLwe7UBnQrp/pleated-mesh-for-balcony-of-flats-XwwXxImDUy7FijWC.jpeg",
    ALUMINUM_SECURITY_MESH:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=756,fit=crop,f=jpeg/A3QrolLwe7UBnQrp/invi-2-AoP4NNeVDyipZvBR.jpg",
    HONEYCOMB_PARTITIONS:
      IMG_FRENCH_WINDOWS,
    WEATHER_SCREENS:
      IMG_TERRACE_OPENINGS,
  },

  // Architectural Typologies Images
  TYPOLOGIES: {
    HIGH_RISE:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDfkhhh6aNAbnEQ72s2RqNto1PTuapBNc5tfDhR09KFJixGqfVJTe_dM6VW7tU02Zj0fwCR212CzZXht36zs12GpvlZyPZHMotm-ct9rwxzP97ZWafsUwD9Lnp_IxnWAKtiXRmkIaH659TadIktEXFavbyIlHn3XDD0vCsfQy19f77UQM9ef8sxopE3yqgFx83HfysbLEFokVvYRDiGF0LzE2PRMFB6gJ_xncAVVcqiD5o2uiAEKEhWA",
    FRENCH_WINDOWS:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaWHarnULrCFmYuY6xJOuHKXTr7_nNBGs_Wz1d02j0-uXzOxwGbKBE9lcz4Zr9Ir6DJcicEBcdomb9bs94l6Q0q-yTOCOyElbrhnei8uHV1i-vlUHgx89n-5fXVUq6g6rYafbOjvs7eJbk__a9KIjRl7CzBUJx9Kjf-qRlD01pTTSm3ulESvo0OPS1Dr92ul9zNoKKonJvUd2EJ_kTxLZBIjRLgryCd5E81BNNfPDml5diPNr1mN8yVg",
    STAIRWELL_VOIDS:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rkcBz29oMKE35Ckc1YEt240w-SpWRwFo8kOwfxkh5z3F6UkUZxzEh5ICvlCgQ1zPGU6TRGHN-Q6UqaB_t6KiP17C7T7XBwLUgyDaepaGSi0Kvk_tGlNpMQ_M2EMQu8PcvJHvj3bSE3GjNg2C02mu37NQuv2yUJNiMW63MloJVKc95mFI5xrGYU-K7SAUovZeFuDDkqnK7tFX4iYmD87JSt8-vZFNyP3JbP80A3rD3SFm0wTRZRO33Q",
    TERRACE_OPENINGS:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4k7-upUWc7QDRpSM0GK_0YWcUFQv07WAFomX5FtGF0pjRup7uNmH6difLZB35eNGhSLtSaeF7u-3gnDEBsFg-Am3fyPcXl_R-vJTbFwUM9GntzTW9bUIcMF65FstPClmBL71wUDTLL8uaK1h4Tu6Li7vm3l2KlPgIfr6dPeNsDeQL1lQ7Bfy2Q6WbRLoqQn2VUUcsopXirlB_5iEeUzoKI0SZSXjmEFjyXcqAp7ehxxaFCX0R8NvPTA",
  },

  // Project Gallery Images
  GALLERY: {
    GURGAON_HIGHRISE:
      IMG_HIGH_RISE,
    TRADE_FAIR_EXPO:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=756,fit=crop,f=jpeg/A3QrolLwe7UBnQrp/gd-goinkna-school-3-xFb9g3Kj1wHyAbZs.jpeg",
    NOIDA_VILLA:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=768,fit=crop,f=jpeg/A3QrolLwe7UBnQrp/pleated-mesh-for-window-of-flats-JqnJSNLtQtSUX2LP.jpeg",
    FACTORY_QC:
      IMG_STAIRWELL_VOIDS,
  },
};

export const CONTACT_INFO = {
  PHONE_PRIMARY: "+91 9971-143-143",
  PHONE_PRIMARY_RAW: "+919971143143",
  PHONE_ALT_1: "+91 9999-088-764",
  PHONE_ALT_1_RAW: "+919999088764",
  PHONE_ALT_2: "+91 8800-124-345",
  PHONE_ALT_2_RAW: "+918800124345",
  PHONE_ALT_3: "+91 9999-277-255",
  PHONE_ALT_3_RAW: "+919999277255",
  PHONE_ALT_4: "+91 9311-559-977",
  PHONE_ALT_4_RAW: "+919311559977",
  PHONE_ALT_5: "+91 9990-381-116",
  PHONE_ALT_5_RAW: "+919990381116",
  WHATSAPP_NUMBER: "919971143143",
  WHATSAPP_URL: "https://wa.me/919971143143",
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

// Cratio CRM Integration Configuration from Postman
// Reference: https://www.postman.com/red-spaceship-7195/api-request/http-request/rykv1rk/insert-leads
export const CRM_CONFIG = {
  ENDPOINT: "https://apps.cratiocrm.com/api/apirequest.php",
  API_KEY:
    process.env.CRATIO_API_KEY || "NF8xXzUwMDYkQDU4IyMyMDI2LTEwLTA0IDE4OjE1OjA3",
  CREATED_BY: process.env.CRATIO_LEAD_CREATED_BY || "Deepak",
  LEAD_SOURCE: process.env.CRATIO_LEAD_SOURCE || "Website",
  ASSIGNED_TO: process.env.CRATIO_ASSIGNED_TO || "shivani",
  FORM_NAME: "Leads",
  OPERATION: "insertRecords",
  OVERWRITE: "true",
};


// File: src/lib/info-pages.ts
// Real content verified from https://solutionsahab.com live pages.
import { ASSETS } from "@/lib/constants";
import type { GridImage } from "@/components/common/ImageGrid";

export type InfoSection =
  | {
      kind: "prose";
      id?: string;
      title?: string;
      paragraphs: string[];
    }
  | {
      kind: "list";
      id?: string;
      title?: string;
      intro?: string;
      items: string[];
      after?: string[];
    }
  | {
      kind: "points";
      id?: string;
      title?: string;
      intro?: string;
      items: { icon?: string; title: string; text?: string }[];
    };

export interface InfoPageContent {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  keywords: string[];
  sections: InfoSection[];
}

export const WHO_WE_ARE: InfoPageContent = {
  path: "/who-we-are",
  eyebrow: "About Us / Who We Are",
  title: "Solution Sahab | Our Story & Values",
  description:
    "Learn about Solution Sahab: our story, mission and values. We specialise in invisible grills, pleated mesh and home safety solutions in Delhi NCR.",
  keywords: [
    "About Solution Sahab",
    "Who We Are",
    "Invisible Grill Manufacturer Delhi NCR",
    "Pleated Mesh Company India",
    "Home Safety Solutions Delhi",
    "Fenestration Solutions Manufacturer",
    "Dealership Program India",
  ],
  sections: [
    {
      kind: "prose",
      id: "our-story",
      paragraphs: [
        "At Solution Sahab, we don't just manufacture products. We solve real, everyday safety and design challenges for homes, businesses, and large commercial spaces across India.",
        "We are a leading manufacturer and solution provider of Invisible Grills and Pleated Mesh Systems, trusted for our engineering precision, clean aesthetics, and long-term durability. From high-rise balconies and staircases to windows, partitions, and large openings, our products are designed to deliver maximum safety without blocking light, air, or views.",
      ],
    },
    {
      kind: "prose",
      id: "what-we-stand-for",
      title: "What We Stand For",
      paragraphs: [
        "Safety. Innovation. Reliability.",
        "These three values guide everything we build.",
        "Our team continuously works on research, material upgrades, and design improvements to ensure our products stay ahead of market standards. This innovation mindset has allowed us to successfully expand our product line beyond core safety solutions.",
      ],
    },
    {
      kind: "list",
      id: "product-portfolio",
      title: "Our Expanding Product Portfolio",
      intro:
        "In addition to Invisible Grills and Pleated Mesh, Solution Sahab has introduced multiple next-generation architectural and outdoor solutions, including:",
      items: [
        "Pleated & Sliding Mesh Systems",
        "Grass Fence Solutions for residential and commercial spaces",
        "Automatic Roof & Shading Systems",
        "Customized safety and enclosure solutions for modern architecture",
      ],
      after: [
        "Each product is developed with a focus on functionality, aesthetics, and long service life, making them ideal for both residential and commercial applications.",
      ],
    },
    {
      kind: "list",
      id: "b2b-dealership",
      title: "B2B & Dealership Opportunities",
      intro:
        "Solution Sahab actively works with architects, builders, contractors, real-estate developers, and commercial project consultants across India. We also offer a structured Dealership & Channel Partner Program, designed to support growth through:",
      items: [
        "High-demand, innovative product range",
        "Technical and product training",
        "Marketing and sales support",
        "Competitive margins and long-term partnership vision",
      ],
      after: [
        "Whether it's a single project or bulk B2B requirements, we provide scalable solutions and reliable support at every stage.",
      ],
    },
    {
      kind: "points",
      id: "why-choose-us",
      title: "Why Choose Solution Sahab?",
      items: [
        {
          icon: "verified",
          title: "Proven expertise in safety and mesh solutions",
        },
        {
          icon: "lightbulb",
          title: "Continuous product innovation",
        },
        { icon: "factory", title: "Strong manufacturing backbone" },
        { icon: "handshake", title: "Dedicated B2B and dealer support" },
        { icon: "design_services", title: "Clean, modern, and practical designs" },
      ],
    },
    {
      kind: "prose",
      id: "closing",
      paragraphs: [
        "Solution Sahab is built for those who value safety, design, and dependable performance, today and in the future.",
        "Contact Us to learn more about our products, dealership program, or B2B collaborations.",
      ],
    },
  ],
};

export const PRIVACY_POLICY: InfoPageContent = {
  path: "/privacy-policy",
  eyebrow: "Legal",
  title: "Privacy Policy",
  description:
    "Solution Sahab privacy policy: what data solutionsahab.com collects, why we process it, your rights, and how to contact us.",
  keywords: [
    "Solution Sahab Privacy Policy",
    "solutionsahab.com privacy",
    "data protection policy",
    "website privacy policy Delhi",
  ],
  sections: [
    {
      kind: "prose",
      id: "privacy-intro",
      paragraphs: [
        "solutionsahab.com website is owned by solution sahab, which is a data controller of your personal data.",
        "We have adopted this Privacy Policy, which determines how we are processing the information collected by solutionsahab.com, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using solutionsahab.com website.",
        "We take care of your personal data and undertake to guarantee its confidentiality and security.",
      ],
    },
    {
      kind: "prose",
      id: "personal-information",
      title: "Personal information we collect",
      paragraphs: [
        "When you visit the solutionsahab.com, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as “Device Information.”",
        "Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.",
      ],
    },
    {
      kind: "prose",
      id: "why-we-process",
      title: "Why do we process your data?",
      paragraphs: [
        "Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.",
        "You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website's features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website's features. For example, you won't be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via solutionsahab@gmail.com.",
      ],
    },
    {
      kind: "list",
      id: "your-rights",
      title: "Your rights",
      intro:
        "If you are a European resident, you have the following rights related to your personal data:",
      items: [
        "The right to be informed",
        "The right of access",
        "The right to rectification",
        "The right to erasure",
        "The right to restrict processing",
        "The right to data portability",
        "The right to object",
        "Rights in relation to automated decision-making and profiling",
      ],
      after: [
        "If you would like to exercise this right, please contact us through the contact information below.",
        "Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.",
      ],
    },
    {
      kind: "prose",
      id: "links-other-websites",
      title: "Links to other websites",
      paragraphs: [
        "Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.",
      ],
    },
    {
      kind: "prose",
      id: "information-security",
      title: "Information security",
      paragraphs: [
        "We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.",
      ],
    },
    {
      kind: "prose",
      id: "legal-disclosure",
      title: "Legal disclosure",
      paragraphs: [
        "We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.",
      ],
    },
    {
      kind: "prose",
      id: "contact-information",
      title: "Contact information",
      paragraphs: [
        "If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to solutionsahab@gmail.com.",
      ],
    },
  ],
};

export const GALLERY_IMAGES: (GridImage & { caption: string })[] = [
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.HERO,
    alt: "Homeowner enjoying an open balcony view through invisible grills",
    caption: "Balcony With an Open View",
  },
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.CURVED_BALCONY,
    alt: "Curved high-rise balcony secured with invisible grill cables",
    caption: "Curved High-Rise Balcony",
  },
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.BALCONY_SUNSET,
    alt: "Upper-floor balcony with invisible grills at sunset",
    caption: "High-Rise Balcony at Sunset",
  },
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.ROOFTOP_MONKEYS,
    alt: "Rooftop invisible grill keeping monkeys outside on the parapet",
    caption: "Rooftop Monkey Protection, Vrindavan",
  },
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.ROOFTOP,
    alt: "Rooftop terrace parapet fitted with invisible grill cables",
    caption: "Rooftop Terrace",
  },
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.FACADE,
    alt: "Apartment balconies fitted with invisible grills, seen from outside",
    caption: "Apartment Balconies",
  },
  {
    src: ASSETS.GALLERY.PARUL_ENT_HISAR_1,
    alt: "Building balcony fitted with invisible grills in Hisar",
    caption: "Balcony Grills, Hisar",
  },
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.SCHOOL_CORRIDOR,
    alt: "School corridor secured with invisible safety grills in Vasant Kunj",
    caption: "School Corridor, Vasant Kunj",
  },
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.COURTYARD_VOID,
    alt: "Open courtyard void covered with invisible grill cables",
    caption: "Courtyard Void",
  },
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.CABLE_CLOSEUP,
    alt: "Close-up of stainless steel invisible grill cables and fixing bar",
    caption: "Grill Cables, Close Up",
  },
  {
    src: ASSETS.PHOTOS.PLEATED_MESH.HERO,
    alt: "Building front with balconies fitted with pleated mosquito mesh",
    caption: "Pleated Mesh on Balconies",
  },
  {
    src: ASSETS.PHOTOS.PLEATED_MESH.WINDOW,
    alt: "Bronze pleated mosquito mesh on ground-floor windows",
    caption: "Ground-Floor Windows",
  },
  {
    src: ASSETS.GALLERY.NOIDA_VILLA,
    alt: "Pleated mosquito mesh on a window in a Noida home",
    caption: "Pleated Window Screen, Noida",
  },
  {
    src: ASSETS.PHOTOS.PLEATED_MESH.TERRACE,
    alt: "Pleated mesh screen across a terrace opening at night",
    caption: "Terrace Opening at Night",
  },
  {
    src: ASSETS.PHOTOS.ALUMINUM_MESH.HERO,
    alt: "Aluminium security mesh doors opening onto a terrace",
    caption: "Terrace Security Doors",
  },
  {
    src: ASSETS.PHOTOS.ALUMINUM_MESH.PARTITION,
    alt: "Aluminium mesh used as an interior partition",
    caption: "Interior Mesh Partition",
  },
  {
    src: ASSETS.PHOTOS.ALUMINUM_MESH.SHOPFRONT,
    alt: "Aluminium security mesh on first-floor windows",
    caption: "Window Security Mesh",
  },
  {
    src: ASSETS.PHOTOS.HONEYCOMB.HERO,
    alt: "Wide honeycomb partition dividing an interior space",
    caption: "Wide-Span Honeycomb Partition",
  },
  {
    src: ASSETS.PHOTOS.HONEYCOMB.WOOD_FINISH,
    alt: "Wood-finish honeycomb partition in a home",
    caption: "Wood-Finish Divider",
  },
  {
    src: ASSETS.PHOTOS.HONEYCOMB.DUET_CORRIDOR,
    alt: "Duet honeycomb system along a glazed corridor",
    caption: "Duet System Corridor",
  },
  {
    src: ASSETS.PHOTOS.WEATHER_SCREEN.HERO,
    alt: "Motorized zip weather screen lowered around a terrace lounge",
    caption: "Terrace Weather Screen",
  },
  {
    src: ASSETS.PHOTOS.WEATHER_SCREEN.PERGOLA,
    alt: "Zip weather screen lowered under a louvred pergola",
    caption: "Screen Under a Pergola",
  },
  {
    src: ASSETS.PHOTOS.PERGOLA.LOUVRED_TERRACE,
    alt: "Rooftop terrace covered by a louvred aluminium pergola",
    caption: "Louvred Roof Pergola",
  },
  {
    src: ASSETS.PHOTOS.PERGOLA.TERRACE_KITCHEN,
    alt: "Louvred pergola over a rooftop terrace kitchen",
    caption: "Pergola Over a Terrace Kitchen",
  },
  {
    src: ASSETS.PHOTOS.CLOTH_HANGER.HERO,
    alt: "Ceiling cloth hanger loaded with drying clothes",
    caption: "Ceiling Cloth Hanger",
  },
  {
    src: ASSETS.PHOTOS.CLOTH_HANGER.BALCONY,
    alt: "Ceiling cloth hanger fitted on an apartment balcony",
    caption: "Balcony Cloth Hanger",
  },
  {
    src: ASSETS.GALLERY.EXHIBITION_STALL,
    alt: "Visitors at the Solution Sahab stall at a Pragati Maidan trade exhibition",
    caption: "Our Stall at Pragati Maidan",
  },
];

export const TEAM_IMAGES: GridImage[] = Array.from({ length: 13 }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  return {
    src: `/images/team/team-${num}.jpg`,
    alt: `Solution Sahab team member photo ${num}`,
  };
});

export interface ContactPhone {
  label: string;
  raw: string;
  primary?: boolean;
  landline?: boolean;
}

export const CONTACT_DATA = {
  phones: [
    { label: "+91 9971-143-143", raw: "+919971143143", primary: true },
    { label: "+91 9999-277-255", raw: "+919999277255" },
    { label: "+91 9990-381-116", raw: "+919990381116" },
    { label: "+91 9311-559-977", raw: "+919311559977" },
  ] as ContactPhone[],
  email: "solutionsahab@gmail.com",
  locations: [
    {
      label: "Head Office",
      address:
        "35, Kh.No.-7/8, Road No. 5, Shri Ram Colony, Nilothi Extn. Nangloi, New Delhi-110041",
    },
    {
      label: "Branch Office",
      address:
        "B- 45 first floor indra enclave near ignou university new delhi - 110068",
    },
  ],
  partners: [
    {
      city: "PATNA (BIHAR)",
      name: "Hari Narayan Trader",
      address: "Ground floor, Sudama Palace, Kankarbagh Main Road 800020",
    },
    {
      city: "GHAZIABAD (UP)",
      name: "The UVW",
      address:
        "562 / First Floor, Niti Khand 3, Indirapuram, Ghaziabad UP - 201014",
    },
    {
      city: "NOIDA (UP)",
      name: "Byebugs",
      address:
        "FF16, Rise Shoplex Atul Marg, Greater Noida W Rd, Sector 1, Bisrakh Jalalpur, Uttar Pradesh 201318",
    },
    {
      city: "GURUGRAM (HARYANA)",
      name: "D'decor Store (The Design Studio)",
      address: "Shop no 5&6, ML Market, Gurugram, Haryana 122001",
    },
  ],
  productOptions: [
    "Invisible Grills",
    "Pleated mesh",
    "Honeycomb Mesh",
    "Aluminium Security Pleated Mesh",
  ],
};

export const INSTAGRAM_URL = "https://www.instagram.com/solutionsahab/";

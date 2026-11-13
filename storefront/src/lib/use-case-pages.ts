// File: src/lib/use-case-pages.ts
// Invisible grill pages per building type, served at /invisible-grills-for-<key>.
// Images reuse existing site photos; swap in real installation photos when available.
import { ASSETS } from "@/lib/constants";
import { COMMON_TRUST_PILLARS, ProductPageConfig } from "@/lib/product-page-configs";

export interface UseCasePageConfig extends ProductPageConfig {
  /** Short label for nav links and cards, e.g. "For Schools" */
  navLabel: string;
  /** Card shown in the "for every building" section on /invisible-grills */
  card: {
    desc: string;
    imageUrl: string;
    alt: string;
  };
}

export const USE_CASE_PARENT = {
  label: "Invisible Grills",
  href: "/invisible-grills",
};

const USE_CASE_FAQ_DESCRIPTION =
  "Clear answers on safety, evacuation, installation and warranty across Delhi NCR.";

export const USE_CASE_PAGES: Record<string, UseCasePageConfig> = {
  schools: {
    slug: "invisible-grills-for-schools",
    navLabel: "For Schools",
    leadSource: "Invisible Grills - Schools Page",
    formProduct: "Invisible Grills",
    serviceName: "Invisible Grills",
    faqDescription: USE_CASE_FAQ_DESCRIPTION,
    card: {
      desc: "Fall protection for classroom windows, corridors, staircases and terraces, without making the campus look like a cage.",
      imageUrl: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
      alt: "Invisible grills along a school staircase",
    },
    metadata: {
      title: "Invisible Grills for Schools in Delhi NCR – Solution Sahab",
      description:
        "Invisible grills for school windows, corridors, staircases and terraces in Delhi NCR. AISI 316 steel cables protect students without blocking light or air.",
      keywords: [
        "invisible grills for schools",
        "school window safety grill",
        "school balcony safety grill delhi",
        "staircase safety grill for schools",
        "child safety grills for schools",
      ],
      canonical: "https://solutionsahab.com/invisible-grills-for-schools",
      ogImage: ASSETS.HERO_IMAGE_HOME_INVISIBLE_GRILLS,
    },
    structuredData: {
      productName: "Invisible Grills for Schools",
      description:
        "Fall-protection invisible grills for school classrooms, corridors, staircases and terraces, using tensioned 316-grade stainless steel cables that keep spaces bright and ventilated across Delhi NCR.",
      image: ASSETS.HERO_IMAGE_HOME_INVISIBLE_GRILLS,
      material: "AISI 316 Marine Grade Stainless Steel Wire",
    },
    hero: {
      productName: "Invisible Grills for Schools",
      brandTag: "Solution Sahab | Schools & Campuses",
      tagline:
        "Keep students safe on every upper floor. Our 316 marine-grade stainless steel cable grills secure classroom windows, corridors, staircases and terraces while classrooms stay bright, airy and open.",
      badges: [
        "Child-Safe 2-Inch Pitch",
        "400 kgf+ Per Cable",
        "Emergency Cut-Out",
        "5-Year Rust Warranty",
      ],
      heroImage: ASSETS.HERO_IMAGE_HOME_INVISIBLE_GRILLS,
      heroImageAlt: "Invisible grills protecting an open school corridor",
      breadcrumbName: "Schools",
      parentCrumb: USE_CASE_PARENT,
      bookingTargetId: "#booking-form",
    },
    overview: {
      title: "Why Schools Choose Invisible Grills",
      leadParagraph:
        "Children lean, climb and run. On upper-floor corridors, open staircases and classroom windows, one moment of curiosity can turn into a serious fall. Traditional iron grills solve the safety problem but make a school feel closed in, block daylight and rust within a few monsoons.",
      secondaryParagraph:
        "Invisible grills give schools the same protection with none of the downsides. Thin stainless steel cables are tensioned across each opening at child-safe spacing, so students cannot slip through or climb over, while classrooms keep their natural light, ventilation and open views.",
      bullets: [
        {
          label: "Child-Safe Spacing",
          text: "2-inch (50mm) cable pitch stops children from squeezing through or dropping bags, bottles and books.",
        },
        {
          label: "Built for Daily Use",
          text: "Each cable holds over 400 kgf, so leaning, pushing and rough play do not bend or loosen it.",
        },
        {
          label: "Evacuation Ready",
          text: "Staff can cut cables open in seconds with the emergency cutter we hand over, unlike welded grills that block exits.",
        },
      ],
      media: {
        type: "video",
        videoId: "l9bxcYr_hJ0",
        title: "Invisible Grills Strength Demonstration - Solution Sahab",
        caption: "Live demonstration: cable strength and view transparency by Solution Sahab.",
      },
    },
    benefits: {
      title: "Benefits for Schools",
      subtitle:
        "Safety that parents can see and students barely notice, with almost no upkeep for your facilities team.",
      image: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
      imageAlt: "Staircase void secured with invisible grills",
      benefits: [
        {
          title: "Fall Protection on Every Floor",
          description:
            "Secure corridors, balconies, staircases and windows on upper floors so students can move between classes safely.",
        },
        {
          title: "Bright, Well-Ventilated Classrooms",
          description:
            "Slim cables keep natural daylight and cross-ventilation flowing, so classrooms do not feel like cages.",
        },
        {
          title: "Reassurance for Parents",
          description:
            "A visible commitment to student safety that parents notice during campus visits, without spoiling the building's look.",
        },
        {
          title: "Low Maintenance",
          description:
            "316 marine-grade steel does not rust or need repainting, so there is no yearly upkeep during school holidays.",
        },
      ],
    },
    trustPillars: {
      title: "Why Schools Trust Solution Sahab",
      subtitle:
        "Our in-house team plans installations around your school calendar, working weekends and holidays so classes are never disturbed.",
      pillars: COMMON_TRUST_PILLARS,
      showCertificates: true,
    },
    applications: {
      title: "Where We Install in Schools",
      subtitle:
        "Every grill is measured and fabricated to fit your campus openings, from single classroom windows to long open corridors.",
      areas: [
        {
          title: "Classroom Windows",
          desc: "Keep windows open for fresh air during lessons while stopping students from leaning out or climbing onto sills.",
          imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
          alt: "Classroom windows secured with invisible grills",
        },
        {
          title: "Corridors & Balconies",
          desc: "Protect open corridors and walkways on upper floors where students crowd between periods.",
          imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
          alt: "Upper-floor school corridor with invisible grills",
        },
        {
          title: "Staircases & Atriums",
          desc: "Close the gaps beside staircase railings and around open atriums where children could slip through.",
          imageUrl: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
          alt: "School staircase void secured with invisible grills",
        },
        {
          title: "Terraces & Play Areas",
          desc: "Make rooftop terraces and elevated play zones safe for activities, assemblies and sports.",
          imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
          alt: "School rooftop terrace with invisible grills",
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "Are invisible grills strong enough for a busy school?",
        answer:
          "Yes. Each AISI 316 stainless steel cable is tensioned and tested for over 400 kgf, so leaning, pushing and rough play by students will not bend or loosen it.",
      },
      {
        id: 2,
        question: "Do invisible grills block emergency evacuation?",
        answer:
          "No. Unlike welded iron grills, the cables can be cut open in seconds with the emergency cutter we hand over to your staff, so windows and openings can be used as exits if needed.",
      },
      {
        id: 3,
        question: "What cable spacing do you recommend for schools?",
        answer:
          "We recommend a 2-inch (50mm) pitch for schools. It is too narrow for children to slip through and stops bags, bottles and books from being dropped.",
      },
      {
        id: 4,
        question: "Can you install during school holidays or weekends?",
        answer:
          "Yes. Our in-house team schedules work around your academic calendar and uses dust-controlled drilling tools, so classes are not disturbed.",
      },
      {
        id: 5,
        question: "Do you provide a quote for the whole campus?",
        answer:
          "Yes. Our engineer surveys every block, takes laser measurements of each opening, and gives you a single itemised quote for the whole campus.",
      },
      {
        id: 6,
        question: "Will the grills rust or need repainting?",
        answer:
          "No. We use genuine AISI 316 marine-grade stainless steel with a protective coating, and every installation comes with a signed 5-year anti-rust warranty.",
      },
    ],
    bookingTitle: "Book a Free School Safety Survey",
    bookingDescription:
      "Our engineer will survey your campus, measure every opening and share a single quote. Installation across Delhi NCR, scheduled around your school calendar.",
  },

  hospitals: {
    slug: "invisible-grills-for-hospitals",
    navLabel: "For Hospitals",
    leadSource: "Invisible Grills - Hospitals Page",
    formProduct: "Invisible Grills",
    serviceName: "Invisible Grills",
    faqDescription: USE_CASE_FAQ_DESCRIPTION,
    card: {
      desc: "Discreet fall prevention for patient-room windows, wards, stairwells and atriums that keeps healing spaces bright and calm.",
      imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
      alt: "Invisible grills on hospital patient-room windows",
    },
    metadata: {
      title: "Invisible Grills for Hospitals in Delhi NCR – Solution Sahab",
      description:
        "Invisible grills for hospital windows, wards, stairwells and atriums in Delhi NCR. AISI 316 steel cables prevent falls while keeping rooms bright and open.",
      keywords: [
        "invisible grills for hospitals",
        "hospital window safety grill",
        "hospital fall prevention grill delhi",
        "stairwell safety grill for hospitals",
        "invisible grills for healthcare buildings",
      ],
      canonical: "https://solutionsahab.com/invisible-grills-for-hospitals",
      ogImage: ASSETS.HERO_IMAGE_HOME_INVISIBLE_GRILLS,
    },
    structuredData: {
      productName: "Invisible Grills for Hospitals",
      description:
        "Fall-prevention invisible grills for hospital patient rooms, wards, stairwells and atriums, using tensioned 316-grade stainless steel cables that keep spaces bright and ventilated across Delhi NCR.",
      image: ASSETS.HERO_IMAGE_HOME_INVISIBLE_GRILLS,
      material: "AISI 316 Marine Grade Stainless Steel Wire",
    },
    hero: {
      productName: "Invisible Grills for Hospitals",
      brandTag: "Solution Sahab | Hospitals & Healthcare",
      tagline:
        "Prevent falls from windows, wards and stairwells without making patients feel confined. Our 316 marine-grade stainless steel cable grills keep healing spaces safe, bright and well ventilated.",
      badges: [
        "Discreet, Calm Look",
        "400 kgf+ Per Cable",
        "Emergency Cut-Out",
        "5-Year Rust Warranty",
      ],
      heroImage: ASSETS.HERO_IMAGE_HOME_INVISIBLE_GRILLS,
      heroImageAlt: "Invisible grills on a hospital building opening",
      breadcrumbName: "Hospitals",
      parentCrumb: USE_CASE_PARENT,
      bookingTargetId: "#booking-form",
    },
    overview: {
      title: "Why Hospitals Choose Invisible Grills",
      leadParagraph:
        "Hospitals care for patients who may be disoriented, sedated, distressed or unsteady on their feet, along with visiting children. Open windows, stairwells and atrium edges need dependable fall protection, but heavy iron bars make wards feel like confinement and work against a calm, healing environment.",
      secondaryParagraph:
        "Invisible grills protect these openings with slim, tensioned stainless steel cables. Patients keep their daylight and outside view, fresh air can still circulate, and your facilities team gets a solution that will not rust or need repainting.",
      bullets: [
        {
          label: "Discreet Protection",
          text: "Slim cables are barely noticeable from inside, so rooms feel open and calm rather than barred.",
        },
        {
          label: "Strong and Tamper-Resistant",
          text: "Each cable holds over 400 kgf and stays taut, so it cannot be pushed apart or bent by hand.",
        },
        {
          label: "Evacuation Ready",
          text: "Staff can cut cables open in seconds with the emergency cutter we hand over, keeping openings usable in an emergency.",
        },
      ],
      media: {
        type: "video",
        videoId: "l9bxcYr_hJ0",
        title: "Invisible Grills Strength Demonstration - Solution Sahab",
        caption: "Live demonstration: cable strength and view transparency by Solution Sahab.",
      },
    },
    benefits: {
      title: "Benefits for Hospitals",
      subtitle:
        "Patient safety that supports recovery instead of working against it, with almost no upkeep.",
      image: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
      imageAlt: "Patient-room window secured with invisible grills",
      benefits: [
        {
          title: "Fall Prevention for Vulnerable Patients",
          description:
            "Secure windows, balconies and stairwell edges for patients who may be disoriented, sedated or unsteady.",
        },
        {
          title: "A Calmer Healing Environment",
          description:
            "Patients keep their daylight and outside view, which feels far less confining than iron bars.",
        },
        {
          title: "Clean and Rust-Free",
          description:
            "Smooth 316 stainless steel does not rust, flake or collect grime, and stays easy to keep clean.",
        },
        {
          title: "Minimal Disruption to Operations",
          description:
            "Our in-house team installs ward by ward with dust-controlled tools, so the hospital keeps running.",
        },
      ],
    },
    trustPillars: {
      title: "Why Hospitals Trust Solution Sahab",
      subtitle:
        "We plan installations ward by ward with your facilities team, so patient care is never interrupted.",
      pillars: COMMON_TRUST_PILLARS,
      showCertificates: true,
    },
    applications: {
      title: "Where We Install in Hospitals",
      subtitle:
        "Every grill is measured and fabricated to fit your building, from single patient-room windows to multi-storey atriums.",
      areas: [
        {
          title: "Patient-Room Windows",
          desc: "Let patients open windows for fresh air without the risk of leaning out or climbing through.",
          imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
          alt: "Hospital patient-room window with invisible grills",
        },
        {
          title: "Wards & Balconies",
          desc: "Protect ward balconies and open corridors on upper floors used by patients and visitors.",
          imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
          alt: "Hospital ward balcony with invisible grills",
        },
        {
          title: "Stairwells & Atriums",
          desc: "Close gaps beside stair railings and around open atriums and lobbies in multi-storey buildings.",
          imageUrl: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
          alt: "Hospital stairwell void secured with invisible grills",
        },
        {
          title: "Rooftop Gardens & Terraces",
          desc: "Make rooftop gardens and recovery terraces safe for patients, families and staff.",
          imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
          alt: "Hospital rooftop terrace with invisible grills",
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "Are invisible grills suitable for psychiatric or high-risk wards?",
        answer:
          "Invisible grills add strong fall protection to windows and openings, but high-risk wards often have their own specialist requirements. Our engineer will review each area with your team and recommend the right cable spacing and layout.",
      },
      {
        id: 2,
        question: "Can patients or visitors push the cables apart?",
        answer:
          "No. Each AISI 316 stainless steel cable is tensioned and tested for over 400 kgf, so it cannot be bent or pushed apart by hand.",
      },
      {
        id: 3,
        question: "Do invisible grills block emergency evacuation?",
        answer:
          "No. Unlike welded iron grills, the cables can be cut open in seconds with the emergency cutter we hand over to your staff.",
      },
      {
        id: 4,
        question: "Can you install without disturbing patients?",
        answer:
          "Yes. We work ward by ward, schedule around your operations, and use dust-controlled drilling tools to keep noise and dust to a minimum.",
      },
      {
        id: 5,
        question: "Will the grills rust or be hard to clean?",
        answer:
          "No. AISI 316 marine-grade stainless steel does not rust, and the smooth coated cables wipe clean easily. Every installation comes with a signed 5-year anti-rust warranty.",
      },
    ],
    bookingTitle: "Book a Free Hospital Safety Survey",
    bookingDescription:
      "Our engineer will survey your building with your facilities team, measure every opening and share a single quote. Installation across Delhi NCR.",
  },
};

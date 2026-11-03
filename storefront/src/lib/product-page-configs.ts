// File: src/lib/product-page-configs.ts
import { ASSETS } from "@/lib/constants";
import { FaqItem } from "@/lib/state/faq-state";
import {
  ProductHeroSectionProps,
  ProductOverviewSectionProps,
  ProductBenefitsSectionProps,
  ProductTechnicalSpecsProps,
  ProductTrustPillarsProps,
  ProductApplicationsSectionProps,
} from "@/components/product/common";

export interface ProductPageConfig {
  slug: string;
  leadSource: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
    ogImage: string;
  };
  structuredData: {
    productName: string;
    description: string;
    image: string;
    material?: string;
  };
  hero: ProductHeroSectionProps;
  overview: ProductOverviewSectionProps;
  benefits: ProductBenefitsSectionProps;
  specs?: ProductTechnicalSpecsProps;
  trustPillars?: ProductTrustPillarsProps;
  applications: ProductApplicationsSectionProps;
  faqs: FaqItem[];
  bookingTitle?: string;
  bookingDescription?: string;
}

const COMMON_TRUST_PILLARS = [
  {
    title: "Superior Material Quality",
    desc: "We exclusively use genuine architectural grade metals, heavy-gauge 6063-T6 aluminum extrusion tracks, and high-tensile components tested to international benchmarks.",
  },
  {
    title: "Certified & Lab Tested",
    desc: "Our fixtures and structural profiles are certified for tensile strength, breaking load, and corrosion resistance by leading ISO-9001:2015 approved testing laboratories.",
  },
  {
    title: "In-House Installation Team",
    desc: "Zero outsourced or daily-wage labour. All installations are performed by our own trained, background-verified technicians using dust-controlled drilling tools.",
  },
  {
    title: "Tailor-Made Customization",
    desc: "Every installation is CNC-cut and powder-coated to your opening's exact millimeter dimensions, with finishes matched to your existing window or door frames.",
  },
  {
    title: "5-Year Warranty",
    desc: "Direct manufacturer warranty card issued upon handover. Full coverage against material failure, structural defects, and operational slackening.",
  },
  {
    title: "10,000+ Happy Homes Across Delhi NCR",
    desc: "Trusted across Gurgaon, Noida, Greater Noida, and Delhi with proven 5-star customer ratings and prompt, reliable installation.",
  },
];

export const PRODUCT_CONFIGS: Record<string, ProductPageConfig> = {
  "invisible-grills": {
    slug: "invisible-grills",
    leadSource: "Invisible Grills Product Page",
    metadata: {
      title: "Invisible Grills Installation in Delhi – Solution Sahab",
      description:
        "Invisible grill installation for balconies and windows in Delhi NCR. AISI 316 stainless steel cables keep you safe without blocking the view.",
      keywords: [
        "grill installation delhi",
        "invisible grills",
        "stainless steel grill",
        "invisible grills for balcony",
        "invisible grill price delhi",
        "Solution Sahab invisible grills",
      ],
      canonical: "https://solutionsahab.com/invisible-grills",
      ogImage: ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS,
    },
    structuredData: {
      productName: "Architectural Grade Invisible Grills for Modern Balconies",
      description:
        "Safe fenestration solutions utilizing 316-grade stainless steel cables with tensioned installation, preserving panoramic views while protecting children and pets in Delhi NCR high-rises.",
      image: ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS,
      material: "AISI 316 Marine Grade Stainless Steel Wire",
    },
    hero: {
      productName: "Invisible Grills",
      brandTag: "Solution Sahab · Delhi NCR",
      tagline:
        "High-tensile 316 marine-grade stainless steel cable grills for balconies, windows, and open terraces. Protect children and pets from accidental falls without blocking your panoramic skyline view or natural breeze.",
      badges: [
        "AISI 316 Marine Steel",
        "400 kgf+ Load Capacity",
        "5-Year Rust Warranty",
        "RWA & Fire Approved",
      ],
      heroImage: ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS,
      heroImageAlt: "Invisible Grills Installed on High-Rise Balcony by Solution Sahab",
      breadcrumbName: "Invisible Grills",
      bookingTargetId: "#booking-form",
    },
    overview: {
      title: "What Are Invisible Grills?",
      leadParagraph:
        "Invisible grills are the modern replacement for bulky, rusted iron bars. They are made from thin, high-tensile 316 marine-grade stainless steel cables tensioned vertically or horizontally across your balcony, window, or staircase opening.",
      secondaryParagraph:
        "From inside your room, the cables are so slender that they are barely noticeable, preserving 100% of your open skyline view and natural daylight. Yet, each individual cable is engineered to withstand over 400 kgf of force—making it impossible for toddlers, children, or pets to slip through or bend the wires.",
      bullets: [
        {
          label: "Marine Grade 316 Stainless Steel",
          text: "Alloyed with 2.5% molybdenum to withstand Delhi NCR's heavy monsoon and smog without rusting.",
        },
        {
          label: "Child & Pet Safe 2-Inch Pitch",
          text: "Close 50mm spacing prevents toddlers from slipping through or dropping items.",
        },
        {
          label: "Fire-Safe Emergency Exit",
          text: "Unlike welded iron grills that trap occupants, cables can be cut open with shears in 15 seconds during an emergency.",
        },
      ],
      media: {
        type: "video",
        videoId: "l9bxcYr_hJ0",
        title: "What Are Invisible Grills - Solution Sahab Demonstration",
        caption: "Live demonstration: Cable strength and view transparency by Solution Sahab.",
      },
    },
    benefits: {
      title: "Why Choose Invisible Grills?",
      subtitle:
        "Traditional iron grills turn your balcony into a cage. Invisible grills deliver equal or greater strength while keeping your home bright, airy, and safe.",
      image: ASSETS.TYPOLOGIES.HIGH_RISE,
      imageAlt: "Open High-Rise Balcony with Invisible Safety Grills",
      benefits: [
        {
          title: "Enhanced Safety for Children & Pets",
          description:
            "High-tensile cables hold over 400 kgf load per run. Spaced 2 inches apart, they make it impossible for toddlers to slip through, climb over, or drop items from high-rise balconies.",
        },
        {
          title: "100% Unobstructed Views",
          description:
            "You paid for the view. Invisible grills preserve 98% of natural light and ventilation, so you enjoy the skyline, fresh breeze, and open feel without looking through heavy iron bars.",
        },
        {
          title: "Approved by Society RWAs",
          description:
            "Traditional welded iron cages alter building elevations and are banned in most societies across Gurgaon, Noida, and Delhi. Invisible grills are virtually unseen from the ground and widely approved.",
        },
        {
          title: "Zero Rust, Zero Periodic Repainting",
          description:
            "Mild steel grills rust every monsoon, chipping paint and staining your balcony floor. Grade 316 stainless steel wires remain clean and rust-free year after year with zero maintenance.",
        },
      ],
    },
    // specs: {
    //   title: "Technical Specification",
    //   subtitle:
    //     "Every component used in our invisible grill installations is engineered to withstand extreme high-rise wind loads, rain, and intense summer sun.",
    //   callout: {
    //     title: "Grade 316 vs Grade 304/202 Wire",
    //     text: "Delhi NCR's heavy atmospheric smog and monsoon humidity cause cheap 304 or 202 wire to rust within 8 to 14 months. Solution Sahab uses genuine AISI 316 Marine Grade wire alloyed with molybdenum, ensuring it stays rust-free for long time.",
    //   },
    //   specs: [
    //     { label: "Cable Metallurgy", val: "AISI 316 Marine Grade Stainless Steel" },
    //     { label: "Cable Diameter", val: "2.5 mm & 3.0 mm Options" },
    //     { label: "Tensile Breaking Load", val: "400 kgf per Cable (Proof-Tested)" },
    //     { label: "Outer Protective Sheath", val: "Virgin UV-Stabilized Transparent Nylon / Teflon" },
    //     { label: "Track Extrusion Profile", val: "6063-T6 Heavy Architectural Aluminum Alloy" },
    //     { label: "Track Surface Finish", val: "AkzoNobel Exterior Powder Coat (Charcoal, White, Bronze)" },
    //     { label: "Cable Pitch Options", val: "50 mm (2\") Child-Safe / 75 mm (3\") Standard" },
    //     { label: "Substrate Anchoring", val: "Hilti / Fischer Stainless Mechanical Expansion Bolts" },
    //     { label: "Emergency Evacuation", val: "Cuts with wire shears in under 15 seconds" },
    //     { label: "Written Warranty", val: "5-Year Guarantee" },
    //   ],
    // },
    trustPillars: {
      title: "Why Choose Solution Sahab for Invisible Grills?",
      subtitle:
        "At Solution Sahab, we take pride in providing certified, high-grade invisible grill installations for residential and commercial spaces across Delhi NCR.",
      pillars: COMMON_TRUST_PILLARS,
      showCertificates: true,
    },
    applications: {
      title: "Where Can You Install Invisible Grills?",
      subtitle:
        "Invisible grills are custom fabricated to adapt to any opening geometry, from narrow window frames to curved high-rise balconies.",
      areas: [
        {
          title: "Balconies",
          desc: "Ensure complete child and pet fall safety on high-rise balconies without blocking the view, sunrise, or natural cross-ventilation.",
          imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
          alt: "Balcony invisible grill installation by Solution Sahab",
        },
        {
          title: "Windows",
          desc: "Keep your French and sliding windows open for fresh air while securing the openings against accidental slips or break-ins.",
          imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
          alt: "Window invisible grill installation by Solution Sahab",
        },
        {
          title: "Staircases & Voids",
          desc: "Prevent accidental falls along open stairwell handrails and dramatic multi-level atrium cutouts in duplex villas and penthouses.",
          imageUrl: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
          alt: "Staircase and atrium invisible grill installation by Solution Sahab",
        },
        {
          title: "Rooftop Terraces",
          desc: "Secure parapet walls on rooftop terraces and open patios, protecting against high winds and keeping monkeys and pigeons away.",
          imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
          alt: "Rooftop terrace invisible grill installation by Solution Sahab",
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "Are invisible grills safe for small toddlers, cats, and dogs?",
        answer:
          "Yes. Each AISI 316 stainless steel cable is tensioned and tested for a 400kg breaking load. With 2-inch or 3-inch spacing, children and pets cannot slip through, and the smooth nylon coating prevents finger cuts.",
      },
      {
        id: 2,
        question: "Can the cables be cut quickly during a fire emergency?",
        answer:
          "Yes. Unlike welded iron grills that trap occupants inside, invisible grill cables can be cut in under 10 seconds using the emergency wire cutter tool we provide with every installation.",
      },
      {
        id: 3,
        question: "Will the cables rust in Delhi NCR rain, humidity, or pollution?",
        answer:
          "No. We use genuine AISI 316 marine-grade stainless steel with protective nylon coating. Every installation comes with a signed 5-year anti-rust warranty card.",
      },
      {
        id: 4,
        question: "Do high-rise society RWAs and builders allow invisible grills?",
        answer:
          "Yes. Most societies across Gurugram, Noida, and Delhi (DLF, ATS, Godrej, Gaur, etc.) ban bulky iron grills to protect building facades, but approve invisible grills because they keep the exterior look unchanged.",
      },
      {
        id: 5,
        question: "How long does measurement and installation take?",
        answer:
          "Our engineer visits your home with material samples and takes laser measurements. Once confirmed, installation is completed cleanly in a short time with dust-controlled tools.",
      },
    ],
    bookingTitle: "Schedule Laser Site Measurement",
    bookingDescription:
      "Book an engineer visit with wire and track samples for your home or project. Prompt installation across Delhi NCR.",
  },

  "pleated-mesh": {
    slug: "pleated-mesh",
    leadSource: "Pleated Mosquito Mesh Product Page",
    metadata: {
      title: "Pleated Mosquito Mesh in Delhi NCR – Solution Sahab",
      description:
        "Retractable pleated mosquito mesh for balcony doors and windows in Delhi, Gurgaon and Noida. Jindal T6 aluminium frames and a 5-year warranty.",
      keywords: [
        "pleated mosquito mesh delhi",
        "mosquito mesh for balcony",
        "retractable insect screen gurgaon",
        "pleated mesh price noida",
        "roller mesh for windows",
        "Solution Sahab pleated mesh",
      ],
      canonical: "https://solutionsahab.com/pleated-mesh",
      ogImage: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
    },
    structuredData: {
      productName: "Retractable Pleated Mosquito Mesh for Doors & Windows",
      description:
        "Premium retractable pleated mosquito insect screens made with Jindal T6 aluminum frames and tear-resistant accordion mesh for balconies and French doors in Delhi NCR.",
      image: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
      material: "Jindal T6 6063 Aluminum & PVC-Coated Polyester",
    },
    hero: {
      productName: "Pleated Mosquito Mesh",
      brandTag: "Solution Sahab · Delhi NCR",
      tagline:
        "Retractable accordion insect screens for balcony sliding doors, French windows, and main entrance openings. Enjoy 100% mosquito and bug defense without compromising your natural airflow or interior elegance.",
      badges: [
        "Jindal T6 Aluminum",
        "Tear-Resistant Mesh",
        "German Kevlar Cords",
        "5-Year Guarantee",
      ],
      heroImage: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
      heroImageAlt: "Pleated Mosquito Mesh Installation in Delhi NCR by Solution Sahab",
      breadcrumbName: "Pleated Mosquito Mesh",
      bookingTargetId: "#booking-form",
    },
    overview: {
      title: "What Is Pleated Mosquito Mesh?",
      leadParagraph:
        "Pleated mosquito mesh is an advanced retractable insect screen engineered with a zigzag accordion folding structure. When not in use, the mesh collapses neatly into an ultra-slim side aluminum cassette, preserving 100% of your doorway or window opening.",
      secondaryParagraph:
        "Unlike fragile velcro nets or bulky hinged wire doors, pleated mesh operates smoothly on high-tension German guide cords and an ultra-low bottom floor track. It stops mosquitoes, houseflies, and dengue-carrying pests without trapping indoor heat or blocking sunlight.",
      bullets: [
        {
          label: "Space-Saving Zigzag Retraction",
          text: "Folds into a sleek 40mm aluminum jamb, leaving balconies, patios, and French doors completely unobstructed.",
        },
        {
          label: "Tear-Resistant PVC-Coated Polyester",
          text: "Heat-set pleats hold their sharp shape through monsoons, pet scratches, and intense Delhi heat without sagging.",
        },
        {
          label: "Barrier-Free 3mm Bottom Guide",
          text: "Ultra-flat threshold track eliminates tripping hazards, ensuring effortless passage for children and seniors.",
        },
      ],
      media: {
        type: "video",
        videoId: "YmD4BqrmkYE",
        title: "Pleated Mosquito Mesh Demonstration - Solution Sahab",
        caption: "Live demonstration: Smooth accordion glide and insect protection by Solution Sahab.",
      },
    },
    benefits: {
      title: "Why Choose Pleated Mosquito Mesh?",
      subtitle:
        "Traditional fixed wooden frames and velcro nets collect dust, sag, and ruin modern interior aesthetics. Pleated mesh provides a sleek, retractable alternative designed for easy daily living.",
      image: ASSETS.GALLERY.NOIDA_VILLA,
      imageAlt: "Pleated mosquito mesh installed on bedroom window by Solution Sahab",
      benefits: [
        {
          title: "100% Mosquito & Dengue Defense",
          description:
            "Tightly woven 18x16 mesh density bars mosquitoes, houseflies, gnats, and lizards from entering, protecting your family from dengue and malaria while keeping doors open for fresh air.",
        },
        {
          title: "Smooth One-Touch Operation",
          description:
            "High-tension German Kevlar guide cords ensure smooth glide with a gentle push. Equipped with full-length magnetic latches that snap shut securely in heavy winds.",
        },
        {
          title: "Zero Clutter & Space Saving",
          description:
            "Unlike bulky hinged screen doors that collide with curtains or furniture, pleated mesh retracts flat against the wall jamb, consuming zero indoor floor space.",
        },
        {
          title: "Architectural Color Matching",
          description:
            "Heavy-gauge aluminum tracks are powder-coated to seamlessly match your existing UPVC, wooden, or dark aluminum window frames in Charcoal, Bronze, and White.",
        },
      ],
    },
    // specs: {
    //   title: "Technical Specification",
    //   subtitle:
    //     "Every pleated mesh system is custom-manufactured at our Nilothi facility using industrial-grade Jindal extrusions and German cord technology.",
    //   callout: {
    //     title: "Jindal T6 6063 Aluminum vs Cheap Local Frames",
    //     text: "Cheap market screens use 0.6mm recycled aluminum profiles and nylon strings that snap within months. Solution Sahab uses heavy-gauge Jindal T6 6063 alloy with German Kevlar guide cords, ensuring snag-free glide for years.",
    //   },
    //   specs: [
    //     { label: "Frame Metallurgy", val: "Jindal T6 6063 Architectural Grade Aluminum" },
    //     { label: "Extrusion Thickness", val: "1.2 mm – 1.4 mm Heavy Wall Profile" },
    //     { label: "Mesh Material", val: "UV-Stabilized Waterproof PVC-Coated Polyester" },
    //     { label: "Mesh Pleat Pitch", val: "20 mm Heat-Set Accordion Pleats (Non-Sagging)" },
    //     { label: "Internal Guide Cords", val: "High-Tensile German Kevlar Wire" },
    //     { label: "Bottom Track Profile", val: "3 mm Ultra-Low Floor Guide (Barrier-Free)" },
    //     { label: "Magnetic Latching", val: "Full-Length Neodymium Magnetic Strip" },
    //     { label: "Surface Finish", val: "AkzoNobel Pure Polyester Powder Coat (White, Charcoal, Bronze, Black)" },
    //     { label: "Wind Resistance", val: "Tested against 60 km/h high-rise balcony gusts" },
    //     { label: "Written Warranty", val: "5-Year Direct Manufacturer Guarantee" },
    //   ],
    // },
    // trustPillars: {
    //   title: "Why Choose Solution Sahab for Pleated Mesh?",
    //   subtitle:
    //     "Engineered with certified Jindal aluminum, heat-set German cords, and zero-compromise craftsmanship across Delhi NCR.",
    //   pillars: COMMON_TRUST_PILLARS,
    //   showCertificates: true,
    // },
    applications: {
      title: "Where Can You Install Pleated Mosquito Mesh?",
      subtitle:
        "Our modular aluminum tracks can be retrofitted onto existing UPVC, aluminum, or wooden door and window frames without masonry damage.",
      areas: [
        {
          title: "Sliding Balcony Doors",
          desc: "Mounts directly alongside existing 2-track or 3-track UPVC and aluminum sliding patio doors. Keep glass doors fully open for breeze with total insect protection.",
          imageUrl: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
          alt: "Pleated mosquito mesh installed on sliding balcony doors in Delhi NCR flat",
        },
        {
          title: "French Windows & Casements",
          desc: "Sits flush within the interior or exterior window reveal. Ideal for bedroom windows, kitchen ventilation openings, and casement windows opening outward.",
          imageUrl: ASSETS.GALLERY.NOIDA_VILLA,
          alt: "Pleated insect screen fitted on bedroom French window",
        },
        {
          title: "Main Entrance Doors",
          desc: "Equipped with our 3mm ultra-low threshold track that eliminates trip hazards. Keeps flies and mosquitoes out when the main wooden door is open.",
          imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
          alt: "Barrier-free pleated mosquito mesh on apartment main entrance door",
        },
        {
          title: "Wide Span Terraces & Patios",
          desc: "Available in center-closing double shutter configurations spanning up to 14 feet. Perfectly suited for villas, penthouses, and farmhouses.",
          imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
          alt: "Double shutter wide pleated mosquito mesh installed on rooftop terrace door",
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "Does pleated mosquito mesh block natural airflow or darken the room?",
        answer:
          "No. Our pleated mesh utilizes an optimized 18x16 weave structure with over 85% open surface porosity. It allows natural cross-ventilation and sunlight to flow freely into your home while creating an impenetrable barrier against mosquitoes.",
      },
      {
        id: 2,
        question: "How do I clean and maintain pleated mosquito mesh in dusty Delhi weather?",
        answer:
          "Because the polyester fibers are PVC-coated, dust does not penetrate the material. You can clean it in minutes using a handheld vacuum with a soft brush nozzle or gently wipe it with a damp microfiber cloth.",
      },
      {
        id: 3,
        question: "Can household pets or strong balcony winds damage the mesh?",
        answer:
          "Our mesh is heat-pleated from high-tensile polyester reinforced with internal German Kevlar cords. It withstands pet curiosity and holds firmly inside its aluminum guide tracks against gusty balcony winds without blowing out.",
      },
      {
        id: 4,
        question: "Can pleated mesh be fitted onto existing UPVC, aluminum, or wooden doors?",
        answer:
          "Yes. Our slim 40mm mounting profiles are custom-machined to install flush against all standard UPVC sliding systems, wooden French doors, and aluminum casement frames without altering your existing shutters.",
      },
      {
        id: 5,
        question: "How long does measurement and installation take?",
        answer:
          "Our technician visits your home with physical frame swatches and mesh samples, takes laser measurements, and provides an exact quote. Following confirmation, installation is completed cleanly in a short time.",
      },
    ],
    bookingTitle: "Schedule Laser Site Measurement",
    bookingDescription:
      "Book an engineer visit with frame color swatches and mesh samples for your home. Prompt installation across Delhi NCR.",
  },

  "aluminum-mesh-partition": {
    slug: "aluminum-mesh-partition",
    leadSource: "Aluminum Security Mesh Product Page",
    metadata: {
      title: "Aluminum Security Mesh in Delhi NCR – Solution Sahab",
      description:
        "Heavy-duty aluminium security mesh doors and partitions in Delhi, Gurgaon and Noida. Knife-shear resistant mesh, Jindal T6 frames, 5-year warranty.",
      keywords: [
        "aluminum security mesh delhi",
        "security mesh doors gurgaon",
        "aluminum partition noida",
        "anti theft window mesh",
        "knife shear security screen",
        "Solution Sahab aluminum mesh",
      ],
      canonical: "https://solutionsahab.com/aluminum-mesh-partition",
      ogImage: ASSETS.PRODUCTS.ALUMINUM_SECURITY_MESH,
    },
    structuredData: {
      productName: "Heavy-Duty Aluminum Security Mesh and Modular Partitions",
      description:
        "Architectural heavy-duty aluminum security mesh doors, knife-shear resistant window screens, and modular partitions for homes and offices in Delhi NCR.",
      image: ASSETS.PRODUCTS.ALUMINUM_SECURITY_MESH,
      material: "Jindal T6 6063 Alloy & Marine Grade Woven Steel Mesh",
    },
    hero: {
      productName: "Aluminum Security Mesh & Partition",
      brandTag: "Solution Sahab · Delhi NCR",
      tagline:
        "Heavy-duty architectural security mesh and partitions for main entrance doors, sliding balconies, and interior dividers. Enjoy knife-shear intruder security, complete pest defense, and fresh airflow in one elegant system.",
      badges: [
        "Jindal T6 Structural Alloy",
        "Knife-Shear Resistant",
        "Multi-Point Deadbolt",
        "5-Year Guarantee",
      ],
      heroImage: ASSETS.PRODUCTS.ALUMINUM_SECURITY_MESH,
      heroImageAlt: "Aluminum Security Mesh and Partition Installation by Solution Sahab",
      breadcrumbName: "Aluminum Security Mesh",
      bookingTargetId: "#booking-form",
    },
    overview: {
      title: "What Is Aluminum Security Mesh & Partition?",
      leadParagraph:
        "Aluminum Security Mesh is a heavy-duty physical barrier system engineered for homeowners who require uncompromising intruder protection along with complete insect defense. Made with high-tensile metal wire woven into rigid structural aluminum frames, it forms an unyielding shield across doors and windows.",
      secondaryParagraph:
        "Unlike traditional iron grills that create a claustrophobic cage look, aluminum security mesh provides optical transparency and uninterrupted airflow. When configured with clear acoustic acrylic inserts, it also functions as an elegant modern partition for residential and commercial spaces.",
      bullets: [
        {
          label: "High-Impact Knife-Shear Resistance",
          text: "Heavy-gauge woven mesh withstands dynamic kick impacts, crowbar leverage, and sharp cutting tools without tearing.",
        },
        {
          label: "Continuous Airflow & Mosquito Defense",
          text: "Maintains fresh air circulation and natural lighting while stopping mosquitoes, wasps, and lizards completely.",
        },
        {
          label: "Custom Sliding, Hinged & Partition Formats",
          text: "Available as main door double-locks, sliding balcony doors, window screens, and modular interior room dividers.",
        },
      ],
      media: {
        type: "video",
        videoId: "jz5j0o3WmNQ",
        title: "Aluminum Security Mesh & Partition Demonstration - Solution Sahab",
        caption: "Live demonstration: Heavy-duty aluminum security mesh and smooth sliding mechanism by Solution Sahab.",
      },
    },
    benefits: {
      title: "Why Choose Aluminum Security Mesh & Partition?",
      subtitle:
        "Wrought iron bars corrode and block light. Lightweight insect screens offer zero break-in security. Aluminum security mesh unites heavy-duty intruder protection with insect defense and ventilation.",
      image: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
      imageAlt: "Aluminum Security Mesh installed on French windows by Solution Sahab",
      benefits: [
        {
          title: "Intruder & Anti-Burglary Defense",
          description:
            "Woven from high-tensile marine metal wire and locked inside heavy-wall aluminum clamp tracks with multi-point deadbolts to resist crowbars and forced entry.",
        },
        {
          title: "Clear Visibility Without Iron Bars",
          description:
            "Black powder-coated mesh absorbs glare and provides over 60% optical transparency, allowing crisp outward views without the unsightly look of jail-like bars.",
        },
        {
          title: "Zero Corrosion & All-Weather Durability",
          description:
            "Built with pure polyester AkzoNobel powder coating over Jindal aluminum extrusions to prevent rust, peeling, or fading through monsoons and summer heat.",
        },
        {
          title: "Modular Space Partitioning",
          description:
            "Combine security mesh, toughened glass, or acoustic acrylic infills to partition living-dining areas, balconies, or office cabins with modern lines.",
        },
      ],
    },
    // specs: {
    //   title: "Technical Specification",
    //   subtitle:
    //     "Engineered with heavy-wall structural Jindal aluminum extrusions and high-tensile wire mesh, built to provide unyielding physical security without compromising ventilation.",
    //   callout: {
    //     title: "Jindal T6 Structural Alloy vs Thin Local Fabrications",
    //     text: "Local fabricators use thin scrap aluminum that flexes under pressure and thin screens easily slit with a cutter. Solution Sahab uses genuine 1.5mm–2.0mm Jindal T6 extrusions with high-tensile woven metal mesh and multi-point mortise locks for impenetrable defense.",
    //   },
    //   specs: [
    //     { label: "Frame Metallurgy", val: "Jindal T6 6063 Architectural Grade Structural Alloy" },
    //     { label: "Extrusion Wall Thickness", val: "1.5 mm – 2.0 mm Heavy-Duty Profile" },
    //     { label: "Mesh Strand Thickness", val: "0.8 mm – 1.0 mm High-Tensile Marine Woven Wire" },
    //     { label: "Impact & Shear Standard", val: "Knife-Shear & Dynamic Kick Resistance Tested" },
    //     { label: "Locking Hardware", val: "Multi-Point Deadbolt Security Mortise System" },
    //     { label: "Bottom Guide Profile", val: "Low-Rise 4 mm Barrier-Free Threshold or Recessed Track" },
    //     { label: "Partition Infill Options", val: "Security Mesh, Toughened Glass, Acoustic Acrylic / Fluted Polycarbonate" },
    //     { label: "Surface Finish", val: "AkzoNobel Pure Polyester Powder Coat (Charcoal, Bronze, White, Black)" },
    //     { label: "Pest Defense", val: "100% Mosquito, Rodent, Lizard, and Flying Insect Block" },
    //     { label: "Written Warranty", val: "5-Year Direct Manufacturer Guarantee" },
    //   ],
    // },
    trustPillars: {
      title: "Why Choose Solution Sahab for Aluminum Mesh?",
      subtitle:
        "Heavy-duty materials, precision CNC manufacturing, and professional in-house installation across Delhi NCR.",
      pillars: COMMON_TRUST_PILLARS,
      showCertificates: true,
    },
    applications: {
      title: "Where Can You Install Aluminum Mesh & Partitions?",
      subtitle:
        "Custom fabricated to secure main entrances, sliding balcony openings, low-floor windows, and interior room divisions.",
      areas: [
        {
          title: "Main Entrance Security Doors",
          desc: "Equipped with multi-point deadbolt locks. Provides a formidable security barrier allowing you to keep main doors open for light and ventilation.",
          imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
          alt: "Heavy duty aluminum security mesh on apartment main entrance door",
        },
        {
          title: "Sliding Balcony Doors",
          desc: "Heavy-duty sliding shutters fitted over balcony openings to prevent intruder entry from adjoining balconies or fire stairs.",
          imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
          alt: "Sliding aluminum security screen installed on high rise balcony",
        },
        {
          title: "Living & Office Partitions",
          desc: "Modular aluminum partition frames fitted with acoustic glass or metal mesh to divide open floor plans, cabins, or study areas.",
          imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
          alt: "Architectural aluminum partition dividing living and study zones",
        },
        {
          title: "Ground & Low-Floor Windows",
          desc: "Heavy-duty security screens for villa ground floors and independent floor windows vulnerable to forced entry or stray animals.",
          imageUrl: ASSETS.GALLERY.NOIDA_VILLA,
          alt: "Knife-shear resistant security mesh fitted on ground floor window",
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "Can aluminum security mesh be cut with a household knife or shears?",
        answer:
          "No. Our security mesh is woven from 0.8mm–1.0mm high-tensile marine-grade metal wire and locked securely inside heavy-wall Jindal T6 aluminum clamp channels. It cannot be pierced or cut with box cutters or shears.",
      },
      {
        id: 2,
        question: "Does security mesh block daylight or airflow like metal grilles?",
        answer:
          "Not at all. The black powder-coated woven wire has over 60% open optical transparency. It absorbs sunlight glare to provide crisp outward views while allowing natural breezes and sunlight to flow into your home.",
      },
      {
        id: 3,
        question: "Can this system be installed over my existing wooden main door or UPVC balcony door?",
        answer:
          "Yes. We custom-fabricate frames to mount directly in front of your existing wooden entrance doors or sliding UPVC balcony doors without disrupting existing hardware.",
      },
      {
        id: 4,
        question: "What locking hardware is installed on security mesh doors?",
        answer:
          "Every entrance security door is equipped with a multi-point deadbolt mortise lock with high-precision brass cylinders, locking the frame securely at multiple points along the jamb.",
      },
      {
        id: 5,
        question: "How does the site measurement and installation process work?",
        answer:
          "A certified Solution Sahab technician visits your property with aluminum swatches and mesh samples, conducts laser measurements, and provides an exact quote. Installation is completed cleanly in a short time.",
      },
    ],
    bookingTitle: "Schedule Laser Site Measurement",
    bookingDescription:
      "Book an engineer visit with aluminum frame and security mesh samples for your home. Prompt installation across Delhi NCR.",
  },

  "honeycomb-partition": {
    slug: "honeycomb-partition",
    leadSource: "Honeycomb Partition Product Page",
    metadata: {
      title: "Honeycomb Partition & Blinds in Delhi NCR – Solution Sahab",
      description:
        "Honeycomb cellular partitions, acoustic blinds and 2-in-1 Duet mesh systems in Delhi, Gurgaon and Noida. Jindal T6 frames, 5-year warranty.",
      keywords: [
        "honeycomb partition delhi",
        "cellular blinds gurgaon",
        "honeycomb door system noida",
        "duet system partition delhi ncr",
        "retractable room divider",
        "Solution Sahab honeycomb partition",
      ],
      canonical: "https://solutionsahab.com/honeycomb-partition",
      ogImage: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
    },
    structuredData: {
      productName: "Honeycomb Cellular Partitions and Retractable Thermal Blinds",
      description:
        "Retractable honeycomb cellular room dividers, thermal insulation blinds, and 2-in-1 Duet mesh systems for homes and offices in Delhi NCR.",
      image: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
      material: "Jindal T6 Aluminum & Cellular Spunlace Polyester",
    },
    hero: {
      productName: "Honeycomb Partition & Blinds",
      brandTag: "Solution Sahab · Delhi NCR",
      tagline:
        "Retractable honeycomb cellular room dividers, thermal insulation blinds, and 2-in-1 Duet mesh systems. Subdivide living zones, block blistering summer heat, and gain instant acoustic privacy without permanent walls.",
      badges: [
        "Cellular Air Pockets",
        "Up to 30% AC Savings",
        "2-in-1 Duet System",
        "5-Year Guarantee",
      ],
      heroImage: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
      heroImageAlt: "Honeycomb Partition and Blinds Installation by Solution Sahab",
      breadcrumbName: "Honeycomb Partition",
      bookingTargetId: "#booking-form",
    },
    overview: {
      title: "What Is Honeycomb Partition & Blinds?",
      leadParagraph:
        "Honeycomb Partition (also known as Cellular Shades or Accordion Room Dividers) is an advanced architectural screening system built from interconnected hexagonal fabric air pockets. These engineered cells trap a layer of air, creating a natural thermal barrier between living zones.",
      secondaryParagraph:
        "Available in single-shutter, double-shutter, and our signature Duet System—which integrates a blackout thermal honeycomb blind on one side and a transparent insect mesh on the other—it retracts smoothly into ultra-slim aluminum side cassettes without taking up valuable floor area.",
      bullets: [
        {
          label: "Cellular Thermal & Energy Insulation",
          text: "Hexagonal air-cell pockets resist outdoor temperature transfer, cutting down AC power bills in blistering Delhi summers.",
        },
        {
          label: "Acoustic Softening & Instant Privacy",
          text: "Dampens ambient indoor echo and street noises while offering instant visual privacy for pooja rooms, dining spaces, and bedrooms.",
        },
        {
          label: "Duet 2-in-1 Mesh + Blind Dual Functionality",
          text: "Pull the mesh side for daytime cross-ventilation; pull the honeycomb side for nighttime blackout privacy in one single track.",
        },
      ],
      media: {
        type: "video",
        videoId: "gcrd8NwlzBI",
        title: "Honeycomb Partition for Doors and Balconies - Solution Sahab",
        caption: "Live demonstration: Smooth retraction, cellular insulation, and magnetic closure by Solution Sahab.",
      },
    },
    benefits: {
      title: "Why Choose Honeycomb Partition & Blinds?",
      subtitle:
        "Masonry walls are permanent and expensive. Curtains accumulate dust and block breezes. Honeycomb partitions provide flexible, on-demand zoning with superior thermal resistance.",
      image: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
      imageAlt: "Honeycomb partition dividing modern apartment space",
      benefits: [
        {
          title: "Thermal Insulation & AC Power Savings",
          description:
            "Engineered hexagonal air pockets trap radiant heat at large glass balconies, reducing indoor temperature and lowering AC energy consumption by up to 25–30%.",
        },
        {
          title: "Acoustic Softening & Noise Reduction",
          description:
            "Multi-chamber spunlace polyester softens indoor echoes and muffles outdoor traffic noise, creating peaceful living and working zones.",
        },
        {
          title: "Space-Saving 50mm Retraction",
          description:
            "Glides on an ultra-low 3mm threshold and collapses into a discreet 50mm side jamb, preserving 100% of room space when opened.",
        },
        {
          title: "Blackout & Translucent Light Control",
          description:
            "Choose translucent cellular fabric for gentle daylight diffusion or foil-lined blackout cells for 100% dark bedrooms and private home theaters.",
        },
      ],
    },
    // specs: {
    //   title: "Technical Specification",
    //   subtitle:
    //     "Precision fabricated at our Nilothi facility using Jindal structural extrusions, German tensioning cords, and multi-layer thermal cellular fabrics.",
    //   callout: {
    //     title: "Cellular Air-Trapping vs Flat Blinds & Drapes",
    //     text: "Ordinary roller blinds and cloth curtains allow heat to radiate straight through the glass. Honeycomb cells trap dead air within their hexagonal chambers, acting as an insulating barrier that keeps interiors cooler during Delhi summers.",
    //   },
    //   specs: [
    //     { label: "Frame Metallurgy", val: "Jindal T6 6063 Architectural Grade Aluminum" },
    //     { label: "Extrusion Wall Thickness", val: "1.2 mm – 1.4 mm Heavy-Gauge Profile" },
    //     { label: "Cellular Geometry", val: "25 mm / 38 mm Single-Cell Hexagonal Air Pockets" },
    //     { label: "Fabric Metallurgy", val: "Hydrophobic Non-Woven Spunlace Polyester" },
    //     { label: "Light Control Options", val: "Translucent Light-Filtering or 100% Blackout (Alu-Foil Lined)" },
    //     { label: "System Typologies", val: "Single Shutter, Double Shutter, and Duet (Mesh + Honeycomb 2-in-1)" },
    //     { label: "Internal Tension Cords", val: "High-Tensile German Kevlar Guide System" },
    //     { label: "Floor Guide Profile", val: "3 mm Ultra-Low Barrier-Free Track" },
    //     { label: "Surface Finish", val: "AkzoNobel Pure Polyester Powder Coat (Charcoal, Bronze, White, Black)" },
    //     { label: "Written Warranty", val: "5-Year Direct Manufacturer Guarantee" },
    //   ],
    // },
    // trustPillars: {
    //   title: "Why Choose Solution Sahab for Honeycomb Partitions?",
    //   subtitle:
    //     "Customized cellular fabrics, robust Jindal aluminum channels, and verified ISO quality standards across Delhi NCR.",
    //   pillars: COMMON_TRUST_PILLARS,
    //   showCertificates: true,
    // },
    applications: {
      title: "Where Can You Install Honeycomb Partitions?",
      subtitle:
        "Retrofitted onto existing door frames, ceiling tracks, or window reveals across residential and commercial interiors.",
      areas: [
        {
          title: "Balcony & French Sliding Doors",
          desc: "Mounts on sliding balcony openings. Blocks harsh midday sun and stops solar radiation while preserving indoor temperature.",
          imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
          alt: "Honeycomb blinds installed on sliding balcony doors",
        },
        {
          title: "Living & Dining Room Dividers",
          desc: "Subdivides large living and dining spaces when hosting guests. Retracts completely into a 50mm slim side stack when full space is needed.",
          imageUrl: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
          alt: "Retractable honeycomb room divider separating living and dining areas",
        },
        {
          title: "Pooja Rooms & Sacred Alcoves",
          desc: "Creates a serene, respectful partition for prayer areas without swinging doors that collide with deities or consume precious floor space.",
          imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
          alt: "Honeycomb partition door fitted on residential pooja room",
        },
        {
          title: "Modern Offices & Conference Cabins",
          desc: "Provides quick acoustic softening and visual discretion for meeting rooms, executive cabins, and studio workspaces.",
          imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
          alt: "Honeycomb partition installed in commercial office conference room",
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "Does a honeycomb partition help reduce air-conditioning power bills?",
        answer:
          "Yes. The hexagonal cell structure traps still air inside individual chambers, forming an effective thermal barrier. It prevents heat from radiating into your room through large glass balconies, reducing AC load by up to 25–30%.",
      },
      {
        id: 2,
        question: "What is the difference between translucent and blackout honeycomb fabrics?",
        answer:
          "Translucent fabric gently diffuses natural sunlight into the room while offering complete privacy. Blackout fabric is lined with an internal aluminum foil barrier inside each cell, delivering 100% room darkening and maximum thermal reflection.",
      },
      {
        id: 3,
        question: "What is the signature Duet 2-in-1 system?",
        answer:
          "Our Duet system combines two screens within a single slim aluminum frame: an accordion pleated insect mesh on one side and a thermal honeycomb blind on the other. Slide the mesh for daytime ventilation; slide the honeycomb blind for nighttime blackout privacy.",
      },
      {
        id: 4,
        question: "How do you clean and maintain honeycomb fabric in dusty Delhi weather?",
        answer:
          "Our spunlace polyester fabric is anti-static and water-repellent, meaning dust does not penetrate the fibers. You can clean it easily with a vacuum cleaner using a soft brush nozzle on low suction, or dust it lightly with a dry microfiber cloth.",
      },
      {
        id: 5,
        question: "Can a honeycomb partition replace a traditional wooden door or brick wall?",
        answer:
          "Yes. Our floor-guided partitions can span up to 14 feet wide with smooth magnetic latching and a 3mm ultra-low threshold, allowing you to partition living-dining areas or home offices on demand without permanent masonry.",
      },
    ],
    bookingTitle: "Schedule Laser Site Measurement",
    bookingDescription:
      "Book an engineer visit with cellular fabric swatches and frame profiles for your home. Prompt installation across Delhi NCR.",
  },

  "automatic-weather-screen": {
    slug: "automatic-weather-screen",
    leadSource: "Automatic Weather Screen Product Page",
    metadata: {
      title: "Weather Screens & Zip Blinds in Delhi NCR – Solution Sahab",
      description:
        "Motorised zip screens and weather blinds for balconies in Delhi, Gurgaon and Noida. 80 km/h wind resistance and a 5-year warranty.",
      keywords: [
        "automatic weather screen delhi",
        "motorized zip screens gurgaon",
        "outdoor balcony blinds noida",
        "weather screen for terrace",
        "motorized pergola blinds delhi ncr",
        "Solution Sahab weather screen",
      ],
      canonical: "https://solutionsahab.com/automatic-weather-screen",
      ogImage: ASSETS.PRODUCTS.WEATHER_SCREENS,
    },
    structuredData: {
      productName: "Motorized Automatic Weather Screens & Outdoor Zip Blinds",
      description:
        "Heavy-duty motorized outdoor zip screens, wind-resistant balcony weather blinds, and solar shading systems across Delhi NCR.",
      image: ASSETS.PRODUCTS.WEATHER_SCREENS,
      material: "Architectural Aluminum & PVC-Coated Polyester Technical Solar Screen",
    },
    hero: {
      productName: "Automatic Weather Screens",
      brandTag: "Solution Sahab · Delhi NCR",
      tagline:
        "Motorized outdoor zip screens and high-wind weather protection blinds. Shield balconies, pergolas, and outdoor patios from driving monsoon rain, blistering solar heat, and heavy Delhi dust storms at the touch of a button.",
      badges: [
        "Somfy / Dooya Motors",
        "80 km/h Wind Rated",
        "Blocks 90% Heat",
        "5-Year Guarantee",
      ],
      heroImage: ASSETS.PRODUCTS.WEATHER_SCREENS,
      heroImageAlt: "Automatic Weather Screen Installation by Solution Sahab",
      breadcrumbName: "Automatic Weather Screens",
      bookingTargetId: "#booking-form",
    },
    overview: {
      title: "What Is an Automatic Weather Screen?",
      leadParagraph:
        "An Automatic Weather Screen (also known as a Motorized Zip Screen or Outdoor Drop Blind) is an exterior shading and weather-proofing system engineered specifically for outdoor living. Powered by whisper-quiet tubular motors, it raises or lowers high-tensile technical fabric at the touch of a button.",
      secondaryParagraph:
        "Unlike regular roller blinds that flap and tear in balcony drafts, zip screens utilize an interlocking side-channel guide that locks the fabric edges securely from top to bottom. It creates a taut, wind-stable shield that blocks rain, heat, and insects while maintaining continuous ventilation and outward panoramic views.",
      bullets: [
        {
          label: "Interlocking High-Wind Zip Channels",
          text: "Fabric edges are welded with continuous zip teeth that lock firmly into side tracks, tested against 80 km/h balcony winds.",
        },
        {
          label: "Blocks 90% Solar Heat & UV Glare",
          text: "Micro-perforated technical screen filters harsh sunlight, drops outdoor balcony temperatures significantly, and stops furniture fading.",
        },
        {
          label: "Driving Monsoon Rain & Dust Protection",
          text: "Protects balcony seating and laundry from torrential rains and heavy dust storms without suffocating the space like glass enclosures.",
        },
      ],
      media: {
        type: "video",
        videoId: "aAScB3LcqBg",
        title: "Automatic Weather Screen and Zip Blind Demonstration - Solution Sahab",
        caption: "Live demonstration: Motorized operation, wind-stable zip channels, and weather resistance by Solution Sahab.",
      },
    },
    benefits: {
      title: "Why Choose Automatic Weather Screens?",
      subtitle:
        "Traditional bamboo chiks rot and manual roller blinds tear in balcony winds. Motorized zip screens provide heavy-duty, weather-sealed outdoor comfort.",
      image: ASSETS.PRODUCTS.WEATHER_SCREENS,
      imageAlt: "Automatic weather screen installed on outdoor balcony",
      benefits: [
        {
          title: "80 km/h High-Wind Class 3 Certification",
          description:
            "Continuous zip locking guides eliminate violent fabric flapping, tearing, or noisy vibration even during intense high-rise thunderstorms.",
        },
        {
          title: "Smart Motorized & App Remote Control",
          description:
            "Control single or multiple blinds effortlessly using RF remotes, wall switches, or smart home voice automation via Alexa and Google Home.",
        },
        {
          title: "Superior Heat Rejection & Daylight Clarity",
          description:
            "Rejects up to 90% of solar radiation while preserving clear outward visibility and fresh outdoor air circulation.",
        },
        {
          title: "Total Protection from Monsoon Splatters & Dust",
          description:
            "Keep outdoor balcony furniture, potted plants, and flooring dry and clean all year long with hydrophobic technical screen fabric.",
        },
      ],
    },
    // specs: {
    //   title: "Technical Specification",
    //   subtitle:
    //     "Precision built using heavy-wall architectural aluminum cassettes, heavy-duty tubular drive motors, and wind-stable zip retention side tracks.",
    //   callout: {
    //     title: "Zip-Channel Lock vs Free-Hanging Roller Blinds",
    //     text: "Ordinary outdoor roller blinds hang freely or use wire cables that oscillate violently in gusts, causing fabric fraying. Solution Sahab zip screens feature an interlocking side zip guide that keeps the screen drum-taut, wind-stable, and 100% bug-proof.",
    //   },
    //   specs: [
    //     { label: "Motor Drive", val: "High-Torque Tubular Electronic Motor (Somfy / Dooya) with Thermal Protection" },
    //     { label: "Control Interfaces", val: "Multi-Channel Handheld RF Remote, Wall Switch, and Smart Home App Integration" },
    //     { label: "Side Track Guide", val: "Heavy-Wall Aluminum Extrusion with High-Wind Zip-Lock Channel" },
    //     { label: "Wind Resistance Rating", val: "Wind Class 3 (Tested against up to 80 km/h gust forces without blowout)" },
    //     { label: "Screen Metallurgy", val: "UV-Stabilized High-Tensile PVC-Coated Polyester Technical Solar Screen" },
    //     { label: "Solar Heat & UV Block", val: "Rejects up to 90% solar heat and 95% UV radiation (1%–5% Openness Factor)" },
    //     { label: "Rain & Weatherproofing", val: "Hydrophobic water-repellent surface shields against driving monsoon splatters" },
    //     { label: "Headbox Cassette", val: "Fully enclosed 100mm / 120mm architectural aluminum protective housing" },
    //     { label: "Surface Finish", val: "AkzoNobel Pure Polyester Powder Coat (Anthracite, Charcoal, Bronze, White)" },
    //     { label: "Written Warranty", val: "5-Year Direct Manufacturer Guarantee" },
    //   ],
    // },
    // trustPillars: {
    //   title: "Why Choose Solution Sahab for Weather Screens?",
    //   subtitle:
    //     "European tubular motors, heavy-gauge aluminum zip tracks, and dedicated technical support across Delhi NCR.",
    //   pillars: COMMON_TRUST_PILLARS,
    //   showCertificates: true,
    // },
    applications: {
      title: "Where Can You Install Automatic Weather Screens?",
      subtitle:
        "Engineered to mount under concrete lintels, ceiling overhangs, steel structures, or between structural pergola posts.",
      areas: [
        {
          title: "High-Rise Apartment Balconies",
          desc: "Tames high-altitude wind drafts, shields against monsoon splatters, and stops heavy road dust from coating your balcony furniture.",
          imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
          alt: "Motorized zip weather screen installed on high-rise apartment balcony",
        },
        {
          title: "Rooftop Terraces & Penthouses",
          desc: "Transforms open terrace sit-outs into comfortable, shaded entertainment lounges protected from scorching afternoon heat.",
          imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
          alt: "Automatic outdoor weather blind enclosing residential rooftop terrace",
        },
        {
          title: "Garden Pergolas & Gazebos",
          desc: "Custom-mounted into wooden, steel, or aluminum pergolas to create flexible outdoor garden living rooms that seal against wind and bugs.",
          imageUrl: ASSETS.PRODUCTS.WEATHER_SCREENS,
          alt: "Motorized weather screen fitted onto luxury villa pergola",
        },
        {
          title: "Cafés, Lounges & Restaurant Patios",
          desc: "Enables hospitality venues to utilize outdoor dining seating 365 days a year without losing patrons during sudden rainfall or hot weather.",
          imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
          alt: "Commercial outdoor weather blinds on restaurant dining patio",
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "How much wind can an automatic weather screen withstand without tearing?",
        answer:
          "Our zip screens are tested and certified to Wind Class 3, withstanding sustained gusts up to 80 km/h. The continuous welded zip teeth lock firmly into the aluminum side channels, keeping the fabric drum-taut without tearing.",
      },
      {
        id: 2,
        question: "Does the weather screen block outward views or feel suffocating?",
        answer:
          "No. The screen features a micro-perforated technical weave that allows natural airflow while blocking 90% of solar heat and UV radiation. Looking from inside, you enjoy clear outward visibility and daytime privacy.",
      },
      {
        id: 3,
        question: "Can the motorized screens be controlled via mobile app or home automation?",
        answer:
          "Yes. Alongside handheld multi-channel RF remotes and wall switches, we provide Wi-Fi bridge modules compatible with Alexa, Google Home, and smart home apps. You can schedule automatic opening or close all screens with a voice command.",
      },
      {
        id: 4,
        question: "What happens if there is a power outage during a thunderstorm?",
        answer:
          "We offer manual override motor configurations equipped with a compact, detachable hand crank so you can always safely operate your screens even when electricity is disrupted.",
      },
      {
        id: 5,
        question: "How does the site measurement and installation process work?",
        answer:
          "A Solution Sahab technical specialist visits your site with physical fabric swatches and cassette profiles, records laser measurements, and provides a detailed quote. Installation is completed cleanly in a short time.",
      },
    ],
    bookingTitle: "Schedule Laser Site Measurement",
    bookingDescription:
      "Book an engineer visit with motor specifications and fabric swatches for your outdoor patio or balcony. Prompt installation across Delhi NCR.",
  },

  "skylight": {
    slug: "skylight",
    leadSource: "Architectural Glass Skylight Product Page",
    metadata: {
      title: "Glass Skylight Installation in Delhi NCR – Solution Sahab",
      description:
        "Laminated glass roof skylights and stairwell domes in Delhi, Gurgaon and Noida. Leak-proof EPDM seals, Low-E heat control, 5-year warranty.",
      keywords: [
        "glass skylight installation delhi",
        "roof skylight gurgaon",
        "staircase skylight noida",
        "laminated safety glass roof",
        "leak proof skylight delhi ncr",
        "Solution Sahab skylights",
      ],
      canonical: "https://solutionsahab.com/skylight",
      ogImage: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
    },
    structuredData: {
      productName: "Architectural Glass Skylights & Terrace Roof Glazing",
      description:
        "Custom laminated safety glass roof skylights, stairwell glass domes, and terrace roof glazing systems across Delhi NCR.",
      image: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
      material: "13.52mm Laminated Toughened Safety Glass & Jindal T6 Aluminum",
    },
    hero: {
      productName: "Architectural Glass Skylights",
      brandTag: "Solution Sahab · Delhi NCR",
      tagline:
        "Custom engineered laminated safety glass roof skylights and stairwell glazing. Flood internal duplex cores, staircases, and living areas with natural daylight with 100% monsoon leak-proof reliability and Low-E solar heat control.",
      badges: [
        "13.52mm Laminated Glass",
        "Low-E Heat Control",
        "100% Leak-Proof EPDM",
        "5-Year Guarantee",
      ],
      heroImage: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
      heroImageAlt: "Architectural Glass Skylight Installation by Solution Sahab",
      breadcrumbName: "Glass Skylights",
      bookingTargetId: "#booking-form",
    },
    overview: {
      title: "What Is an Architectural Glass Skylight?",
      leadParagraph:
        "An Architectural Glass Skylight is an engineered roof glazing system designed to flood dark residential interiors, stairwells, and central courtyards with rich, natural daylight. It turns gloomy indoor corridors into bright, uplifting living spaces without sacrificing structural thermal insulation.",
      secondaryParagraph:
        "Unlike cheap DIY acrylic domes that turn yellow and crack under Delhi’s blistering summer sun, Solution Sahab skylights utilize Low-E laminated toughened safety glass anchored inside heavy-gauge Jindal T6 aluminum or galvanized steel subframes with multi-lip EPDM drainage gaskets for 100% leak-proof reliability.",
      bullets: [
        {
          label: "Abundant Natural Daylight & Energy Savings",
          text: "Illuminates deep internal staircases, central atriums, and living areas with pure sunlight, drastically cutting electricity bills.",
        },
        {
          label: "100% Monsoon Waterproof Flashing & Drainage",
          text: "Engineered slope channels and Dow Corning structural weather-seals prevent water accumulation, ceiling dampness, and leaks.",
        },
        {
          label: "Shatter-Resistant PVB Laminated Safety Glass",
          text: "Dual toughened glass panes bonded with a 1.52mm PVB safety interlayer withstand severe rooftop hailstorms and debris impact.",
        },
      ],
      media: {
        type: "image",
        src: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
        alt: "Glass skylight terrace opening installation by Solution Sahab",
        caption: "Precision installation: Engineered slope glazing with structural silicone sealing and aluminum capping.",
      },
    },
    benefits: {
      title: "Why Choose Solution Sahab Skylights?",
      subtitle:
        "Corrugated sheets leak, plastic domes yellow, and uninsulated glass overheats interiors. Our architectural skylights combine safety glass with engineered monsoon drainage and thermal reflection.",
      image: ASSETS.GALLERY.GURGAON_HIGHRISE,
      imageAlt: "Luxury home with installed architectural glass skylight",
      benefits: [
        {
          title: "Low-E Solar Heat & UV Radiation Rejection",
          description:
            "Spectrally selective microscopic coating reflects up to 75% of solar infrared heat back outdoors, keeping rooms naturally cool and preventing furniture fading.",
        },
        {
          title: "Calibrated 100% Leak-Proof Drainage Pitch",
          description:
            "Calculated 5° to 15° water-shedding gradient paired with multi-lip EPDM gaskets and Dow Corning structural silicone stops roof leaks during torrential monsoons.",
        },
        {
          title: "Dual Toughened Shatter-Proof Security",
          description:
            "13.52mm laminated glass (6mm toughened + 1.52mm PVB + 6mm toughened) safely holds together even upon high-impact shock, eliminating falling glass hazards.",
        },
        {
          title: "Self-Cleaning Rain Wash Engineering",
          description:
            "Smooth architectural glass slope channels rainwater naturally to sweep away loose Delhi atmospheric dust without manual rooftop climbing.",
        },
      ],
    },
    // specs: {
    //   title: "Technical Specification",
    //   subtitle:
    //     "Precision fabricated using heavy structural Jindal frames, laminated architectural safety glass, and certified waterproof EPDM drainage systems.",
    //   callout: {
    //     title: "Laminated Safety Glass vs Cheap Plastic Acrylic Domes",
    //     text: "Plastic polycarbonate and single-pane acrylic sheets turn brittle, scratch, and leak within months under intense Indian sun. Solution Sahab uses genuine 13.52mm laminated toughened safety glass with Low-E coatings that remain optically clear, shatter-proof, and cool for decades.",
    //   },
    //   specs: [
    //     { label: "Glass Metallurgy", val: "13.52 mm Laminated Toughened Safety Glass (6mm + 1.52 PVB + 6mm) or 24mm DGU" },
    //     { label: "Solar Heat Control", val: "Low-E Heat Reflective Coating (SHGC < 0.35, blocks > 99% UV rays)" },
    //     { label: "Structural Subframe", val: "Jindal T6 6063 Heavy Architectural Aluminum / Hot-Dip Galvanized Structural Steel" },
    //     { label: "Weather Sealing System", val: "Multi-Lip EPDM Gaskets with Dow Corning 795 Structural Silicone" },
    //     { label: "Slope Gradient", val: "Calibrated 5° to 15° Water Shedding Pitch for Self-Cleaning Drainage" },
    //     { label: "Waterproof Flashing", val: "Continuous 1.5 mm Aluminum Base Apron with Masonry Counter-Flashing" },
    //     { label: "Safety Standard", val: "Certified to IS 2553 (Part 1) and EN 12600 Class 1(B)1 Impact Resistance" },
    //     { label: "Ventilation Option", val: "Fixed Glazing or Motorized Linear Actuator Opening Sash (Optional)" },
    //     { label: "Surface Finish", val: "AkzoNobel Pure Polyester Powder Coat (Anthracite, Charcoal, Black, White)" },
    //     { label: "Written Warranty", val: "5-Year Direct Manufacturer Leak-Proof Guarantee" },
    //   ],
    // },
    // trustPillars: {
    //   title: "Why Choose Solution Sahab for Glass Skylights?",
    //   subtitle:
    //     "Structural engineering expertise, certified safety laminates, and complete leak-proof warranties across Delhi NCR.",
    //   pillars: COMMON_TRUST_PILLARS,
    //   showCertificates: true,
    // },
    applications: {
      title: "Where Can You Install Glass Skylights?",
      subtitle:
        "Custom engineered for flat concrete roofs, pitched RCC slabs, stairwell cutouts, and steel pergolas across Delhi NCR.",
      areas: [
        {
          title: "Staircase Voids & Duplex Cores",
          desc: "Channels vertical cascades of natural daylight straight down multi-story villas and duplexes, eliminating gloomy dark corridors.",
          imageUrl: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
          alt: "Architectural glass skylight installed above staircase void",
        },
        {
          title: "Rooftop Terraces & Penthouses",
          desc: "Encloses rooftop sunrooms and private pavilions with clean, walk-on structural glass that delivers panoramic sky views without leaks.",
          imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
          alt: "Rooftop glass skylight enclosure on luxury penthouse",
        },
        {
          title: "Double-Height Living Rooms & Atriums",
          desc: "Placed above central courtyards, dining halls, and living room atriums to brighten expansive indoor volumes with abundant daytime sunshine.",
          imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
          alt: "Central atrium glass roof skylight in residential villa",
        },
        {
          title: "Master En-Suites & Private Spa Areas",
          desc: "Brings serene, sky-lit natural illumination into luxury bathrooms and walk-in dressing areas with translucent or tinted Low-E safety glass.",
          imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
          alt: "Privacy glass skylight installed in master bathroom ceiling",
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "Will a glass skylight make the rooms below excessively hot in summer?",
        answer:
          "No. We exclusively specify spectrally selective Low-E (Low-Emissivity) laminated safety glass. The microscopic coating reflects up to 75% of solar infrared heat back outdoors while allowing pure natural light through, preventing greenhouse heat build-up.",
      },
      {
        id: 2,
        question: "How do you ensure the skylight will never leak during heavy monsoons?",
        answer:
          "Every unit is installed with a minimum 5° to 15° water-shedding slope gradient. We engineer continuous aluminum base flashings that counter-flash into the concrete curb, coupled with multi-lip EPDM gaskets and Dow Corning 795 structural silicone, backed by our 5-year written leak-proof warranty.",
      },
      {
        id: 3,
        question: "Is the glass strong enough to handle hailstorms or maintenance foot traffic?",
        answer:
          "Yes. Our standard specification is 13.52mm dual-toughened laminated safety glass (6mm toughened + 1.52mm PVB interlayer + 6mm toughened). It easily withstands heavy hailstorms, animal impacts, and certified maintenance point loads without shattering.",
      },
      {
        id: 4,
        question: "How is a rooftop skylight cleaned and maintained?",
        answer:
          "Thanks to the calibrated slope and smooth architectural glass surface, rainwater naturally washes away loose dust. For deeper periodic cleaning, a standard water spray and microfiber squeegee easily clean the surface without dislodging seals.",
      },
      {
        id: 5,
        question: "What is the site measurement and installation timeline?",
        answer:
          "Our structural engineer visits your roof or duplex slab cutout, inspects drainage gradients, and takes precise digital laser measurements. Custom CNC frame fabrication and glass tempering take 7 to 10 business days, with on-site installation completed in 1 to 2 days.",
      },
    ],
    bookingTitle: "Schedule Laser Site Measurement",
    bookingDescription:
      "Book an engineer visit with glass specification samples and curb profile details. Prompt consultation across Delhi NCR.",
  },

  "ceiling-cloth-hanger": {
    slug: "ceiling-cloth-hanger",
    leadSource: "Ceiling Cloth Hanger Product Page",
    metadata: {
      title: "Ceiling Cloth Hanger in Delhi NCR – Solution Sahab",
      description:
        "SS 304 ceiling cloth drying hangers and pulley racks in Delhi, Gurgaon and Noida. Individual pipe control, 30 kg load, 5-year warranty.",
      keywords: [
        "ceiling cloth hanger delhi",
        "balcony drying rack gurgaon",
        "pulley cloth hanger noida",
        "stainless steel drying rack",
        "ceiling hanger installation delhi ncr",
        "Solution Sahab cloth hanger",
      ],
      canonical: "https://solutionsahab.com/ceiling-cloth-hanger",
      ogImage: ASSETS.PRODUCTS.CEILING_CLOTH_HANGER,
    },
    structuredData: {
      productName: "Stainless Steel 304 Ceiling Cloth Drying Hangers & Pulley Racks",
      description:
        "Space-saving SS-304 ceiling cloth drying racks and pulley systems with independent pipe control for balcony and utility areas in Delhi NCR.",
      image: ASSETS.PRODUCTS.CEILING_CLOTH_HANGER,
      material: "100% Genuine Stainless Steel 304 Grade Seamless Pipes",
    },
    hero: {
      productName: "Ceiling Cloth Hanger",
      brandTag: "Solution Sahab · Delhi NCR",
      tagline:
        "Stainless steel 304 ceiling cloth drying hangers and pulley racks for apartment balconies and utility areas. Hoist wet laundry effortlessly to the ceiling, reclaim 100% of your floor space, and dry clothes faster in natural warm air breezes.",
      badges: [
        "SS-304 Stainless Steel",
        "30 kg Load Capacity",
        "Individual Pulley Control",
        "5-Year Guarantee",
      ],
      heroImage: ASSETS.PRODUCTS.CEILING_CLOTH_HANGER,
      heroImageAlt: "Ceiling Cloth Hanger Installation by Solution Sahab",
      breadcrumbName: "Ceiling Cloth Hanger",
      bookingTargetId: "#booking-form",
    },
    overview: {
      title: "What Is a Ceiling Cloth Drying Hanger?",
      leadParagraph:
        "A Ceiling Cloth Hanger is an innovative pulley-operated drying system mounted directly to the ceiling of your apartment balcony, utility area, or laundry room. It replaces unsightly folding metal racks and haphazard clotheslines that clutter your living spaces.",
      secondaryParagraph:
        "Each stainless steel rod is controlled by an independent nylon ball-bearing pulley. You easily lower individual pipes to comfortable chest height, load your wet garments, and hoist them up to the ceiling. Lifting wet clothes into the warm ceiling breeze accelerates natural drying without any electrical expense.",
      bullets: [
        {
          label: "100% Balcony Floor Space Reclamation",
          text: "Eliminates bulky portable metal stands that trip family members and blow over in the wind, keeping your balcony open and usable.",
        },
        {
          label: "Smooth Individual Pipe Pulley Glide",
          text: "Operate one rod at a time without straining. Designed for easy handling by senior citizens and homemakers alike.",
        },
        {
          label: "Faster Natural Air-Drying Without Odors",
          text: "Ceiling air circulation speeds up evaporation, preventing the damp, musty smells common in monsoon indoor drying.",
        },
      ],
      media: {
        type: "video",
        videoId: "02WVfoVA-K4",
        title: "Ceiling Cloth Hanger Demonstration - Solution Sahab",
        caption: "Live demonstration: Effortless individual pulley hoist and heavy load capacity by Solution Sahab.",
      },
    },
    benefits: {
      title: "Why Choose Solution Sahab Ceiling Hangers?",
      subtitle:
        "Floor drying racks crowd your balcony and rust in the rain. Our stainless steel ceiling drying systems keep your balcony spotless and open.",
      image: ASSETS.PRODUCTS.CEILING_CLOTH_HANGER,
      imageAlt: "Ceiling cloth drying rack installed on residential balcony",
      benefits: [
        {
          title: "Heavy-Duty 30 kg Wet Laundry Capacity",
          description:
            "Engineered with thick-wall SS-304 pipes that easily hold heavy wet jeans, double bedsheets, and winter quilts simultaneously without sagging.",
        },
        {
          title: "100% Rust-Proof SS-304 Guarantee",
          description:
            "Made exclusively with genuine Grade 304 stainless steel pipes that will never rust or leave orange stains on your pristine white clothes.",
        },
        {
          title: "Effortless Pulley Hoist Mechanics",
          description:
            "Heavy-duty nylon wheels and low-friction braided cords allow seniors and homemakers to raise and lower loaded pipes with minimal hand pressure.",
        },
        {
          title: "Custom Cut to Your Exact Balcony Length",
          description:
            "Available in 4ft, 5ft, 6ft, 7ft, and 8ft pipe lengths with 4, 5, or 6 rod configurations custom sized to fit your ceiling space.",
        },
      ],
    },
    // specs: {
    //   title: "Technical Specification",
    //   subtitle:
    //     "Precision fabricated using high-grade Stainless Steel 304 seamless pipes, dual nylon pulleys, and high-tensile cords built for daily laundry use.",
    //   callout: {
    //     title: "SS-304 Stainless Steel vs Thin Chrome-Plated Iron",
    //     text: "Cheap market drying hangers use thin 0.4mm electroplated iron pipes that rust within months, leaving permanent rust marks on expensive clothing. Solution Sahab uses heavy-gauge Stainless Steel 304 pipes that will never rust, sag, or stain clothes.",
    //   },
    //   specs: [
    //     { label: "Pipe Metallurgy", val: "100% Genuine Stainless Steel 304 Grade (Non-Corrosive Seamless Tube)" },
    //     { label: "Pipe Wall Thickness", val: "0.8 mm – 1.0 mm Heavy-Gauge Profile (19 mm Outer Diameter)" },
    //     { label: "Rod Configurations", val: "4-Pipe, 5-Pipe, or 6-Pipe Systems with Independent Control" },
    //     { label: "Available Lengths", val: "4 ft, 5 ft, 6 ft, 7 ft, and 8 ft (Custom-cut to fit your balcony dimension)" },
    //     { label: "Pulley System", val: "High-Durability Nylon Wheels with Stainless Steel Axis Bushings" },
    //     { label: "Hoist Cord Material", val: "High-Tensile UV-Stabilized Braided Cord with Inner Nylon Core" },
    //     { label: "Wall Tie-Off Cleat", val: "Heavy-Duty Powder-Coated Dual Locking Tie-Down Plate" },
    //     { label: "Load Capacity", val: "5 kg per individual pipe (Total 25 kg to 30 kg wet laundry capacity)" },
    //     { label: "Mounting Anchors", val: "Rust-Resistant Stainless Steel Concrete Ceiling Expansion Bolts" },
    //     { label: "Written Warranty", val: "5-Year Direct Manufacturer Guarantee" },
    //   ],
    // },
    // trustPillars: {
    //   title: "Why Choose Solution Sahab for Ceiling Hangers?",
    //   subtitle:
    //     "High-grade SS-304 components, smooth dual pulleys, and prompt installation across Delhi NCR.",
    //   pillars: COMMON_TRUST_PILLARS,
    //   showCertificates: true,
    // },
    applications: {
      title: "Where Can You Install Ceiling Cloth Hangers?",
      subtitle:
        "Easily anchored onto concrete ceilings, metal purlins, or wooden beams in balconies and utility rooms across Delhi NCR.",
      areas: [
        {
          title: "Apartment Balconies",
          desc: "Mounts securely to high-rise concrete balcony ceilings. Keeps wet clothes elevated out of direct eye-line while freeing up floor space.",
          imageUrl: ASSETS.PRODUCTS.CEILING_CLOTH_HANGER,
          alt: "Ceiling cloth hanger installed on apartment balcony",
        },
        {
          title: "Utility & Kitchen Dry Balconies",
          desc: "Installed directly above washing machines and wash sinks to transfer freshly spun garments directly onto drying rods.",
          imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
          alt: "Pulley drying rack in apartment utility area",
        },
        {
          title: "Covered Terraces & Verandahs",
          desc: "Fitted under RCC roof overhangs or covered porch structures to dry large bedsheets and curtains in the fresh outdoor breeze.",
          imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
          alt: "Ceiling cloth drying rack on covered terrace",
        },
        {
          title: "Indoor Laundry Rooms & Bathrooms",
          desc: "Dry sensitive clothes indoors beneath the ceiling fan during damp monsoon weeks without cluttering bedroom doors or chairs.",
          imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
          alt: "Ceiling cloth hanger installed in laundry room",
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "How much weight can the ceiling cloth hanger support safely?",
        answer:
          "Each individual stainless steel rod is load-tested to hold up to 5 kg of wet laundry. A standard 6-pipe system holds 25 kg to 30 kg in total, easily accommodating heavy winter quilts, thick denim jeans, and wet bath towels simultaneously.",
      },
      {
        id: 2,
        question: "Will the pipes rust or leave orange stains on wet white clothes?",
        answer:
          "Never. We exclusively use genuine Stainless Steel 304 seamless pipes. Unlike cheaper chrome-plated iron rods that develop corrosion spots after exposure to moisture, SS-304 is 100% rust-proof and guaranteed never to stain your clothes.",
      },
      {
        id: 3,
        question: "Is it easy for senior citizens and homemakers to operate?",
        answer:
          "Yes. The individual dual-pulley mechanism allows you to lower one rod at a time to comfortable chest or waist height with minimal physical effort, then hoist the rod back up to the ceiling with a smooth pull.",
      },
      {
        id: 4,
        question: "Can the system be installed if my balcony ceiling has a false ceiling?",
        answer:
          "Yes. If your balcony has gypsum, POP, or wooden false ceiling panels, our technicians utilize specialized structural threaded extension rods that anchor directly into the RCC parent concrete slab, ensuring 100% structural safety.",
      },
      {
        id: 5,
        question: "What is the site measurement and installation process?",
        answer:
          "A Solution Sahab technician visits your home, measures your ceiling length to recommend the ideal rod length (4ft to 8ft) and rod count, and provides an instant quote. Installation is completed cleanly in a short time.",
      },
    ],
    bookingTitle: "Schedule Laser Site Measurement",
    bookingDescription:
      "Book a technician visit with SS-304 pipe samples and pulley demonstrations for your balcony or utility ceiling. Prompt installation across Delhi NCR.",
  },
};

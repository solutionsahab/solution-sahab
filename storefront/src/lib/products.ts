// File: src/lib/products.ts
import { ASSETS } from "@/lib/constants";

export type ProductBlock =
  | {
    kind: "prose";
    id: string;
    title?: string;
    paragraphs: string[];
    videoId?: string;
    videoTitle?: string;
  }
  | {
    kind: "features";
    id: string;
    title?: string;
    summary?: string;
    features: string[];
    note?: string;
    applications?: string[];
    videoId?: string;
    videoTitle?: string;
  }
  | {
    kind: "columns";
    id: string;
    title?: string;
    columns: { label: string; items: string[] }[];
  }
  | {
    kind: "videos";
    id: string;
    title?: string;
    items: { id: string; title: string }[];
  };

export interface ProductDetail {
  slug: string;
  name: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    intro: string;
    imageUrl?: string;
    imageAlt?: string;
  };
  blocks: ProductBlock[];
}

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  "pleated-mesh": {
    slug: "pleated-mesh",
    name: "Pleated Mesh",
    meta: {
      title:
        "Pleated Mosquito Mesh for Windows & Doors in Delhi | Solution Sahab",
      description:
        "Pleated mosquito mesh Prime Series with PVC coated mesh and Jindal T6 6063 aluminium frames. Retractable roller mesh and barrier-free mesh for windows, balconies, and doors across Delhi NCR.",
      keywords: [
        "Pleated Mosquito Mesh Delhi",
        "Pleated Mesh Price Delhi NCR",
        "Retractable Mesh Screen Gurgaon",
        "Roller Mesh Window Screen Noida",
        "Barrier Free Mesh Delhi",
        "Pleated Mesh for Balconies",
        "Jindal T6 Mesh Frame",
      ],
    },
    hero: {
      intro:
        "Pleated mesh is an innovative insect screen system designed to provide efficient protection against insects while allowing fresh air to circulate. Unlike traditional flat screens, pleated mesh has a zigzag structure that folds and unfolds smoothly. This design enhances the aesthetic appeal and keeps the mesh taut and functional over time. Pleated mesh systems are used in residential and commercial spaces for their durability, ease of operation, and space-saving design, and can be installed on windows, doors, and large openings such as balconies and patios.",
      imageUrl: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
      imageAlt:
        "Retractable pleated mosquito mesh installed on a Delhi NCR balcony sliding door",
    },
    blocks: [
      {
        kind: "features",
        id: "prime-series",
        title: "Pleated Mesh Prime Series",
        summary:
          "A premium insect screen solution designed to provide both functionality and style.",
        features: [
          "PVC Coated Mesh for durability",
          "Jindal Frame (T6 6063 Grade) for strength and corrosion resistance",
          "A-Grade Components for premium performance",
        ],
        applications: [
          "Ideal for windows, balconies, and doors",
          "Suitable for residential, commercial, and hospitality spaces",
        ],
        videoId: "YmD4BqrmkYE",
        videoTitle: "Pleated mesh for your balcony",
      },
      {
        kind: "features",
        id: "roller-mesh",
        title: "Roller Mesh",
        summary:
          "A sleek, retractable insect screen solution built for modern living spaces, combining convenience, durability, and style.",
        features: [
          "Smooth retractable mechanism that glides into a discreet housing when not in use",
          "Durable and weather-resistant, built to withstand harsh conditions",
          "Space-saving design ideal for areas with limited space",
        ],
        applications: [
          "Ideal for windows and doors in compact living spaces",
          "Suitable for both residential and commercial properties",
        ],
        videoId: "iEjxCu2zVg4",
        videoTitle: "ROLLER MESH | SOLUTION SAHAB",
      },
      {
        kind: "features",
        id: "barrier--mesh",
        title: "Barrier-free Mesh",
        summary:
          "Specially designed for seamless access without compromising insect protection, built for homes with children, elderly residents, or individuals with mobility challenges.",
        features: [
          "Seamless entry and exit that eliminates tripping hazards",
          "Durable mesh material crafted to withstand daily use",
          "Customizable sizes available in various dimensions",
        ],
        applications: [
          "Suitable for patios, balconies, and high-traffic areas",
          "Ideal for residential, office, and healthcare facilities",
        ],
        videoId: "RvezGOC5HvQ",
        videoTitle: "Barrier-free Mesh",
      },
      {
        kind: "videos",
        id: "all-in-one",
        title: "All-In-One Balcony Mesh Solution",
        items: [{ id: "fyJyHsSrpP4", title: "YOUR ALL IN ONE SOLUTION FOR YOUR BALCONY" }],
      },
    ],
  },

  "honeycomb-partition": {
    slug: "honeycomb-partition",
    name: "Honeycomb Partition",
    meta: {
      title:
        "Honeycomb Partitions & Roller Blinds – Delhi Supplier | Solution Sahab",
      description:
        "Honeycomb partition systems for Delhi homes and offices. Single door, double door, and Duet systems with energy-efficient insulation, privacy, and light control.",
      keywords: [
        "Honeycomb Partition Delhi",
        "Honeycomb Blinds Supplier Noida",
        "Honeycomb Door System Gurgaon",
        "Duet System Honeycomb Partition",
        "Honeycomb Partition for Office",
        "Roller Blinds Delhi NCR",
      ],
    },
    hero: {
      intro:
        "The Honeycomb System is a revolutionary combination of aesthetics and functionality, offering privacy, energy efficiency, and stylish design in one sleek solution. With its unique honeycomb structure, this system not only adds a modern look to any space but also provides enhanced insulation, reducing energy costs and improving indoor comfort.",
      imageUrl: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
      imageAlt:
        "Honeycomb partition system installed in a Delhi residence for privacy and light control",
    },
    blocks: [
      {
        kind: "videos",
        id: "honeycomb-hero-video",
        items: [{ id: "gcrd8NwlzBI", title: "Honey comb for your Doors and balcony" }],
      },
      {
        kind: "features",
        id: "honeycomb-system-features",
        title: "Honeycomb System",
        summary:
          "The Honeycomb System combines elegance with practical performance for everyday use.",
        features: [
          "Elegant Design that complements any decor",
          "Energy Efficiency by providing insulation and reducing energy bills",
          "Easy Operation for hassle-free use",
          "Durable Construction with premium materials to withstand daily use",
        ],
        applications: [
          "Perfect for both residential and commercial interiors, including offices, hotels, and homes",
          "Suitable for use in partitions, windows, and doors, providing privacy and light control",
        ],
      },
      {
        kind: "features",
        id: "honeycomb-strength",
        title: "Honeycomb Mesh Advantages",
        features: [
          "Superior Strength & Durability – The honeycomb structure distributes force evenly, making it impact-resistant and long-lasting",
          "Unobstructed View & Airflow – Enjoy a clear view with proper ventilation while staying protected",
          "Rust & Corrosion Resistant – Made from high-quality weatherproof materials that withstand extreme conditions",
          "Minimal Maintenance – Easy to clean and maintain, ensuring long-term usability",
          "Customizable & Aesthetic Designs – Available in different colors, sizes, and finishes to complement any architectural style",
        ],
        applications: [
          "Main Doors – Enhance security while maintaining an elegant entrance",
          "Balconies & Railings – Keep your outdoor spaces safe without blocking the view",
          "Windows – Protect your home while allowing fresh air to circulate",
        ],
      },
      {
        kind: "prose",
        id: "why-honeycomb-mesh",
        title: "Why Choose Honeycomb Mesh?",
        paragraphs: [
          "Honeycomb Mesh is a smart and stylish window solution designed to enhance comfort, privacy, and energy efficiency in any space. Its unique honeycomb structure traps air to provide natural insulation, keeping rooms cooler in summer and warmer in winter, while also reducing outside noise for a peaceful environment. With sleek minimal design, smooth operation, and a range of light-control options from blackout to soft-filtering, Honeycomb Mesh offers the perfect balance of elegance and functionality. It maintains complete privacy without blocking natural light and is available in multiple shades and textures to complement modern interiors. Durable, long-lasting, and easy to maintain, it’s an ideal upgrade for homes, offices, and premium living spaces.",
        ],
      },
      {
        kind: "videos",
        id: "honeycomb-installation-videos",
        items: [
          { id: "Dl9Nj7k_IFs", title: "Honeycomb Partition for Office & Workspaces | Modern Design by Solution Sahab" },
          { id: "vboIB6ZUR1M", title: "Duet system | SOLUTION SAHAB" },
        ],
      },
      {
        kind: "features",
        id: "single-door-system",
        title: "Single Door System",
        features: [
          "Compact and Practical",
          "Easy to Use",
          "Customizable Finishes to match your decor",
        ],
      },
      {
        kind: "features",
        id: "double-door-system",
        title: "Double Door System",
        features: [
          "Spacious Access for large openings",
          "Robust Construction to ensure durability",
          "Stylish Appearance to enhance your space",
        ],
      },
      {
        kind: "features",
        id: "duet-system",
        title: "Duet System",
        features: [
          "A unique combination of Honeycomb Partition and Pleated Mesh",
          "Dual Functionality offering privacy and insect protection",
          "Space-Saving Design suitable for multifunctional spaces",
        ],
      },
    ],
  },

  "aluminum-mesh-partition": {
    slug: "aluminum-mesh-partition",
    name: "Aluminum Mesh & Partition",
    meta: {
      title: "Aluminum Mesh & Partition Solutions in Delhi | Solution Sahab",
      description:
        "Aluminium security pleated mesh and transparent acrylic doors in Delhi. Premium frames, heavy-duty mesh, UV and corrosion resistance for residential, commercial, and institutional use.",
      keywords: [
        "Aluminium Security Mesh Delhi",
        "Aluminum Mesh Partition Noida",
        "Aluminium Pleated Mesh Gurgaon",
        "Aluminium Acrylic Door Delhi",
        "Transparent Door Installation Delhi NCR",
        "Security Mesh for Windows Delhi",
      ],
    },
    hero: {
      intro:
        "Aluminium Security Pleated Mesh by Solution Sahab is an advanced protective screen designed to provide superior security while allowing maximum airflow and visibility. Made from high-quality aluminium, this pleated mesh system is durable, corrosion-resistant, and easy to operate. It is the perfect solution for keeping your home secure from insects, dust, and intruders without compromising ventilation and aesthetics.",
      imageUrl: ASSETS.PRODUCTS.SKYLIGHT,
      imageAlt:
        "Aluminium security pleated mesh screen installed on a Delhi apartment window",
    },
    blocks: [
      {
        kind: "prose",
        id: "what-is-alu-mesh",
        title: "What is Aluminium Security Pleated Mesh?",
        paragraphs: [
          "The pleated design allows for smooth operation, making it easy to open and close as needed, while the sturdy mesh construction ensures that your space remains protected at all times. Whether you live in an area prone to insects or need an added layer of security for your home or business, this innovative mesh system is a reliable choice.",
        ],
      },
      {
        kind: "features",
        id: "superior-strength",
        title: "1. Superior Strength & Durability",
        features: [
          "Premium Aluminium Frame – Crafted from high-quality aluminum, ensuring long-lasting performance and resilience",
          "Heavy-Duty Mesh – Designed to withstand external forces, preventing unauthorized entry",
          "Weather & Corrosion Resistant – Specially coated to withstand extreme weather conditions",
        ],
      },
      {
        kind: "features",
        id: "pleated-design",
        title: "2. Innovative Pleated Design",
        features: [
          "Space-Saving Mechanism – The pleated mesh retracts neatly when not in use",
          "Smooth & Effortless Operation – Easy to open and close with a user-friendly sliding mechanism",
          "Improved Airflow & Ventilation – Ensures natural ventilation while keeping out insects and debris",
          "Aesthetic Appeal – The sleek design complements modern interiors and exteriors",
        ],
      },
      {
        kind: "features",
        id: "enhanced-protection",
        title: "3. Enhanced Protection & Convenience",
        features: [
          "UV Protection & Insect Control – Blocks harmful UV rays while keeping pests at bay",
          "Fire-Resistant Material – Adds an extra layer of safety to your home or office",
          "Low Maintenance & Easy to Clean – Requires minimal upkeep for long-lasting performance",
          "Noise Reduction – Reduces outside noise, ensuring a peaceful indoor environment",
        ],
      },
      {
        kind: "columns",
        id: "ideal-applications",
        title: "Ideal Applications",
        columns: [
          {
            label: "Residential Uses",
            items: [
              "Main Doors & Windows – Reinforce home security without obstructing natural light",
              "Balconies & Patios – Keep your open spaces secure while enjoying fresh air",
              "French & Sliding Doors – Maintain a stylish look with enhanced security features",
            ],
          },
          {
            label: "Commercial & Industrial Spaces",
            items: [
              "Office Entrances & Partitions – Provide an elegant yet secure barrier",
              "Restaurants & Cafes – Maintain a stylish, pest-free environment for customers",
              "Warehouses & Factories – Prevent unauthorized access while allowing ventilation",
              "Retail Stores & Shopping Malls – Protect storefronts without compromising on visibility",
            ],
          },
          {
            label: "Hotels & Hospitality Industry",
            items: [
              "Resort Villas & Luxury Suites – Enhance guest experience with stylish and functional security mesh",
              "Lobbies & Open-Air Spaces – Keep public spaces secure while allowing a seamless connection to the outdoors",
              "Beachfront Properties & Holiday Homes – Enjoy the breeze without security concerns",
            ],
          },
          {
            label: "Healthcare & Educational Institutions",
            items: [
              "Hospitals & Clinics – Ensure hygiene and security in sensitive environments",
              "Schools & Universities – Provide a protective barrier while maintaining a comfortable atmosphere",
              "Laboratories & Research Centers – Maintain security while allowing air circulation",
            ],
          },
        ],
      },
      {
        kind: "videos",
        id: "alu-mesh-videos",
        items: [
          { id: "jz5j0o3WmNQ", title: "alu mesh" },
          { id: "oyV0YhMY0fA", title: "alum mesh 2" },
        ],
      },
      {
        kind: "prose",
        id: "aluminium-acrylic-doors",
        title: "Aluminium Acrylic / Transparent Doors",
        paragraphs: [
          "Modern, Secure & Stylish Door Solutions by Solution Sahab",
          "At Solution Sahab, we design and install Aluminium Acrylic / Transparent Doors that perfectly balance visibility, safety, durability, and modern aesthetics. These doors are ideal for homes, offices, showrooms, temples, commercial spaces, and modern interiors where light flow and openness are as important as strength and security.",
          "Our aluminium acrylic doors combine premium aluminium frames with high-quality transparent or frosted acrylic panels, offering a sleek, contemporary look without compromising on performance.",
        ],
      },
      {
        kind: "features",
        id: "what-is-acrylic-door",
        title: "What is an Aluminium Acrylic / Transparent Door?",
        summary:
          "An Aluminium Acrylic Door is a modern alternative to glass doors. Instead of fragile glass, it uses high-grade acrylic or polycarbonate sheets mounted within a rust-proof aluminium structure.",
        features: [
          "Lightweight yet strong",
          "Shatter-resistant compared to glass",
          "Better safety for homes with kids & pets",
          "Long-lasting and low maintenance",
        ],
      },
      {
        kind: "features",
        id: "acrylic-door-benefits",
        title: "Key Benefits of Aluminium Acrylic Doors",
        features: [
          "Strong & Durable – Aluminium frames are corrosion-resistant and ideal for Indian weather conditions, while acrylic panels are impact-resistant and safer than glass",
          "Maximum Light, Clear Visibility – Transparent or semi-transparent panels allow natural light flow, making spaces look open, bright, and premium",
          "Safe Alternative to Glass – Unlike glass doors, acrylic does not shatter easily, making it a safer choice for families, offices, and public spaces",
          "Modern & Minimal Look – Perfect for contemporary architecture, these doors enhance interiors without looking bulky",
          "Customizable Design – Choose from clear, frosted, or tinted acrylic; sliding or hinged doors; single or double shutters; matte, glossy, or textured aluminium finish",
        ],
        applications: [
          "Homes & Apartments",
          "Offices & Corporate Spaces",
          "Showrooms & Retail Stores",
          "Temples & Religious Spaces",
          "Hotels & Commercial Buildings",
          "Partitions, Cabins & Entry Doors",
        ],
        videoId: "du8M-ZylJSo",
        videoTitle: "acrylic partition",
      },
      {
        kind: "features",
        id: "why-solution-sahab",
        title: "Why Choose Solution Sahab?",
        summary:
          "With our commitment to quality and customer satisfaction, we ensure that our Aluminium Security Pleated Mesh offers the best combination of security, durability, and modern aesthetics. Our team of experts provides professional installation, ensuring a seamless fit for your space.",
        features: [
          "High-Quality Materials – Designed to last with premium-grade components",
          "Expert Installation – Our team ensures precise fitting and optimal performance",
          "Competitive Pricing – Affordable solutions without compromising on quality",
          "Exceptional Customer Support – Dedicated service to guide you from selection to installation",
          "Eco-Friendly Solution – Reduces reliance on artificial cooling systems by enhancing natural ventilation",
        ],
      },
      {
        kind: "features",
        id: "installation-maintenance",
        title: "Installation & Maintenance",
        features: [
          "Dust & Dirt Repellent – Special coatings reduce dust accumulation",
          "Simple Cleaning Process – Just wipe with a damp cloth or use a vacuum for thorough maintenance",
          "Rust-Resistant Frame – No need to worry about moisture-related wear and tear",
          "Custom Fit for Every Opening – Whether for doors, windows, or large spaces, we tailor each unit to perfection",
          "Minimal Structural Modifications – Our installation process is quick and requires little to no major structural changes",
          "Durability & Stability – Properly fitted mesh ensures longevity and seamless operation",
        ],
      },
    ],
  },

  "automatic-weather-screen": {
    slug: "automatic-weather-screen",
    name: "Automatic Weather Screen",
    meta: {
      title: "Motorised Weather Screens & Zip Blinds – Delhi | Solution Sahab",
      description:
        "Motorised weather screens and zip blinds for balconies, terraces, and pergolas in Delhi. Wind-stable, all-weather protection with remote and smart-home control.",
      keywords: [
        "Automatic Weather Screen Delhi",
        "Zip Screen Gurgaon",
        "Motorised Outdoor Blinds Delhi NCR",
        "Weather Screen for Balcony Noida",
        "Outdoor Pergola Screen Delhi",
        "Retractable Weather Blind Gurgaon",
      ],
    },
    hero: {
      intro:
        "Outdoor spaces are no longer just add-ons to a building; they are extensions of how we live, work, and relax. But changing weather conditions often make balconies, terraces, pergolas, and open areas uncomfortable or unusable. An Automatic Weather Screen is a motorized, high-performance screening system designed to protect outdoor and semi-outdoor spaces from sunlight, heat, wind, rain, dust, and insects, while still allowing airflow and maintaining openness. It transforms exposed areas into comfortable, usable environments throughout the year.",
      imageUrl: ASSETS.PRODUCTS.WEATHER_SCREENS,
      imageAlt:
        "Motorised zip weather screen enclosing an outdoor terrace in Delhi",
    },
    blocks: [
      {
        kind: "prose",
        id: "what-is-weather-screen",
        title: "What Is an Automatic Weather Screen?",
        paragraphs: [
          "An Automatic Weather Screen is a technologically advanced shading and enclosure system that uses a motor-driven mechanism to smoothly raise or lower a specially engineered screen. Unlike traditional curtains, blinds, or temporary coverings, this system is designed specifically for outdoor durability and weather resistance.",
          "The screen fabric is guided through side channels to ensure stability, clean movement, and resistance against strong winds. With the press of a button, your space adapts instantly to weather conditions: open when you want fresh air and views, closed when you need protection.",
        ],
      },
      {
        kind: "features",
        id: "all-weather-protection",
        title: "1. All-Weather Protection",
        summary:
          "Automatic Weather Screens are designed to handle harsh environmental conditions. They provide effective protection against:",
        features: [
          "Direct sunlight and UV rays",
          "Strong winds and air turbulence",
          "Light to moderate rain",
          "Dust and airborne particles",
          "Mosquitoes and insects",
        ],
        note: "This makes outdoor spaces comfortable even during challenging weather.",
      },
      {
        kind: "features",
        id: "motorized-convenience",
        title: "2. Motorized Convenience",
        summary:
          "Manual systems require effort and time. An Automatic Weather Screen operates smoothly through:",
        features: [
          "Remote control",
          "Wall-mounted switch",
          "Smart home or automation systems (optional)",
        ],
        note: "This allows instant control with minimal effort, making the system practical for daily use.",
      },
      {
        kind: "features",
        id: "airflow-openness",
        title: "3. Maintains Airflow and Openness",
        summary:
          "Unlike glass enclosures or solid barriers, the screen material allows continuous air circulation. This helps:",
        features: [
          "Reduce heat buildup",
          "Prevent suffocation or closed-in feeling",
          "Maintain a natural outdoor experience",
        ],
        note: "You stay protected without sacrificing comfort.",
      },
      {
        kind: "features",
        id: "clean-minimal-design",
        title: "4. Clean, Minimal Design",
        summary:
          "Automatic Weather Screens are designed with modern architecture in mind. They feature:",
        features: [
          "Hidden or neatly enclosed roller systems",
          "Taut, wrinkle- screen appearance",
          "No loose ropes, hooks, or exposed fittings",
        ],
        note: "The result is a sleek, premium look that enhances the overall design of the building.",
      },
      {
        kind: "features",
        id: "wind-stability",
        title: "5. Wind Stability and Safety",
        summary:
          "The guided channel system ensures the screen remains stable even in windy conditions. This prevents:",
        features: [
          "Flapping or noise",
          "Fabric damage",
          "Safety risks from uncontrolled movement",
        ],
        note: "This makes the system suitable for high-rise balconies and open commercial spaces.",
      },
      {
        kind: "columns",
        id: "where-to-use",
        title: "Where Can an Automatic Weather Screen Be Used?",
        columns: [
          {
            label: "Residential Applications",
            items: [
              "Balconies and apartments",
              "Terraces and rooftops",
              "Pergolas and sit-out areas",
              "Verandahs and patios",
              "Private outdoor lounges",
            ],
          },
          {
            label: "Commercial Applications",
            items: [
              "Cafés and restaurants with outdoor seating",
              "Hotels and resorts",
              "Office balconies and break areas",
              "Showrooms and commercial buildings",
              "Clubhouses and recreational spaces",
            ],
          },
        ],
      },
      {
        kind: "features",
        id: "long-term-performance",
        title: "Designed for Long-Term Performance",
        summary:
          "An Automatic Weather Screen is not a temporary solution; it is a long-term architectural addition. The materials used are selected to ensure:",
        features: [
          "Resistance to UV exposure",
          "Minimal wear and tear",
          "Smooth operation over time",
          "Low maintenance requirements",
        ],
        note: "This makes it a cost-effective investment that continues to perform year after year.",
      },
      {
        kind: "features",
        id: "indian-climate",
        title: "Ideal for Indian Climate Conditions",
        summary:
          "Weather in India varies drastically, from extreme heat and dust to heavy monsoons and strong winds. Automatic Weather Screens are designed keeping these challenges in mind. They help:",
        features: [
          "Reduce heat during peak summers",
          "Protect against monsoon winds and rain",
          "Minimize dust in urban environments",
          "Improve usability of spaces year-round",
        ],
        note: "This makes them particularly suitable for Indian residential and commercial projects.",
      },
      {
        kind: "prose",
        id: "smart-investment",
        title: "A Smart Investment for Modern Living",
        paragraphs: [
          "Outdoor space is valuable. An Automatic Weather Screen helps you make the most of it, whether for relaxation, social gatherings, business use, or everyday comfort. It turns weather from a limitation into something you control.",
          "Instead of adapting your lifestyle to the weather, the space adapts to you.",
        ],
        videoId: "aAScB3LcqBg",
        videoTitle: "zip screen",
      },
    ],
  },

  skylight: {
    slug: "skylight",
    name: "Skylight",
    meta: {
      title: "Skylight Installation & Repairs in Delhi – Solutions Ahab | Solution Sahab",
      description:
        "Custom skylight installation and repairs in Delhi. Bring natural light with durable, weather‑resistant roof skylights. Contact us for a consultation.",
      keywords: [
        "Skylight Installation Delhi",
        "Roof Skylight Repair Delhi NCR",
        "Skylight for Home Gurgaon",
        "Natural Light Skylight Noida",
      ],
    },
    hero: {
      intro:
        "Custom skylight installation and repairs in Delhi. Bring natural light with durable, weather-resistant roof skylights. Contact us for a consultation.",
    },
    blocks: [],
  },

  "ceiling-cloth-hanger": {
    slug: "ceiling-cloth-hanger",
    name: "Ceiling Cloth Hanger",
    meta: {
      title:
        "Ceiling Cloth Hanger & Drying Rack in Delhi – Solutions Ahab | Solution Sahab",
      description:
        "Efficient ceiling cloth hanger systems for balconies in Delhi. Save space with durable racks and UV-protected ropes. Professional installation.",
      keywords: [
        "Ceiling Cloth Hanger Delhi",
        "Ceiling Mounted Drying Rack Noida",
        "Cloth Hanger Pulley System Gurgaon",
        "Balcony Drying Rack Delhi NCR",
      ],
    },
    hero: {
      intro:
        "Say goodbye to cluttered drying racks and limited floor space. Our Ceiling Cloth Hanger is a modern and space-saving solution designed to make drying clothes indoors easier than ever. Whether you are dealing with rainy days, small living spaces, or the inconvenience of traditional drying methods, this innovative hanger provides a hassle-free way to keep your clothes fresh and dry. It enhances air circulation, speeds up drying time, and ensures your garments remain in excellent condition without excessive wrinkling or damp odors.",
      imageUrl: ASSETS.PRODUCTS.CEILING_CLOTH_HANGER,
      imageAlt:
        "Ceiling-mounted cloth hanger with pulley mechanism installed on a Delhi balcony",
    },
    blocks: [
      {
        kind: "prose",
        id: "effortless-drying",
        title: "Effortless Drying, Maximum Convenience",
        paragraphs: [
          "Our ceiling hangers free your floor from drying racks and give small balconies their space back. By lifting garments toward the ceiling, the system improves air circulation and shortens drying time while keeping clothes free of damp odors.",
        ],
      },
      {
        kind: "features",
        id: "why-smart-hanger",
        title: "Why Choose Our Smart Cloth Hanger?",
        features: [
          "Space-Saving Design – Installed on the ceiling, it s up floor space and keeps your home organized",
          "Adjustable & Easy to Use – Smooth pulley mechanism allows easy lowering and lifting of the hanger",
          "Sturdy & Durable – Made from high-quality stainless steel and aluminum, ensuring long-lasting performance",
          "Weather-Proof Drying – Ideal for apartments, balconies, and homes with limited outdoor space",
          "Eco-Friendly – Reduces electricity usage by eliminating the need for electric dryers",
          "Aesthetic Appeal – Blends seamlessly with your home decor, adding functionality without compromising style",
          "Customizable Sizes – Available in various sizes to suit different room dimensions and needs",
        ],
      },
      {
        kind: "prose",
        id: "how-it-works",
        title: "How It Works",
        paragraphs: [
          "Our ceiling-mounted hanger operates with a rope and pulley system, allowing you to lower the hanger to a comfortable height, hang your clothes, and then effortlessly raise it back up. This ensures efficient air circulation for faster drying while keeping your space tidy. The smooth and durable pulley system is designed for easy handling, making it accessible for all age groups.",
        ],
        videoId: "02WVfoVA-K4",
        videoTitle: "hangers",
      },
      {
        kind: "columns",
        id: "perfect-for-every-home",
        title: "Perfect for Every Home",
        columns: [
          {
            label: "Where it fits",
            items: [
              "Apartments & Flats",
              "Villas & Independent Homes",
              "Laundry Rooms",
              "Balconies & Patios",
              "Hostels & Shared Living Spaces",
              "Hotels & Guesthouses",
            ],
          },
        ],
      },
      {
        kind: "prose",
        id: "installation-made-easy",
        title: "Installation Made Easy",
        paragraphs: [
          "Our team ensures proper ceiling mounting with high-quality fixtures for a secure and stable setup. DIY enthusiasts can also follow our detailed installation guide for self-installation. With step-by-step instructions and customer support, setting up your Ceiling Cloth Hanger is a breeze.",
        ],
      },
    ],
  },
};

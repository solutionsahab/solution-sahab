// File: src/lib/city-pages.ts
// City landing pages served at /<product>/<city>, e.g. /invisible-grills/lucknow.
// SEO only: nothing on the site links here; Google finds them through the sitemap.
// Product specs come from PRODUCT_CONFIGS; the local copy below is written per product and city.
import { FACTS } from "@/lib/facts";
import { COMMON_TRUST_PILLARS, PRODUCT_CONFIGS, type ProductPageConfig } from "@/lib/product-page-configs";
import type { OverviewBullet, ProductBenefitItem } from "@/components/product/common";

type CityKey = "lucknow" | "varanasi" | "patna";

const CITIES: Record<CityKey, { name: string; state: string; areas: string }> = {
  lucknow: {
    name: "Lucknow",
    state: "Uttar Pradesh",
    areas:
      "Gomti Nagar, Gomti Nagar Extension, Hazratganj, Indira Nagar, Aliganj, Mahanagar, Jankipuram, Vibhuti Khand, Sushant Golf City, Shaheed Path, Ashiyana and Alambagh",
  },
  varanasi: {
    name: "Varanasi",
    state: "Uttar Pradesh",
    areas:
      "Sigra, Lanka, Assi, Bhelupur, Mahmoorganj, Rathyatra, Cantonment, Shivpur, Pandeypur, Sarnath and the old city near the ghats",
  },
  patna: {
    name: "Patna",
    state: "Bihar",
    areas:
      "Boring Road, Bailey Road, Kankarbagh, Rajendra Nagar, Patliputra Colony, Saguna More, Danapur, Ashiana Nagar, Anisabad, Raja Bazar and Fraser Road",
  },
};

interface Qa {
  question: string;
  answer: string;
}

interface LocalCopy {
  tagline: string;
  intro: string;
  local: string;
  bullets: OverviewBullet[];
  faqs: Qa[];
}

interface ProductTemplate {
  name: string;
  /** Value of PRODUCT_OPTIONS sent to Cratio */
  formProduct: string;
  /** Hindi-English search term, used in the price question */
  localTerm: string;
  metaLine: string;
  keywords: (city: string) => string[];
  priceAnswer: (city: string) => string;
  /** Replaces a base benefit that names Delhi NCR places */
  ncrBenefit?: ProductBenefitItem;
  cities: Record<CityKey, LocalCopy>;
}

const PRODUCTS: Record<string, ProductTemplate> = {
  "invisible-grills": {
    name: "Invisible Grills",
    formProduct: "Invisible Grills",
    localTerm: "balcony safety jali",
    metaLine: "316 steel cable grills for balconies and windows",
    keywords: (c) => [
      `invisible grills in ${c}`,
      `invisible grill price in ${c}`,
      `invisible grill installation ${c}`,
      `invisible grills near me ${c}`,
      `balcony safety grill ${c}`,
      `balcony jali ${c}`,
      `steel wire grill for balcony ${c}`,
      `invisible grills for apartments ${c}`,
    ],
    priceAnswer: (c) =>
      `Invisible grills are priced per square foot, so the cost depends on the size of the opening, cable thickness (2.5 mm or 3 mm), cable spacing (2-inch child-safe or 3-inch), the track finish and how easy the opening is to reach. Our engineer measures on site in ${c} and gives you a written quote before any work starts.`,
    ncrBenefit: {
      title: "Approved by Housing Societies",
      description:
        "Welded iron cages change a building's outside look, which many apartment societies do not allow. Invisible grills are barely visible from the ground, so the facade stays unchanged.",
    },
    cities: {
      lucknow: {
        tagline:
          "Stainless steel cable grills for balconies, windows and terraces across Lucknow. Keep children and pets safe in Gomti Nagar towers and Aliganj homes without losing your view or the evening breeze.",
        intro:
          "Lucknow is growing upwards. New towers along Shaheed Path, Sushant Golf City and Gomti Nagar Extension now put families on the 10th or 15th floor, where the open balcony is the best part of the flat and also the biggest risk for a small child or a pet. Iron grills make those balconies feel like cages and need repainting every few years.",
        local:
          "Invisible grills solve both problems. Thin AISI 316 stainless steel cables are tensioned across the opening at 2-inch or 3-inch spacing, so a child cannot slip through, while the view and the cross-breeze stay open. In older kothis and independent houses in Indira Nagar, Aliganj and Mahanagar, the same cables secure terraces and stair voids and help keep monkeys and pigeons out.",
        bullets: [
          { label: "High-Rise Balconies", text: "Fall protection for flats in Shaheed Path, Sushant Golf City and Gomti Nagar Extension towers." },
          { label: "Built for Lucknow Weather", text: "316 marine-grade steel stays rust-free through humid monsoons, summer loo and winter fog." },
          { label: "Terraces & Stair Voids", text: "Secures rooftops and open staircases in independent houses and kothis across the city." },
        ],
        faqs: [
          {
            question: "Do invisible grills work for independent houses in Lucknow, or only flats?",
            answer:
              "Both. In flats we usually cover balconies and windows. In independent houses and kothis in areas like Indira Nagar, Aliganj and Gomti Nagar we also cover terraces, stair voids and open courtyards, where the cables keep children safe and help keep monkeys and pigeons out.",
          },
          {
            question: "Will the cables handle Lucknow's summer heat and monsoon?",
            answer:
              "Yes. We use AISI 316 marine-grade stainless steel with a protective nylon coating, which does not rust in the humid monsoon months and stays tight through 45°C summers. Every installation comes with a 5-year anti-rust warranty.",
          },
        ],
      },
      varanasi: {
        tagline:
          "Stainless steel cable grills for balconies, windows and rooftops across Varanasi. Protect children and pets, and keep monkeys off your terrace, without closing in your home.",
        intro:
          "In Varanasi, the worry on many rooftops and balconies is not only falls. Monkeys move freely across terraces from the ghats to Lanka, and families in old multi-storey houses and new apartments in Sigra, Mahmoorganj and Shivpur want a way to keep them out without building an iron cage.",
        local:
          "Invisible grills give that protection while keeping the house open. AISI 316 stainless steel cables are tensioned close together across balconies, windows and terrace edges, so children cannot slip through and monkeys cannot get in, while light and the breeze from the Ganga still reach the rooms. The same system suits guest houses and hotels that want safe balconies without spoiling the view.",
        bullets: [
          { label: "Monkey-Proof Terraces", text: "Close cable spacing keeps monkeys off rooftops and balconies without a heavy iron cage." },
          { label: "Old Houses & New Flats", text: "Fits narrow balconies in older homes and wide openings in new apartments alike." },
          { label: "Rust-Free by the River", text: "316 marine-grade steel stays clean in the humid air of a riverside city." },
        ],
        faqs: [
          {
            question: "Can invisible grills stop monkeys from coming onto my terrace in Varanasi?",
            answer:
              "Yes. With 2-inch spacing, the gaps between the tensioned stainless steel cables are too small for monkeys to pass through, and they cannot bend or pull the cables apart. Many Varanasi homes use them to close balconies and terrace edges while keeping the space open and airy.",
          },
          {
            question: "Can you install in old houses in the narrow lanes near the ghats?",
            answer:
              "Yes. The tracks and cables are light and arrive in small pieces, so we can carry them through narrow lanes and stairways. During the site visit our team checks the wall condition and chooses anchors that suit older brick walls.",
          },
        ],
      },
      patna: {
        tagline:
          "Stainless steel cable grills for balconies, windows and terraces across Patna. Keep children and pets safe in Bailey Road and Danapur apartments without blocking light or air.",
        intro:
          "New apartments along Bailey Road, Saguna More, Danapur and Boring Road have brought large balconies and higher floors to Patna. For families with young children or pets, those balconies need fall protection, but most people do not want a heavy iron grill that blocks light and rusts after a few monsoons.",
        local:
          "Invisible grills keep the balcony open and safe at the same time. AISI 316 stainless steel cables are tensioned across the opening at child-safe spacing, and each one holds over 400 kgf. Patna's long, humid monsoon is hard on mild steel grills, but nylon-coated 316 marine-grade cables do not rust, so there is no repainting.",
        bullets: [
          { label: "Apartment Balconies", text: "Fall protection for flats on Bailey Road, Saguna More, Danapur and Boring Road." },
          { label: "Monsoon-Proof", text: "316 marine-grade steel stays rust-free through Patna's long, humid rainy season." },
          { label: "Independent Houses", text: "Covers terraces, windows and stair voids in Kankarbagh, Rajendra Nagar and Patliputra Colony." },
        ],
        faqs: [
          {
            question: "Have you installed invisible grills in Patna before?",
            answer:
              "Yes. We have completed balcony installations in the Patna area, including a project in Danapur, and our team covers apartments and independent houses across the city.",
          },
          {
            question: "Will invisible grills rust in Patna's humidity and heavy rain?",
            answer:
              "No. We use AISI 316 marine-grade stainless steel, which contains molybdenum to resist rust, and coat each cable in nylon. Every installation comes with a 5-year anti-rust warranty.",
          },
        ],
      },
    },
  },

  "pleated-mesh": {
    name: "Pleated Mosquito Mesh",
    formProduct: "Pleated Mesh",
    localTerm: "machhar jali",
    metaLine: "retractable mosquito mesh for doors and windows",
    keywords: (c) => [
      `pleated mosquito mesh in ${c}`,
      `pleated mesh price in ${c}`,
      `mosquito net for windows ${c}`,
      `mosquito mesh door ${c}`,
      `machhar jali ${c}`,
      `mosquito jali for balcony door ${c}`,
      `pleated mesh near me ${c}`,
      `mosquito mesh installation ${c}`,
    ],
    priceAnswer: (c) =>
      `Pleated mesh is priced by the size of each door or window, so the cost depends on width and height, the frame colour and whether you choose a single or a centre-opening double shutter. Our engineer measures each opening in ${c} and gives you a written quote before any work starts.`,
    cities: {
      lucknow: {
        tagline:
          "Retractable pleated mosquito mesh for balcony doors, windows and main doors across Lucknow. Keep mosquitoes out in the monsoon and let the breeze in all year.",
        intro:
          "From July to October, mosquitoes are a daily problem in Lucknow homes, especially in areas near the Gomti and the city's open drains. Shutting every window means stuffy rooms and higher AC bills, and old fixed nets on windows tear, sag and collect dust.",
        local:
          "Pleated mosquito mesh slides open and closed like a curtain and folds away into a slim side frame when you don't need it. The accordion mesh sits in a Jindal T6 aluminium frame fitted to your existing door or window, so you can keep balcony doors in Gomti Nagar flats or windows in Aliganj houses open in the evening without letting mosquitoes, flies or lizards in.",
        bullets: [
          { label: "Monsoon Mosquito Protection", text: "Tight 18x16 mesh keeps out the mosquitoes that spread dengue and malaria." },
          { label: "Folds Away When Not Needed", text: "Slides aside like a curtain for clear access to balconies and lawns." },
          { label: "Fits Existing Frames", text: "Mounted on your current doors and windows, with no breaking of walls." },
        ],
        faqs: [
          {
            question: "Can pleated mesh be fitted on large balcony sliding doors in Lucknow flats?",
            answer:
              "Yes. We make pleated mesh for wide sliding doors and French windows, with a centre-opening double shutter for very wide openings. It is mounted on the existing frame, so no wall breaking is needed.",
          },
          {
            question: "Will the mesh hold up to Lucknow's summer heat and dust?",
            answer:
              "Yes. The pleats are heat-set, so they keep their shape in high temperatures, and the aluminium frame is powder-coated. Dust can be brushed or wiped off easily, and on very dusty days you can simply slide the mesh aside.",
          },
        ],
      },
      varanasi: {
        tagline:
          "Retractable pleated mosquito mesh for doors and windows across Varanasi. Open your home to the river breeze without letting mosquitoes and flies in.",
        intro:
          "Homes near the ghats and the Ganga get a lovely breeze, and a lot of mosquitoes with it. In Varanasi's humid months, windows in Assi, Bhelupur and Lanka are often kept shut just to keep insects out, which makes rooms hot and dark.",
        local:
          "Pleated mosquito mesh lets you open those windows again. The accordion mesh slides across the opening on a smooth track and folds into a slim side frame, so it does not block the door when you step out to the balcony or terrace. It suits old houses with uneven window sizes as well as new flats in Sigra, Mahmoorganj and Shivpur, and works well for guest houses that want insect-free rooms.",
        bullets: [
          { label: "River-Side Mosquito Defence", text: "Fine mesh stops mosquitoes, flies and gnats that come in with the humid breeze." },
          { label: "Made to Any Size", text: "Each frame is cut to fit, including the uneven openings of older homes." },
          { label: "For Homes & Guest Houses", text: "Gives guests insect-free rooms without fixed nets or chemical sprays." },
        ],
        faqs: [
          {
            question: "Can pleated mesh fit the uneven window sizes of old houses in Varanasi?",
            answer:
              "Yes. Every pleated mesh is made to the measured size of your opening, and our engineer checks each window during the site visit. Small differences in the frame can be handled with packing strips, so old windows and doors can be covered too.",
          },
          {
            question: "Is pleated mesh good for guest houses and homestays near the ghats?",
            answer:
              "Yes. Guests can open windows and balcony doors without letting mosquitoes in, the mesh is easy to use, and it folds away when the room is cleaned. Many guest houses prefer it to fixed nets, which tear and look untidy.",
          },
        ],
      },
      patna: {
        tagline:
          "Retractable pleated mosquito mesh for balcony doors, windows and main doors across Patna. Protect your family in dengue season without shutting every window.",
        intro:
          "Patna's monsoon brings waterlogging to many neighbourhoods, and standing water brings mosquitoes. Dengue cases rise across the city after the rains, and families in Kankarbagh, Rajendra Nagar and Boring Road often end up closing every window just to stay safe.",
        local:
          "Pleated mosquito mesh gives you a better option. The mesh sits in a slim aluminium frame on your existing door or window and slides across like a curtain, so you can keep windows open for air and light while mosquitoes stay outside. It works on balcony doors in Bailey Road and Danapur apartments and on windows and main doors in independent houses.",
        bullets: [
          { label: "Dengue-Season Protection", text: "Tight 18x16 mesh keeps out the mosquitoes that breed in standing rainwater." },
          { label: "Air & Light Without Insects", text: "Keep windows open through the humid months instead of shutting the house." },
          { label: "Rust-Free Frames", text: "Jindal T6 aluminium frames do not rust in Patna's damp weather." },
        ],
        faqs: [
          {
            question: "Does pleated mesh help during dengue season in Patna?",
            answer:
              "Yes. Mosquitoes mostly enter through open doors and windows. Pleated mesh covers those openings with a tight 18x16 mesh, so you can keep them open for air while mosquitoes stay out. It works best together with clearing standing water around the house.",
          },
          {
            question: "Will the aluminium frame rust in Patna's monsoon?",
            answer:
              "No. The frames are Jindal T6 aluminium with a powder-coated finish, which does not rust. The mesh itself is PVC-coated polyester, which does not soak up water or rot.",
          },
        ],
      },
    },
  },

  "honeycomb-partition": {
    name: "Honeycomb Partitions",
    formProduct: "Honeycomb Partition",
    localTerm: "partition parda",
    metaLine: "retractable room dividers and cellular blinds",
    keywords: (c) => [
      `honeycomb partition in ${c}`,
      `honeycomb partition price in ${c}`,
      `honeycomb blinds ${c}`,
      `room divider partition ${c}`,
      `cellular blinds ${c}`,
      `duet mesh system ${c}`,
      `honeycomb partition near me ${c}`,
      `office partition blinds ${c}`,
    ],
    priceAnswer: (c) =>
      `Honeycomb partitions are priced by the size of the opening, the fabric you choose and whether you add the 2-in-1 Duet mosquito mesh. Our engineer brings fabric swatches to your home or office in ${c}, measures the space and gives you a written quote before any work starts.`,
    cities: {
      lucknow: {
        tagline:
          "Retractable honeycomb partitions and cellular blinds for homes and offices across Lucknow. Divide rooms, cut summer heat and close off spaces without building a wall.",
        intro:
          "Lucknow summers push temperatures past 45°C, and the hot loo wind turns glass doors and big windows into heat traps. At the same time, many homes in Gomti Nagar, Indira Nagar and Aliganj have open halls and large openings that families want to divide for privacy or to cool only one part of the house.",
        local:
          "Honeycomb partitions do both jobs. The hexagonal cells in the fabric trap air and slow down heat coming through glass, and the partition slides open and closed on a slim aluminium track, so you can close off a room while the AC runs and open it again for guests. Offices and clinics in Hazratganj and Vibhuti Khand use the same system to create cabins and meeting rooms without civil work.",
        bullets: [
          { label: "Heat Control for Loo Summers", text: "Air-trapping cells cut heat from sun-facing glass and reduce AC load." },
          { label: "Instant Room Dividers", text: "Split halls and open plans without building a wall." },
          { label: "Homes, Offices & Clinics", text: "Used for cabins, consultation rooms and meeting spaces across the city." },
        ],
        faqs: [
          {
            question: "Do honeycomb partitions really reduce heat in Lucknow summers?",
            answer:
              "They help a lot. The honeycomb cells hold a layer of still air between the glass and the room, which slows down heat coming in through sun-facing doors and windows. Rooms stay cooler and the AC works less, though the effect depends on how much glass and direct sun the room gets.",
          },
          {
            question: "Can honeycomb partitions be used in offices in Lucknow?",
            answer:
              "Yes. Offices, clinics and coaching centres use them to create cabins, meeting rooms and private areas without civil work, and they slide away fully when you need the open space back.",
          },
        ],
      },
      varanasi: {
        tagline:
          "Retractable honeycomb partitions and cellular blinds for homes, guest houses and offices across Varanasi. Privacy and shade that slide away when you don't need them.",
        intro:
          "Many Varanasi homes and guest houses have open verandahs, wide doorways and rooms that face the street or the river. Owners want privacy and shade from the strong afternoon sun, but heavy curtains collect dust and fixed walls take away the open feel.",
        local:
          "Honeycomb partitions slide across these openings on a slim aluminium track and fold into a narrow stack at the side when you want the space open. The cellular fabric softens the light, gives privacy and keeps rooms cooler, and the 2-in-1 Duet version adds a mosquito mesh to the same frame for rooms near the river. It suits homes in Sigra, Lanka and Mahmoorganj, guest houses near the ghats and offices across the city.",
        bullets: [
          { label: "Privacy for Open Layouts", text: "Close off verandahs, doorways and street-facing rooms in seconds." },
          { label: "Shade From Afternoon Sun", text: "Cellular fabric filters strong light and keeps rooms cooler." },
          { label: "Duet Mesh Option", text: "Combine a honeycomb blind and a mosquito mesh in one frame." },
        ],
        faqs: [
          {
            question: "Can one frame give both privacy and mosquito protection in Varanasi?",
            answer:
              "Yes. Our 2-in-1 Duet system puts a honeycomb blind and a pleated mosquito mesh in the same frame. Close the blind for privacy and shade, the mesh for air without insects, or open both fully.",
          },
          {
            question: "Are honeycomb partitions suitable for guest houses and hotels?",
            answer:
              "Yes. They give guests privacy and shade, are easy to operate and fold away neatly. The fabric can be cleaned with a soft brush or a vacuum, which makes them easier to look after than heavy curtains.",
          },
        ],
      },
      patna: {
        tagline:
          "Retractable honeycomb partitions and cellular blinds for homes and offices across Patna. Divide rooms, keep out heat and add privacy without any civil work.",
        intro:
          "Patna's summers are hot and its monsoon is long and humid, so many families in Kankarbagh, Patliputra Colony and Boring Road run the AC for months at a time. Large halls and open-plan flats take longer to cool, and putting up a wall to divide them is costly and permanent.",
        local:
          "Honeycomb partitions give you a movable wall instead. The partition slides out on a slim aluminium track to close off part of a room, and the air-filled cells in the fabric help hold the cool air in and keep heat out. Offices, clinics and coaching centres on Boring Road, Fraser Road and Bailey Road use the same system to create cabins and meeting rooms quickly.",
        bullets: [
          { label: "Cool Only What You Use", text: "Close off part of a large hall so the AC cools a smaller space." },
          { label: "No Civil Work", text: "Mounted on a slim track, with no wall, plaster or paint work." },
          { label: "Quick Office Cabins", text: "Create meeting rooms and private cabins for offices and clinics." },
        ],
        faqs: [
          {
            question: "Can a honeycomb partition reduce AC bills in Patna?",
            answer:
              "It can help. By closing off part of a large room, the AC only has to cool the space you are using, and the cellular fabric slows heat coming in through glass. The saving depends on room size, sun exposure and how you use the space.",
          },
          {
            question: "Is the fabric affected by Patna's humidity?",
            answer:
              "The honeycomb fabric is made for indoor use in humid climates and does not soak up moisture like cloth curtains. Keep it dry, brush or vacuum off the dust now and then, and it keeps its shape for years.",
          },
        ],
      },
    },
  },

  "aluminum-mesh-partition": {
    name: "Aluminum Security Mesh",
    formProduct: "Aluminum Mesh & Partition",
    localTerm: "security jali door",
    metaLine: "knife-resistant mesh doors, windows and partitions",
    keywords: (c) => [
      `aluminium security mesh in ${c}`,
      `security mesh door price in ${c}`,
      `aluminium mesh door ${c}`,
      `security jali door ${c}`,
      `safety door with mesh ${c}`,
      `aluminium jali for windows ${c}`,
      `security mesh near me ${c}`,
      `aluminium partition ${c}`,
    ],
    priceAnswer: (c) =>
      `Security mesh is priced by the size of each door, window or partition, the opening style (sliding, hinged or fixed) and the frame finish. Our engineer measures each opening in ${c} and gives you a written quote before any work starts.`,
    cities: {
      lucknow: {
        tagline:
          "Heavy-duty aluminium security mesh doors, windows and partitions across Lucknow. Keep doors open for air while keeping intruders, monkeys and insects out.",
        intro:
          "In Lucknow, many families keep the main door or back door open in the evening for cross-ventilation, especially in independent houses in Indira Nagar, Aliganj, Jankipuram and Ashiyana. An ordinary net door gives no security, and an iron grill door rusts, looks heavy and still lets mosquitoes in.",
        local:
          "Aluminium security mesh doors combine both. A strong, knife-resistant mesh sits in a rigid Jindal T6 aluminium frame with a proper lock, so you can leave the main door open for air while the mesh door stays locked. The same mesh is used on windows and balcony doors, and as partitions in shops and offices.",
        bullets: [
          { label: "Air With Security", text: "Keep the main door open for the breeze while the mesh door stays locked." },
          { label: "Knife-Resistant Mesh", text: "Strong metal mesh resists cutting and pushing, unlike nylon nets." },
          { label: "No Rust, No Repainting", text: "Aluminium frames stay clean through Lucknow's monsoon and summer." },
        ],
        faqs: [
          {
            question: "Is aluminum security mesh strong enough for the main door of a Lucknow house?",
            answer:
              "Yes. The heavy-duty metal mesh resists cutting and pushing and is held in a rigid Jindal T6 aluminium frame with a lock. It is designed to be used as a locked safety door in front of your main door.",
          },
          {
            question: "Does security mesh also keep monkeys and mosquitoes out?",
            answer:
              "Yes. The mesh is fine enough to stop mosquitoes, wasps and lizards, and the frame is strong enough that monkeys cannot pull or tear it the way they do with nylon nets.",
          },
        ],
      },
      varanasi: {
        tagline:
          "Heavy-duty aluminium security mesh doors, windows and partitions across Varanasi. Strong protection against intruders and monkeys, with full airflow.",
        intro:
          "Monkeys in Varanasi are bold enough to walk into open homes, pull at nylon nets and take food from kitchens. Families in Lanka, Bhelupur, Sigra and the old city often have to keep doors and windows shut, even in the humid months when the house needs air the most.",
        local:
          "Aluminium security mesh doors and windows solve this. The mesh is strong enough that monkeys cannot tear or bend it, and it resists cutting by intruders, yet it still lets air and light through. It is fitted in a Jindal T6 aluminium frame that does not rust in the river humidity, and suits main doors, kitchen windows, balcony doors and terrace doors.",
        bullets: [
          { label: "Monkey-Proof Doors & Windows", text: "Strong mesh that monkeys cannot tear, pull or bend like nylon nets." },
          { label: "Security for Homes & Shops", text: "Knife-resistant mesh with proper locks for main doors and shop fronts." },
          { label: "Full Airflow", text: "Keep doors and windows open for air through the humid months." },
        ],
        faqs: [
          {
            question: "Can monkeys damage aluminum security mesh in Varanasi?",
            answer:
              "No. Unlike nylon or fibre nets, aluminium security mesh is a rigid metal mesh in a strong frame. Monkeys cannot tear it, pull it out of the frame or bend it open.",
          },
          {
            question: "Can you fit security mesh on terrace doors and kitchen windows?",
            answer:
              "Yes. We make sliding, hinged and fixed mesh panels to the exact size of each opening, including terrace doors, kitchen windows and balcony doors, which are where monkeys usually get in.",
          },
        ],
      },
      patna: {
        tagline:
          "Heavy-duty aluminium security mesh doors, windows and partitions across Patna. Security and ventilation in one, with frames that never rust.",
        intro:
          "Many independent houses in Kankarbagh, Rajendra Nagar, Patliputra Colony and Anisabad still use iron grill doors in front of the main door. They do the job, but they rust in Patna's long monsoon, need repainting and still let mosquitoes in when the door is open.",
        local:
          "Aluminium security mesh doors are a cleaner, stronger option. The knife-resistant mesh is fitted in a Jindal T6 frame with a proper lock, so you can keep the main door open for air while the mesh door stays locked. It also works on windows, on balcony doors in Bailey Road and Danapur apartments, and as partitions for shops and offices.",
        bullets: [
          { label: "Instead of Rusting Iron Grills", text: "Aluminium frames do not rust in Patna's long monsoon." },
          { label: "Locked & Ventilated", text: "The mesh door stays locked while the main door stays open for air." },
          { label: "Shops & Offices", text: "Mesh partitions and doors for shop fronts and office cabins." },
        ],
        faqs: [
          {
            question: "Is aluminum security mesh better than an iron grill door in Patna?",
            answer:
              "For most homes, yes. Aluminium does not rust in Patna's humid monsoon, so there is no repainting, and the fine mesh keeps insects out as well as intruders. The rigid frame and lock give strong security without the heavy, closed look of an iron grill.",
          },
          {
            question: "Can a security mesh door go where my old iron grill door is?",
            answer:
              "Usually, yes. Our engineer measures the opening and checks the frame during the site visit, then tells you whether the new mesh door can be fitted in the same place.",
          },
        ],
      },
    },
  },

  "automatic-weather-screen": {
    name: "Automatic Weather Screens",
    formProduct: "Automatic Weather Screen",
    localTerm: "balcony parda",
    metaLine: "motorised zip screens for balconies and terraces",
    keywords: (c) => [
      `automatic weather screen in ${c}`,
      `zip screen price in ${c}`,
      `motorized zip blinds ${c}`,
      `outdoor balcony blinds ${c}`,
      `balcony rain cover ${c}`,
      `balcony parda for sun and rain ${c}`,
      `zip screen near me ${c}`,
      `pergola blinds ${c}`,
    ],
    priceAnswer: (c) =>
      `Weather screens are priced by the width and height of each opening, the fabric and the controls you choose (remote, wall switch or smart home). Our engineer measures your balcony, terrace or pergola in ${c} and gives you a written quote before any work starts.`,
    cities: {
      lucknow: {
        tagline:
          "Motorised zip screens and weather blinds for balconies, terraces and pergolas across Lucknow. Block summer sun, loo winds and monsoon rain at the press of a button.",
        intro:
          "Balconies and terraces in Lucknow face three seasons of trouble: hot loo winds and harsh sun in May and June, driving rain in the monsoon, and dust in between. Families in Gomti Nagar, Sushant Golf City and Shaheed Path flats often stop using their balcony for months.",
        local:
          "Automatic weather screens close the balcony or terrace in seconds. The fabric runs down zip-locked side channels, so it stays tight and does not flap in strong wind, and it rolls back up when the weather is good. Cafés and rooftop terraces in Hazratganj and Gomti Nagar use the same screens to keep outdoor seating usable for more of the year.",
        bullets: [
          { label: "Sun & Loo Protection", text: "Solar screen fabric cuts glare and heat on west-facing balconies." },
          { label: "Wind-Locked Edges", text: "Zip channels hold the fabric tight in wind and driving rain." },
          { label: "Cafés & Rooftops", text: "Keeps outdoor seating open through sun, rain and cold evenings." },
        ],
        faqs: [
          {
            question: "Can a weather screen keep monsoon rain off my balcony in Lucknow?",
            answer:
              "It cuts down wind-driven rain a lot. The fabric is locked into zip side channels, so the edges do not flap open, and most of the rain stays outside. In very heavy storms some water can still reach the floor, so we check your balcony's slope and drainage during the site visit.",
          },
          {
            question: "Are weather screens useful for rooftop restaurants and cafés in Lucknow?",
            answer:
              "Yes. Cafés and restaurants use them to close outdoor seating during harsh sun, rain or cold evenings and open it again in good weather, so the space earns for more of the year.",
          },
        ],
      },
      varanasi: {
        tagline:
          "Motorised zip screens and weather blinds for terraces, balconies and rooftop cafés across Varanasi. Shelter from sun and rain while keeping your river view.",
        intro:
          "Rooftops are among the best places in Varanasi, with views over the ghats and the Ganga, and many homes, guest houses and cafés have turned them into seating areas. But the strong afternoon sun, sudden monsoon storms and chilly winter evenings make those rooftops hard to use for much of the year.",
        local:
          "Automatic weather screens let you close the sides of a rooftop, pergola or balcony in seconds and open them again when the weather clears. The solar screen fabric blocks most of the sun's heat while you can still see out, and it runs in zip-locked side channels, so it stays tight in strong wind.",
        bullets: [
          { label: "Rooftop Cafés & Guest Houses", text: "Keep rooftop seating usable through sun, rain and winter evenings." },
          { label: "Keep the View", text: "See-through solar fabric blocks heat and glare without hiding the river." },
          { label: "Wind-Resistant", text: "Zip-locked side channels hold the fabric tight in strong gusts." },
        ],
        faqs: [
          {
            question: "Can I keep my river view with a weather screen?",
            answer:
              "Yes. The micro-perforated solar screen fabric blocks most of the sun's heat and glare while you can still see out clearly from inside. Our engineer brings fabric samples so you can compare them on your own terrace.",
          },
          {
            question: "Can weather screens be fitted on old rooftop structures?",
            answer:
              "Usually, yes. The screens can be mounted under a slab or beam, or between pergola posts. During the site visit our engineer checks that the structure is strong enough to hold them.",
          },
        ],
      },
      patna: {
        tagline:
          "Motorised zip screens and weather blinds for balconies, terraces and pergolas across Patna. Keep heavy monsoon rain and summer sun out of your outdoor space.",
        intro:
          "Patna's monsoon is long and heavy, and wind-driven rain soaks balconies in flats on Bailey Road, Saguna More and Danapur, ruining furniture and making floors slippery. In summer the same balconies face strong sun and heat, so many families simply stop using them.",
        local:
          "Automatic weather screens give you a balcony you can use every season. The fabric comes down in seconds on zip-locked side channels, stays tight in strong wind, keeps out sun and most of the rain, and rolls up into a slim cassette when the weather is good. Rooftop terraces of independent houses in Kankarbagh, Rajendra Nagar and Patliputra Colony, and restaurants with outdoor seating, use the same system.",
        bullets: [
          { label: "Monsoon Rain Protection", text: "Cuts down wind-driven rain that soaks balcony floors and furniture." },
          { label: "Summer Heat & Glare", text: "Solar screen fabric blocks most of the sun's heat on the balcony." },
          { label: "Rolls Away Out of Sight", text: "Retracts into a slim cassette when the weather is good." },
        ],
        faqs: [
          {
            question: "Will a weather screen survive Patna's monsoon storms?",
            answer:
              "Yes. The screens are tested against winds of up to 80 km/h, and the zip-locked side channels hold the fabric so it does not tear or flap. In a very strong storm we still suggest rolling the screen up, which takes a few seconds.",
          },
          {
            question: "Do I need my apartment society's permission for a weather screen?",
            answer:
              "Some societies ask for it. The screen mounts inside the balcony opening and rolls up into a slim cassette, so it changes the building's outside look far less than a permanent glass or tin enclosure. We can share product details for your society's approval.",
          },
        ],
      },
    },
  },
};

// Base product copy that names Delhi NCR places is left off the city pages.
const NCR = /delhi|gurgaon|gurugram|noida|ncr/i;

function buildCityPage(productKey: string, cityKey: CityKey): ProductPageConfig {
  const base = PRODUCT_CONFIGS[productKey];
  const tpl = PRODUCTS[productKey];
  const city = CITIES[cityKey];
  const copy = tpl.cities[cityKey];
  const c = city.name;
  const lower = tpl.name.toLowerCase();
  const slug = `${productKey}/${cityKey}`;
  const parentCrumb = { label: tpl.name, href: `/${productKey}` };

  const faqs = [
    ...copy.faqs,
    { question: `What is the price of ${lower} (${tpl.localTerm}) in ${c}?`, answer: tpl.priceAnswer(c) },
    {
      question: `Do you install ${lower} near me in ${c}?`,
      answer: `Yes. We cover homes, offices and shops across ${c}, including ${city.areas}. Book a visit with the form below or call ${FACTS.phoneDisplay}, and we will fix a date for your area.`,
    },
    ...base.faqs.filter((f) => !NCR.test(f.question + f.answer)).slice(0, 3),
  ].map((f, i) => ({ id: i + 1, question: f.question, answer: f.answer }));

  return {
    slug,
    leadSource: `${tpl.name} - ${c} Page`,
    serviceName: tpl.name,
    formProduct: tpl.formProduct,
    areaServed: [c],
    faqDescription: `Answers on ${lower} price, installation and care in ${c}.`,
    metadata: {
      title: `${tpl.name} in ${c} – Price & Installation | Solution Sahab`,
      description: `${tpl.name} in ${c}: ${tpl.metaLine}. Site visit, written quote, 5-year warranty.`,
      keywords: tpl.keywords(c),
      canonical: `https://solutionsahab.com/${slug}`,
      ogImage: base.metadata.ogImage,
    },
    structuredData: {
      ...base.structuredData,
      productName: `${tpl.name} in ${c}`,
      description: copy.tagline,
    },
    hero: {
      ...base.hero,
      productName: `${tpl.name} in ${c}`,
      brandTag: `Solution Sahab | ${c}, ${city.state}`,
      tagline: copy.tagline,
      heroImageAlt: `${tpl.name} installed by Solution Sahab in ${c}`,
      breadcrumbName: c,
      parentCrumb,
    },
    overview: {
      ...base.overview,
      title: `${tpl.name} in ${c}`,
      leadParagraph: copy.intro,
      secondaryParagraph: copy.local,
      bullets: copy.bullets,
    },
    benefits: {
      ...base.benefits,
      imageAlt: `${tpl.name} by Solution Sahab in ${c}`,
      benefits: base.benefits.benefits.map((b) => (NCR.test(b.description) && tpl.ncrBenefit) || b),
    },
    trustPillars: base.trustPillars && {
      ...base.trustPillars,
      subtitle: `Certified, high-grade installation of ${lower} for homes and businesses across ${c}.`,
      pillars: COMMON_TRUST_PILLARS.filter((p) => !NCR.test(p.title + p.desc)),
    },
    applications: {
      ...base.applications,
      title: `Where We Install ${tpl.name} in ${c}`,
      areas: base.applications.areas.map((a) => ({ ...a, alt: `${a.title}: ${lower} in ${c} by Solution Sahab` })),
    },
    faqs,
    bookingTitle: `Book a Site Visit in ${c}`,
    bookingDescription: `Book an engineer visit anywhere in ${c}. We bring samples, measure each opening and give you a written quote.`,
  };
}

export const CITY_KEYS = Object.keys(CITIES) as CityKey[];

/** Keyed by slug, e.g. "invisible-grills/lucknow" */
export const CITY_PAGES: Record<string, ProductPageConfig> = Object.fromEntries(
  Object.keys(PRODUCTS).flatMap((product) =>
    CITY_KEYS.map((city) => [`${product}/${city}`, buildCityPage(product, city)]),
  ),
);

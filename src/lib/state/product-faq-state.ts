"use client";

import { useState, useCallback } from "react";

export interface ProductFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const productFaqData: ProductFaqItem[] = [
  {
    id: "coastal-durability",
    question: "How do invisible grills endure high humidity and coastal weather?",
    answer:
      "Our cables are composed of authentic AISI 316 Marine Grade stainless steel alloyed with 2-3% molybdenum. This composition prevents pitting and crevice corrosion even in coastal salt air or heavy urban industrial rain. Furthermore, each cable is protected by a transparent, UV-stabilized nylon sheath that prevents discoloration.",
  },
  {
    id: "bird-protection",
    question: "Can pigeons or small birds pass through invisible grills?",
    answer:
      "When installed with our 50mm (2-inch) spacing pitch, adult pigeons cannot enter balconies or roost. Unlike flimsy bird nets that tear, get dusty, or trap birds, high-tensile stainless steel invisible grills provide an unyielding physical barrier without harboring pests or obstructing outward visibility.",
  },
  {
    id: "structural-anchoring",
    question: "How are the structural tracks anchored into walls and concrete?",
    answer:
      "We use heavy-gauge 6063-T6 extruded aluminum tracking rails secured directly into RCC structural concrete, lintels, or brickwork using heavy-duty stainless steel anchor expansion bolts spaced every 200mm. The tracks are covered with matching snap-on caps, keeping all screws hidden from moisture and aesthetic view.",
  },
  {
    id: "installation-turnaround",
    question: "What is the standard installation turnaround time across Delhi NCR?",
    answer:
      "Following your free laser measurement, profiles are prefabricated at our Nangloi/Nilothi manufacturing unit. A typical 2-balcony residential apartment takes approximately 4 to 6 hours for complete, tidy, dust-controlled installation. Most projects are completed within 48 to 72 hours of initial site confirmation.",
  },
  {
    id: "rwa-compliance",
    question: "Do invisible grills comply with housing society (RWA) guidelines?",
    answer:
      "Yes. Modern condominium RWAs in Gurugram, Noida, and South Delhi strictly prohibit conventional black iron grilles because they disrupt uniform building elevation aesthetics. Because invisible grills maintain optical transparency from ground level, they are widely approved by residential architect associations and RWAs.",
  },
];

export function useProductFaq(initialOpenId: string = "coastal-durability") {
  const [openItemIds, setOpenItemIds] = useState<string[]>([initialOpenId]);

  const toggleItem = useCallback((id: string) => {
    setOpenItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const isOpen = useCallback(
    (id: string) => openItemIds.includes(id),
    [openItemIds]
  );

  return {
    items: productFaqData,
    openItemIds,
    toggleItem,
    isOpen,
  };
}

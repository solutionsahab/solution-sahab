// File: src/components/product/pleated-mesh/PleatedMeshFaqSection.tsx
"use client";

import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Does pleated mosquito mesh block natural airflow or darken the room?",
    a: "No. Our pleated mesh utilizes an optimized 18x16 weave structure with over 85% open surface porosity. It allows natural cross-ventilation and sunlight to flow freely into your home while creating an impenetrable physical barrier against mosquitoes and insects.",
  },
  {
    q: "How do I clean and maintain pleated mosquito mesh in dusty Delhi weather?",
    a: "Pleated mesh requires minimal maintenance. Because the polyester fibers are PVC-coated, dust does not penetrate the material. You can clean it in minutes using a handheld vacuum with a soft brush nozzle or gently wipe it with a damp microfiber cloth without removing the frame.",
  },
  {
    q: "Can household pets or strong balcony winds damage the mesh?",
    a: "Our mesh is heat-pleated from high-tensile polyester reinforced with internal German Kevlar cords. It withstands pet curiosity and holds firmly inside its aluminum guide tracks against gusty Delhi NCR balcony winds without blowing out or fraying.",
  },
  {
    q: "Can pleated mesh be fitted onto existing UPVC, aluminum, or wooden doors?",
    a: "Yes. Our slim 40mm mounting profiles are custom-machined to install flush against all standard UPVC sliding systems, wooden French doors, and aluminum casement frames without altering your existing glass shutters.",
  },
  {
    q: "How long does measurement and installation take?",
    a: "Our technician visits your home with physical frame color swatches and mesh samples, takes laser measurements, and provides an exact quote. Following confirmation, installation is completed in 2 to 4 hours with clean, dust-controlled tools.",
  },
];

export function PleatedMeshFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full bg-white py-14 sm:py-20 border-b border-neutral-300">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="pb-8 sm:pb-12 border-b border-neutral-300">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-semibold">
            COMMON QUESTIONS
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl m-0 font-body">
            Clear, practical answers regarding pleated mosquito mesh materials, durability, daily cleaning, and installation.
          </p>
        </div>

        {/* Clean Hairline Accordion */}
        <div className="divide-y divide-neutral-300 border-b border-neutral-300">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-gilroy font-bold text-neutral-950 group-hover:text-blue-600 transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`text-xl font-mono text-neutral-400 group-hover:text-blue-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-45 text-blue-600" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-body">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

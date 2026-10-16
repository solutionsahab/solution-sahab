// File: src/components/product/ProductFaqSection.tsx
"use client";

import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What are invisible grills made of, and will they rust in Delhi NCR?",
    a: "Solution Sahab invisible grills are made of authentic AISI 316 Marine Grade stainless steel wires alloyed with 2.5% molybdenum, encased in a transparent UV-stabilized nylon membrane. They are completely rust-proof, weather-resistant, and come with a 5-year.",
  },
  {
    q: "Are invisible grills completely safe for children and pets?",
    a: "Yes. When installed with our standard 50mm (2-inch) spacing pitch, toddlers and pets cannot slip through or get trapped. Each cable is proof-tested to withstand over 400 kgf of lateral force, exceeding Bureau of Indian Standards safety guidelines.",
  },
  {
    q: "Are invisible grills permitted by Housing Societies (RWAs)?",
    a: "Yes. Unlike traditional black iron grills that alter building elevations and are banned by most high-rise societies in Gurgaon, Noida, and South Delhi, invisible grills are transparent from ground level and widely approved by RWAs.",
  },
  {
    q: "How does emergency evacuation work during a fire?",
    a: "Unlike fixed iron bars that trap residents inside, invisible grill cables can be cleanly cut open in under 15 seconds during an emergency using the emergency heavy-duty wire shears provided by Solution Sahab upon installation.",
  },
  {
    q: "How long does measurement and installation take?",
    a: "Our technician visits with physical cable samples, performs laser measurements, and provides an exact per-square-foot quotation. Following site confirmation, installation for a typical 2-balcony flat takes only 4 to 6 hours with clean, dust-controlled drilling by our in-house technicians.",
  },
];

export function ProductFaqSection() {
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
            Clear, honest answers regarding invisible grill materials, safety standards, society permissions, and installation.
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

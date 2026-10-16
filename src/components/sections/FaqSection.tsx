// File: src/components/sections/FaqSection.tsx
"use client";

import React from "react";
import { useFaqState, FaqItem } from "@/lib/state/faq-state";
import { CONTACT_INFO } from "@/const";
import Link from "next/link";

const FAQ_ITEMS: FaqItem[] = [
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
      "No. We use genuine AISI 316 marine-grade stainless steel with protective nylon coating. Every installation comes with a signed 10-year anti-rust warranty card.",
  },
  {
    id: 4,
    question: "Do high-rise society RWAs and builders allow invisible grills?",
    answer:
      "Yes. Most societies across Gurugram, Noida, and Delhi (DLF, ATS, Godrej, Gaur, etc.) ban bulky iron grills to protect building facades, but approve invisible grills because they keep the exterior look unchanged.",
  },
  {
    id: 5,
    question: "Does the pleated mosquito mesh come off track in strong winds?",
    answer:
      "No. Our pleated mesh glides on high-tension guide cords with a flat 3mm bottom track and magnetic latches, keeping it secure during dust storms and monsoons.",
  },
  {
    id: 6,
    question: "How long does measurement and installation take?",
    answer:
      "Our engineer visits your home free of charge within 24 hours with material samples (takes 20 minutes). Once confirmed, installation is completed in 3 to 5 hours.",
  },
];

export function FaqSection() {
  const { isOpen, toggleItem } = useFaqState(1, false);

  return (
    <section
      className="w-full py-16 sm:py-24 border-b border-neutral-300 scroll-mt-28"
      id="faqs"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 4 Columns: Title + Direct Call */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-semibold text-neutral-950 tracking-tight m-0"
            >
              Common Questions
            </h2>
            <p className="text-sm text-neutral-600 mt-3 mb-6 leading-relaxed">
              Clear answers on safety, RWA approval, warranty, and installation across Delhi NCR.
            </p>

            <div className="pt-5 border-t border-neutral-300">
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 m-0 mb-2">
                Need a custom quote?
              </p>
              <div className="flex flex-col"><Link
                href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-neutral-950 underline underline-offset-4 hover:opacity-70"
              >
                <span>Call {CONTACT_INFO.PHONE_PRIMARY}</span>

              </Link>
                <Link
                  href={`tel:${CONTACT_INFO.PHONE_ALT_1_RAW}`}
                  className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-neutral-950 underline underline-offset-4 hover:opacity-70"
                >
                  <span>Call {CONTACT_INFO.PHONE_ALT_1}</span>

                </Link>
                <Link
                  href={`tel:${CONTACT_INFO.PHONE_ALT_2_RAW}`}
                  className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-neutral-950 underline underline-offset-4 hover:opacity-70"
                >
                  <span>Call {CONTACT_INFO.PHONE_ALT_2}</span>

                </Link>

              </div>

            </div>
          </div>

          {/* Right 8 Columns: Flush Hairline Accordion List */}
          <div
            className="lg:col-span-8 border-t border-b border-neutral-300 divide-y divide-neutral-300"
            id="faq-container"
          >
            {FAQ_ITEMS.map((item, idx) => {
              const itemOpen = isOpen(item.id);
              return (
                <div key={item.id} className="bg-transparent">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={itemOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full text-left py-5 sm:py-6 flex items-start justify-between gap-6 focus:outline-none group"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono text-neutral-400 shrink-0">
                        0{idx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-950 group-hover:opacity-75 transition-opacity m-0 leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <span
                      className="text-xl font-mono text-neutral-500 leading-none shrink-0 mt-0.5 select-none"
                      aria-hidden="true"
                    >
                      {itemOpen ? "−" : "+"}
                    </span>
                  </button>

                  {itemOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      className="pb-6 pl-8 sm:pl-9 pr-6 text-sm sm:text-base text-neutral-600 leading-relaxed"
                    >
                      <p className="m-0">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
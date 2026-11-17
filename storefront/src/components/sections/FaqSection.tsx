// File: src/components/sections/FaqSection.tsx
"use client";

import React from "react";
import { useFaqState, FaqItem } from "@/lib/state/faq-state";
import { CONTACT_INFO } from "@/lib/constants";
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
    question: "Does the pleated mosquito mesh come off track in strong winds?",
    answer:
      "No. Our pleated mesh glides on high-tension guide cords with a flat 3mm bottom track and magnetic latches, keeping it secure during dust storms and monsoons.",
  },
  {
    id: 6,
    question: "How long does measurement and installation take?",
    answer:
      "Our engineer visits your home with material samples. Once confirmed, installation is completed cleanly in a short time.",
  },
];

export interface FaqSectionProps {
  items?: FaqItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  id?: string;
}

export function FaqSection({
  items,
  title = "Common Questions",
  description = "Clear answers on safety, RWA approval, warranty, and installation across Delhi NCR.",
  id = "faqs",
}: FaqSectionProps = {}) {
  const activeItems = items && items.length > 0 ? items : FAQ_ITEMS;
  const firstItemId = activeItems[0]?.id ?? 1;
  const { isOpen, toggleItem } = useFaqState(firstItemId, false);

  return (
    <section
      className="w-full bg-white py-12 sm:py-14 lg:py-16 scroll-mt-28"
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      {/* Product pages emit their FAQ schema via ProductStructuredData; only the default (home) list needs it here. */}
      {activeItems === FAQ_ITEMS && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            }),
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left 4 Columns: Title + Direct Call */}
          <div className="reveal lg:col-span-4 lg:sticky lg:top-28">
            <h2
              id={`${id}-heading`}
              className="text-3xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight leading-[1.05] m-0"
            >
              {title}
            </h2>
            <p className="text-neutral-600 mt-4 mb-6 leading-relaxed">
              {description}
            </p>

            <div className="rounded-[1.5rem] bg-[#1B4D8E] text-white p-6">
              <p className="text-sm font-semibold text-white/75 m-0 mb-3">
                Need a custom quote?
              </p>
              <div className="flex flex-col"><Link
                href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                className="py-0.5 -my-0.5 inline-flex items-center gap-2 text-base font-semibold tabular-nums text-white hover:underline underline-offset-4"
              >
                <span>Call {CONTACT_INFO.PHONE_PRIMARY}</span>

              </Link>
                <Link
                  href={`tel:${CONTACT_INFO.PHONE_ALT_1_RAW}`}
                  className="py-0.5 -my-0.5 inline-flex items-center gap-2 text-base font-semibold tabular-nums text-white hover:underline underline-offset-4"
                >
                  <span>Call {CONTACT_INFO.PHONE_ALT_1}</span>

                </Link>
                <Link
                  href={`tel:${CONTACT_INFO.PHONE_ALT_2_RAW}`}
                  className="py-0.5 -my-0.5 inline-flex items-center gap-2 text-base font-semibold tabular-nums text-white hover:underline underline-offset-4"
                >
                  <span>Call {CONTACT_INFO.PHONE_ALT_2}</span>

                </Link>

              </div>

            </div>
          </div>

          {/* Right 8 Columns: Flush Hairline Accordion List */}
          <div
            className="lg:col-span-8 flex flex-col gap-3"
            id="faq-container"
          >
            {activeItems.map((item, idx) => {
              const itemOpen = isOpen(item.id);
              return (
                <div key={item.id} className={`rounded-[1.25rem] px-5 sm:px-7 transition-colors ${itemOpen ? "bg-[#1B4D8E]/[0.06] ring-1 ring-[#1B4D8E]/20" : "bg-[#F3F6FB] hover:bg-[#E8EEF7]"}`}>
                  {/* Heading wraps the button (a heading inside a button is invalid and hidden from screen-reader heading lists) */}
                  <h3 className="m-0">
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={itemOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      className="w-full text-left py-5 sm:py-6 flex items-start justify-between gap-6 rounded-[1.25rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-xs font-gilroy font-extrabold text-[#1B4D8E] shrink-0" aria-hidden="true">
                          {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
                        </span>
                        <span className="text-base sm:text-lg font-bold font-gilroy text-neutral-950 group-hover:text-[#1B4D8E] transition-colors leading-snug">
                          {item.question}
                        </span>
                      </span>

                      <span
                        className={`text-xl text-neutral-500 leading-none shrink-0 mt-0.5 select-none motion-safe:transition-transform duration-300 ${itemOpen ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  {/* Always in the HTML (hidden when closed) so search engines read every answer */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    hidden={!itemOpen}
                    className="pb-6 pl-8 sm:pl-9 pr-6 text-sm sm:text-base text-neutral-700 leading-relaxed"
                  >
                    <p className="m-0">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { useFaqState, FaqItem } from "@/lib/state/faq-state";

export function FaqSection() {
  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "Are invisible grills safe for small children and pets?",
      answer:
        "Yes. We use 316 marine-grade steel cables rated over 400kg, spaced at 2 inches (50mm) or 3 inches (75mm) — too narrow for a child's head or a cat to slip through.",
    },
    {
      id: 2,
      question: "What happens in a fire? Can the cables be cut?",
      answer:
        "Yes. Unlike welded iron bars, the cables can be cut through with wire shears in seconds, so the balcony stays an exit route. We hand over a cutter kit with every job.",
    },
    {
      id: 3,
      question: "Does pleated mesh jam or tear easily?",
      answer:
        "No. The mesh runs on high-tension cords through each fold, on a low 3mm track with magnetic catches — it glides with one finger and stays on track in balcony wind.",
    },
    {
      id: 4,
      question: "How long do the grills last, and what is covered?",
      answer:
        "The steel doesn't rust, so there is nothing to repaint. Every job carries a written 10-year anti-rust warranty plus a free tension check in the first year.",
    },
    {
      id: 5,
      question: "Which areas do you visit for free?",
      answer:
        "Delhi, Noida, Greater Noida, Gurugram, Ghaziabad and Faridabad — including Dwarka, Saket, DLF phases, Golf Course Road, Sohna Road, Noida Extension and Indirapuram.",
    },
  ];

  const { isOpen, toggleItem } = useFaqState(1, false);

  return (
    <section
      className="w-full py-14 sm:py-20 bg-white scroll-mt-28"
      id="faqs"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="kicker text-ink">Questions, answered</span>
          <h2
            id="faq-heading"
            className="font-display-serif text-3xl sm:text-4xl text-ink mt-3"
          >
            Asked on almost every visit
          </h2>
          <p className="font-body-lg text-body-lg text-ink-soft max-w-xl mt-3 mb-0">
            The five things customers ask before booking — answered straight.
          </p>
        </div>

        <div className="space-y-4" id="faq-container">
          {faqItems.map((item) => {
            const itemOpen = isOpen(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm transition-all border border-ink/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={itemOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded-2xl"
                >
                  <h3 className="font-headline-sm text-headline-sm text-ink font-bold">
                    {item.question}
                  </h3>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-200 shrink-0 ${
                      itemOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>
                {itemOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-6 pb-6 pt-0 font-body-md text-body-md text-ink-soft border-t border-ink/10 mt-2"
                  >
                    <p className="pt-3">{item.answer}</p>
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

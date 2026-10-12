"use client";

import React from "react";
import { useProductFaq } from "@/lib/state/product-faq-state";

export function ProductFaqSection() {
  const { items, isOpen, toggleItem } = useProductFaq("coastal-durability");

  return (
    <section className="w-full bg-white py-8 sm:py-12 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-6 sm:mb-8 max-w-2xl">
          <span className="kicker text-ink">Good to know</span>
          <h2 className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-3">
            Questions we hear on visits
          </h2>
          <p className="font-body-md text-body-md text-ink-soft m-0 max-w-xl">
            Cable life, birds, and what housing societies usually ask.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 sm:gap-4">
          {items.map((faq) => {
            const open = isOpen(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-paper rounded-xl border border-ink/10 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-headline-sm text-base sm:text-headline-sm font-semibold text-ink gap-4 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-xl"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={open}
                  aria-controls={`product-faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-200 shrink-0 ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>
                {open && (
                  <div
                    className="px-4 pb-4 sm:px-5 sm:pb-5 font-body-md text-sm sm:text-body-md text-ink-soft leading-relaxed border-t border-ink/10 pt-3"
                    id={`product-faq-answer-${faq.id}`}
                  >
                    {faq.answer}
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

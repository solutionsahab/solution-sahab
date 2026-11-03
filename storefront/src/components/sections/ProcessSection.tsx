import React from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Reach out via WhatsApp or book a doorstep visit anywhere in Delhi NCR.",
  },
  {
    number: "02",
    title: "Get Your Estimate",
    description:
      "We take exact measurements, show you material samples, and give a clear, fixed quote.",
  },
  {
    number: "03",
    title: "Easy Installation",
    description:
      "Our in-house team installs your system cleanly in a few hours, backed by a 5-year warranty.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="w-full py-16 sm:py-20  border-b border-neutral-300 scroll-mt-28"
      id="how-it-works"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Simple Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-neutral-300">
          <div>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-semibold text-neutral-950 tracking-tight m-0"
            >
              How It Works
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Button href="#quick-booking" variant="primary" size="md">
              Book Site Visit
            </Button>
            <Button
              href={CONTACT_INFO.WHATSAPP_URL}
              variant="outline"
              size="md"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* 3 Simple Steps in a Clean Light Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-300 border-b border-neutral-300">
          {STEPS.map((step) => (
            <div key={step.number} className="py-8 md:px-8 first:md:pl-0 last:md:pr-0">
              <span className="block text-xs font-gilroy font-extrabold uppercase tracking-widest text-[#1B4D8E] mb-3">
                Step {step.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-gilroy text-neutral-950 tracking-tight m-0 mb-2">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed m-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
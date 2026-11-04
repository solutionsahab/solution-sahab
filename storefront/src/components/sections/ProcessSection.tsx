import React from "react";

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
      className="w-full py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28"
      id="how-it-works"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          id="process-heading"
          className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0 mb-6"
        >
          How It Works
        </h2>

        {/* 3 compact numbered steps: a row on desktop, stacked on phones */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 list-none m-0 p-0">
          {STEPS.map((step, index) => (
            <li key={step.number} className="flex gap-3">
              <span
                className="shrink-0 w-8 h-8 rounded-full bg-[#1B4D8E] text-white text-sm font-gilroy font-extrabold flex items-center justify-center"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold font-gilroy text-neutral-950 tracking-tight m-0 mb-1 leading-8">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed m-0">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

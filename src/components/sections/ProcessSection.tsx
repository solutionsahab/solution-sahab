import React from "react";
import Link from "next/link";

const STEPS = [
  {
    number: "01",
    title: "Send photos",
    description:
      "WhatsApp or call us with rough balcony photos or floor-plan dimensions, and we give a ballpark range on the spot.",
  },
  {
    number: "02",
    title: "Free site visit",
    description:
      "Our engineer comes over with wire and mesh samples, measures the exact spans, and checks what the cables will anchor into.",
  },
  {
    number: "03",
    title: "Fixed written quote",
    description:
      "You get an itemised sheet: material grades, wire spacing, frame shades, and a fixed price. No hidden charges.",
  },
  {
    number: "04",
    title: "Fitted in hours",
    description:
      "Our own crew fits the job in about 3–5 hours, tension-tests every run, and leaves the balcony swept clean.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="w-full py-14 sm:py-20 bg-ink text-white scroll-mt-28"
      id="how-it-works"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="kicker text-white/80">How it works</span>
          <h2
            id="process-heading"
            className="font-display-serif text-3xl sm:text-4xl text-white mt-3 mb-3"
          >
            From a photo to a safe balcony in four steps
          </h2>
          <p className="font-body-lg text-body-lg text-white/70 m-0">
            No outsourced crews — the people who measure are on our payroll,
            and the profiles are cut at our own facility.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 list-none m-0 p-0">
          {STEPS.map((step) => (
            <li key={step.number} className="border-t border-white/20 pt-5">
              <div
                className="font-display-serif text-4xl text-white/90"
                aria-hidden="true"
              >
                {step.number}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-white font-bold mt-2 mb-2">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-white/70 m-0">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 sm:mt-12 rounded-2xl border border-white/25 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          <div className="flex-1">
            <p className="font-label-md text-label-md font-bold uppercase tracking-wider text-white/80 m-0">
              Written warranty
            </p>
            <p className="font-body-lg text-body-lg text-white mt-2 mb-0">
              Every job leaves with a signed 10-year anti-rust card and a
              complimentary tension check in the first year.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-center shrink-0 bg-white text-ink font-label-md text-label-md px-6 py-3.5 rounded-xl font-bold hover:bg-paper transition-colors text-center"
            href="#quick-booking"
          >
            Start with step one
          </Link>
        </div>
      </div>
    </section>
  );
}

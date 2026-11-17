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
      className="w-full bg-[#F3F6FB] py-12 sm:py-14 lg:py-16 scroll-mt-28"
      id="how-it-works"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          id="process-heading"
          className="reveal font-gilroy font-light text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.05] m-0 mb-6 sm:mb-8"
        >
          How it <strong className="font-extrabold">works</strong>
        </h2>

        {/* 3 numbered steps joined by a dashed path on desktop, stacked on phones */}
        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-5 list-none m-0 p-0">
          <span aria-hidden="true" className="hidden md:block absolute left-[16%] right-[16%] top-[3.25rem] border-t-2 border-dashed border-[#1B4D8E]/25" />
          {STEPS.map((step, index) => (
            <li key={step.number} className="reveal relative rounded-[1.75rem] bg-white p-7 shadow-[0_10px_30px_-18px_rgb(15_27_51/0.35)]">
              <span
                className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#1B4D8E] text-white text-lg font-gilroy font-extrabold ring-8 ring-[#1B4D8E]/10"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="text-xl font-extrabold font-gilroy text-neutral-950 tracking-tight m-0 mt-6 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed m-0">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

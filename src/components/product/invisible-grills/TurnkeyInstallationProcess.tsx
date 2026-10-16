// File: src/components/product/TurnkeyInstallationProcess.tsx
import React from "react";

export function TurnkeyInstallationProcess() {
  const steps = [
    {
      num: "01",
      title: "Laser Site Measurement",
      subtitle: "Day 1 · Within 24-48 Hours",
      description:
        "Full-time Solution Sahab technicians visit with digital Leica laser distance meters to inspect beam levels, structural camber, and recommend 2\" or 3\" spacing.",
      highlight: "Physical sample cables demonstrated on-site",
    },
    {
      num: "02",
      title: "Factory Pre-Fabrication",
      subtitle: "Day 2 · In-House Nilothi Plant",
      description:
        "6063-T6 aluminum extrusion tracks are CNC-cut, pre-drilled, and powder-coated to your balcony's exact millimetre dimensions, eliminating noisy site cutting.",
      highlight: "Concealed track snap-on covers pre-matched",
    },
    {
      num: "03",
      title: "Hilti Mount & Tensioning",
      subtitle: "Day 3 · Dust-Controlled On-Site Mount",
      description:
        "Tracks are bolted into structural concrete with Hilti stainless expansion anchors. 316 Marine cables are woven and calibrated using manual torque tensioners.",
      highlight: "Calibrated 400kgf+ mechanical tension lock",
    },
    {
      num: "04",
      title: "Proof Load Sign-Off",
      subtitle: "Day 3 · Same-Day Completion",
      description:
        "Technicians conduct a physical lateral pull-test across all cable spans, hand over emergency wire cutting shears, and issue your 5-Year Warranty card.",
      highlight: "5-Year guarantee",
    },
  ];

  return (
    <section id="installation" className="w-full bg-white py-14 sm:py-20 border-b border-neutral-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-neutral-300 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-semibold">
              TURNKEY DEPLOYMENT PROTOCOL
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0">
              4-Step Precision Installation
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md m-0 leading-relaxed font-body">
            Executed exclusively by our in-house, safety-trained technicians with dustless drilling and zero outside subcontractors.
          </p>
        </div>

        {/* 4-Step Hairline Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-300 border-b border-neutral-300">
          {steps.map((step) => (
            <div key={step.num} className="py-8 sm:py-10 px-0 sm:px-6 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-gilroy font-extrabold text-blue-600">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-gilroy font-bold text-neutral-950 mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body m-0 mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200">
                <span className="text-[11px] font-mono text-neutral-700 font-semibold flex items-center gap-1.5">
                  <span className="text-blue-600">✓</span> {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

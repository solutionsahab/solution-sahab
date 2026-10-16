// File: src/components/product/FunctionalAdvantages.tsx
import React from "react";

export function FunctionalAdvantages() {
  const advantages = [
    {
      icon: "wb_sunny",
      title: "100% Skyline View Intact",
      description:
        "Maintains optical transparency and 98% natural daylight from ground and living areas. No heavy shadow casting or prison-like vertical iron cages.",
      metric: "98% Light Transmission",
    },
    {
      icon: "child_care",
      title: "Toddler & Pet Fall Protection",
      description:
        "Essential protection for high-rise balconies. Strict 50mm (2\") cable spacing prevents toddlers or small pets from slipping through or dropping toys.",
      metric: "400 kgf+ Load Rating",
    },
    {
      icon: "water_drop",
      title: "Zero Rust, Zero Repainting",
      description:
        "Unlike mild steel MS grills that rust every monsoon and require sanding and repainting, AISI 316 Marine Grade wires remain pristine for decades.",
      metric: "5-Year Rust Guarantee",
    },
    {
      icon: "local_fire_department",
      title: "Rapid Fire Emergency Egress",
      description:
        "Conventional iron grills trap occupants during fire hazards. Invisible grill cables can be cleanly severed in under 15 seconds using the included emergency shears.",
      metric: "15-Second Cut Egress",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-neutral-300 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-semibold">
              FUNCTIONAL ADVANTAGES
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0">
              Why High-Rise Residents Choose Invisible Grills
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md m-0 leading-relaxed font-body">
            Engineered to replace unsightly iron cages with architectural elegance, maximum child security, and RWA approval.
          </p>
        </div>

        {/* 4-Column Hairline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-300 border-b border-neutral-300">
          {advantages.map((item, idx) => (
            <div key={idx} className="py-8 sm:py-10 px-0 sm:px-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-lg font-gilroy font-bold text-neutral-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body m-0">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-200">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

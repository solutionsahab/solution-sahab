// File: src/components/product/TechnicalDataSheet.tsx
import React from "react";

export function TechnicalDataSheet() {
  const specs = [
    {
      code: "SPEC-01",
      category: "Cable Composition",
      title: "AISI 316 Marine Grade Stainless Steel",
      description:
        "High-tensile multi-strand wire rope alloyed with 2.5% Molybdenum. Engineered specifically to resist extreme urban smog, acid rain, and photochemical oxidation in Delhi NCR.",
      highlightKey: "Outer Diameter",
      highlightVal: "2.5mm / 3.0mm option",
    },
    {
      code: "SPEC-02",
      category: "Tensile Breaking Load",
      title: "> 400 kgf Proof Tested per Cable",
      description:
        "Tested to withstand severe lateral impact force. Prevents toddlers, teenagers, and pets from bending or squeezing through, exceeding BIS residential standards.",
      highlightKey: "Testing Lab",
      highlightVal: "NABL Certified Static Test",
    },
    {
      code: "SPEC-03",
      category: "Extrusion Track Alloy",
      title: "6063-T6 Virgin Extruded Aluminum",
      description:
        "Heavy-gauge architectural track with concealed snap-on locking covers. Powder coated with AkzoNobel exterior finishes matching UPVC and aluminum window frames.",
      highlightKey: "RAL Finishes",
      highlightVal: "Charcoal, White, Bronze, Silver",
    },
    {
      code: "SPEC-04",
      category: "Child-Safe Spacing",
      title: "50mm (2\") & 75mm (3\") Pitch Geometry",
      description:
        "50mm (2-inch gap) recommended for high-rise homes with toddlers, cats, and small pets. 75mm (3-inch gap) provides elegant boundary security for adult terraces.",
      highlightKey: "Deflection Index",
      highlightVal: "< 15mm under 120kg force",
    },
    {
      code: "SPEC-05",
      category: "Substrate Anchoring",
      title: "Hilti / Fischer Concrete Expansion Bolts",
      description:
        "Direct mechanical anchoring into structural concrete lintels and balcony floor slabs every 200mm c/c. Zero reliance on weak plaster or hollow brickwork.",
      highlightKey: "Anchor Pitch",
      highlightVal: "Every 200mm c/c staggered",
    },
    {
      code: "SPEC-06",
      category: "Fire & Life Safety",
      title: "Rapid Emergency Egress in 15 Seconds",
      description:
        "Unlike fixed iron bars that trap residents during fires, invisible grill cables can be severed in seconds using the complimentary emergency wire cutters provided.",
      highlightKey: "Inclusion",
      highlightVal: "Emergency Cutter Kit Included",
    },
  ];

  const comparisonRows = [
    {
      feature: "Stainless Steel Metallurgy",
      ss316: "AISI 316 Marine Grade (Contains 2.5% Molybdenum)",
      ss304: "Grade 304 / 202 (Zero Molybdenum, high carbon)",
      badge: "Crucial for Delhi NCR",
    },
    {
      feature: "Atmospheric Rust Resistance",
      ss316: "5-Year Rust Warranty (Impervious to smog and monsoon)",
      ss304: "Pitting and orange rust stains appear within 8-14 months",
      badge: "Long-term Value",
    },
    {
      feature: "Tensile Breaking Load",
      ss316: "400 kgf+ certified tensile capacity per strand",
      ss304: "150 - 220 kgf (Often snaps under sudden body impact)",
      badge: "Child Safety",
    },
    {
      feature: "Outer Protective Casing",
      ss316: "Virgin UV-stabilized Nylon/Teflon (won't turn yellow or brittle)",
      ss304: "Recycled PVC sleeve (cracks and clouds in summer heat)",
      badge: "Durability",
    },
    {
      feature: "Mounting Track & Hardware",
      ss316: "6063-T6 Aluminum + Hilti SS mechanical expansion bolts",
      ss304: "Thin sheet metal track + local mild-steel ungalvanized screws",
      badge: "Structural Rigidity",
    },
    {
      feature: "Warranty",
      ss316: "5-Year Direct Guarantee",
      ss304: "No warranty or verbal unbacked promises",
      badge: "Peace of Mind",
    },
  ];

  return (
    <section id="specs" className="w-full bg-white py-14 sm:py-20 border-b border-neutral-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-neutral-300 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-semibold">
              ENGINEERING BENCHMARK &amp; METALLURGY
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0">
              Architectural Specifications &amp; Material Integrity
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md m-0 leading-relaxed font-body">
            Every component engineered for 15+ years of high-rise atmospheric resilience across Delhi NCR — tested for maximum child safety and structural longevity.
          </p>
        </div>

        {/* 6-Grid Hairline Blueprint Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-neutral-300">
          {specs.slice(0, 3).map((spec) => (
            <div key={spec.code} className="py-8 sm:py-10 px-0 md:px-6 lg:px-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    {spec.code}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-200">
                    {spec.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-gilroy font-bold text-neutral-950 mb-3">
                  {spec.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-body m-0">
                  {spec.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-between items-center text-xs">
                <span className="text-neutral-500 font-mono uppercase tracking-wider">{spec.highlightKey}</span>
                <span className="font-gilroy font-bold text-neutral-950">{spec.highlightVal}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-neutral-300">
          {specs.slice(3, 6).map((spec) => (
            <div key={spec.code} className="py-8 sm:py-10 px-0 md:px-6 lg:px-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    {spec.code}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-200">
                    {spec.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-gilroy font-bold text-neutral-950 mb-3">
                  {spec.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-body m-0">
                  {spec.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-between items-center text-xs">
                <span className="text-neutral-500 font-mono uppercase tracking-wider">{spec.highlightKey}</span>
                <span className="font-gilroy font-bold text-neutral-950">{spec.highlightVal}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 316 Marine Grade vs Cheap 304/202 Comparison Matrix */}
        <div className="pt-14 sm:pt-20">
          <div className="mb-6 sm:mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              BUYER'S GUIDE &amp; MATERIAL VERIFICATION
            </span>
            <h3 className="text-xl sm:text-3xl font-gilroy font-extrabold text-neutral-950 mt-1 mb-2">
              Why Genuine 316 Marine Grade Matters in Delhi NCR
            </h3>
            <p className="text-sm text-neutral-600 max-w-3xl m-0 font-body">
              Many local vendors cut costs by selling Grade 304 or 202 wire disguised as invisible grills. Delhi NCR's severe winter smog and high humidity cause cheap wires to develop orange rust and weaken within months.
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-300 bg-neutral-50/50">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-neutral-300 bg-neutral-100 font-mono text-xs uppercase tracking-wider text-neutral-700">
                  <th className="py-3.5 px-4 sm:px-6 font-semibold w-1/4">Evaluation Parameter</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold text-blue-900 bg-blue-50/70 w-2/5 border-l border-r border-blue-200">
                    Solution Sahab (AISI 316 Marine Grade)
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold text-neutral-500 w-1/3">
                    Local Market Grade (304 / 202 Wire)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 font-body">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-white transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-gilroy font-bold text-neutral-950">
                      <div>{row.feature}</div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-0.5 inline-block">
                        {row.badge}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 bg-blue-50/40 text-blue-950 font-semibold border-l border-r border-blue-200">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold shrink-0">✓</span>
                        <span>{row.ss316}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-neutral-600">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold shrink-0">✕</span>
                        <span>{row.ss304}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

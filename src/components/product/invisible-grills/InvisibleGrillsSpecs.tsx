// File: src/components/product/InvisibleGrillsSpecs.tsx

export function InvisibleGrillsSpecs() {
  const specs = [
    { label: "Cable Metallurgy", val: "AISI 316 Marine Grade Stainless Steel" },
    { label: "Cable Diameter", val: "2.5 mm & 3.0 mm Options" },
    { label: "Tensile Breaking Load", val: "400 kgf per Cable (Proof-Tested)" },
    { label: "Outer Protective Sheath", val: "Virgin UV-Stabilized Transparent Nylon / Teflon" },
    { label: "Track Extrusion Profile", val: "6063-T6 Heavy Architectural Aluminum Alloy" },
    { label: "Track Surface Finish", val: "AkzoNobel Exterior Powder Coat (Charcoal, White, Bronze)" },
    { label: "Cable Pitch Options", val: "50 mm (2\") Child-Safe / 75 mm (3\") Standard" },
    { label: "Substrate Anchoring", val: "Hilti / Fischer Stainless Mechanical Expansion Bolts" },
    { label: "Emergency Evacuation", val: "Cuts with wire shears in under 15 seconds" },
    { label: "Written Warranty", val: "5-Year Guarantee" },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Heading & Context (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-4">
              Technical Specification
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0 mb-6">
              Every component used in our invisible grill installations is engineered to withstand extreme high-rise wind loads, rain, and intense summer sun.
            </p>

            <div className="border border-blue-200 bg-blue-50/60 p-5 w-full">
              <span className="text-xs font-bold text-blue-900 block mb-1">
                Grade 316 vs Grade 304/202 Wire
              </span>
              <p className="text-xs text-neutral-700 font-body leading-relaxed m-0">
                Delhi NCR's heavy atmospheric smog and monsoon humidity cause cheap 304 or 202 wire to rust within 8 to 14 months. Solution Sahab uses genuine <strong>AISI 316 Marine Grade wire</strong> alloyed with molybdenum, ensuring it stays rust-free for long time.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Spec Sheet (7 cols) */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200 divide-y divide-neutral-200 bg-neutral-50/40">
              {specs.map((s) => (
                <div key={s.label} className="grid grid-cols-1 sm:grid-cols-12 py-3 px-4 sm:px-5 gap-1 sm:gap-4 text-sm items-baseline">
                  <div className="sm:col-span-5 text-neutral-500 font-medium">
                    {s.label}
                  </div>
                  <div className="sm:col-span-7 font-gilroy font-bold text-neutral-900">
                    {s.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

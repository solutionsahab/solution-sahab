// File: src/components/product/pleated-mesh/PleatedMeshSpecs.tsx
import React from "react";

export function PleatedMeshSpecs() {
  const specs = [
    { label: "Frame Metallurgy", val: "Jindal T6 6063 Architectural Grade Aluminum" },
    { label: "Extrusion Thickness", val: "1.2 mm – 1.4 mm Heavy Wall Profile" },
    { label: "Mesh Material", val: "UV-Stabilized Waterproof PVC-Coated Polyester" },
    { label: "Mesh Pleat Pitch", val: "20 mm Heat-Set Accordion Pleats (Non-Sagging)" },
    { label: "Internal Guide Cords", val: "High-Tensile German Kevlar Wire" },
    { label: "Bottom Track Profile", val: "3 mm Ultra-Low Floor Guide (Barrier-Free)" },
    { label: "Magnetic Latching", val: "Full-Length Neodymium Magnetic Strip" },
    { label: "Surface Finish", val: "AkzoNobel Pure Polyester Powder Coat (White, Charcoal, Bronze, Black)" },
    { label: "Wind Resistance", val: "Tested against 60 km/h high-rise balcony gusts" },
    { label: "Written Warranty", val: "5-Year Direct Manufacturer Guarantee" },
  ];

  return (
    <section className="w-full bg-neutral-50/70 py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Heading & Engineering Context (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-4">
              Technical Specification
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0 mb-6">
              Every pleated mesh system is custom-manufactured at our Nilothi facility using industrial-grade Jindal extrusions and German cord technology.
            </p>

            <div className="border border-blue-200 bg-blue-50/60 p-5 w-full">
              <span className="text-xs font-bold text-blue-900 block mb-1">
                Jindal T6 6063 Aluminum vs Cheap Local Frames
              </span>
              <p className="text-xs text-neutral-700 font-body leading-relaxed m-0">
                Cheap market screens use 0.6mm recycled aluminum profiles and nylon strings that snap within 6 months of Delhi dust exposure. Solution Sahab uses heavy-gauge <strong>Jindal T6 6063 alloy</strong> with <strong>German Kevlar guide cords</strong>, ensuring snag-free glide for years.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Spec Sheet (7 cols) */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200 divide-y divide-neutral-200 bg-white">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-1 sm:grid-cols-12 py-3 px-4 sm:px-5 gap-1 sm:gap-4 text-sm items-baseline"
                >
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

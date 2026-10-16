// File: src/components/product/ArchitecturalTypologies.tsx
import React from "react";
import Image from "next/image";
import { ASSETS } from "@/const";

export function ArchitecturalTypologies() {
  const typologies = [
    {
      title: "High-Rise Balconies",
      badge: "High Demand",
      description:
        "Floor-to-ceiling vertical wire cables anchored into top ceiling lintels and bottom parapet slabs. Full fall security with zero view obstruction.",
      metricLabel: "Recommended Pitch",
      metricValue: "50mm Child-Safe",
      imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
      altText:
        "Modern penthouse balcony with curved glass balustrade outfitted with vertical stainless steel invisible safety grilles overlooking skyline",
    },
    {
      title: "French Windows & Sliders",
      badge: "Residential",
      description:
        "Mounted externally onto window perimeter masonry. Allows sliding and casement glass shutters to operate with 100% natural breeze.",
      metricLabel: "Mounting Style",
      metricValue: "External Masonry Track",
      imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
      altText:
        "Interior architectural master bedroom with large floor to ceiling French windows secured with nearly invisible vertical wire grilles",
    },
    {
      title: "Stairwell Voids & Atriums",
      badge: "Duplex Villas",
      description:
        "Continuous vertical drops guarding multi-story cutouts, open stairways, and duplex mezzanines while preserving natural daylight.",
      metricLabel: "Drop Length",
      metricValue: "Up to 14 Metres Continuous",
      imageUrl: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
      altText:
        "Contemporary multi-level luxury villa duplex interior showing a dramatic three-story stairwell void secured with invisible tension cable screens",
    },
    {
      title: "Open Terraces & Penthouses",
      badge: "Outdoor",
      description:
        "Heavy-duty perimeter demarcation that keeps children, dogs, and monkeys safe on open rooftop terraces, even in high-velocity storm winds.",
      metricLabel: "Wind Rating",
      metricValue: "Monsoon Wind Tested",
      imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
      altText:
        "Rooftop terrace lounge of an upscale urban condominium with invisible wire grilles securing open parapet ledges",
    },
  ];

  return (
    <section id="typologies" className="w-full bg-white py-14 sm:py-20 border-b border-neutral-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-neutral-300 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-semibold">
              ARCHITECTURAL APPLICATION &amp; TYPOLOGIES
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0">
              Engineered for Every Opening Geometry
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md m-0 leading-relaxed font-body">
            Custom extruded tracks flex seamlessly around curved parapets, double-height duplex cutouts, and tight window masonry.
          </p>
        </div>

        {/* 4-Column Hairline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-300 border-b border-neutral-300">
          {typologies.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between py-6 sm:py-8 px-0 sm:px-6">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border border-neutral-200 mb-5">
                  <Image
                    alt={item.altText}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src={item.imageUrl}
                    width={500}
                    height={375}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-neutral-950/80 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-wider font-bold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-gilroy font-bold text-neutral-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body m-0">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                <span className="font-mono uppercase tracking-wider text-neutral-400 text-[11px]">{item.metricLabel}</span>
                <span className="font-gilroy font-bold text-blue-700">{item.metricValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

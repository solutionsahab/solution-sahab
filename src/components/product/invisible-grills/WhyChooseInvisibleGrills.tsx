// File: src/components/product/WhyChooseInvisibleGrills.tsx
import React from "react";
import Image from "next/image";
import { ASSETS } from "@/const";

export function WhyChooseInvisibleGrills() {
  const benefits = [
    {
      title: "Enhanced Safety for Children & Pets",
      description:
        "High-tensile cables hold over 400 kgf load per run. Spaced 2 inches apart, they make it impossible for toddlers to slip through, climb over, or drop items from high-rise balconies.",
    },
    {
      title: "100% Unobstructed Views",
      description:
        "You paid for the view. Invisible grills preserve 98% of natural light and ventilation, so you enjoy the skyline, fresh breeze, and open feel without looking through heavy iron bars.",
    },
    {
      title: "Approved by Society RWAs",
      description:
        "Traditional welded iron cages alter building elevations and are banned in most societies across Gurgaon, Noida, and Delhi. Invisible grills are virtually unseen from the ground and widely approved.",
    },
    {
      title: "Zero Rust, Zero Periodic Repainting",
      description:
        "Mild steel grills rust every monsoon, chipping paint and staining your balcony floor. Grade 316 stainless steel wires remain clean and rust-free year after year with zero maintenance.",
    },
  ];

  return (
    <section className="w-full bg-neutral-50/70 py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Real Balcony Photo (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative border border-neutral-300 bg-white overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] w-full">
              <Image
                alt="Open High-Rise Balcony with Invisible Safety Grills"
                className="w-full h-full object-cover"
                src={ASSETS.TYPOLOGIES.HIGH_RISE}
                width={700}
                height={850}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>

          {/* Right: Clean Human Narrative Benefits (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-4">
              Why Choose Invisible Grills?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0 mb-8 max-w-xl">
              Traditional iron grills turn your balcony into a cage. Invisible grills deliver equal or greater strength while keeping your home bright, airy, and safe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
              {benefits.map((b) => (
                <div key={b.title} className="flex flex-col">
                  <h3 className="text-base sm:text-lg font-gilroy font-bold text-neutral-950 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body m-0">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

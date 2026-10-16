// File: src/components/product/WhatAreInvisibleGrills.tsx
import React from "react";
import { VideoEmbed } from "@/components/common/VideoEmbed";

export function WhatAreInvisibleGrills() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Natural Explanation (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-4">
              What Are Invisible Grills?
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-body m-0 mb-4">
              Invisible grills are the modern replacement for bulky, rusted iron bars. They are made from thin, high-tensile 316 marine-grade stainless steel cables tensioned vertically or horizontally across your balcony, window, or staircase opening.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0 mb-6">
              From inside your room, the cables are so slender that they are barely noticeable, preserving 100% of your open skyline view and natural daylight. Yet, each individual cable is engineered to withstand over 400 kgf of force—making it impossible for toddlers, children, or pets to slip through or bend the wires.
            </p>

            <div className="space-y-3 text-sm text-neutral-800 font-body">
              <div className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <span><strong>Marine Grade 316 Stainless Steel:</strong> Alloyed with 2.5% molybdenum to withstand Delhi NCR's heavy monsoon and smog without rusting.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <span><strong>Child &amp; Pet Safe 2-Inch Pitch:</strong> Close 50mm spacing prevents toddlers from slipping through or dropping toys.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <span><strong>Fire-Safe Emergency Exit:</strong> Unlike welded iron grills that trap occupants, cables can be cut open with shears in 15 seconds.</span>
              </div>
            </div>
          </div>

          {/* Right: Embedded YouTube Video (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border border-neutral-300 bg-neutral-950 overflow-hidden shadow-sm">
              <VideoEmbed
                title="What Are Invisible Grills - Solution Sahab Demonstration"
                videoId="l9bxcYr_hJ0"
                className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] object-cover"
              />
            </div>
            <p className="text-xs text-neutral-500 mt-2 text-center font-sans">
              Live demonstration: Cable strength and view transparency by Solution Sahab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

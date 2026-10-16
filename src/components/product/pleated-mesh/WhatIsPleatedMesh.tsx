// File: src/components/product/pleated-mesh/WhatIsPleatedMesh.tsx
import React from "react";
import { VideoEmbed } from "@/components/common/VideoEmbed";

export function WhatIsPleatedMesh() {
  return (
    <section className="w-full bg-neutral-50/60 py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: SEO Narrative & Technical Highlights (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-4">
              What Is Pleated Mosquito Mesh?
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-body m-0 mb-5">
              Pleated mosquito mesh is an advanced retractable insect screen engineered with a zigzag accordion folding structure. When not in use, the mesh collapses neatly into an ultra-slim side aluminum cassette, preserving 100% of your doorway or window opening.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0 mb-6">
              Unlike fragile velcro nets or bulky hinged wire doors, pleated mesh operates smoothly on high-tension German guide cords and an ultra-low bottom floor track. It stops mosquitoes, houseflies, and dengue-carrying pests without trapping indoor heat or blocking sunlight.
            </p>

            {/* 3 Core Grounded Pillars */}
            <div className="flex flex-col gap-3.5 w-full">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-gilroy font-bold text-neutral-950 m-0">
                    Space-Saving Zigzag Retraction
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-body m-0 mt-0.5">
                    Folds into a sleek 40mm aluminum jamb, leaving balconies, patios, and French doors completely unobstructed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-gilroy font-bold text-neutral-950 m-0">
                    Tear-Resistant PVC-Coated Polyester
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-body m-0 mt-0.5">
                    Heat-set pleats hold their sharp shape through monsoons, pet scratches, and intense Delhi heat without sagging or tearing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-gilroy font-bold text-neutral-950 m-0">
                    Barrier-Free 3mm Bottom Guide
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-body m-0 mt-0.5">
                    Ultra-flat threshold track eliminates tripping hazards, ensuring effortless passage for children, seniors, and wheelchairs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Embedded YouTube Video (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border border-neutral-300 bg-neutral-950 overflow-hidden shadow-sm">
              <VideoEmbed
                title="Pleated Mosquito Mesh Demonstration - Solution Sahab"
                videoId="YmD4BqrmkYE"
                className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] object-cover"
              />
            </div>
            <p className="text-xs text-neutral-500 mt-2 text-center font-sans">
              Live demonstration: Smooth accordion glide and insect protection by Solution Sahab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

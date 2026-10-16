// File: src/components/product/pleated-mesh/WhereCanYouInstallMesh.tsx
import React from "react";
import Image from "next/image";
import { ASSETS } from "@/const";

export function WhereCanYouInstallMesh() {
  const applications = [
    {
      title: "Sliding Balcony Doors",
      description:
        "Mounts directly alongside existing 2-track or 3-track UPVC and aluminum sliding patio doors. Allows you to keep glass doors fully open for breeze while staying 100% insect-protected.",
      imageUrl: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
      alt: "Pleated mosquito mesh installed on sliding balcony doors in Delhi NCR flat",
    },
    {
      title: "French Windows & Casements",
      description:
        "Sits flush within the interior or exterior window reveal. Ideal for bedroom windows, kitchen ventilation openings, and casement windows opening outward.",
      imageUrl: ASSETS.GALLERY.NOIDA_VILLA,
      alt: "Pleated insect screen fitted on bedroom French window",
    },
    {
      title: "Main Entrance Doors",
      description:
        "Equipped with our 3mm ultra-low threshold track that eliminates trip hazards. Keeps flies and mosquitoes out when the main wooden door is opened for greeting guests or cross-ventilation.",
      imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
      alt: "Barrier-free pleated mosquito mesh on apartment main entrance door",
    },
    {
      title: "Wide Span Terraces & Patios",
      description:
        "Available in center-closing double shutter configurations spanning up to 14 feet. Perfectly suited for villas, penthouses, and farmhouses across Delhi NCR.",
      imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
      alt: "Double shutter wide pleated mosquito mesh installed on rooftop terrace door",
    },
  ];

  return (
    <section className="w-full bg-neutral-50/70 py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-3">
            Where Can You Install Pleated Mosquito Mesh?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0">
            Our modular aluminum tracks can be retrofitted onto existing UPVC, aluminum, or wooden door and window frames without masonry damage.
          </p>
        </div>

        {/* 4 Clean Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <div
              key={app.title}
              className="bg-white border border-neutral-200 overflow-hidden flex flex-col shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full bg-neutral-100 border-b border-neutral-200 overflow-hidden">
                <Image
                  alt={app.alt}
                  className="w-full h-full object-cover"
                  src={app.imageUrl}
                  width={500}
                  height={375}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow justify-start">
                <h3 className="text-base font-gilroy font-bold text-neutral-950 mb-2">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body m-0">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

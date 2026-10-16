// File: src/components/product/pleated-mesh/WhyChoosePleatedMesh.tsx
import React from "react";
import Image from "next/image";
import { ASSETS } from "@/const";

export function WhyChoosePleatedMesh() {
  const benefits = [
    {
      title: "100% Mosquito & Dengue Defense",
      description:
        "Tightly woven 18x16 mesh density bars mosquitoes, houseflies, gnats, and lizards from entering, protecting your family from dengue and malaria while keeping doors open for fresh air.",
    },
    {
      title: "Smooth One-Touch Operation",
      description:
        "High-tension German Kevlar guide cords ensure smooth glide with a gentle push. Equipped with full-length magnetic latches that snap shut securely and prevent accidental blow-open in heavy winds.",
    },
    {
      title: "Zero Clutter & Space Saving",
      description:
        "Unlike bulky hinged screen doors that collide with curtains, sofa arms, or balcony chairs, pleated mesh retracts flat against the wall jamb, consuming zero indoor floor space.",
    },
    {
      title: "Architectural Color Matching",
      description:
        "Heavy-gauge aluminum tracks are powder-coated to seamlessly match your existing UPVC, wooden, or dark aluminum window frames in White, Charcoal, Walnut Bronze, and Matte Black.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Real Window Installation Photo (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative border border-neutral-300 bg-white overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] w-full">
              <Image
                alt="Pleated mosquito mesh installed on bedroom window by Solution Sahab"
                className="w-full h-full object-cover"
                src={ASSETS.GALLERY.NOIDA_VILLA}
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
              Why Choose Pleated Mosquito Mesh?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0 mb-8 max-w-xl">
              Traditional fixed wooden frames and velcro nets collect dust, sag, and ruin modern interior aesthetics. Pleated mesh provides a sleek, retractable alternative designed for easy daily living.
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

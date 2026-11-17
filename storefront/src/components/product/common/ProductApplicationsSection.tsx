// File: src/components/product/common/ProductApplicationsSection.tsx
import React from "react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";

export interface ApplicationAreaItem {
  title: string;
  desc: string;
  imageUrl: string;
  alt: string;
}

export interface ProductApplicationsSectionProps {
  title?: string;
  subtitle?: string;
  areas: ApplicationAreaItem[];
}

export function ProductApplicationsSection({
  title = "Where Can You Install This?",
  subtitle = "Custom fabricated to adapt to any opening geometry, from narrow window frames to expansive high-rise balconies.",
  areas,
}: ProductApplicationsSectionProps) {
  return (
    <section className="w-full bg-[#F3F6FB] py-12 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal max-w-3xl mb-6 sm:mb-8">
          <h2 className="font-gilroy font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.08] m-0 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body m-0">
            {subtitle}
          </p>
        </div>

        {/* One-row swipe carousel (CSS scroll-snap): phones peek the next card, desktop fits 4 */}
        <Carousel label={title} className="flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {areas.map((area) => (
            <figure
              key={area.title}
              className="group relative m-0 shrink-0 snap-start w-[80%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)] min-h-[340px] sm:min-h-[400px] flex flex-col justify-end rounded-[1.5rem] overflow-hidden bg-neutral-200 isolate"
            >
              <Image
                alt={area.alt}
                className="-z-10 object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-105"
                src={area.imageUrl}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 80vw, (max-width: 1023px) 50vw, 25vw"
              />
              <figcaption className="m-3 rounded-2xl bg-white/95 backdrop-blur p-4">
                <h3 className="text-lg font-gilroy font-extrabold text-neutral-950 m-0 mb-1">
                  {area.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-body m-0">
                  {area.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

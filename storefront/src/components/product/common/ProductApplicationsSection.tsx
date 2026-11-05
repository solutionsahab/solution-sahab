// File: src/components/product/common/ProductApplicationsSection.tsx
import React from "react";
import Image from "next/image";

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
    <section className="w-full bg-white py-10 sm:py-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-6">
          <h2 className="text-2xl sm:text-3xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0">
            {subtitle}
          </p>
        </div>

        {/* One-row swipe carousel (CSS scroll-snap): phones peek the next card, desktop fits 4 */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {areas.map((area) => (
            <div
              key={area.title}
              className="shrink-0 snap-start w-[80%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)] border border-neutral-200 bg-neutral-50/50 p-4 flex flex-col"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 border border-neutral-200 mb-3">
                  <Image
                    alt={area.alt}
                    className="w-full h-full object-cover"
                    src={area.imageUrl}
                    width={450}
                    height={340}
                    loading="lazy"
                    sizes="(max-width: 640px) 80vw, (max-width: 1023px) 50vw, 25vw"
                  />
                </div>

                <h3 className="text-base font-gilroy font-bold text-neutral-950 mb-1">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body m-0">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

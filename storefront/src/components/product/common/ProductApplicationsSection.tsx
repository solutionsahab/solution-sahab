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
    <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0">
            {subtitle}
          </p>
        </div>

        {/* 4-Item Visual Grid with Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="border border-neutral-200 bg-neutral-50/50 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 border border-neutral-200 mb-4">
                  <Image
                    alt={area.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    src={area.imageUrl}
                    width={450}
                    height={340}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <h3 className="text-lg font-gilroy font-bold text-neutral-950 mb-2">
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

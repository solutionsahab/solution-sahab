// File: src/components/product/common/ProductBenefitsSection.tsx
import React from "react";
import Image from "next/image";

export interface ProductBenefitItem {
  title: string;
  description: string;
}

export interface ProductBenefitsSectionProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  benefits: ProductBenefitItem[];
}

export function ProductBenefitsSection({
  title,
  subtitle,
  image,
  imageAlt,
  benefits,
}: ProductBenefitsSectionProps) {
  return (
    <section className="w-full bg-neutral-50/70 py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Real Photo (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative border border-neutral-300 bg-white overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] w-full">
              <Image
                alt={imageAlt}
                className="w-full h-full object-cover"
                src={image}
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
              {title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0 mb-8 max-w-xl">
              {subtitle}
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

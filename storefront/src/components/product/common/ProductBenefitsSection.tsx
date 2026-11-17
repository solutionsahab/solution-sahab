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
    <section className="w-full bg-[#F3F6FB] py-12 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Real photo with an indigo outline block offset behind it */}
          <div className="reveal lg:col-span-5 order-2 lg:order-1">
            <div className="relative w-full max-w-[520px] mx-auto pl-5 pt-5">
              <div aria-hidden="true" className="absolute left-0 top-0 w-[85%] h-[85%] rounded-[2rem] border-2 border-[#1B4D8E]/40" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl bg-white">
                <Image
                  alt={imageAlt}
                  className="object-cover"
                  src={image}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <h2 className="reveal font-gilroy font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.08] m-0 mb-4">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body m-0 mb-8 max-w-xl">
              {subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {benefits.map((b) => (
                <div key={b.title} className="reveal flex flex-col rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_-18px_rgb(15_27_51/0.35)]">
                  <span className="material-symbols-outlined flex! h-10 w-10 items-center justify-center rounded-full bg-[#1B4D8E]/10 text-[#1B4D8E] text-[20px]! mb-4" aria-hidden="true">
                    task_alt
                  </span>
                  <h3 className="text-lg font-gilroy font-extrabold text-neutral-950 m-0 mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-body m-0">
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

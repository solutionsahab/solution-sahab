// File: src/components/product/common/ProductUseCaseLinks.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface UseCaseLinkItem {
  title: string;
  desc: string;
  href: string;
  imageUrl: string;
  alt: string;
}

export interface ProductUseCaseLinksProps {
  title?: string;
  subtitle?: string;
  items: UseCaseLinkItem[];
}

export function ProductUseCaseLinks({
  title = "Built for Every Kind of Building",
  subtitle = "See how we plan installations for specific buildings and the people who use them.",
  items,
}: ProductUseCaseLinksProps) {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal max-w-3xl mb-6 sm:mb-8">
          <h2 className="font-gilroy font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.08] m-0 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body m-0">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-[1.75rem] bg-[#F3F6FB] p-3 transition-[transform,box-shadow,background-color] duration-300 hover:bg-white motion-safe:hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgb(27_77_142/0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D8E]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-neutral-200">
                <Image
                  alt={item.alt}
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-105"
                  src={item.imageUrl}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="px-2 pt-4 pb-2 flex flex-col flex-1">
                <h3 className="text-xl font-gilroy font-extrabold text-neutral-950 m-0 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-body m-0 mb-4">
                  {item.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#1B4D8E]" aria-hidden="true">
                  Learn more
                  <span className="material-symbols-outlined flex! h-8 w-8 items-center justify-center rounded-full bg-[#1B4D8E]/10 text-[18px]! transition-colors group-hover:bg-[#1B4D8E] group-hover:text-white">
                    chevron_right
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

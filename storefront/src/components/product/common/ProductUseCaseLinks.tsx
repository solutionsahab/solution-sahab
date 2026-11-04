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
    <section className="w-full bg-neutral-50 py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-neutral-200 bg-white p-4 flex flex-col hover:border-blue-600 transition-colors"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 border border-neutral-200 mb-4">
                <Image
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={item.imageUrl}
                  width={450}
                  height={340}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-gilroy font-bold text-neutral-950 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body m-0">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// File: src/components/common/PageHero.tsx
import React from "react";
import Image from "next/image";
import { Breadcrumbs, type Crumb } from "@/components/common/Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  image?: { src: string; alt: string };
  children?: React.ReactNode;
  /** Tighter text-only hero for info pages */
  compact?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
  children,
  compact = false,
}: PageHeroProps) {
  if (compact) {
    return (
      <section className="w-full border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-5 sm:pt-6 pb-10 sm:pb-12">
          <Breadcrumbs items={breadcrumbs} className="mb-4" />
          <div className="max-w-3xl">
            {/* {eyebrow && (
              <span className="kicker text-primary">{eyebrow}</span>
            )} */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight leading-[1.08] m-0">
              {title}
            </h1>
            {description && (
              <p className="mt-3 mb-0 text-base text-neutral-700 leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-5">{children}</div>}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="w-full relative overflow-hidden border-b border-neutral-200 bg-white">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-5 sm:pt-6 pb-10 sm:pb-12">
        <Breadcrumbs items={breadcrumbs} className="mb-4" />

        <div
          className={`grid grid-cols-1 gap-6 lg:gap-10 items-center ${
            image ? "lg:grid-cols-12" : ""
          }`}
        >
          <div className={image ? "lg:col-span-7" : "lg:col-span-12"}>
            {eyebrow && (
              <span className="block mb-2 text-xs font-gilroy font-extrabold uppercase tracking-widest text-[#1B4D8E]">
                {eyebrow}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight leading-[1.08] m-0">
              {title}
            </h1>
            {description && (
              <p className="mt-3 mb-0 max-w-3xl text-base text-neutral-700 leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-5">{children}</div>}
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[16/10] overflow-hidden border border-neutral-200 bg-neutral-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

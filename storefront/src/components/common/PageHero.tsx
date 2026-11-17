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
  title,
  description,
  breadcrumbs,
  image,
  children,
}: PageHeroProps) {
  // eyebrow and compact stay in the props for existing callers; the label is no longer shown
  return (
    <section className="w-full relative overflow-hidden bg-[#F3F6FB]">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-8 sm:pb-12">
        <Breadcrumbs items={breadcrumbs} />

        <div className={`mt-8 grid grid-cols-1 gap-12 lg:gap-10 items-center ${image ? "lg:grid-cols-12" : ""}`}>
          <div className={image ? "lg:col-span-6" : "max-w-4xl"}>
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-gilroy font-extrabold text-neutral-950 tracking-tight leading-[1.04] m-0">
              {title}
            </h1>
            {description && (
              <p className="mt-5 mb-0 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-6">{children}</div>}
          </div>

          {image && (
            <div className="lg:col-span-6">
              <div className="relative mx-auto lg:mr-0 w-full max-w-[580px] pb-6 pr-4 sm:pr-6">
                <div aria-hidden="true" className="absolute right-0 top-10 bottom-0 w-[72%] rounded-[2rem] bg-[#1B4D8E]" />
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] bg-neutral-200 shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

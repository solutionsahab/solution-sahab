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
      <section className="w-full border-b border-ink/10 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-8 sm:pt-8 sm:pb-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-4 max-w-3xl">
            {/* {eyebrow && (
              <span className="kicker text-primary">{eyebrow}</span>
            )} */}
            <h1 className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-0">
              {title}
            </h1>
            {description && (
              <p className="mt-3 font-body-lg text-body-lg text-ink-soft leading-relaxed mb-0">
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="w-full relative overflow-hidden border-b border-ink/10 bg-paper">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12">
        <Breadcrumbs items={breadcrumbs} />

        <div
          className={`mt-5 sm:mt-7 grid grid-cols-1 gap-8 lg:gap-12 items-center ${
            image ? "lg:grid-cols-12" : ""
          }`}
        >
          <div className={image ? "lg:col-span-7" : "lg:col-span-12"}>
            {eyebrow && (
              <span className="kicker text-primary">
                {eyebrow}
              </span>
            )}
            <h1 className="font-display-serif text-4xl sm:text-5xl text-ink mt-3 mb-0 leading-[1.1]">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-3xl font-body-lg text-body-lg text-ink-soft leading-relaxed mb-0">
                {description}
              </p>
            )}
            {children}
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
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

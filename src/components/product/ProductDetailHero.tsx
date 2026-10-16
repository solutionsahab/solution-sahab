// File: src/components/product/ProductDetailHero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductDetailHeroProps {
  name: string;
  intro: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function ProductDetailHero({
  name,
  intro,
  imageUrl,
  imageAlt,
}: ProductDetailHeroProps) {
  return (
    <section className="w-full bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-10 pb-4 sm:pb-6">
        <div
          className={`grid grid-cols-1 ${imageUrl ? "lg:grid-cols-2" : "max-w-4xl"
            } gap-10 lg:gap-14 items-center`}
        >
          <div className="flex flex-col gap-5">
            <span className="kicker text-primary">
              Made and fitted in Delhi NCR
            </span>
            <h1 className="font-display-serif text-4xl sm:text-5xl text-ink leading-[1.08] m-0">
              {name}
            </h1>
            <p className="font-body-lg text-body-lg text-ink-soft leading-relaxed m-0">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-2">
              <Link
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3.5 rounded-xl transition-colors font-bold shadow-sm text-center"
                href="/#quick-booking"
              >
                Book a  site visit
              </Link>
              <a
                className="font-label-md text-label-md font-semibold text-ink hover:text-primary transition-colors text-center sm:text-left"
                href="tel:+919971143143"
              >
                or call 99711 43143
              </a>
            </div>
          </div>

          {imageUrl && (
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-paper-deep border border-ink/10 shadow-xl">
              <Image
                alt={imageAlt || name}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={imageUrl}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

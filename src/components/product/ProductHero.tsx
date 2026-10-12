// File: src/components/product/ProductHero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACT_INFO } from "@/const";

export function ProductHero() {
  const heroImageUrl = ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS;

  return (
    <section className="w-full bg-white pt-6 sm:pt-8 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            <span className="kicker text-primary">
              Balcony safety, Delhi NCR
            </span>

            <h1 className="font-display-serif text-4xl sm:text-5xl text-ink leading-[1.1] m-0">
              Invisible grills for modern balconies
            </h1>

            <p className="font-body-lg text-body-md sm:text-body-lg text-ink-soft max-w-2xl leading-relaxed m-0">
              316-grade steel cables, tensioned and fitted to your openings —
              the view stays, the worry goes. Safe for children and pets.
            </p>

            <p className="font-body-md text-body-md text-ink-soft m-0">
              316-grade wire · 400 kgf+ a run · 10-year warranty · cuts open
              in seconds
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 pt-3">
              <Link
                className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3.5 rounded-xl font-label-md text-label-md font-bold shadow-md hover:bg-primary-container transition-colors text-center"
                href="#booking-section"
              >
                Book a free site visit
              </Link>
              <a
                className="font-label-md text-label-md font-semibold text-ink hover:text-primary transition-colors text-center sm:text-left"
                href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
              >
                or call {CONTACT_INFO.PHONE_PRIMARY}
              </a>
            </div>
          </div>

          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-paper-deep aspect-[4/5] w-full">
              <Image
                alt="High-rise balcony fitted with thin vertical grill cables"
                className="w-full h-full object-cover"
                src={heroImageUrl}
                width={800}
                height={1000}
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <p className="font-label-sm text-label-sm text-ink-soft mt-2 mb-0">
              A finished high-rise balcony: cables up, view intact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

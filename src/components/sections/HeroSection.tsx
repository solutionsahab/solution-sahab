import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACT_INFO } from "@/const";
import { FACTS } from "@/lib/facts";

export function HeroSection() {
  const heroImageUrl = ASSETS.HERO_IMAGE_HOME;

  return (
    <section
      className="relative w-full bg-paper overflow-hidden"
      aria-label="Solution Sahab introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
            <span className="kicker text-primary">
              Delhi NCR · Factory-direct installers
            </span>

            <h1 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.08] m-0">
              Balcony grills you can barely see.
            </h1>

            <p className="font-body-lg text-body-lg text-ink-soft max-w-2xl m-0">
              316 marine-grade steel cables in powder-coated frames, measured
              free at your home. Safe for kids and pets, open to the sky.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 pt-1">
              <Link
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-7 py-4 rounded-xl shadow-lg transition-colors font-bold text-center"
                href="#quick-booking"
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

            <p className="font-label-sm text-label-sm text-ink-soft m-0 pt-1">
              {FACTS.yearsExperience} years · {FACTS.happyCustomers} homes
              served · {FACTS.warrantyLabel}
            </p>
          </div>

          {/* Photo column */}
          <div className="lg:col-span-5 relative w-full mt-2 lg:mt-0">
            <figure className="m-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-paper-deep h-72 sm:h-96 lg:h-[460px]">
                <Image
                  alt="Finished balcony grill installation with open city view"
                  className="w-full h-full object-cover"
                  src={heroImageUrl}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
              <figcaption className="font-label-sm text-label-sm text-ink-soft mt-2">
                A finished balcony: cables up, view intact.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Areas strip */}
      <div className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="font-label-sm text-label-sm font-bold text-ink uppercase tracking-wider">
            We measure free in
          </span>
          <span className="font-body-md text-body-md text-ink-soft">
            {FACTS.serviceAreasLabel}
          </span>
        </div>
      </div>
    </section>
  );
}

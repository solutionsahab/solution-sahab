// File: src/components/product/pleated-mesh/PleatedMeshHero.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ASSETS, CONTACT_INFO } from "@/const";

export function PleatedMeshHero() {
  return (
    <section className="w-full bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Product & Brand Identity (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
              Solution Sahab · Delhi NCR
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gilroy font-extrabold text-neutral-950 tracking-tight leading-[1.08] m-0 mb-4">
              Pleated Mosquito Mesh
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl font-body m-0 mb-6">
              High-durability retractable insect screen systems with waterproof PVC-coated accordion mesh and Jindal T6 6063 architectural aluminum frames. Keep out mosquitoes and flies while enjoying uninterrupted fresh air and natural daylight.
            </p>

            {/* Clean Key Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200">
                <span className="text-blue-600 font-bold">✓</span> Jindal T6-6063 Aluminum
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200">
                <span className="text-blue-600 font-bold">✓</span> Tear-Resistant Accordion Mesh
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200">
                <span className="text-blue-600 font-bold">✓</span> 5-Year Warranty
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200">
                <span className="text-blue-600 font-bold">✓</span> Barrier-Free Low Track
              </span>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <Button
                href="#book-visit"
                variant="primary"
                size="md"
                icon="calendar_month"
              >
                Book Site Visit
              </Button>
              <Button
                href={CONTACT_INFO.WHATSAPP_URL}
                variant="whatsapp"
                size="md"
                icon="chat"
              >
                WhatsApp a Photo
              </Button>
              <Button
                href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                variant="outline"
                size="md"
                icon="call"
              >
                {CONTACT_INFO.PHONE_PRIMARY}
              </Button>
            </div>
          </div>

          {/* Right: Real Balcony Installation Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-neutral-200 bg-neutral-100 overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] w-full shadow-sm">
              <Image
                alt="Retractable pleated mosquito mesh installed on a balcony sliding door by Solution Sahab"
                className="w-full h-full object-cover"
                src={ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH}
                width={700}
                height={850}
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

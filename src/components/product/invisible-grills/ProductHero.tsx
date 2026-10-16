// File: src/components/product/ProductHero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ASSETS, CONTACT_INFO } from "@/const";

export function ProductHero() {
  const heroImageUrl = ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS;

  return (
    <section className="w-full bg-white pt-6 sm:pt-10 pb-10 sm:pb-14 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Simple Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 text-xs text-neutral-500 font-sans">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Products</span>
          <span>/</span>
          <span className="text-neutral-900 font-medium">Invisible Grills</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Brand Name, Product Name & Core Info (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
              Solution Sahab · Delhi NCR
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gilroy font-extrabold text-neutral-950 tracking-tight leading-[1.08] m-0 mb-4">
              Invisible Grills
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl font-body m-0 mb-6">
              High-tensile 316 marine-grade stainless steel cable grills for balconies, windows, and open terraces. Protect children and pets from accidental falls without blocking your panoramic skyline view or natural breeze.
            </p>

            {/* Clean Key Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200">
                <span className="text-blue-600 font-bold">✓</span> AISI 316 Marine Steel
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200">
                <span className="text-blue-600 font-bold">✓</span> 400 kgf+ Load Capacity
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200">
                <span className="text-blue-600 font-bold">✓</span> 5-Year Rust Warranty
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200">
                <span className="text-blue-600 font-bold">✓</span> RWA &amp; Fire Approved
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

          {/* Right: Real High-Rise Balcony Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-neutral-200 bg-neutral-100 overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] w-full shadow-sm">
              <Image
                alt="Invisible Grills Installed on High-Rise Balcony by Solution Sahab"
                className="w-full h-full object-cover"
                src={heroImageUrl}
                width={800}
                height={1000}
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

// File: src/components/product/common/ProductHeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

export interface ProductHeroSectionProps {
  productName: string;
  brandTag?: string;
  tagline: string;
  badges: string[];
  heroImage: string;
  heroImageAlt: string;
  breadcrumbName?: string;
  /** Linked crumb shown before the current page, e.g. the parent product */
  parentCrumb?: { label: string; href: string };
  bookingTargetId?: string;
}

export function ProductHeroSection({
  productName,
  brandTag = "Solution Sahab | Delhi NCR",
  tagline,
  badges,
  heroImage,
  heroImageAlt,
  breadcrumbName,
  parentCrumb,
  bookingTargetId = "#booking-form",
}: ProductHeroSectionProps) {
  return (
    <section className="relative w-full bg-[#F3F6FB] pt-6 pb-8 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-sans">
          <Link href="/" className="hover:text-[#1B4D8E] transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-400">Products</span>
          <span aria-hidden="true">/</span>
          {parentCrumb && (
            <>
              <Link href={parentCrumb.href} className="hover:text-[#1B4D8E] transition-colors">
                {parentCrumb.label}
              </Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span className="text-neutral-900 font-medium">{breadcrumbName || productName}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1B4D8E] shadow-sm">
              <span className="material-symbols-outlined text-[16px]!" aria-hidden="true">location_on</span>
              {brandTag}
            </span>

            <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-6xl font-gilroy font-extrabold text-neutral-950 tracking-tight leading-[1.02] m-0">
              {productName}
            </h1>

            <p className="mt-5 mb-0 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-body">
              {tagline}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 list-none m-0 p-0">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-neutral-800 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]! text-[#1B4D8E]" aria-hidden="true">done</span>
                  {badge}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={bookingTargetId} variant="primary" size="lg" icon="calendar_month">
                Book a site visit
              </Button>
              <Button href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`} variant="outline" size="lg" icon="call">
                {CONTACT_INFO.PHONE_PRIMARY}
              </Button>
            </div>
          </div>

          {/* Real install photo on an indigo block, with a call card floating over it */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-[580px] pb-6 pr-4 sm:pr-6">
              <div aria-hidden="true" className="absolute right-0 top-10 bottom-0 w-[72%] rounded-[2rem] bg-[#1B4D8E]" />
              <div className="relative aspect-[4/3.3] w-full overflow-hidden rounded-[2rem] shadow-2xl bg-neutral-200">
                <Image
                  alt={heroImageAlt}
                  // hero-* images have their info panel on the right: show that side
                  className={`w-full h-full object-cover ${heroImage.startsWith("/images/hero/") ? "object-right" : ""}`}
                  src={heroImage}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
              </div>
              <a
                href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                className="absolute -left-2 sm:-left-6 bottom-0 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_-12px_rgb(15_27_51/0.35)] hover:-translate-y-0.5 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D8E]"
              >
                <span className="material-symbols-outlined flex! h-11 w-11 items-center justify-center rounded-full bg-[#1B4D8E] text-white" aria-hidden="true">
                  call
                </span>
                <span className="leading-tight">
                  <span className="block text-xs text-neutral-500">Talk to an expert</span>
                  <span className="block font-gilroy font-extrabold text-neutral-950 tabular-nums">{CONTACT_INFO.PHONE_PRIMARY}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

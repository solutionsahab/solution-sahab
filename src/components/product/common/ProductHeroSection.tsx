// File: src/components/product/common/ProductHeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/const";

export interface ProductHeroSectionProps {
  productName: string;
  brandTag?: string;
  tagline: string;
  badges: string[];
  heroImage: string;
  heroImageAlt: string;
  breadcrumbName?: string;
  bookingTargetId?: string;
}

export function ProductHeroSection({
  productName,
  brandTag = "Solution Sahab · Delhi NCR",
  tagline,
  badges,
  heroImage,
  heroImageAlt,
  breadcrumbName,
  bookingTargetId = "#booking-form",
}: ProductHeroSectionProps) {
  return (
    <section className="w-full bg-white pt-6 sm:pt-10 pb-10 sm:pb-14 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Simple Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-neutral-500 font-sans">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-400">Products</span>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-900 font-medium">{breadcrumbName || productName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Brand Name, Product Name & Core Info (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
              {brandTag}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gilroy font-extrabold text-neutral-950 tracking-tight leading-[1.08] m-0 mb-4">
              {productName}
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl font-body m-0 mb-6">
              {tagline}
            </p>

            {/* Clean Key Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-medium border border-neutral-200"
                >
                  <span className="text-blue-600 font-bold">✓</span> {badge}
                </span>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <Button
                href={bookingTargetId}
                variant="primary"
                size="md"
                icon="calendar_month"
              >
                Book Site Visit
              </Button>
            </div>
          </div>

          {/* Right: High-Res Installation Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-neutral-200 bg-neutral-100 overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] w-full shadow-sm">
              <Image
                alt={heroImageAlt}
                className="w-full h-full object-cover"
                src={heroImage}
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

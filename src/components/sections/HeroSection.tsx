// File: src/components/sections/HeroSection.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACT_INFO } from "@/const";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 17.8c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a7.96 7.96 0 01-1.22-4.2c0-4.42 3.59-8.01 8.01-8.01 2.14 0 4.15.83 5.67 2.35a7.95 7.95 0 012.34 5.66c0 4.42-3.59 8.07-8.01 8.07zm4.39-6.02c-.24-.12-1.42-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14 0-.3-.01-.47-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

const SLIDES = [
  {
    name: "Invisible Safety Grills",
    tagline: "Balcony fall protection, 100% open sky view",
    image: ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS,
    alt: "Balcony fitted with thin vertical invisible grill cables",
  },
  {
    name: "Pleated Mosquito Mesh",
    tagline: "Glides shut on insects, open for fresh air",
    image: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
    alt: "Pleated mosquito mesh screen across a balcony door",
  },
  {
    name: "Aluminum Security Mesh",
    tagline: "Heavy burglar-proof structural screens",
    image: ASSETS.PRODUCTS.ALUMINUM_SECURITY_MESH,
    alt: "Aluminium security mesh door and frame, close view",
  },
  {
    name: "Honeycomb Partitions",
    tagline: "Acoustic and thermal movable dividers",
    image: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
    alt: "Honeycomb screen partition filtering daylight",
  },
  {
    name: "Motorized Weather Screens",
    tagline: "Terrace barrier against Delhi dust & rain",
    image: ASSETS.PRODUCTS.WEATHER_SCREENS,
    alt: "Open terrace protected by a motorized weather screen",
  },
  {
    name: "Skylights & Ceiling Hangers",
    tagline: "Daylight from above, floor- drying below",
    image: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
    alt: "Stairwell lit by architectural daylight from above",
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    timer.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const slide = SLIDES[active];

  return (
    <section
      className="relative w-full h-[78vh] min-h-[520px] max-h-[860px] bg-neutral-950 overflow-hidden select-none"
      aria-label="Solution Sahab Product Showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-Bleed Corner-to-Corner Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {SLIDES.map((item, index) => (
          <div
            key={item.name}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${index === active
              ? "opacity-100 z-10 scale-100"
              : "opacity-0 z-0 scale-105 pointer-events-none"
              } transition-transform duration-[6000ms]`}
          >
            <Image
              alt={item.alt}
              className="w-full h-full object-cover object-center"
              src={item.image}
              fill
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Bottom Scrim Gradient for Text Readability (Keeps top 65% of image 100% clear) */}
        <div
          className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Bottom Overlay: Product Name + CTA + Minimal Slide Controls */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-8 sm:pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          {/* Left: Slide Counter + Product Name + Short Tagline */}
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.08] m-0">
              {slide.name}
            </h1>

            <p className="mt-2 text-sm sm:text-lg text-white/80 font-normal m-0">
              {slide.tagline}
            </p>
          </div>

          {/* Right: Clean Sharp CTAs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="#quick-booking"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-neutral-950 text-sm sm:text-base font-semibold px-6 py-3.5 transition-colors min-h-[48px]"
            >
              <span>Book Site Visit</span>
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                arrow_outward
              </span>
            </Link>
          </div>
        </div>
        <div className="pt-4 flex items-center justify-between gap-4">
          {/* Desktop Product Selector Strip */}
          <div
            className="hidden md:grid md:grid-cols-6 gap-4 w-full"
            role="tablist"
            aria-label="Product slides"
          >
            {SLIDES.map((item, index) => {
              const isCurrent = index === active;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  onClick={() => go(index)}
                  className={`text-left group pt-2 border-t-2 transition-colors ${isCurrent
                    ? "border-white text-white"
                    : "border-white/20 text-white/50 hover:text-white/80 hover:border-white/40"
                    }`}
                >
                  <span className="block text-[10px] font-mono uppercase tracking-wider opacity-70">
                    0{index + 1}
                  </span>
                  <span className="block text-xs font-medium truncate mt-0.5">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Dots + Prev/Next Arrows */}
          <div className="flex md:hidden items-center justify-between w-full">


            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Previous product"
                className="w-9 h-9 border border-white/25 text-white flex items-center justify-center active:bg-white/10"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chevron_left
                </span>
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Next product"
                className="w-9 h-9 border border-white/25 text-white flex items-center justify-center active:bg-white/10"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
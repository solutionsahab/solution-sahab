// File: src/components/sections/HeroSection.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ASSETS } from "@/lib/constants";

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
    image: ASSETS.HERO_IMAGE_HOME_PLEATED_MESH,
    alt: "Family in a living room with pleated mosquito mesh across wide sliding balcony doors",
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
    image: ASSETS.HERO_IMAGE_HOME_HONEYCOMB,
    alt: "Family in a living room beside a full-height honeycomb partition",
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
              quality={90}
            />
          </div>
        ))}

        {/* Bottom Scrim Gradient for Text Readability (only the bottom strip; top 55% of image untouched) */}
        <div
          className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 from-0% via-black/25 via-25% to-transparent to-45%"
          aria-hidden="true"
        />
      </div>

      {/* Bottom Overlay: Product Name + CTA + Minimal Slide Controls */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-8 sm:pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          {/* Left: Slide Counter + Product Name + Short Tagline */}
          <div className="max-w-2xl [text-shadow:0_2px_12px_rgb(0_0_0/0.55)]">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-gilroy text-white tracking-tight leading-[1.08] m-0">
              {slide.name}
            </h1>

            <p className="mt-2 text-sm sm:text-lg text-white/90 font-normal m-0">
              {slide.tagline}
            </p>
          </div>

          {/* Right: Clean Sharp CTAs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              href="#quick-booking"
              variant="white"
              size="lg"
              icon="arrow_outward"
            >
              Book Site Visit
            </Button>
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
                  <span className="block text-[10px] font-gilroy font-extrabold uppercase tracking-wider opacity-70">
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
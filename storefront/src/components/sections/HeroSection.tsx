// File: src/components/sections/HeroSection.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ASSETS } from "@/lib/constants";

// Dark see-through backing behind hero text only, so the photo itself stays bright.
const TEXT_PANEL = "bg-inverse-surface/55 backdrop-blur-sm";
// Title box only: light frosted glass with dark text (owner's choice; low contrast on the darker slides).
const GLASS_PANEL = "bg-white/5 backdrop-blur-md";

const SLIDES = [
  {
    name: "Invisible Safety Grills",
    // Phone/tablet crop: slides with a printed info panel show their right side so the panel reads
    crop: "object-[50%_50%]",
    tagline: "Balcony fall protection, 100% open sky view",
    image: ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS,
    alt: "Balcony fitted with thin vertical invisible grill cables",
  },
  {
    name: "Pleated Mosquito Mesh",
    crop: "object-[100%_50%]",
    tagline: "Glides shut on insects, open for fresh air",
    image: ASSETS.HERO_IMAGE_HOME_PLEATED_MESH,
    alt: "Family in a living room with pleated mosquito mesh across wide sliding balcony doors",
  },
  {
    name: "Aluminum Security Mesh",
    crop: "object-[100%_50%]",
    tagline: "Heavy burglar-proof structural screens",
    image: ASSETS.HERO_IMAGE_HOME_ALUMINUM_MESH,
    alt: "Boy and dog in a living room beside black aluminium security mesh doors",
  },
  {
    name: "Honeycomb Partitions",
    crop: "object-[100%_50%]",
    tagline: "Acoustic and thermal movable dividers",
    image: ASSETS.HERO_IMAGE_HOME_HONEYCOMB,
    alt: "Family in a living room beside a full-height honeycomb partition",
  },
  {
    name: "Motorized Weather Screens",
    crop: "object-[100%_50%]",
    tagline: "Terrace barrier against Delhi dust & rain",
    image: ASSETS.HERO_IMAGE_HOME_WEATHER_SCREEN,
    alt: "Family watching the sunset through a motorized weather screen on their balcony",
  },
  {
    name: "Skylights",
    crop: "object-[100%_50%]",
    tagline: "Daylight from above, all day long",
    image: ASSETS.HERO_IMAGE_HOME_SKYLIGHT,
    alt: "Family relaxing under a large skylight fitted with a motorized honeycomb blind",
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX = useRef<number | null>(null);

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
      className="relative w-full aspect-[4/5] max-h-[calc(100svh-87px)] sm:max-h-[calc(100svh-108px)] lg:aspect-auto lg:max-h-none lg:h-[calc(100svh-108px)] lg:min-h-[520px] bg-inverse-surface overflow-hidden select-none"
      aria-label="Solution Sahab Product Showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
      }}
    >
      {/* Full-Bleed Corner-to-Corner Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {SLIDES.map((item, index) => (
          <div
            key={item.name}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${index === active
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <Image
              alt={item.alt}
              className={`w-full h-full object-cover ${item.crop} lg:object-center`}
              src={item.image}
              fill
              priority={index === 0}
              // Below lg the photo is cropped to ~2.5x the screen width (2:1 image in a 4:5 box)
              sizes="(max-width: 1023px) 250vw, 100vw"
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Bottom Overlay: Product Name + CTA + Slide Controls */}
      <div className="relative z-30 h-full max-w-7xl mx-auto lg:mx-0 px-4 sm:px-8 lg:px-16 flex flex-col justify-start lg:justify-end pt-4 sm:pt-6 lg:pt-0 lg:pb-20">
        <div className="flex lg:pb-6">
          {/* Title box: Product Name + Short Tagline, CTA in its bottom-right corner */}
          <div className={`w-full lg:w-auto flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-8 px-3 py-2.5 lg:px-5 lg:py-4 ${GLASS_PANEL}`}>
            <div className="max-w-2xl">
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold font-gilroy text-ink tracking-tight leading-[1.08] m-0">
                {slide.name}
              </h1>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-ink/80 font-normal m-0">
                {slide.tagline}
              </p>
            </div>

            {/* Desktop CTA; phones/tablets get it at the photo's bottom-right instead */}
            <div className="hidden lg:block self-end shrink-0">
              <Button
                href="#quick-booking"
                variant="primary"
                size="md"
                icon="arrow_outward"
              >
                Book Site Visit
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex pt-4 items-center justify-between gap-4">
          {/* Desktop Product Selector Strip */}
          <div
            className="grid grid-cols-6 gap-3 w-full"
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
                  className={`text-left group px-3 pt-2 pb-2.5 border-t-2 transition-colors ${TEXT_PANEL} ${isCurrent
                    ? "border-primary-fixed-dim text-white"
                    : "border-white/20 text-white/75 hover:text-white hover:border-white/40"
                    }`}
                >
                  <span className="block text-xs font-gilroy font-extrabold uppercase tracking-wider text-primary-fixed-dim">
                    0{index + 1}
                  </span>
                  <span className="block text-sm font-semibold leading-snug mt-0.5">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phone/Tablet CTA at the bottom-left, above the dots, so it doesn't cover the info panel on the right */}
        <div className="lg:hidden absolute left-3 bottom-12">
          <Button
            href="#quick-booking"
            variant="primary"
            size="sm"
            className="!min-h-[42px]"
          >
            Book Site Visit
          </Button>
        </div>

        {/* Phone/Tablet slide dots, bottom centre (swipe works too) */}
        <div className="lg:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center">
          {SLIDES.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => go(index)}
              aria-label={`Slide ${index + 1} of ${SLIDES.length}: ${item.name}`}
              aria-current={index === active}
              className="w-6 h-6 flex items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full shadow-[0_0_3px_rgb(0_0_0/0.5)] transition-all duration-300 ${index === active ? "w-5 bg-white" : "w-2 bg-white/50"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
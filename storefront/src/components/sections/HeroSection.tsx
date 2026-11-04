// File: src/components/sections/HeroSection.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ASSETS } from "@/lib/constants";

const SLIDES = [
  {
    name: "Invisible Safety Grills",
    // Phone/tablet crop: show the right side so the printed info panel reads
    crop: "object-[100%_50%]",
    image: ASSETS.HERO_IMAGE_HOME_INVISIBLE_GRILLS,
    alt: "Balcony fitted with thin vertical invisible grill cables",
  },
  {
    name: "Pleated Mosquito Mesh",
    crop: "object-[100%_50%]",
    image: ASSETS.HERO_IMAGE_HOME_PLEATED_MESH,
    alt: "Family in a living room with pleated mosquito mesh across wide sliding balcony doors",
  },
  {
    name: "Aluminum Security Mesh",
    crop: "object-[100%_50%]",
    image: ASSETS.HERO_IMAGE_HOME_ALUMINUM_MESH,
    alt: "Boy and dog in a living room beside black aluminium security mesh doors",
  },
  {
    name: "Honeycomb Partitions",
    crop: "object-[100%_50%]",
    image: ASSETS.HERO_IMAGE_HOME_HONEYCOMB,
    alt: "Family in a living room beside a full-height honeycomb partition",
  },
  {
    name: "Motorized Weather Screens",
    crop: "object-[100%_50%]",
    image: ASSETS.HERO_IMAGE_HOME_WEATHER_SCREEN,
    alt: "Family watching the sunset through a motorized weather screen on their balcony",
  },
  {
    name: "Skylights",
    crop: "object-[100%_50%]",
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

  return (
    <section
      className="relative w-full h-[calc((100svh-87px)*0.9)] sm:h-[calc((100svh-108px)*0.9)] lg:h-auto lg:aspect-[2/1] lg:max-h-[calc(100svh-108px)] bg-inverse-surface overflow-hidden select-none"
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
            {/* Desktop: when the screen is too short for full-width 2:1, the picture is fitted and
                a blurred copy fills the side strips (same file and size, so no extra download) */}
            <Image
              alt=""
              aria-hidden
              className="hidden lg:block object-cover blur-2xl scale-110"
              src={item.image}
              fill
              sizes="(max-width: 1023px) 350vw, 100vw"
              quality={90}
            />
            <Image
              alt={item.alt}
              className={`w-full h-full object-cover ${item.crop} lg:object-contain lg:object-center`}
              src={item.image}
              fill
              priority={index === 0}
              // Below lg the tall box draws the 2:1 photo at up to ~3.5x the screen width
              sizes="(max-width: 1023px) 350vw, 100vw"
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* The product name and features are printed on each photo, so the page heading is for
          search engines and screen readers only */}
      <h1 className="sr-only">
        Invisible Grills, Pleated Mesh &amp; Window Solutions in Delhi NCR
      </h1>

      {/* CTA centred at the bottom */}
      <div className="absolute z-30 left-1/2 -translate-x-1/2 bottom-6">
        <Button
          href="#quick-booking"
          variant="primary"
          size="sm"
          className="!min-h-[42px] lg:!px-5 lg:!py-3 lg:!text-sm"
        >
          Book Site Visit
        </Button>
      </div>

      {/* Slide dots, vertical on the right edge, centred top to bottom (swipe works too) */}
      <div className="absolute z-30 right-1.5 lg:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center">
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
              className={`block w-2 rounded-full shadow-[0_0_3px_rgb(0_0_0/0.5)] transition-all duration-300 ${index === active ? "h-5 bg-white" : "h-2 bg-white/50"
                }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
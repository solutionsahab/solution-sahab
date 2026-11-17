// File: src/components/sections/ProjectGallerySection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";
import { Carousel } from "@/components/common/Carousel";

interface ProjectItem {
  src: string;
  alt: string;
  location?: string;
  title: string;
  system: string;
}

const PROJECTS: ProjectItem[] = [
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.ROOFTOP_MONKEYS,
    alt: "Rooftop invisible grill keeping monkeys outside on the parapet",
    location: "Vrindavan",
    title: "Rooftop Monkey Protection",
    system: "Invisible Grills",
  },
  {
    src: ASSETS.GALLERY.NOIDA_VILLA,
    alt: "Pleated mosquito mesh on a window in a Noida home",
    location: "Sector 150, Noida",
    title: "Pleated Window Screen",
    system: "Pleated Mesh",
  },
  {
    src: ASSETS.PHOTOS.HONEYCOMB.HERO,
    alt: "Wide honeycomb partition dividing an interior space",
    title: "Wide-Span Room Divider",
    system: "Honeycomb Partition",
  },
  {
    src: ASSETS.PHOTOS.INVISIBLE_GRILLS.SCHOOL_CORRIDOR,
    alt: "School corridor secured with invisible safety grills in Vasant Kunj",
    location: "Vasant Kunj, New Delhi",
    title: "Corridor Fall Protection",
    system: "Invisible Grills",
  },
  {
    src: ASSETS.GALLERY.PARUL_ENT_HISAR_1,
    alt: "Building balcony fitted with invisible grills in Hisar",
    location: "Hisar",
    title: "Balcony Fall Protection",
    system: "Invisible Grills",
  },
  {
    src: ASSETS.PHOTOS.WEATHER_SCREEN.HERO,
    alt: "Motorized zip weather screen lowered around a terrace lounge",
    title: "Terrace Weather Enclosure",
    system: "Motorized Zip-Screen",
  },
];

export function ProjectGallerySection() {
  return (
    <section
      className="w-full bg-[#F3F6FB] py-12 sm:py-14 lg:py-16 scroll-mt-28"
      id="projects"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <h2
            id="gallery-heading"
            className="font-gilroy font-light text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.05] m-0 max-w-2xl"
          >
            Recently completed <strong className="font-extrabold">sites in Delhi NCR</strong>
          </h2>
          <Link
            href="/gallery"
            className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-[#1B4D8E] hover:underline underline-offset-4"
          >
            View full gallery
            <span className="material-symbols-outlined text-[18px]!" aria-hidden="true">chevron_right</span>
          </Link>
        </div>

        {/* One-row swipe carousel (CSS scroll-snap): phones peek the next photo, desktop shows 4 */}
        <Carousel label="Recent completed sites" className="flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROJECTS.map((item) => (
            <figure
              key={item.title}
              className="group relative m-0 shrink-0 snap-start w-[80%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)] h-64 sm:h-72 rounded-[1.5rem] overflow-hidden bg-neutral-200 isolate"
            >
              <Image
                alt={item.alt}
                src={item.src}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1023px) 50vw, 25vw"
                loading="lazy"
                className="-z-10 object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 backdrop-blur px-4 py-3">
                <h3 className="text-base font-extrabold font-gilroy text-neutral-950 tracking-tight m-0">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 m-0 mt-0.5">
                  {item.location ? `${item.system}, ${item.location}` : item.system}
                </p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

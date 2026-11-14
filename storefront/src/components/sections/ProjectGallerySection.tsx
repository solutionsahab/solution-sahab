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
      className="w-full py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28"
      id="projects"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2
            id="gallery-heading"
            className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0"
          >
            Our Recent Completed Sites in Delhi NCR
          </h2>
          <Link
            href="/gallery"
            className="shrink-0 text-xs font-gilroy font-extrabold uppercase tracking-wider text-neutral-950 underline underline-offset-4 hover:opacity-70"
          >
            View Full Gallery
          </Link>
        </div>

        {/* One-row swipe carousel (CSS scroll-snap): phones peek the next photo, desktop shows 4 */}
        <Carousel label="Recent completed sites" className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROJECTS.map((item) => (
            <div
              key={item.title}
              className="shrink-0 snap-start w-[80%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
            >
              <div className="relative h-52 w-full overflow-hidden bg-neutral-200">
                <Image
                  alt={item.alt}
                  src={item.src}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1023px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <h3 className="text-base font-extrabold font-gilroy text-neutral-950 tracking-tight m-0 mt-3">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-500 m-0 mt-1">
                {item.location ? `${item.system}, ${item.location}` : item.system}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

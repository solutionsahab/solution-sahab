// File: src/components/sections/ProjectGallerySection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/const";

const SHOTS = [
  {
    src: ASSETS.GALLERY.GURGAON_HIGHRISE,
    alt: "Balcony invisible grill installation in a Gurgaon high-rise",
    caption: "Golf Course Road, Gurgaon",
    title: "High-rise balcony, child-safe spacing",
  },
  {
    src: ASSETS.GALLERY.TRADE_FAIR_EXPO,
    alt: "School corridor secured with invisible safety grills",
    caption: "School safety grill, Vasant Kunj",
    title: "Grilled without darkening classrooms",
  },
  {
    src: ASSETS.GALLERY.NOIDA_VILLA,
    alt: "Pleated mosquito screen door installed in a Noida villa",
    caption: "Noida Expressway villa",
    title: "Double-leaf pleated screen door",
  },
  {
    src: ASSETS.GALLERY.FACTORY_QC,
    alt: "Duplex stairwell void secured with tensioned cables",
    caption: "Stairwell void",
    title: "Duplex stairwell, guarded",
  },
];

export function ProjectGallerySection() {
  return (
    <section
      className="w-full py-14 sm:py-20 bg-paper scroll-mt-28"
      id="projects"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <span className="kicker text-primary">Recent work</span>
            <h2
              id="gallery-heading"
              className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-0"
            >
              From our last few jobs
            </h2>
          </div>
          <Link
            href="/gallery"
            className="font-label-md text-label-md font-semibold text-secondary hover:underline whitespace-nowrap"
          >
            Full gallery
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-12">
        <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pr-4 snap-x snap-mandatory">
          {SHOTS.map((shot) => (
            <figure
              key={shot.src}
              className="m-0 snap-start shrink-0 w-[78vw] sm:w-[380px]"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-2xl">
                <Image
                  alt={shot.alt}
                  className="w-full h-full object-cover"
                  src={shot.src}
                  fill
                  sizes="(max-width: 768px) 78vw, 380px"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-2">
                <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-ink">
                  {shot.caption}
                </span>
                <span className="block font-body-sm text-body-sm text-ink-soft">
                  {shot.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

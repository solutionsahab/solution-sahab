// File: src/components/sections/ProjectGallerySection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/const";

interface ProjectItem {
  src: string;
  alt: string;
  category: "grills" | "mesh" | "voids";
  location: string;
  title: string;
  system: string;
  specification: string;
}

const PROJECTS: ProjectItem[] = [
  {
    src: ASSETS.GALLERY.GURGAON_HIGHRISE,
    alt: "Balcony invisible grill installation in a Gurgaon high-rise apartment",
    category: "grills",
    location: "Golf Course Road, Gurugram",
    title: "High-Rise Balcony Safety",
    system: "Invisible Grills",
    specification: "2\" Spacing · AISI 316 Marine Cable",
  },
  {
    src: ASSETS.GALLERY.NOIDA_VILLA,
    alt: "Double-leaf pleated mosquito mesh door installed in a Noida villa",
    category: "mesh",
    location: "Sector 150, Noida",
    title: "Double-Leaf Pleated Insect Door",
    system: "Pleated Mesh",
    specification: "3mm Flat Track · Magnetic Catch",
  },
  {
    src: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
    alt: "Acoustic folding partition separating living room and dining zone",
    category: "voids",
    location: "DLF Phase 5, Gurugram",
    title: "Living & Dining Room Divider",
    system: "Honeycomb Partition",
    specification: "Dual-Cell Thermal & Sound Barrier",
  },
  {
    src: ASSETS.GALLERY.TRADE_FAIR_EXPO,
    alt: "School corridor secured with invisible safety grills in Vasant Kunj",
    category: "grills",
    location: "Vasant Kunj, New Delhi",
    title: "Corridor Fall Protection",
    system: "Invisible Grills",
    specification: "3\" Spacing · Heavy Hilti Anchoring",
  },
  {
    src: ASSETS.GALLERY.FACTORY_QC,
    alt: "Duplex stairwell void secured with tensioned marine-grade cables",
    category: "voids",
    location: "Greater Noida",
    title: "Duplex Stairwell Safety Guard",
    system: "Tensioned Void Cables",
    specification: "3-Storey Vertical Run · 400kg Tested",
  },
  {
    src: ASSETS.PRODUCTS.WEATHER_SCREENS,
    alt: "Motorized automatic weather screen on open terrace",
    category: "mesh",
    location: "Dwarka Sector 22, New Delhi",
    title: "Open Terrace Weather Enclosure",
    system: "Motorized Zip-Screen",
    specification: "70 km/h Wind Rated · Rain & Dust Block",
  },
];

const FILTERS = [
  { id: "all", label: "All Sites" },
  { id: "grills", label: "Invisible Grills" },
  { id: "mesh", label: "Mesh & Weather Screens" },
  { id: "voids", label: "Partitions & Stairwells" },
] as const;

export function ProjectGallerySection() {
  const [filter, setFilter] = useState<"all" | "grills" | "mesh" | "voids">("all");

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === filter);

  return (
    <section
      className="w-full py-16 sm:py-24  border-b border-neutral-300 scroll-mt-28"
      id="projects"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Clean Header + Filter Tabs */}
        <div className="flex flex-col justify-between gap-6 pb-8 border-b border-neutral-300">
          <div>
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-950 tracking-tight m-0"
            >
              Our Recent Completed Sites in Delhi NCR
            </h2>
          </div>

          {/* Sharp Minimal Filter Strip */}
          <div className="flex flex-wrap items-center gap-1.5">
            {FILTERS.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider border transition-colors ${
                    isActive
                      ? "bg-neutral-950 text-white border-neutral-950"
                      : "bg-transparent text-neutral-700 border-neutral-300 hover:border-neutral-950"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flush Hairline Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="group  flex flex-col justify-between border-1 border-gray-100 "
            >
              {/* Large Unobstructed Site Photo */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-200 ">
                <Image
                  alt={item.alt}
                  src={item.src}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Minimal Caption Below Image */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                  <span>{item.system}</span>
                  <span>{item.location}</span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-neutral-950 tracking-tight m-0">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 m-0 mt-1">
                  {item.specification}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Link */}
        <div className="pt-6 flex items-center justify-between text-xs font-mono uppercase tracking-wider">
          <span className="text-neutral-500">Photographed by our installation crew</span>
          <Link
            href="/gallery"
            className="text-neutral-950 font-semibold underline underline-offset-4 hover:opacity-70"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
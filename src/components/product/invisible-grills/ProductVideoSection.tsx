// File: src/components/product/ProductVideoSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VideoEmbed } from "@/components/common/VideoEmbed";
import { ASSETS } from "@/const";

const REELS = [
  {
    videoId: "ra8Bwmo1SE0",
    customer: "Mr. Kamal Thakur",
    society: "Ashiyana Town, Bhiwadi",
    product: "High-Rise Balcony Invisible Grills",
    metric: "18th Floor Balcony Secured",
  },
  {
    videoId: "7F6Z-WV5ylA",
    customer: "Verified Homeowner",
    society: "DLF Phase 5, Gurgaon",
    product: "Full Balcony Invisible Grills",
    metric: "2\" Child-Safe 316 SS Pitch",
  },
];

const GALLERY_PHOTOS = [
  {
    title: "Curved Skyline Balcony",
    society: "Golf Course Extension, Gurgaon",
    spec: "50mm 316 SS Wire · Floor-to-Ceiling",
    imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
  },
  {
    title: "Double-Height Atrium Void",
    society: "Jaypee Greens, Greater Noida",
    spec: "Continuous 9m Drop · 3.0mm Heavy Tension",
    imageUrl: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
  },
  {
    title: "French Window Safety Enclosure",
    society: "ATS Village, Expressway Noida",
    spec: "External 6063-T6 Track · 100% Window Opening",
    imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
  },
  {
    title: "Open Terrace Demarcation",
    society: "Sushant Lok 1, Gurgaon",
    spec: "Wind-Tensioned Monsoonal Anchorage",
    imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
  },
];

export function ProductVideoSection() {
  return (
    <section id="reviews" className="w-full bg-white py-14 sm:py-20 border-b border-neutral-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 sm:pb-12 border-b border-neutral-300 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-semibold">
              REAL VERIFIED PROOF · DELHI NCR
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0">
              Customer Feedback &amp; On-Site Walkthroughs
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl m-0 mt-2 font-body">
              Filmed on-site immediately following installation across high-rise towers in Gurgaon, Noida, and Delhi.
            </p>
          </div>

          <Link
            href="https://www.youtube.com/@solutionsahab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-semibold underline underline-offset-4 hover:text-blue-600 shrink-0"
          >
            All Videos on YouTube →
          </Link>
        </div>

        {/* 2-Reel Video Showcase */}
        <div className="pt-8 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-14 border-b border-neutral-300">
            {REELS.map((reel) => (
              <div key={reel.videoId} className="flex flex-col">
                <div className="w-full bg-neutral-950 overflow-hidden border border-neutral-300 shadow-md">
                  <VideoEmbed
                    orientation="vertical"
                    title={`${reel.product} - ${reel.customer}`}
                    videoId={reel.videoId}
                    className="rounded-none"
                  />
                </div>

                <div className="pt-4 flex items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-gilroy font-bold text-neutral-950 m-0">
                      {reel.customer}
                    </h3>
                    <p className="text-xs text-neutral-500 m-0 font-body">
                      {reel.society} · {reel.product}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-200 shrink-0">
                    {reel.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Item Architectural Photo Gallery */}
        <div className="pt-12 sm:pt-16">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              COMPLETED BALCONIES
            </span>
            <h3 className="text-xl sm:text-3xl font-gilroy font-extrabold text-neutral-950 mt-1 mb-2">
              High-Rise Installation Showcase
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-300 border border-neutral-300 bg-neutral-50/40">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 border border-neutral-200 mb-3">
                    <Image
                      alt={`${photo.title} - ${photo.society}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      src={photo.imageUrl}
                      width={400}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-sm font-gilroy font-bold text-neutral-950 m-0 mb-1">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-neutral-500 font-body m-0">
                    {photo.society}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-neutral-200 text-[11px] font-mono text-neutral-600 font-medium">
                  {photo.spec}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

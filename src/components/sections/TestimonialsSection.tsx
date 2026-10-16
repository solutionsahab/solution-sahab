// File: src/components/sections/TestimonialsSection.tsx
import React from "react";
import { VideoEmbed } from "@/components/common/VideoEmbed";

const VIDEOS = [
  {
    videoId: "ra8Bwmo1SE0",
    customer: "Mr. Kamal Thakur · Ashiyana Town, Bhiwadi",
    product: "Balcony Pleated Mesh",
  },
  {
    videoId: "7F6Z-WV5ylA",
    customer: "Verified Homeowner · Delhi NCR",
    product: "Pleated Mesh Door",
  },
  {
    videoId: "3rd_YCsZWAY",
    customer: "Verified Homeowner · Delhi NCR",
    product: "Pleated Mesh Door",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="w-full py-14 sm:py-20 border-b border-neutral-300 scroll-mt-28"
      id="customer-videos"
      aria-labelledby="customer-videos-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div>
            <h2
              id="customer-videos-heading"
              className="text-2xl sm:text-4xl font-semibold text-neutral-950 tracking-tight m-0"
            >
              Customer's Feedback
            </h2>
            <p className="text-sm text-neutral-600 mt-1 mb-0">
              Filmed on-site after installation across Delhi NCR.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@solutionsahab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-wider text-neutral-900 underline underline-offset-4 hover:opacity-70 shrink-0"
          >
            All Videos on YouTube →
          </a>
        </div>

        {/* Clean 2-Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 pt-8">
          {VIDEOS.map((video) => (
            <div key={video.videoId} className="flex flex-col">
              <div className="w-full bg-neutral-950 overflow-hidden">
                <VideoEmbed
                  orientation="vertical"
                  title={`${video.product} - ${video.customer}`}
                  videoId={video.videoId}
                  className="rounded-none"
                />
              </div>

              <div className="pt-3 flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-neutral-950">
                  {video.product}
                </span>
                <span className="text-xs text-neutral-500">
                  {video.customer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
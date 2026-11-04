// File: src/components/sections/TestimonialsSection.tsx
import React from "react";
import { VideoEmbed } from "@/components/common/VideoEmbed";
import Link from "next/link";

const VIDEOS = [
  {
    videoId: "ra8Bwmo1SE0",
    customer: "Mr. Kamal Thakur, Ashiyana Town, Bhiwadi",
    product: "Balcony Pleated Mesh",
  },
  {
    videoId: "7F6Z-WV5ylA",
    customer: "Verified Homeowner, Delhi NCR",
    product: "Pleated Mesh Door",
  },
  {
    videoId: "3rd_YCsZWAY",
    customer: "Verified Homeowner, Delhi NCR",
    product: "Pleated Mesh Door",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="w-full py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28"
      id="customer-videos"
      aria-labelledby="customer-videos-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2
              id="customer-videos-heading"
              className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0"
            >
              Customer Feedback
            </h2>
            <p className="text-sm text-neutral-600 mt-1 mb-0">
              Filmed on-site after installation across Delhi NCR.
            </p>
          </div>

          <Link
            href="https://www.youtube.com/@solutionsahab"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-gilroy font-extrabold uppercase tracking-wider text-neutral-950 underline underline-offset-4 hover:opacity-70"
          >
            All Videos on YouTube
          </Link>
        </div>

        {/* One-row swipe carousel (CSS scroll-snap): phones peek the next video, desktop shows 4 per row */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {VIDEOS.map((video) => (
            <div
              key={video.videoId}
              className="flex flex-col shrink-0 snap-start w-[80%] sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
            >
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
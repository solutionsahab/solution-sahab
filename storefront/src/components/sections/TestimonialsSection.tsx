// File: src/components/sections/TestimonialsSection.tsx
import React from "react";
import { VideoEmbed } from "@/components/common/VideoEmbed";
import Link from "next/link";
import { Carousel } from "@/components/common/Carousel";

// Customer-feedback Shorts from youtube.com/@solutionsahab, newest first
export const CUSTOMER_VIDEOS = [
  {
    videoId: "jtYFAhO8tXQ",
    customer: "Verified Homeowner",
    product: "Aluminium Security Mesh",
  },
  {
    videoId: "IzNgLc9QUvY",
    customer: "Verified Homeowner",
    product: "Pleated Mesh",
  },
  {
    videoId: "NaSQX5QXsys",
    customer: "Verified Homeowner",
    product: "Pleated Mesh & Invisible Grills",
  },
  {
    videoId: "ra8Bwmo1SE0",
    customer: "Mr. Kamal Thakur, Ashiyana Town, Bhiwadi",
    product: "Balcony Pleated Mesh",
  },
  {
    videoId: "KIDcbgJ6AqQ",
    customer: "Verified Homeowner",
    product: "Pleated Mesh",
  },
  {
    videoId: "7F6Z-WV5ylA",
    customer: "Verified Homeowner",
    product: "Pleated Mesh",
  },
  {
    videoId: "5f01oHET4SI",
    customer: "Dr. Geetesh, Rohtak",
    product: "Pleated Mesh",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="w-full bg-white py-12 sm:py-14 lg:py-16 scroll-mt-28"
      id="customer-videos"
      aria-labelledby="customer-videos-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2
              id="customer-videos-heading"
              className="font-gilroy font-light text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.05] m-0"
            >
              Customer <strong className="font-extrabold">feedback</strong>
            </h2>
            <p className="text-neutral-600 mt-3 mb-0">
              Filmed on-site after installation across Delhi NCR.
            </p>
          </div>

          <Link
            href="https://www.youtube.com/@solutionsahab"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-[#1B4D8E] hover:underline underline-offset-4"
          >
            All videos on YouTube
            <span className="material-symbols-outlined text-[18px]!" aria-hidden="true">chevron_right</span>
          </Link>
        </div>

        {/* One-row swipe carousel (CSS scroll-snap): phones peek the next video, desktop shows 4 per row */}
        <Carousel label="Customer feedback videos" className="flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CUSTOMER_VIDEOS.map((video) => (
            <div
              key={video.videoId}
              className="flex flex-col shrink-0 snap-start w-[80%] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]"
            >
              <div className="w-full rounded-[1.5rem] overflow-hidden bg-neutral-950 shadow-[0_14px_34px_-18px_rgb(15_27_51/0.5)]">
                <VideoEmbed
                  orientation="vertical"
                  title={`${video.product} - ${video.customer}`}
                  videoId={video.videoId}
                  className="!border-0 !shadow-none"
                />
              </div>

              <div className="pt-3 px-1">
                <span className="block text-sm font-semibold text-neutral-950">
                  {video.product}
                </span>
                <span className="block text-xs text-neutral-500 mt-0.5">
                  {video.customer}
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

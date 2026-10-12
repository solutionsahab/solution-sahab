// File: src/components/sections/TestimonialsSection.tsx
import React from "react";
import { VideoEmbed } from "@/components/common/VideoEmbed";

interface CustomerVideoProps {
  videoId: string;
  title: string;
}

export function TestimonialsSection() {
  const customerVideos: CustomerVideoProps[] = [
    {
      videoId: "7F6Z-WV5ylA",
      title: "Our customer feedback for pleated mesh",
    },
    {
      videoId: "ra8Bwmo1SE0",
      title: "Our mesh customer feedback !",
    },
  ];

  return (
    <section
      className="w-full py-14 sm:py-20 bg-white scroll-mt-28"
      id="customer-videos"
      aria-labelledby="customer-videos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="kicker text-primary">Reviews</span>
            <h2
              id="customer-videos-heading"
              className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-0"
            >
              What customers say after we leave
            </h2>
          </div>
          <p className="font-body-md text-body-md text-ink-soft max-w-md">
            Unedited vertical reviews recorded on site after our crews finished
            the installation. Tap any video to play.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {customerVideos.map((video) => (
            <VideoEmbed
              key={video.videoId}
              orientation="vertical"
              title={video.title}
              videoId={video.videoId}
            />
          ))}
        </div>

        <p className="font-label-sm text-label-sm text-ink-soft text-center mt-8">
          Videos published by Solution Sahab on{" "}
          <a
            className="text-secondary hover:underline font-bold"
            href="https://www.youtube.com/@solutionsahab"
            rel="noopener noreferrer"
            target="_blank"
          >
            youtube.com/@solutionsahab
          </a>
        </p>
      </div>
    </section>
  );
}

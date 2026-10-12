// File: src/components/product/ProductVideoSection.tsx
import React from "react";
import { VideoEmbed } from "@/components/common/VideoEmbed";

export function ProductVideoSection() {
  return (
    <section
      className="w-full py-16 sm:py-20 bg-white scroll-mt-28"
      aria-labelledby="product-video-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-start gap-3 mb-10">
          <span className="kicker text-primary">Watch a real fitting</span>
          <h2
            id="product-video-heading"
            className="font-display-serif text-3xl sm:text-4xl text-ink m-0"
          >
            Invisible grills on a high-rise balcony
          </h2>
          <p className="font-body-md text-body-md text-ink-soft max-w-2xl">
            A short walkthrough of an actual Delhi NCR installation, showing the
            316-grade tensioned cables and how little they intrude on your view.
          </p>
        </div>

        <VideoEmbed
          className="mx-auto"
          title="Security Safety Beauty Invisible grill Best grill option for your balcony Solution Sahab"
          videoId="l9bxcYr_hJ0"
        />
      </div>
    </section>
  );
}

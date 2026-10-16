// File: src/components/product/common/ProductOverviewSection.tsx
import React from "react";
import Image from "next/image";
import { VideoEmbed } from "@/components/common/VideoEmbed";

export interface OverviewBullet {
  label: string;
  text: string;
}

export type OverviewMedia =
  | {
      type: "video";
      videoId: string;
      title: string;
      caption?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export interface ProductOverviewSectionProps {
  title: string;
  leadParagraph: string;
  secondaryParagraph?: string;
  bullets: OverviewBullet[];
  media: OverviewMedia;
}

export function ProductOverviewSection({
  title,
  leadParagraph,
  secondaryParagraph,
  bullets,
  media,
}: ProductOverviewSectionProps) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Natural Explanation (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-4">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-body m-0 mb-4">
              {leadParagraph}
            </p>

            {secondaryParagraph && (
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0 mb-6">
                {secondaryParagraph}
              </p>
            )}

            <div className="space-y-3 text-sm text-neutral-800 font-body">
              {bullets.map((b) => (
                <div key={b.label} className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  <span>
                    <strong>{b.label}:</strong> {b.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Video Embed or Showcase Image (5 cols) */}
          <div className="lg:col-span-5">
            {media.type === "video" ? (
              <>
                <div className="border border-neutral-300 bg-neutral-950 overflow-hidden shadow-sm">
                  <VideoEmbed
                    title={media.title}
                    videoId={media.videoId}
                    className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] object-cover"
                  />
                </div>
                {media.caption && (
                  <p className="text-xs text-neutral-500 mt-2 text-center font-sans">
                    {media.caption}
                  </p>
                )}
              </>
            ) : (
              <>
                <div className="relative border border-neutral-200 bg-neutral-100 overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] w-full shadow-sm">
                  <Image
                    alt={media.alt}
                    className="w-full h-full object-cover"
                    src={media.src}
                    width={700}
                    height={850}
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                {media.caption && (
                  <p className="text-xs text-neutral-500 mt-2 text-center font-sans">
                    {media.caption}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

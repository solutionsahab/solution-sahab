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
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="reveal lg:col-span-7 flex flex-col items-start">
            <h2 className="font-gilroy font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.08] m-0 mb-5">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-body m-0 mb-4">
              {leadParagraph}
            </p>

            {secondaryParagraph && (
              <p className="text-base text-neutral-600 leading-relaxed font-body m-0 mb-6">
                {secondaryParagraph}
              </p>
            )}

            <ul className="grid gap-3 w-full list-none m-0 p-0 font-body">
              {bullets.map((b) => (
                <li key={b.label} className="flex gap-3 rounded-2xl bg-[#F3F6FB] p-4">
                  <span className="material-symbols-outlined flex! h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B4D8E] text-white text-[18px]!" aria-hidden="true">
                    done
                  </span>
                  <span className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    <strong className="text-neutral-950">{b.label}:</strong> {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal lg:col-span-5">
            {media.type === "video" ? (
              <>
                <div className="rounded-[1.75rem] overflow-hidden bg-neutral-950 shadow-2xl">
                  <VideoEmbed
                    title={media.title}
                    videoId={media.videoId}
                    className="!border-0 !shadow-none"
                  />
                </div>
                {media.caption && (
                  <p className="text-sm text-neutral-500 mt-3 text-center font-sans">
                    {media.caption}
                  </p>
                )}
              </>
            ) : (
              <>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-2xl bg-neutral-100">
                  <Image
                    alt={media.alt}
                    className="object-cover"
                    src={media.src}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                {media.caption && (
                  <p className="text-sm text-neutral-500 mt-3 text-center font-sans">
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

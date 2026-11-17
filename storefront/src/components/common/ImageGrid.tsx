// File: src/components/common/ImageGrid.tsx
import React from "react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";

export interface GridImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGridProps {
  images: GridImage[];
  /** "square" for portraits/people, "landscape" for project/site photos */
  ratio?: "square" | "landscape";
  columns?: 2 | 3 | 4;
  sizes?: string;
  /** One-row swipe carousel (CSS scroll-snap) instead of a grid, so long sets stay short on phones */
  carousel?: boolean;
  /** Staggered photo wall (CSS columns) with captions on the photo */
  masonry?: boolean;
}

// Repeating heights give the photo wall its staggered rhythm
const MASONRY_RATIOS = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]"];

const COLUMN_CLASS: Record<number, string> = {
  2: "grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
};

export function ImageGrid({
  images,
  ratio = "landscape",
  columns = 4,
  sizes,
  carousel = false,
  masonry = false,
}: ImageGridProps) {
  if (masonry) {
    return (
      <div className="columns-1 min-[480px]:columns-2 lg:columns-3 xl:columns-4 gap-5">
        {images.map((image, i) => (
          <figure
            key={`${image.src}-${image.alt}`}
            className={`group relative m-0 mb-5 break-inside-avoid overflow-hidden rounded-[1.5rem] bg-neutral-200 isolate ${MASONRY_RATIOS[i % MASONRY_RATIOS.length]}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={sizes ?? "(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"}
              className="-z-10 object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {image.caption && (
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 backdrop-blur px-4 py-2.5 text-sm font-semibold text-neutral-950 leading-snug">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  }

  const items = images.map((image) => (
        <figure
          key={`${image.src}-${image.alt}`}
          className={`m-0 ${
            carousel
              ? "shrink-0 snap-start w-[80%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
              : ""
          }`}
        >
          <div
            className={`relative w-full overflow-hidden rounded-[1.5rem] bg-neutral-200 ${
              ratio === "square" ? "aspect-square" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                sizes ??
                (carousel
                  ? "(max-width: 640px) 80vw, (max-width: 1023px) 50vw, 25vw"
                  : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw")
              }
              className="object-cover"
              loading="lazy"
            />
          </div>
          {image.caption && (
            <figcaption className="mt-3 px-1 text-sm font-semibold text-neutral-950 leading-snug">
              {image.caption}
            </figcaption>
          )}
        </figure>
  ));

  return carousel ? (
    <Carousel
      label="Photos"
      className="flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items}
    </Carousel>
  ) : (
    <div className={`grid gap-3 sm:gap-4 ${COLUMN_CLASS[columns]}`}>{items}</div>
  );
}

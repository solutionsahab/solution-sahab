// File: src/components/common/ImageGrid.tsx
import React from "react";
import Image from "next/image";

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
}

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
}: ImageGridProps) {
  return (
    <div
      className={
        carousel
          ? "flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          : `grid gap-3 sm:gap-4 ${COLUMN_CLASS[columns]}`
      }
    >
      {images.map((image) => (
        <figure
          key={`${image.src}-${image.alt}`}
          className={`m-0 ${
            carousel
              ? "shrink-0 snap-start w-[80%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
              : ""
          }`}
        >
          <div
            className={`relative w-full overflow-hidden bg-neutral-200 ${
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
            <figcaption className="mt-2 text-sm font-semibold text-neutral-950 leading-snug">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

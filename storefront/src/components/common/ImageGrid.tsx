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
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: ImageGridProps) {
  return (
    <div
      className={`grid gap-3 sm:gap-4 ${COLUMN_CLASS[columns]}`}
    >
      {images.map((image) => (
        <figure key={`${image.src}-${image.alt}`} className="m-0 group">
          <div
            className={`relative w-full overflow-hidden border border-ink/10 bg-paper-deep ${
              ratio === "square" ? "aspect-square" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={sizes}
              className="object-cover"
              loading="lazy"
            />
          </div>
          {image.caption && (
            <figcaption className="mt-2 font-label-sm text-label-sm font-semibold text-ink-soft">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

// File: src/components/common/VideoEmbed.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  orientation?: "landscape" | "vertical";
  className?: string;
}

export function VideoEmbed({
  videoId,
  title,
  orientation = "landscape",
  className = "",
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const aspect = orientation === "vertical" ? "aspect-[9/16]" : "aspect-video";

  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden bg-paper border border-ink/10 shadow-sm ${className}`}
    >
      {isPlaying ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={`Play video: ${title}`}
        >
          <Image
            alt={title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 560px"
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          />
          <span
            className="absolute inset-0 bg-inverse-surface/35"
            aria-hidden="true"
          />
          <span
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-xl group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px] sm:text-[34px] translate-x-[2px]">
                play_arrow
              </span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

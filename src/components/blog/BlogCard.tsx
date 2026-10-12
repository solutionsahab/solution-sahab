// File: src/components/blog/BlogCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getReadTime, type BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      >
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-paper-deep">
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <span
              className="material-symbols-outlined text-[48px] text-primary absolute inset-0 m-auto opacity-60"
              aria-hidden="true"
            >
              article
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-headline-sm text-headline-sm text-ink m-0 leading-snug group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="font-body-md text-body-md text-ink-soft leading-relaxed m-0 line-clamp-4">
            {post.description}
          </p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-3">
            <time
              dateTime={post.datePublished}
              className="font-label-sm text-label-sm font-semibold text-secondary"
            >
              {post.dateLabel}
            </time>
            <span className="font-label-sm text-label-sm text-ink-soft">
              {getReadTime(post)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

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
        className="group flex h-full flex-col overflow-hidden border border-neutral-200 bg-white transition-colors hover:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D8E]"
      >
        <div className="relative w-full h-44 overflow-hidden bg-neutral-200">
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
              className="material-symbols-outlined text-[40px] text-[#1B4D8E] absolute inset-0 m-auto opacity-60"
              aria-hidden="true"
            >
              article
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="text-base font-extrabold font-gilroy text-neutral-950 tracking-tight m-0 leading-snug group-hover:text-[#1B4D8E] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed m-0 line-clamp-2">
            {post.description}
          </p>
          <p className="mt-auto mb-0 pt-1 text-xs text-neutral-500">
            <time dateTime={post.datePublished} className="font-semibold text-neutral-700">
              {post.dateLabel}
            </time>
            <span aria-hidden="true"> | </span>
            {getReadTime(post)}
          </p>
        </div>
      </Link>
    </article>
  );
}

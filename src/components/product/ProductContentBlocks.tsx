// File: src/components/product/ProductContentBlocks.tsx
import React from "react";
import { VideoEmbed } from "@/components/common/VideoEmbed";
import type { ProductBlock } from "@/lib/products";

interface ProductContentBlocksProps {
  blocks: ProductBlock[];
}

function sectionTone(index: number) {
  void index;
  return "bg-white";
}

function BlockShell({
  block,
  index,
  children,
}: {
  block: ProductBlock;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`w-full scroll-mt-28 py-8 sm:py-12 ${sectionTone(index)}`}
      aria-label={block.title || block.id}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">{children}</div>
    </section>
  );
}

function BlockHeading({ title }: { title?: string }) {
  if (!title) return null;
  return (
    <h2 className="font-display-serif text-3xl sm:text-4xl text-ink leading-tight mb-4 sm:mb-5">
      {title}
    </h2>
  );
}

function BulletList({
  items,
  icon,
}: {
  items: string[];
  icon: "done" | "location_on";
}) {
  const iconClass =
    icon === "done"
      ? "text-primary text-[20px]"
      : "text-secondary text-[20px]";
  return (
    <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 font-body-md text-body-md text-ink"
        >
          <span
            className={`material-symbols-outlined ${iconClass} shrink-0 mt-0.5`}
            aria-hidden="true"
          >
            {icon}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function renderBlock(block: ProductBlock) {
  if (block.kind === "prose") {
    return (
      <div className="max-w-4xl mx-auto lg:mx-0">
        <BlockHeading title={block.title} />
        <div className="flex flex-col gap-4">
          {block.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="font-body-md text-body-md text-ink-soft leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
        {block.videoId && block.videoTitle && (
          <div className="mt-8 max-w-3xl">
            <VideoEmbed title={block.videoTitle} videoId={block.videoId} />
          </div>
        )}
      </div>
    );
  }

  if (block.kind === "features") {
    const text = (
      <div className="flex flex-col gap-5">
        <div>
          <BlockHeading title={block.title} />
          {block.summary && (
            <p className="font-body-md text-body-md text-ink-soft leading-relaxed -mt-3">
              {block.summary}
            </p>
          )}
        </div>
        <div>
          <h3 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-3">
            Features
          </h3>
          <BulletList items={block.features} icon="done" />
        </div>
        {block.note && (
          <p className="font-body-md text-body-md text-ink-soft italic">
            {block.note}
          </p>
        )}
        {block.applications && block.applications.length > 0 && (
          <div>
            <h3 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-3">
              Applications
            </h3>
            <BulletList items={block.applications} icon="location_on" />
          </div>
        )}
      </div>
    );

    if (block.videoId && block.videoTitle) {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {text}
          <div className="w-full">
            <VideoEmbed title={block.videoTitle} videoId={block.videoId} />
          </div>
        </div>
      );
    }

    return <div className="max-w-4xl mx-auto lg:mx-0">{text}</div>;
  }

  if (block.kind === "columns") {
    return (
      <div>
        <BlockHeading title={block.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {block.columns.map((column) => (
            <div
              key={column.label}
              className="card-flat p-6"
            >
              <h3 className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider mb-4">
                {column.label}
              </h3>
              <BulletList items={column.items} icon="done" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const isSingle = block.items.length === 1;
  return (
    <div>
      <BlockHeading title={block.title} />
      <div
        className={
          isSingle
            ? "max-w-4xl mx-auto lg:mx-0"
            : "grid grid-cols-1 sm:grid-cols-2 gap-8"
        }
      >
        {block.items.map((item) => (
          <VideoEmbed key={item.id} title={item.title} videoId={item.id} />
        ))}
      </div>
    </div>
  );
}

export function ProductContentBlocks({ blocks }: ProductContentBlocksProps) {
  if (blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, index) => (
        <BlockShell block={block} index={index} key={block.id}>
          {renderBlock(block)}
        </BlockShell>
      ))}
    </>
  );
}

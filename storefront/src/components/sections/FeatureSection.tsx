import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
  id: string;
  title: React.ReactNode;
  text: string;
  /** The illustration or interactive prop */
  children?: React.ReactNode;
  /** Or a framed photo/scene instead of children */
  image?: { src: string; alt: string };
  /** "stack": heading above a wide visual; "split": text beside the visual */
  layout?: "stack" | "split";
  reverse?: boolean;
  tone?: "white" | "tint";
}

// Shared shell for the illustration sections, so spacing and headings match the rest of the site
export function FeatureSection({ id, title, text, children, image, layout = "split", reverse = false, tone = "white" }: FeatureSectionProps) {
  const bg = tone === "tint" ? "bg-[#F3F6FB]" : "bg-white";
  const heading = (
    <>
      <h2 id={`${id}-heading`} className="font-gilroy font-light text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.08] m-0">
        {title}
      </h2>
      <p className="mt-4 mb-0 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">{text}</p>
    </>
  );

  const visual = image ? (
    <div className="relative mx-auto w-full max-w-[620px] pb-5 pl-5">
      <div aria-hidden="true" className="absolute left-0 bottom-0 top-8 w-[70%] rounded-[2rem] bg-[#1B4D8E]" />
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-neutral-200 shadow-2xl">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
      </div>
    </div>
  ) : (
    children
  );

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`w-full ${bg} py-12 sm:py-14 lg:py-16 scroll-mt-28`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {layout === "stack" ? (
          <>
            <div className="reveal mb-8 max-w-3xl">{heading}</div>
            {visual}
          </>
        ) : (
          <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 items-center">
            <div className={`reveal ${reverse ? "lg:order-2" : ""}`}>{heading}</div>
            <div className={reverse ? "lg:order-1" : ""}>{visual}</div>
          </div>
        )}
      </div>
    </section>
  );
}

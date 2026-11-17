// File: src/components/sections/ProductCatalogSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";
import { Carousel } from "@/components/common/Carousel";

interface ProductItem {
  title: string;
  category: string;
  summary: string;
  href: string;
  imageUrl: string;
}

const PRODUCTS: ProductItem[] = [
  {
    title: "Invisible Safety Grills",
    category: "Balconies & Windows",
    summary:
      "316 stainless steel cables with nylon coating for child and pet fall safety without blocking the view.",
    href: "/invisible-grills",
    imageUrl: ASSETS.PHOTOS.INVISIBLE_GRILLS.HERO,
  },
  {
    title: "Pleated Mosquito Mesh",
    category: "Balcony Doors",
    summary:
      "Retractable accordion insect screen on a flat 3mm bottom track with Powder-Coated Aluminium frame.",
    href: "/pleated-mesh",
    imageUrl: ASSETS.PHOTOS.PLEATED_MESH.HERO,
  },
  {
    title: "Aluminum Security Mesh",
    category: "Main Doors & Ground Floors",
    summary:
      "Heavy-gauge alloy security mesh door with multi-point locks that replaces traditional iron grills.",
    href: "/aluminum-mesh-partition",
    imageUrl: ASSETS.PHOTOS.ALUMINUM_MESH.HERO,
  },
  {
    title: "Honeycomb Partitions",
    category: "Living & Dining Dividers",
    summary:
      "Folding room divider with internal air cells that insulate AC cooling and reduce room echo.",
    href: "/honeycomb-partition",
    imageUrl: ASSETS.PHOTOS.HONEYCOMB.HERO,
  },
  {
    title: "Motorized Weather Screens",
    category: "Open Terraces & Balconies",
    summary:
      "Remote-controlled zip-track outdoor blinds that block rain, dust storms, and harsh sunlight.",
    href: "/automatic-weather-screen",
    imageUrl: ASSETS.PHOTOS.WEATHER_SCREEN.HERO,
  },
  {
    title: "Skylights & Ceiling Hangers",
    category: "Stairwells & Utility Balconies",
    summary:
      "Laminated safety glass skylights and ceiling-mounted pulley cloth hangers to free up balcony floor space.",
    href: "/skylight",
    imageUrl: ASSETS.PHOTOS.CLOTH_HANGER.HERO,
  },
];

export function ProductCatalogSection() {
  return (
    <section
      className="w-full bg-[#F3F6FB] py-12 sm:py-14 lg:py-16 scroll-mt-28"
      id="products-showcase"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <h2
            id="products-heading"
            className="font-gilroy font-light text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.05] m-0"
          >
            Our <strong className="font-extrabold">Products</strong>
          </h2>
          <p className="m-0 max-w-md text-neutral-600 leading-relaxed">
            Six systems, each made to measure and fitted by our own team across Delhi NCR.
          </p>
        </div>

        {/* One-row swipe carousel (CSS scroll-snap); py room lets card shadows show inside the scroller */}
        <Carousel label="Our products" className="flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 py-4 -my-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PRODUCTS.map((product) => (
            <article
              key={product.title}
              className="group relative flex flex-col shrink-0 snap-start w-[80%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-3.75rem)/4)] rounded-[1.75rem] bg-white p-3 shadow-[0_10px_30px_-18px_rgb(15_27_51/0.35)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgb(27_77_142/0.45)]"
            >
              <div className="relative h-52 w-full overflow-hidden rounded-[1.25rem] bg-neutral-200">
                <Image
                  alt=""
                  src={product.imageUrl}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1023px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-[#1B4D8E]">
                  {product.category}
                </span>
              </div>

              <div className="flex flex-col flex-1 px-2 pt-4 pb-2">
                <h3 className="text-xl font-extrabold font-gilroy text-neutral-950 tracking-tight m-0 mb-2">
                  {/* Stretched link: the whole card is one click target and one tab stop */}
                  <Link href={product.href} className="after:absolute after:inset-0 after:rounded-[1.75rem] focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[#1B4D8E]">
                    {product.title}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed m-0 mb-5">
                  {product.summary}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#1B4D8E]" aria-hidden="true">
                  View product
                  <span className="material-symbols-outlined flex! h-8 w-8 items-center justify-center rounded-full bg-[#1B4D8E]/10 text-[18px]! transition-colors group-hover:bg-[#1B4D8E] group-hover:text-white">
                    chevron_right
                  </span>
                </span>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

// File: src/components/sections/ProductCatalogSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";

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
    imageUrl: ASSETS.PRODUCTS.INVISIBLE_GRILLS,
  },
  {
    title: "Pleated Mosquito Mesh",
    category: "Balcony Doors",
    summary:
      "Retractable accordion insect screen on a flat 3mm bottom track with Powder-Coated Aluminium frame.",
    href: "/pleated-mesh",
    imageUrl: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
  },
  {
    title: "Aluminum Security Mesh",
    category: "Main Doors & Ground Floors",
    summary:
      "Heavy-gauge alloy security mesh door with multi-point locks that replaces traditional iron grills.",
    href: "/aluminum-mesh-partition",
    imageUrl: ASSETS.PRODUCTS.ALUMINUM_SECURITY_MESH,
  },
  {
    title: "Honeycomb Partitions",
    category: "Living & Dining Dividers",
    summary:
      "Folding room divider with internal air cells that insulate AC cooling and reduce room echo.",
    href: "/honeycomb-partition",
    imageUrl: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
  },
  {
    title: "Motorized Weather Screens",
    category: "Open Terraces & Balconies",
    summary:
      "Remote-controlled zip-track outdoor blinds that block rain, dust storms, and harsh sunlight.",
    href: "/automatic-weather-screen",
    imageUrl: ASSETS.PRODUCTS.WEATHER_SCREENS,
  },
  {
    title: "Skylights & Ceiling Hangers",
    category: "Stairwells & Utility Balconies",
    summary:
      "Laminated safety glass skylights and ceiling-mounted pulley cloth hangers to free up balcony floor space.",
    href: "/skylight",
    imageUrl: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
  },
];

export function ProductCatalogSection() {
  return (
    <section
      className="w-full py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28"
      id="products-showcase"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          id="products-heading"
          className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0 mb-6"
        >
          Our Products
        </h2>

        {/* One-row swipe carousel (CSS scroll-snap): phones peek the next card, wide screens show 3-4 */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PRODUCTS.map((product) => (
            <article
              key={product.title}
              className="flex flex-col shrink-0 snap-start w-[80%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] xl:w-[calc((100%-3rem)/4)] border border-neutral-300 bg-white"
            >
              <Link href={product.href} className="block relative h-44 w-full overflow-hidden bg-neutral-200">
                <Image
                  alt={product.title}
                  src={product.imageUrl}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1023px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover"
                />
              </Link>

              <div className="flex flex-col flex-1 p-4">
                <span className="text-xs font-gilroy font-extrabold uppercase tracking-widest text-[#1B4D8E] mb-1">
                  {product.category}
                </span>
                <h3 className="text-lg font-extrabold font-gilroy text-neutral-950 tracking-tight m-0 mb-1.5">
                  <Link href={product.href} className="hover:underline underline-offset-4">
                    {product.title}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed m-0 mb-4">
                  {product.summary}
                </p>

                {/* mt-auto lines the links up across cards of different text length */}
                <div className="mt-auto flex items-center justify-between text-xs">
                  <Link
                    href={product.href}
                    className="text-neutral-950 hover:opacity-70 inline-flex items-center gap-1 uppercase tracking-wider font-gilroy font-extrabold"
                  >
                    <span>View Product</span>
                    <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                  <Link
                    href="#quick-booking"
                    className="py-1 -my-1 font-semibold text-neutral-600 hover:text-neutral-950 underline underline-offset-4"
                  >
                    Book Visit
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

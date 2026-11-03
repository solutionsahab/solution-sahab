// File: src/components/sections/ProductCatalogSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/const";

interface ProductItem {
  index: string;
  title: string;
  category: string;
  summary: string;
  href: string;
  imageUrl: string;
}

const PRODUCTS: ProductItem[] = [
  {
    index: "01",
    title: "Invisible Safety Grills",
    category: "Balconies & Windows",
    summary:
      "316 stainless steel cables with nylon coating for child and pet fall safety without blocking the view.",
    href: "/invisible-grills",
    imageUrl: ASSETS.PRODUCTS.INVISIBLE_GRILLS,
  },
  {
    index: "02",
    title: "Pleated Mosquito Mesh",
    category: "Balcony Doors",
    summary:
      "Retractable accordion insect screen on a flat 3mm bottom track with Powder-Coated Aluminium frame.",
    href: "/pleated-mesh",
    imageUrl: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
  },
  {
    index: "03",
    title: "Aluminum Security Mesh",
    category: "Main Doors & Ground Floors",
    summary:
      "Heavy-gauge alloy security mesh door with multi-point locks that replaces traditional iron grills.",
    href: "/aluminum-mesh-partition",
    imageUrl: ASSETS.PRODUCTS.ALUMINUM_SECURITY_MESH,
  },
  {
    index: "04",
    title: "Honeycomb Partitions",
    category: "Living & Dining Dividers",
    summary:
      "Folding room divider with internal air cells that insulate AC cooling and reduce room echo.",
    href: "/honeycomb-partition",
    imageUrl: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
  },
  {
    index: "05",
    title: "Motorized Weather Screens",
    category: "Open Terraces & Balconies",
    summary:
      "Remote-controlled zip-track outdoor blinds that block rain, dust storms, and harsh sunlight.",
    href: "/automatic-weather-screen",
    imageUrl: ASSETS.PRODUCTS.WEATHER_SCREENS,
  },
  {
    index: "06",
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
      className="w-full py-16 sm:py-24 border-b border-neutral-300 scroll-mt-28"
      id="products-showcase"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Clean Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10">
          <div>
            <h2
              id="products-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-950 tracking-tight m-0"
            >
              Our Products
            </h2>
          </div>
        </div>

        {/* Flush Hairline Grid — No Floating Rounded Cards or Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {PRODUCTS.map((product) => (
            <article
              key={product.title}
              className="group border-r border border-neutral-300 bg-gray-50 hover:bg-gray-50 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Top Index & Material Bar */}
                <div className="p-2 flex items-center justify-between border-b border-neutral-300 text-xs">
                  <span className=" font-bold ">
                    {product.category}
                  </span>
                </div>

                {/* Sharp Edge-to-Edge Product Image */}
                <Link
                  href={product.href}
                  className="block relative h-60 sm:h-64 w-full overflow-hidden bg-neutral-200 border-b border-neutral-300"
                >
                  <Image
                    alt={product.title}
                    src={product.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </Link>

                {/* Minimal Product Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-extrabold font-gilroy text-neutral-950 tracking-tight m-0">
                    <Link href={product.href} className="hover:underline underline-offset-4">
                      {product.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mt-2 mb-5">
                    {product.summary}
                  </p>


                </div>
              </div>

              {/* Clean Bottom Action Row */}
              <div className="px-4 sm:px-5 py-3 border-t border-neutral-300 flex items-center justify-between text-xs font-semibold">
                <Link
                  href={product.href}
                  className="text-neutral-950 hover:opacity-70 inline-flex items-center gap-1 uppercase tracking-wider font-gilroy font-extrabold"
                >
                  <span>Read Full Detail</span>
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  href="#quick-booking"
                  className="py-1 -my-1 text-neutral-600 hover:text-neutral-950 underline underline-offset-4"
                >
                  Book Visit
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
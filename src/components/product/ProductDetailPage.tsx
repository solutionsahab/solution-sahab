// File: src/components/product/ProductDetailPage.tsx
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ProductDetailHero } from "@/components/product/ProductDetailHero";
import { ProductContentBlocks } from "@/components/product/ProductContentBlocks";
import { ProductCtaBanner } from "@/components/product/ProductCtaBanner";
import type { ProductDetail } from "@/lib/products";

interface ProductDetailPageProps {
  product: ProductDetail;
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <>
      <Header />
      <main className="w-full pt-[92px] sm:pt-[116px] bg-surface min-h-screen">
        <ProductDetailHero
          imageAlt={product.hero.imageAlt}
          imageUrl={product.hero.imageUrl}
          intro={product.hero.intro}
          name={product.name}
        />
        <ProductContentBlocks blocks={product.blocks} />
        <section
          className="w-full bg-paper py-8 sm:py-12"
          aria-label="What affects the price"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="kicker text-ink">Fair pricing</span>
              <h2 className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-3">
                What moves the price
              </h2>
              <p className="font-body-md text-body-md text-ink-soft leading-relaxed m-0">
                Every quote is itemised on the visit sheet — no lump sums, no
                surprises later. Four things decide it:
              </p>
              <ul className="mt-5 flex flex-col gap-2.5 list-none p-0 m-0">
                {[
                  "Total opening size, measured on site",
                  "Wire spacing — 2 inch child-safe or 3 inch standard",
                  "Frame shade and finish you pick",
                  "Floor height and access for the crew",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-body-md text-body-md text-ink"
                  >
                    <span
                      className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      done
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <ProductCtaBanner />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

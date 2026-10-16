// File: src/app/(products)/invisible-grills/page.tsx
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import {
  ProductStructuredData,
  ProductHero,
  WhatAreInvisibleGrills,
  WhyChooseInvisibleGrills,
  InvisibleGrillsSpecs,
  WhyChooseSolutionSahab,
  WhereCanYouInstall,
  ProductFaqSection,
  ProductBookingSection,
  MobileStickyBar,
} from "@/components/product/invisible-grills";
import { ASSETS } from "@/const";

export const metadata: Metadata = {
  title:
    "Invisible Grills Installation in Delhi – Solution Sahab",
  description:
    "Premium invisible grill installation for balconies and windows in Delhi NCR by Solution Sahab. High-tensile AISI 316 stainless steel cables ensure safety without blocking your view. Call +91 9971-143-143.",
  keywords: [
    "grill installation delhi",
    "invisible grills",
    "stainless steel grill",
    "invisible grills for balcony",
    "invisible grill price delhi",
    "Solution Sahab invisible grills",
  ],
  alternates: {
    canonical: "https://solutionsahab.com/invisible-grills",
  },
  openGraph: {
    title:
      "Invisible Grills Installation in Delhi – Solution Sahab",
    description:
      "Premium invisible grill installation for balconies and windows in Delhi NCR. High-tensile stainless steel cables ensure safety without blocking your view.",
    url: "https://solutionsahab.com/invisible-grills",
    siteName: "Solution Sahab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS,
        width: 1200,
        height: 630,
        alt: "Invisible Grills Installation in Delhi NCR by Solution Sahab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Invisible Grills Installation in Delhi – Solution Sahab",
    description:
      "High-tensile AISI 316 stainless steel invisible grills for balconies and windows across Delhi NCR.",
    images: [ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS],
  },
};

export default function InvisibleGrillsProductPage() {
  return (
    <>
      <ProductStructuredData />
      <Header />
      <main className="w-full pt-[92px] sm:pt-[116px] bg-white min-h-screen">
        {/* 1. Top Page Hero: Product Name, Brand Name & Image */}
        <ProductHero />

        {/* 2. What Are Invisible Grills? with YouTube Video */}
        <WhatAreInvisibleGrills />

        {/* 3. Why Choose Invisible Grills? */}
        <WhyChooseInvisibleGrills />

        {/* 4. Technical Specification */}
        <InvisibleGrillsSpecs />

        {/* 5. Why Choose Solution Sahab for Invisible Grill? */}
        <WhyChooseSolutionSahab />

        {/* 6. Where Can You Install Invisible Grills? with Images */}
        <WhereCanYouInstall />

        {/* 7. Frequently Asked Questions (FAQ) */}
        <ProductFaqSection />

        {/* 8. Simple Laser Site Measurement Booking & WhatsApp Quote */}
        <ProductBookingSection />
      </main>
      <MobileStickyBar />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

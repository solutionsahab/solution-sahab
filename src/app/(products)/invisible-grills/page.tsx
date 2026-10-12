// File: src/app/(products)/invisible-grills/page.tsx
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ProductStructuredData } from "@/components/product/ProductStructuredData";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductVideoSection } from "@/components/product/ProductVideoSection";
import { TechnicalDataSheet } from "@/components/product/TechnicalDataSheet";
import { FunctionalAdvantages } from "@/components/product/FunctionalAdvantages";
import { ArchitecturalTypologies } from "@/components/product/ArchitecturalTypologies";
import { TurnkeyInstallationProcess } from "@/components/product/TurnkeyInstallationProcess";
import { ProductBookingSection } from "@/components/product/ProductBookingSection";
import { ProductFaqSection } from "@/components/product/ProductFaqSection";
import { ProductCtaBanner } from "@/components/product/ProductCtaBanner";
import { ASSETS } from "@/const";

export const metadata: Metadata = {
  title:
    "Invisible Grills for Balconies Delhi NCR | 316 Marine Grade SS Wire | Solution Sahab",
  description:
    "Architectural grade invisible grills for high-rise balconies, French windows, and atriums. 316 marine stainless steel cables, 400kgf+ tensile capacity, 10-year anti-rust warranty. Free laser site measurement across Delhi, Gurugram, Noida.",
  keywords: [
    "Invisible Grills Delhi NCR",
    "Balcony Safety Grills Gurgaon",
    "Invisible Grille Noida",
    "316 Stainless Steel Wire Grills",
    "High Rise Balcony Safety Delhi",
    "Child Safe Balcony Grills",
    "Pet Safety Wire Grills",
    "Balcony Invisible Grill Cost per sq ft",
    "Solution Sahab Invisible Grills",
  ],
  alternates: {
    canonical: "https://solutionsahab.com/invisible-grills",
  },
  openGraph: {
    title:
      "Architectural Grade Invisible Grills for Modern Balconies | Solution Sahab",
    description:
      "316 Grade SS High-Tensile Wire Cables with 400kgf+ capacity. Unobstructed views with maximum child & pet safety. Fast 24-48hr laser site visit across Delhi NCR.",
    url: "https://solutionsahab.com/invisible-grills",
    siteName: "Solution Sahab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS,
        width: 1200,
        height: 630,
        alt: "Modern high-rise residential balcony in Delhi NCR with invisible safety grills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Architectural Grade Invisible Grills for Modern Balconies | Solution Sahab",
    description:
      "Safe fenestration solutions with 316-grade SS tensioned cables. Preserving panoramic views while protecting children and pets.",
    images: [ASSETS.HERO_IMAGE_PRODUCT_INVISIBLE_GRILLS],
  },
};

export default function InvisibleGrillsProductPage() {
  return (
    <>
      <ProductStructuredData />
      <Header />
      <main className="w-full pt-[92px] sm:pt-[116px] bg-surface min-h-screen">
        <ProductHero />
        <ProductVideoSection />
        <TechnicalDataSheet />
        <FunctionalAdvantages />
        <ArchitecturalTypologies />
        <TurnkeyInstallationProcess />
        <ProductBookingSection />
        <ProductFaqSection />
        <ProductCtaBanner />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

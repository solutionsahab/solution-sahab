// File: src/app/(products)/invisible-grills/page.tsx
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookingSection } from "@/components/sections/BookingSection";
import {
  ProductHeroSection,
  ProductOverviewSection,
  ProductBenefitsSection,
  ProductTrustPillars,
  ProductApplicationsSection,
  ProductStructuredData,
  ProductUseCaseLinks,
} from "@/components/product/common";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";
import { USE_CASE_PAGES } from "@/lib/use-case-pages";

const config = PRODUCT_CONFIGS["invisible-grills"];

const useCaseLinks = Object.values(USE_CASE_PAGES).map((page) => ({
  title: page.navLabel,
  desc: page.card.desc,
  href: `/${page.slug}`,
  imageUrl: page.card.imageUrl,
  alt: page.card.alt,
}));

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  alternates: {
    canonical: config.metadata.canonical,
  },
  openGraph: {
    title: config.metadata.title,
    description: config.metadata.description,
    url: config.metadata.canonical,
    siteName: "Solution Sahab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: config.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: `${config.hero.productName} by Solution Sahab`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.metadata.title,
    description: config.metadata.description,
    images: [config.metadata.ogImage],
  },
};

export default function InvisibleGrillsProductPage() {
  return (
    <>
      <ProductStructuredData
        productName={config.structuredData.productName}
        serviceName={config.hero.productName}
        description={config.structuredData.description}
        image={config.structuredData.image}
        material={config.structuredData.material}
        slug={config.slug}
        faqs={config.faqs}
      />
      <Header />
      <main id="main-content" className="w-full pt-[87px] sm:pt-[108px] bg-white min-h-screen">
        <ProductHeroSection {...config.hero} />
        <ProductOverviewSection {...config.overview} />
        <ProductBenefitsSection {...config.benefits} />
        {/* <ProductTechnicalSpecs {...config.specs} /> */}
        {config.trustPillars && <ProductTrustPillars {...config.trustPillars} />}
        <ProductApplicationsSection {...config.applications} />
        <ProductUseCaseLinks
          title="Invisible Grills for Every Building"
          subtitle="Schools and hospitals have their own safety needs. See how we plan installations for each."
          items={useCaseLinks}
        />
        <FaqSection
          items={config.faqs}
          title="Common Questions"
          description="Clear answers on safety, RWA approval, warranty, and installation across Delhi NCR."
        />
        <BookingSection
          leadSource={config.leadSource}
          title={config.bookingTitle}
          description={config.bookingDescription}
        />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

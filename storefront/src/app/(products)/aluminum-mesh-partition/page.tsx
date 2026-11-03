// File: src/app/(products)/aluminum-mesh-partition/page.tsx
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
  ProductApplicationsSection,
  ProductStructuredData,
  
} from "@/components/product/common";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["aluminum-mesh-partition"];

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

export default function AluminumMeshPartitionProductPage() {
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
      <main id="main-content" className="w-full pt-[92px] sm:pt-[116px] bg-white min-h-screen">
        <ProductHeroSection {...config.hero} />
        <ProductOverviewSection {...config.overview} />
        <ProductBenefitsSection {...config.benefits} />
        {/* <ProductTechnicalSpecs {...config.specs} /> */}
        {/* <ProductTrustPillars {...config.trustPillars} /> */}
        <ProductApplicationsSection {...config.applications} />
        <FaqSection
          items={config.faqs}
          title="Common Questions"
          description="Clear answers on aluminum security mesh strength, lock hardware, and installation."
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

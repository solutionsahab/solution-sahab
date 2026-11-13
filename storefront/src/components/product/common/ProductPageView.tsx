// File: src/components/product/common/ProductPageView.tsx
// Shared layout and metadata for every product page: /<product>, /invisible-grills-for-<building>
// and the /<product>/<city> landing pages. Each page's differences live in its config.
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ProductHeroSection } from "./ProductHeroSection";
import { ProductOverviewSection } from "./ProductOverviewSection";
import { ProductBenefitsSection } from "./ProductBenefitsSection";
import { ProductTrustPillars } from "./ProductTrustPillars";
import { ProductApplicationsSection } from "./ProductApplicationsSection";
import { ProductStructuredData } from "./ProductStructuredData";
import type { ProductPageConfig } from "@/lib/product-page-configs";
import { CITY_KEYS, CITY_PAGES } from "@/lib/city-pages";

export function buildProductMetadata(config: ProductPageConfig): Metadata {
  return {
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
}

/** children: extra sections shown between applications and the FAQ */
export function ProductPageView({ config, children }: { config: ProductPageConfig; children?: ReactNode }) {
  return (
    <>
      <ProductStructuredData
        productName={config.structuredData.productName}
        serviceName={config.serviceName ?? config.hero.productName}
        description={config.structuredData.description}
        image={config.structuredData.image}
        material={config.structuredData.material}
        slug={config.slug}
        faqs={config.faqs}
        parentCrumb={config.hero.parentCrumb}
        areaServed={config.areaServed}
      />
      <Header serviceArea={config.areaServed?.[0]} />
      <main id="main-content" className="w-full pt-[87px] sm:pt-[108px] bg-white min-h-screen">
        <ProductHeroSection {...config.hero} />
        <ProductOverviewSection {...config.overview} />
        <ProductBenefitsSection {...config.benefits} />
        {config.trustPillars && <ProductTrustPillars {...config.trustPillars} />}
        <ProductApplicationsSection {...config.applications} />
        {children}
        <FaqSection items={config.faqs} title="Common Questions" description={config.faqDescription} />
        <BookingSection
          leadSource={config.leadSource}
          product={config.formProduct}
          title={config.bookingTitle}
          description={config.bookingDescription}
        />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

interface CityRouteProps {
  params: Promise<{ city: string }>;
}

/** Route exports for /<product>/[city]. Each route file still declares dynamicParams itself. */
export function cityRoute(product: string) {
  const find = async ({ params }: CityRouteProps) => CITY_PAGES[`${product}/${(await params).city}`];
  return {
    generateStaticParams: () => CITY_KEYS.map((city) => ({ city })),
    generateMetadata: async (props: CityRouteProps): Promise<Metadata> => {
      const config = await find(props);
      return config ? buildProductMetadata(config) : {};
    },
    Page: async function CityPage(props: CityRouteProps) {
      const config = await find(props);
      if (!config) notFound();
      return <ProductPageView config={config} />;
    },
  };
}

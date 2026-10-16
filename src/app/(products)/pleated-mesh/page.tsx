// File: src/app/(products)/pleated-mesh/page.tsx
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import {
  PleatedMeshStructuredData,
  PleatedMeshHero,
  WhatIsPleatedMesh,
  WhyChoosePleatedMesh,
  PleatedMeshSpecs,
  WhyChooseSolutionSahabMesh,
  WhereCanYouInstallMesh,
  PleatedMeshFaqSection,
  PleatedMeshBookingSection,
  MobileStickyBar,
} from "@/components/product/pleated-mesh";
import { ASSETS } from "@/const";

export const metadata: Metadata = {
  title: "Pleated Mosquito Mesh Installation in Delhi NCR – Solution Sahab",
  description:
    "Premium retractable pleated mosquito mesh for balcony doors and windows across Delhi, Gurgaon, and Noida by Solution Sahab. Jindal T6 6063 aluminum frames, tear-resistant accordion mesh, and 5-year warranty.",
  keywords: [
    "pleated mosquito mesh delhi",
    "mosquito mesh for balcony",
    "retractable insect screen gurgaon",
    "pleated mesh price noida",
    "roller mesh for windows",
    "Solution Sahab pleated mesh",
  ],
  alternates: {
    canonical: "https://solutionsahab.com/pleated-mesh",
  },
  openGraph: {
    title: "Pleated Mosquito Mesh Installation in Delhi NCR – Solution Sahab",
    description:
      "Premium retractable pleated mosquito mesh for balcony doors and windows in Delhi NCR. Protect your family from mosquitoes without blocking ventilation.",
    url: "https://solutionsahab.com/pleated-mesh",
    siteName: "Solution Sahab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
        width: 1200,
        height: 630,
        alt: "Pleated Mosquito Mesh Installation in Delhi NCR by Solution Sahab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pleated Mosquito Mesh Installation in Delhi NCR – Solution Sahab",
    description:
      "Tear-resistant retractable pleated mosquito mesh for balconies and windows across Delhi NCR.",
    images: [ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH],
  },
};

export default function PleatedMeshProductPage() {
  return (
    <>
      <PleatedMeshStructuredData />
      <Header />
      <main className="w-full pt-[92px] sm:pt-[116px] bg-white min-h-screen">
        {/* 1. Top Page Hero: Product Name, Brand Name & Real Balcony Installation */}
        <PleatedMeshHero />

        {/* 2. What Is Pleated Mosquito Mesh? with YouTube Video Demonstration */}
        <WhatIsPleatedMesh />

        {/* 3. Why Choose Pleated Mosquito Mesh? 2-Col Editorial */}
        <WhyChoosePleatedMesh />

        {/* 4. Technical Specification: Jindal T6 6063 Aluminum & PVC-Coated Polyester */}
        <PleatedMeshSpecs />

        {/* 5. Why Choose Solution Sahab for Pleated Mesh? with Real Certificates */}
        <WhyChooseSolutionSahabMesh />

        {/* 6. Where Can You Install Pleated Mosquito Mesh? with 4 Application Cards */}
        <WhereCanYouInstallMesh />

        {/* 7. Frequently Asked Questions (FAQ) Hairline Accordion */}
        <PleatedMeshFaqSection />

        {/* 8. Laser Site Measurement Booking & Direct WhatsApp */}
        <PleatedMeshBookingSection />
      </main>
      <MobileStickyBar />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

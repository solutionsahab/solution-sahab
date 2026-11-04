// File: src/app/(products)/invisible-grills-for-hospitals/page.tsx
import type { Metadata } from "next";
import { UseCasePageView, buildUseCaseMetadata } from "@/components/product/common/UseCasePageView";
import { USE_CASE_PAGES } from "@/lib/use-case-pages";

const config = USE_CASE_PAGES.hospitals;

export const metadata: Metadata = buildUseCaseMetadata(config);

export default function InvisibleGrillsForHospitalsPage() {
  return <UseCasePageView config={config} />;
}

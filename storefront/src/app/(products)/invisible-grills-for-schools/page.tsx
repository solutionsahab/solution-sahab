// File: src/app/(products)/invisible-grills-for-schools/page.tsx
import type { Metadata } from "next";
import { UseCasePageView, buildUseCaseMetadata } from "@/components/product/common/UseCasePageView";
import { USE_CASE_PAGES } from "@/lib/use-case-pages";

const config = USE_CASE_PAGES.schools;

export const metadata: Metadata = buildUseCaseMetadata(config);

export default function InvisibleGrillsForSchoolsPage() {
  return <UseCasePageView config={config} />;
}

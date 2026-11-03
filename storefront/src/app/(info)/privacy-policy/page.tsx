// File: src/app/(info)/privacy-policy/page.tsx
import type { Metadata } from "next";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { ProseSections } from "@/components/common/ProseSections";
import { buildPageMetadata } from "@/lib/seo";
import { PRIVACY_POLICY } from "@/lib/info-pages";

export const metadata: Metadata = buildPageMetadata({
  path: PRIVACY_POLICY.path,
  title: "Privacy Policy | Solution Sahab",
  description: PRIVACY_POLICY.description,
  keywords: PRIVACY_POLICY.keywords,
});

export default function PrivacyPolicyPage() {
  return (
    <InfoPage>
      <PageHero
        compact
        eyebrow={PRIVACY_POLICY.eyebrow}
        title={PRIVACY_POLICY.title}
        description={PRIVACY_POLICY.description}
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <ProseSections sections={PRIVACY_POLICY.sections} />
    </InfoPage>
  );
}

// File: src/app/(info)/razorpaymesolutionsahab8809/page.tsx
import type { Metadata } from "next";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo";

const DESCRIPTION = "Pay Solution Sahab securely online through Razorpay.";

// Private payment link for customers; kept out of search results.
export const metadata: Metadata = {
  ...buildPageMetadata({
    path: "/razorpaymesolutionsahab8809",
    title: "Payments | Solution Sahab",
    description: DESCRIPTION,
  }),
  robots: { index: false, follow: false },
};

export default function PaymentsPage() {
  return (
    <InfoPage>
      <PageHero
        compact
        title="Payments"
        description={DESCRIPTION}
        breadcrumbs={[{ label: "Payments" }]}
      >
        <Button href="https://razorpay.me/@solutionsahab8809" size="lg" icon="payments">
          Pay
        </Button>
      </PageHero>
    </InfoPage>
  );
}

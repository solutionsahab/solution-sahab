// File: src/app/(info)/razorpaymesolutionsahab8809/page.tsx
import type { Metadata } from "next";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/Button";
import { ThankYouMark } from "@/components/common/ThankYouMark";
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
        <Button href="https://razorpay.me/@solutionsahab8809" size="lg" icon="payments" sameTab>
          Pay
        </Button>
        <div className="mt-8 flex flex-col items-start gap-3">
          <ThankYouMark />
          <p className="m-0 text-base font-gilroy font-extrabold text-neutral-950">
            Thank you for choosing us
          </p>
        </div>
      </PageHero>
    </InfoPage>
  );
}

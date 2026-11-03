"use client";

// File: src/app/error.tsx
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error("[Page Error]", error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-4 py-24"
    >
      <h1 className="font-display-serif text-3xl sm:text-4xl text-ink m-0">
        Something went wrong
      </h1>
      <p className="font-body-lg text-body-lg text-ink-soft max-w-md m-0">
        This page didn&apos;t load properly. Please try again, or call us on{" "}
        <a href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`} className="underline font-semibold">
          {CONTACT_INFO.PHONE_PRIMARY}
        </a>
        .
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={() => retry()}>Try again</Button>
        <Button href="/" variant="outline">
          Go to homepage
        </Button>
      </div>
    </main>
  );
}

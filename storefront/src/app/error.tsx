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
      className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-5 py-16 sm:py-20 bg-white"
    >
      <h1 className="text-3xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0">
        Something went wrong
      </h1>
      <p className="text-base text-neutral-700 leading-relaxed max-w-md m-0">
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

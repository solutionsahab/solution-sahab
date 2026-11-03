// File: src/app/not-found.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-4 pt-[132px] sm:pt-[156px] pb-24"
      >
        <h1 className="font-display-serif text-3xl sm:text-4xl text-ink m-0">
          Page not found
        </h1>
        <p className="font-body-lg text-body-lg text-ink-soft max-w-md m-0">
          The page you&apos;re looking for has moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/">Go to homepage</Button>
          <Button href="/blog-list" variant="outline">
            Read our blog
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}

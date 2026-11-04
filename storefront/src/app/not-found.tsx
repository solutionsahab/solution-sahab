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
        className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-5 pt-[127px] sm:pt-[156px] pb-16 sm:pb-20 bg-white"
      >
        <h1 className="text-3xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0">
          Page not found
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-md m-0">
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

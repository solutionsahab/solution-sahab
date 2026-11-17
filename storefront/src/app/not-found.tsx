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
        className="flex-1 flex flex-col items-center justify-center text-center gap-5 px-5 pt-[127px] sm:pt-[156px] pb-14 sm:pb-20 bg-[#F3F6FB]"
      >
        <p
          aria-hidden="true"
          className="m-0 select-none font-gilroy font-extrabold leading-none tracking-[-0.05em] text-[9rem] sm:text-[13rem] bg-clip-text text-transparent bg-cover bg-center"
          style={{ backgroundImage: "url(/images/products/invisible-grills/balcony-sunset.webp)" }}
        >
          404
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0">
          Page not found
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-md m-0">
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

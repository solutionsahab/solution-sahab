// File: src/components/common/ThankYouMark.tsx
import Image from "next/image";
import { ASSETS } from "@/lib/constants";

// Animated logo shown with "Thank you for choosing us"; decorative, and still for reduced-motion users.
export function ThankYouMark({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`} aria-hidden="true">
      <Image
        src={ASSETS.LOGO_LOCAL}
        alt=""
        width={256}
        height={45}
        className="h-8 sm:h-10 w-auto motion-safe:animate-[thanks-rise_0.7s_ease-out_both]"
      />
      <span className="block h-1 w-full origin-left bg-[#1B4D8E] motion-safe:animate-[thanks-line_0.6s_0.4s_ease-out_both,thanks-glow_2.4s_1.2s_ease-in-out_infinite]" />
    </div>
  );
}

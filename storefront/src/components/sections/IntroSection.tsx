import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ASSETS, CONTACT_INFO } from "@/lib/constants";
import { FACTS } from "@/lib/facts";
import { CUSTOMER_VIDEOS } from "@/components/sections/TestimonialsSection";

// Only claims the site already makes (facts.ts and the FAQ)
const KEY_FACTS = [
  { value: `${FACTS.yearsExperience} yrs`, label: "installing across Delhi NCR" },
  { value: FACTS.happyCustomers, label: "homes, offices and schools fitted" },
  { value: "400 kg", label: "tested breaking load per cable" },
  { value: "5 yrs", label: "signed anti-rust warranty" },
];

export function IntroSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 overflow-hidden" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* Two real installs layered on an indigo block, with the warranty floating on top */}
        <div className="reveal relative mx-auto w-full max-w-[540px] aspect-[1/1.02]">
          <div aria-hidden="true" className="absolute left-0 top-[8%] bottom-[14%] w-[62%] rounded-[2rem] bg-[#1B4D8E]" />
          <div className="absolute left-[7%] top-0 w-[70%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src={ASSETS.PHOTOS.INVISIBLE_GRILLS.BALCONY_SUNSET}
              alt="Invisible grill cables across a high-rise balcony at sunset, with the city skyline in clear view"
              fill
              sizes="(max-width: 1023px) 70vw, 380px"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[50%] aspect-square rounded-[1.75rem] overflow-hidden border-[6px] border-white shadow-2xl">
            <Image
              src={ASSETS.PHOTOS.INVISIBLE_GRILLS.EVENING_BALCONY}
              alt="Long apartment balcony closed with invisible grills, evening lights of the society beyond"
              fill
              sizes="(max-width: 1023px) 50vw, 270px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-0 bottom-[6%] flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_-12px_rgb(15_27_51/0.35)]">
            <span className="material-symbols-outlined flex! h-11 w-11 items-center justify-center rounded-full bg-[#1B4D8E]/10 text-[#1B4D8E]" aria-hidden="true">
              verified
            </span>
            <span className="leading-tight">
              <span className="block font-gilroy font-extrabold text-xl text-neutral-950">5 years</span>
              <span className="block text-xs text-neutral-600">anti-rust warranty card</span>
            </span>
          </div>
        </div>

        <div className="reveal">
          <h2 id="intro-heading" className="font-gilroy font-light text-[2rem] sm:text-5xl lg:text-6xl text-neutral-950 tracking-tight leading-[1.05] m-0">
            Safety you <strong className="font-extrabold text-[#1B4D8E]">can&apos;t see.</strong>
          </h2>
          <p className="mt-5 mb-0 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
            Bulky iron grills turn a balcony into a cage. We fit thin, tensioned stainless steel cables
            and screens that keep children and pets safe, keep mosquitoes out, and leave your view, light
            and breeze exactly as they were.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 max-w-xl m-0">
            {KEY_FACTS.map((f) => (
              <div key={f.label} className="flex flex-col-reverse border-l-2 border-[#1B4D8E]/20 pl-4">
                <dt className="text-sm text-neutral-600 leading-snug">{f.label}</dt>
                <dd className="m-0 font-gilroy font-extrabold text-2xl sm:text-3xl text-neutral-950 tabular-nums">{f.value}</dd>
              </div>
            ))}
          </dl>

          {/* Faces from the real customer videos further down the page */}
          <a href="#customer-videos" className="group mt-8 inline-flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D8E]">
            <span className="flex -space-x-3" aria-hidden="true">
              {CUSTOMER_VIDEOS.slice(0, 4).map((v) => (
                <Image
                  key={v.videoId}
                  src={`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover shadow"
                />
              ))}
            </span>
            <span className="text-sm text-neutral-700 leading-snug">
              <strong className="text-neutral-950">Real customers, on camera.</strong>
              <span className="block group-hover:underline underline-offset-4">Watch their installs</span>
            </span>
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#quick-booking" variant="primary" size="lg">
              Book a site visit
            </Button>
            <Button href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`} variant="outline" size="lg" icon="call">
              {CONTACT_INFO.PHONE_PRIMARY}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

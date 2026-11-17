import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";

// Every spec below is already stated in the home FAQ and product pages
const LEFT = [
  { value: "316", label: "Marine-grade steel", text: "The stainless alloy used on ships, so Delhi monsoons and smog don't rust it." },
  { value: "400 kg", label: "Per cable", text: "Each cable is tensioned and tested for a 400 kg breaking load." },
  { value: "2–3″", label: "Cable spacing", text: "Close enough that toddlers and pets can't slip through." },
];
const RIGHT = [
  { value: "Nylon", label: "Coated finish", text: "Smooth to touch, so little fingers don't get cut." },
  { value: "10 sec", label: "Fire exit", text: "Cables cut in seconds with the emergency cutter we hand over." },
  { value: "5 yrs", label: "Warranty", text: "A signed anti-rust warranty card with every install." },
];

function Spec({ s, side }: { s: (typeof LEFT)[number]; side: "left" | "right" }) {
  return (
    <li
      className={`reveal relative ${side === "left" ? "lg:text-right lg:pr-10" : "lg:pl-10"}`}
    >
      {/* Leader line toward the photo, like a callout on a drawing */}
      <span
        aria-hidden="true"
        className={`hidden lg:block absolute top-4 h-px w-8 bg-white/30 ${side === "left" ? "right-0" : "left-0"}`}
      />
      <p className="m-0 font-gilroy font-extrabold text-3xl text-white tabular-nums">{s.value}</p>
      <p className="m-0 mt-1 text-sm font-semibold text-[#A8C4F5]">{s.label}</p>
      <p className="m-0 mt-1.5 text-sm text-white/70 leading-relaxed">{s.text}</p>
    </li>
  );
}

export function AnatomySection() {
  return (
    <section className="relative isolate w-full bg-[#0F1B33] text-white py-12 sm:py-14 lg:py-16 overflow-hidden" aria-labelledby="anatomy-heading">
      {/* AI-generated steel-rope texture, faded right back so it reads as material, not a photo */}
      <Image
        src="/images/props/prop-texture-steel.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.14] mix-blend-luminosity"
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* The word itself is filled with a real install photo: the product hides in plain sight */}
        <p
          aria-hidden="true"
          className="m-0 select-none text-center font-gilroy font-extrabold uppercase leading-[0.85] tracking-[-0.04em] text-[14.5vw] xl:text-[11.5rem] bg-clip-text text-transparent bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.PHOTOS.INVISIBLE_GRILLS.BALCONY_SUNSET})` }}
        >
          Invisible
        </p>

        <h2 id="anatomy-heading" className="reveal mt-6 text-center font-gilroy font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight m-0">
          Built to hold. <strong className="font-extrabold">Made to disappear.</strong>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(0,420px)_1fr] lg:items-center">
          <ul className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 list-none m-0 p-0 order-2 lg:order-1">
            {LEFT.map((s) => (
              <Spec key={s.label} s={s} side="left" />
            ))}
          </ul>

          <div className="reveal relative order-1 lg:order-2 mx-auto w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.6)]">
            <Image
              src={ASSETS.PHOTOS.INVISIBLE_GRILLS.CABLE_CLOSEUP}
              alt="Close-up of tensioned invisible grill cables and their fixing clamps on a balcony"
              fill
              sizes="(max-width: 1023px) 90vw, 420px"
              className="object-cover"
            />
          </div>

          <ul className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 list-none m-0 p-0 order-3">
            {RIGHT.map((s) => (
              <Spec key={s.label} s={s} side="right" />
            ))}
          </ul>
        </div>

        <p className="mt-12 mb-0 text-center">
          <Link
            href="/invisible-grills"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#0F1B33] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            How invisible grills work
            <span className="material-symbols-outlined text-[18px]!" aria-hidden="true">chevron_right</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

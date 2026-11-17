// Stylised (not to scale) Delhi NCR map with a pin for every installation that has a blog post.
// Server component: imports BLOG_POSTS so pin names always match live post titles.
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

type Kind = "grill" | "mesh" | "shade";

const KINDS: Record<Kind, { label: string; color: string }> = {
  grill: { label: "Invisible grill", color: "#1B4D8E" },
  mesh: { label: "Pleated mesh", color: "#00A859" },
  shade: { label: "Honeycomb & screens", color: "#C63127" },
};

// x/y are in the 600x520 map viewBox. `place` must appear in the post title (visible label is part of the name).
const PINS: { slug: string; place: string; kind: Kind; x: number; y: number }[] = [
  { slug: "pleated-mesh-in-paschim-vihar", place: "Paschim Vihar", kind: "mesh", x: 172, y: 128 },
  { slug: "invisible-grill-installation-at-gd-goenka-school-vasant-kunj-solution-sahab", place: "Vasant Kunj", kind: "grill", x: 212, y: 232 },
  { slug: "honeycomb-installation-kingcourt-gk2", place: "GK-2", kind: "shade", x: 278, y: 214 },
  { slug: "invisible-grill-in-mayur-vihar", place: "Mayur Vihar", kind: "grill", x: 358, y: 186 },
  { slug: "invisible-grill-in-ghaziabad", place: "Ghaziabad", kind: "grill", x: 462, y: 124 },
  { slug: "invisible-grills-in-noida-extension", place: "Noida Extension", kind: "grill", x: 486, y: 244 },
  { slug: "invisible-grill-in-greater-noida-west", place: "Greater Noida West", kind: "grill", x: 506, y: 288 },
  { slug: "honeycomb-partition-in-noida", place: "Noida", kind: "shade", x: 404, y: 268 },
  { slug: "pleated-mesh-in-greater-noida", place: "Greater Noida", kind: "mesh", x: 488, y: 396 },
  { slug: "pleated-mesh-in-faridabad", place: "Faridabad", kind: "mesh", x: 300, y: 388 },
  { slug: "invisible-grill-in-dwarka-expressway-gurgaon", place: "Dwarka Expressway", kind: "grill", x: 164, y: 304 },
  { slug: "automatic-weather-screen-in-gurugram", place: "Gurugram", kind: "shade", x: 112, y: 356 },
  { slug: "invisible-grills-in-golf-course-extension-road-gurgaon", place: "Golf Course Extension Road", kind: "grill", x: 180, y: 392 },
  { slug: "invisible-grill-in-sohna-road-gurgaon", place: "Sohna Road", kind: "grill", x: 214, y: 430 },
];

// Drops a pin quietly if its post is ever removed, so the map never links to a 404.
export const NCR_INSTALL_PINS = PINS.flatMap((pin) => {
  const post = BLOG_POSTS.find((p) => p.slug === pin.slug);
  return post ? [{ ...pin, title: post.title, href: `/${pin.slug}` }] : [];
});

const REGIONS = [
  { name: "Delhi", fill: "#E2EBF7", label: [262, 96], d: "M150 70C190 40 290 40 330 60c30 20 50 60 42 110-6 45-32 80-72 98-45 17-100 12-130-13-35-30-50-80-45-125 3-30 10-45 25-60Z" },
  { name: "Ghaziabad", fill: "#fff", label: [470, 176], d: "M385 70c45-20 115-10 150 20 25 30 20 80-10 105-35 20-95 15-130-5-17-30-20-80-10-120Z" },
  { name: "Noida", fill: "#fff", label: [446, 298], d: "M360 230c40-18 120-18 160-2 20 22 15 72-20 87-50 17-115 10-132-15-13-20-16-50-8-70Z" },
  { name: "Greater Noida", fill: "#fff", label: [492, 446], d: "M420 335c50-15 120-5 145 30 15 35-5 85-50 100-45 13-95-5-110-40-10-35-5-75 15-90Z" },
  { name: "Gurugram", fill: "#fff", label: [104, 418], d: "M55 300c45-28 135-22 185-2 18 32 15 102-12 137-40 35-115 30-150 0-35-30-40-95-23-135Z" },
  { name: "Faridabad", fill: "#fff", label: [300, 470], d: "M262 300c28-12 63-5 78 20 10 40 5 100-10 140-15 30-50 32-62 5-13-45-13-115-6-165Z" },
] as const;

export function NcrInstallMap({ className = "" }: { className?: string }) {
  return (
    <figure className={`w-full ${className}`}>
      <div className="relative">
        <svg viewBox="0 0 600 520" className="h-auto w-full" aria-hidden="true">
          <defs>
            <pattern id="ss-map-dots" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#C9D6EA" />
            </pattern>
          </defs>
          <rect width="600" height="520" rx="32" fill="#F3F6FB" />
          <rect width="600" height="520" rx="32" fill="url(#ss-map-dots)" opacity="0.7" />
          {REGIONS.map((r) => (
            <path key={r.name} d={r.d} fill={r.fill} stroke="#CCD8EA" strokeWidth="2" strokeLinejoin="round" />
          ))}
          {/* Yamuna: a wide soft band with a brighter core */}
          <g fill="none" strokeLinecap="round">
            <path id="ss-map-yamuna" d="M335 0c5 60 17 90 15 130-2 40-20 70-12 110s34 60 32 105-30 75-20 120c6 25 15 40 20 55" stroke="#BBD7F2" strokeWidth="11" />
            <path d="M335 0c5 60 17 90 15 130-2 40-20 70-12 110s34 60 32 105-30 75-20 120c6 25 15 40 20 55" stroke="#7FB2E5" strokeWidth="3" />
          </g>
          <text fontSize="12" fill="#5F8FC4" fontStyle="italic" letterSpacing="2">
            <textPath href="#ss-map-yamuna" startOffset="8%">Yamuna</textPath>
          </text>
          {REGIONS.map((r) => (
            <text key={r.name} x={r.label[0]} y={r.label[1]} textAnchor="middle" fontSize="14" fontWeight="700" letterSpacing="2.5" fill="#0F1B33" opacity="0.5">
              {r.name.toUpperCase()}
            </text>
          ))}
          {/* Compass */}
          <g transform="translate(560 44)">
            <circle r="17" fill="#fff" stroke="#CCD8EA" strokeWidth="1.5" />
            <path d="M0-11 5 3H-5Z" fill="#1B4D8E" />
            <text y="13" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0F1B33">N</text>
          </g>
          {/* Static dots for phones, where the interactive pins are swapped for the chip list */}
          <g className="sm:hidden">
            {NCR_INSTALL_PINS.map((p) => (
              <circle key={p.slug} cx={p.x} cy={p.y} r="7" fill={KINDS[p.kind].color} stroke="#fff" strokeWidth="3" />
            ))}
          </g>
        </svg>

        <ul aria-label="Installations on the map" className="hidden sm:block">
          {NCR_INSTALL_PINS.map((p, i) => {
            const align = p.x < 150 ? "left-0" : p.x > 450 ? "right-0" : "left-1/2 -translate-x-1/2";
            return (
              <li key={p.slug} className="absolute" style={{ left: `${(p.x / 600) * 100}%`, top: `${(p.y / 520) * 100}%` }}>
                <Link
                  href={p.href}
                  aria-label={p.title}
                  className="group absolute grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full outline-none hover:z-10 focus-visible:z-10 focus-visible:ring-4 focus-visible:ring-[#1B4D8E]/40"
                >
                  <span
                    aria-hidden="true"
                    className="absolute h-3.5 w-3.5 rounded-full opacity-40 [animation-duration:2.8s] motion-safe:animate-ping"
                    style={{ backgroundColor: KINDS[p.kind].color, animationDelay: `${(i % 7) * 0.4}s` }}
                  />
                  <span
                    aria-hidden="true"
                    className="relative h-3.5 w-3.5 rounded-full border-2 border-white shadow-[0_2px_6px_rgba(15,27,51,0.35)] transition-transform group-hover:scale-125 group-focus-visible:scale-125"
                    style={{ backgroundColor: KINDS[p.kind].color }}
                  />
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute bottom-full mb-1.5 whitespace-nowrap rounded-xl bg-[#0F1B33] px-3 py-1.5 text-left text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 ${align}`}
                  >
                    <span className="block font-semibold">{p.place}</span>
                    <span className="block text-white/70">{KINDS[p.kind].label}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-[#5B6B85]">
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          {Object.values(KINDS).map((k) => (
            <span key={k.label} className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: k.color }} />
              {k.label}
            </span>
          ))}
        </span>
        <span className="italic">Map not to scale</span>
      </figcaption>

      <ul aria-label="Installations with project notes" className="mt-4 flex flex-wrap gap-2 sm:hidden">
        {NCR_INSTALL_PINS.map((p) => (
          <li key={p.slug}>
            <Link
              href={p.href}
              aria-label={p.title}
              className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#0F1B33] ring-1 ring-[#D5DFEE] transition-colors hover:bg-[#1B4D8E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D8E]"
            >
              <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ backgroundColor: KINDS[p.kind].color }} />
              {p.place}
            </Link>
          </li>
        ))}
      </ul>
    </figure>
  );
}

export default NcrInstallMap;

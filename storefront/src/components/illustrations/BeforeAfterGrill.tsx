// Drag-to-compare: a drawn traditional MS iron grill over the left part of a real invisible-grill photo.
"use client";

import Image from "next/image";
import { useId, useState, type PointerEvent } from "react";

const W = 963;
const H = 722;
const BAR_XS = Array.from({ length: 15 }, (_, i) => 26 + i * 65);
// Ring / diamond motifs sit in the gaps between neighbouring bars
const GAP_XS = BAR_XS.slice(0, -1).map((x) => x + 38.5);
// Deterministic rust flecks so server and client render the same markup
const RUST = Array.from({ length: 70 }, (_, i) => ({
  x: BAR_XS[(i * 7) % BAR_XS.length] + 2 + ((i * 5) % 9),
  y: (i * 137) % H,
  r: 1.5 + ((i * 3) % 4),
}));

function IronGrill({ uid }: { uid: string }) {
  const v = `${uid}v`;
  const h = `${uid}h`;
  const shadow = `${uid}s`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={v} x1="0" x2="1">
          <stop offset="0" stopColor="#24272c" />
          <stop offset="0.45" stopColor="#5d626b" />
          <stop offset="1" stopColor="#1e2024" />
        </linearGradient>
        <linearGradient id={h} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#5d626b" />
          <stop offset="1" stopColor="#202227" />
        </linearGradient>
        <filter id={shadow} x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="5" dy="7" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>
      {/* The caged side feels darker: that contrast is the whole point of the comparison */}
      <rect width={W} height={H} fill="#0F1B33" opacity="0.22" />
      <g filter={`url(#${shadow})`}>
        {BAR_XS.map((x) => (
          <rect key={x} x={x} y="0" width="13" height={H} fill={`url(#${v})`} />
        ))}
        {[0, 128, 238, 382, 470, 706].map((y) => (
          <rect key={y} x="0" y={y} width={W} height="16" rx="2" fill={`url(#${h})`} />
        ))}
        {/* Top band: diamonds; middle band: rings; lower band: arches */}
        {GAP_XS.map((x) => (
          <g key={x} fill="none" stroke={`url(#${v})`} strokeWidth="8" strokeLinejoin="round">
            <path d={`M${x} 42 L${x + 22} 72 L${x} 102 L${x - 22} 72 Z`} />
            <circle cx={x} cy="310" r="26" />
            <circle cx={x} cy="310" r="8" fill="#3c4047" stroke="none" />
            <path d={`M${x - 26} 470 C${x - 26} 420 ${x + 26} 420 ${x + 26} 470`} />
          </g>
        ))}
      </g>
      {RUST.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#8a4a26" opacity="0.55" />
      ))}
    </svg>
  );
}

export function BeforeAfterGrill({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState(50);
  const uid = useId().replace(/[^\w-]/g, "");

  const moveTo = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos(Math.round(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100))));
  };

  return (
    <div
      className={`relative aspect-[963/722] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[2rem] bg-[#0F1B33] shadow-[0_24px_60px_-28px_rgba(15,27,51,0.55)] ${className}`}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        moveTo(e);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) moveTo(e);
      }}
    >
      <Image
        src="/images/products/invisible-grills/balcony-sunset.webp"
        alt="Balcony with near-invisible steel grill cables, looking out at high-rise towers"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
        className="object-cover"
        draggable={false}
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <IronGrill uid={uid} />
      </div>

      {/* Pointer input is handled on the wrapper (iOS won't drag a hidden range from its track);
          the range stays for keyboard and screen readers. */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare iron grill with invisible grill"
        aria-valuetext={`${pos}% iron grill, ${100 - pos}% invisible grill`}
        className="peer pointer-events-none absolute inset-0 h-full w-full opacity-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.45)]"
        style={{ left: `${pos}%` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#1B4D8E] shadow-lg ring-[#1B4D8E]/45 peer-focus-visible:ring-4"
        style={{ left: `${pos}%` }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
        </svg>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#0F1B33]/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur transition-opacity sm:left-4 sm:top-4"
        style={{ opacity: pos > 18 ? 1 : 0 }}
      >
        Iron grill
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#1B4D8E]/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur transition-opacity sm:right-4 sm:top-4"
        style={{ opacity: pos < 82 ? 1 : 0 }}
      >
        Invisible grill
      </span>
    </div>
  );
}

export default BeforeAfterGrill;

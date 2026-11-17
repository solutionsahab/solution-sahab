// Balcony opening where the invisible-grill cables draw in, bolts tighten and a load gauge swings to "400 kg".
// Scroll-driven where supported and motion is welcome; everyone else sees the finished, tensioned state.
import type { CSSProperties } from "react";

const CABLE_XS = Array.from({ length: 13 }, (_, i) => 84 + i * 26);
const TOWERS: [number, number, number][] = [
  [62, 34, 118], [100, 26, 84], [130, 40, 140], [176, 30, 96], [212, 46, 128],
  [262, 28, 74], [294, 38, 150], [336, 30, 104], [370, 48, 132],
];

const CSS = `
.ss-cable-bolt,.ss-cable-pulse{transform-box:fill-box;transform-origin:center}
.ss-cable-needle{transform-box:view-box;transform-origin:34px 42px;transform:rotate(62deg)}
@media (prefers-reduced-motion:no-preference){
  .ss-cable-pulse{animation:ss-cable-pulse 2.4s ease-out infinite}
  @supports ((animation-timeline:view()) and (animation-range:entry)){
    .ss-cable{view-timeline:--ss-cable block}
    .ss-cable-line{animation:ss-cable-draw linear both;animation-timeline:--ss-cable;
      animation-range:cover calc(6% + var(--i) * 1.6%) cover calc(24% + var(--i) * 1.6%)}
    .ss-cable-bolt{animation:ss-cable-turn linear both;animation-timeline:--ss-cable;
      animation-range:cover calc(26% + var(--i) * 1%) cover calc(40% + var(--i) * 1%)}
    .ss-cable-needle{animation:ss-cable-needle ease-out both;animation-timeline:--ss-cable;animation-range:cover 30% cover 50%}
  }
}
@keyframes ss-cable-draw{from{stroke-dashoffset:1;stroke:#b8c3d4}to{stroke-dashoffset:0;stroke:#3f4c63}}
@keyframes ss-cable-turn{from{transform:rotate(-270deg)}to{transform:rotate(0)}}
@keyframes ss-cable-needle{from{transform:rotate(-85deg)}to{transform:rotate(62deg)}}
@keyframes ss-cable-pulse{from{transform:scale(1);opacity:.6}to{transform:scale(3.2);opacity:0}}
`;

function Bolt({ x, y, i }: { x: number; y: number; i: number }) {
  return (
    <g className="ss-cable-bolt" style={{ "--i": i } as CSSProperties}>
      <circle cx={x} cy={y} r="4.6" fill="#1B4D8E" />
      <path d={`M${x - 2.6} ${y}h5.2`} stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </g>
  );
}

export function CableTension({ className = "" }: { className?: string }) {
  return (
    <figure className={`ss-cable w-full ${className}`}>
      <style href="ss-cable-tension" precedence="default">{CSS}</style>
      <svg
        viewBox="0 0 480 380"
        className="h-auto w-full"
        role="img"
        aria-label="Illustration: steel cables drawn and tightened across a balcony opening, each one load tested to 400 kg"
      >
        <defs>
          <linearGradient id="ss-cable-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#CFE2F7" />
            <stop offset="1" stopColor="#F7FAFE" />
          </linearGradient>
          <clipPath id="ss-cable-open">
            <rect x="60" y="44" width="360" height="262" rx="10" />
          </clipPath>
          <filter id="ss-cable-shadow" x="-20%" y="-30%" width="140%" height="170%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0F1B33" floodOpacity="0.16" />
          </filter>
        </defs>

        <rect x="8" y="8" width="464" height="364" rx="36" fill="#E6EDF7" />
        <rect x="60" y="44" width="360" height="262" rx="10" fill="url(#ss-cable-sky)" />
        <g clipPath="url(#ss-cable-open)">
          <circle cx="336" cy="104" r="26" fill="#FFE4B0" opacity="0.85" />
          {TOWERS.map(([x, w, h]) => (
            <g key={x}>
              <rect x={x} y={306 - h} width={w} height={h} rx="3" fill="#C3D2E8" />
              {Array.from({ length: Math.floor(h / 18) }, (_, r) => (
                <path key={r} d={`M${x + 6} ${312 - h + r * 18}h${w - 12}`} stroke="#E4ECF7" strokeWidth="3" strokeDasharray="4 4" />
              ))}
            </g>
          ))}
          {/* Balcony railing and glass, behind the cables */}
          <rect x="60" y="232" width="360" height="74" fill="#fff" opacity="0.45" />
          <rect x="60" y="226" width="360" height="8" rx="4" fill="#A9B5C8" />
        </g>

        <rect x="54" y="38" width="372" height="14" rx="5" fill="#9AA7BB" />
        <rect x="54" y="292" width="372" height="14" rx="5" fill="#9AA7BB" />

        {CABLE_XS.map((x, i) => (
          <line
            key={x}
            className="ss-cable-line"
            style={{ "--i": i } as CSSProperties}
            x1={x}
            y1="50"
            x2={x}
            y2="294"
            pathLength={1}
            strokeDasharray="1"
            stroke="#3f4c63"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        ))}
        {CABLE_XS.map((x, i) => (
          <g key={x}>
            <Bolt x={x} y={45} i={i} />
            <Bolt x={x} y={299} i={i} />
          </g>
        ))}

        <g transform="translate(296 300)" filter="url(#ss-cable-shadow)">
          <rect width="166" height="62" rx="20" fill="#fff" />
          <path d="M14 42a20 20 0 0 1 40 0" fill="none" stroke="#DCE4F0" strokeWidth="6" strokeLinecap="round" />
          <path d="M48.1 27.9A20 20 0 0 1 54 42" fill="none" stroke="#00A859" strokeWidth="6" strokeLinecap="round" />
          <g className="ss-cable-needle">
            <path d="M34 42V25" stroke="#0F1B33" strokeWidth="2.6" strokeLinecap="round" />
          </g>
          <circle cx="34" cy="42" r="3.6" fill="#0F1B33" />
          <text x="68" y="33" className="font-gilroy font-extrabold" fontSize="21" fill="#0F1B33">400 kg</text>
          <text x="68" y="50" fontSize="11.5" fill="#5B6B85">tested</text>
          <circle className="ss-cable-pulse" cx="148" cy="18" r="4" fill="#00A859" />
          <circle cx="148" cy="18" r="4" fill="#00A859" />
        </g>
      </svg>
    </figure>
  );
}

export default CableTension;

// Pleated mesh door: mosquitoes fly in and bounce off, while breeze lines pass straight through.
import type { CSSProperties } from "react";

const MESH_X = 262; // leading edge (handle) of the pleated panel
const PLEATS = Array.from({ length: 16 }, (_, i) => MESH_X + 8 + i * 9.4);
// Start position, travel to the mesh, timing. dx stops each mosquito just short of the panel.
const MOZZIES = [
  { x: 40, y: 92, dx: 196, dy: 34, dur: 3.6, delay: -0.4 },
  { x: 70, y: 204, dx: 166, dy: -18, dur: 4.2, delay: -2.1 },
  { x: 24, y: 282, dx: 212, dy: -30, dur: 3.9, delay: -1.2 },
  { x: 110, y: 150, dx: 126, dy: 58, dur: 4.6, delay: -3.3 },
];
const BREEZE = [
  "M0 120c60-18 110 18 170 0s110-18 170 0 120 18 180 0",
  "M0 200c60-16 120 16 180 0s120-16 180 0 110 16 160 0",
  "M0 270c55-18 105 18 165 0s115-18 175 0 120 18 180 0",
];

const CSS = `
.ss-mesh-mozzie,.ss-mesh-wing,.ss-mesh-bonk{transform-box:fill-box;transform-origin:center}
.ss-mesh-wing{transform-origin:center bottom}
.ss-mesh-bonk{opacity:0}
.ss-mesh-breeze{stroke-dasharray:22 78}
@media (prefers-reduced-motion:no-preference){
  .ss-mesh-mozzie{animation:ss-mesh-fly var(--dur) ease-in-out var(--delay) infinite}
  .ss-mesh-bonk{animation:ss-mesh-bonk var(--dur) linear var(--delay) infinite}
  .ss-mesh-wing{animation:ss-mesh-flap .11s linear infinite alternate}
  .ss-mesh-breeze{animation:ss-mesh-blow 3.8s linear infinite}
}
@keyframes ss-mesh-fly{
  0%,100%{transform:translate(0,0) rotate(0)}
  42%{transform:translate(var(--dx),var(--dy)) rotate(4deg)}
  48%{transform:translate(calc(var(--dx) - 26px),calc(var(--dy) - 14px)) rotate(-28deg)}
  62%{transform:translate(calc(var(--dx) - 52px),calc(var(--dy) + 8px)) rotate(-8deg)}
}
@keyframes ss-mesh-bonk{0%,40%{opacity:0;transform:scale(.4)}43%{opacity:1;transform:scale(1)}52%,100%{opacity:0;transform:scale(1.4)}}
@keyframes ss-mesh-flap{to{transform:scaleY(.35)}}
@keyframes ss-mesh-blow{from{stroke-dashoffset:100}to{stroke-dashoffset:0}}
`;

function Mosquito() {
  return (
    <g>
      <ellipse className="ss-mesh-wing" cx="-1" cy="-5" rx="5" ry="3.4" fill="#9FB3D1" opacity="0.75" />
      <ellipse className="ss-mesh-wing" cx="3" cy="-5" rx="4.4" ry="3" fill="#B9C9E0" opacity="0.75" />
      <path d="M-4 1l-3 7M0 2l-1 8M4 1l2 7" stroke="#0F1B33" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="-2" cy="0" rx="7" ry="2.6" fill="#0F1B33" />
      <circle cx="6" cy="-0.5" r="2.4" fill="#0F1B33" />
      <path d="M8 0l6 1.6" stroke="#0F1B33" strokeWidth="1" strokeLinecap="round" />
    </g>
  );
}

export function MeshShield({ className = "" }: { className?: string }) {
  return (
    <figure className={`w-full ${className}`}>
      <style href="ss-mesh-shield" precedence="default">{CSS}</style>
      <svg viewBox="0 0 520 380" className="h-auto w-full" aria-hidden="true">
        <defs>
          <pattern id="ss-mesh-grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M4 0H0V4" fill="none" stroke="#7F95B6" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="ss-mesh-out" x1="0" x2="1">
            <stop offset="0" stopColor="#E8F4EC" />
            <stop offset="1" stopColor="#F3F6FB" />
          </linearGradient>
        </defs>

        <rect x="8" y="8" width="504" height="364" rx="36" fill="url(#ss-mesh-out)" />
        {/* Indoors, behind the door */}
        <path d={`M${MESH_X + 162} 8H476a36 36 0 0 1 36 36v292a36 36 0 0 1-36 36H${MESH_X + 162}Z`} fill="#E3EAF5" />
        {/* A little greenery outside: where mosquitoes come from */}
        <g fill="#00A859" opacity="0.18">
          <ellipse cx="60" cy="350" rx="70" ry="36" />
          <ellipse cx="150" cy="362" rx="60" ry="26" />
        </g>

        {/* Door frame and pleated panel */}
        <rect x={MESH_X - 14} y="36" width="190" height="310" rx="10" fill="#fff" stroke="#C9D5E6" strokeWidth="2" />
        {PLEATS.map((x, i) => (
          <rect key={x} x={x} y="52" width="9.4" height="278" fill={i % 2 ? "#C7D4E8" : "#EEF3FA"} />
        ))}
        <rect x={MESH_X + 8} y="52" width={PLEATS.length * 9.4} height="278" fill="url(#ss-mesh-grid)" opacity="0.6" />
        {[98, 144, 190, 236, 282].map((y) => (
          <path key={y} d={`M${MESH_X + 8} ${y}H${MESH_X + 8 + PLEATS.length * 9.4}`} stroke="#8DA0BD" strokeWidth="0.8" opacity="0.7" />
        ))}
        <rect x={MESH_X - 6} y="44" width="168" height="10" rx="4" fill="#5E6E89" />
        <rect x={MESH_X - 6} y="328" width="168" height="10" rx="4" fill="#5E6E89" />
        <rect x={MESH_X} y="50" width="9" height="282" rx="4" fill="#1B4D8E" />
        <rect x={MESH_X + 2.5} y="176" width="4" height="30" rx="2" fill="#fff" opacity="0.7" />

        {BREEZE.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={100}
            className="ss-mesh-breeze"
            style={{ animationDelay: `${-i * 1.3}s`, strokeDashoffset: 30 + i * 25 }}
            fill="none"
            stroke="#5F9BD6"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.55"
          />
        ))}

        {MOZZIES.map((m) => {
          const vars = { "--dx": `${m.dx}px`, "--dy": `${m.dy}px`, "--dur": `${m.dur}s`, "--delay": `${m.delay}s` } as CSSProperties;
          return (
            <g key={m.x}>
              {/* Impact spark on the mesh, timed with the mosquito's hit */}
              <g transform={`translate(${m.x + m.dx + 16} ${m.y + m.dy})`}>
                <path className="ss-mesh-bonk" style={vars} d="M0-7v4M0 3v4M-7 0h4M3 0h4M-5-5l2.5 2.5M2.5 2.5L5 5M-5 5l2.5-2.5M2.5-2.5L5-5" stroke="#C63127" strokeWidth="1.6" strokeLinecap="round" />
              </g>
              <g transform={`translate(${m.x} ${m.y})`}>
                <g className="ss-mesh-mozzie" style={vars}>
                  <Mosquito />
                </g>
              </g>
            </g>
          );
        })}
      </svg>
      <figcaption className="sr-only">
        Illustration: mosquitoes bounce off a pleated mesh door while the breeze flows straight through it.
      </figcaption>
    </figure>
  );
}

export default MeshShield;

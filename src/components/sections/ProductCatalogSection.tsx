import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACT_INFO } from "@/const";

interface ProductCardProps {
  title: string;
  description: string;
  badge1: string;
  badge2?: string;
  badge2Color?: "primary" | "secondary";
  href?: string;
  imageUrl?: string;
  iconName?: string;
  iconSubtitle?: string;
  specs: string[];
}

function ProductCard({
  title,
  description,
  badge1,
  href,
  imageUrl,
  iconName,
  iconSubtitle,
  specs,
}: ProductCardProps) {
  return (
    <div className="card-flat overflow-hidden flex flex-col justify-between">
      <div>
        {imageUrl ? (
          <div className="relative h-60 overflow-hidden bg-paper-deep">
            <Image
              alt={title}
              className="w-full h-full object-cover"
              src={imageUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            <span className="absolute top-4 left-4 bg-ink/85 text-white font-caption-caps text-caption-caps px-2.5 py-1 rounded uppercase tracking-wider z-10">
              {badge1}
            </span>
          </div>
        ) : (
          <div className="relative h-60 overflow-hidden bg-blue-50/60 flex items-center justify-center p-6">
            <div className="w-full h-full rounded-xl bg-white border border-blue-100 flex flex-col items-center justify-center text-center p-4">
              <span className="material-symbols-outlined text-secondary text-[48px] mb-2" aria-hidden="true">
                {iconName}
              </span>
              <span className="font-headline-sm text-headline-sm font-bold text-ink">
                {title}
              </span>
              {iconSubtitle && (
                <span className="font-caption-caps text-caption-caps text-secondary uppercase mt-1">
                  {iconSubtitle}
                </span>
              )}
            </div>
            <span className="absolute top-4 left-4 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface font-caption-caps text-caption-caps px-2.5 py-1 rounded uppercase tracking-wider">
              {badge1}
            </span>
          </div>
        )}

        <div className="p-6">
          <h3 className="font-headline-sm text-headline-sm text-ink font-bold">
            {href ? (
              <Link href={href} className="hover:text-primary transition-colors">
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
          <p className="font-body-md text-body-md text-ink-soft mt-2 mb-4">
            {description}
          </p>
          <div className="space-y-2 mb-6 font-label-md text-label-md text-ink-soft">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0" aria-hidden="true">
                  done
                </span>
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 flex items-center justify-between">
        <Link
          className="bg-secondary hover:bg-blue-800 text-on-secondary font-label-md text-label-md px-4 py-2.5 rounded-lg transition-colors font-bold"
          href="#quick-booking"
        >
          Request Quote
        </Link>
        <a
          className="text-secondary hover:text-blue-900 font-caption-caps text-caption-caps uppercase tracking-wider flex items-center gap-1 font-bold"
          href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
        >
          Speak to Tech
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
            chevron_right
          </span>
        </a>
      </div>
    </div>
  );
}

export function ProductCatalogSection() {
  const products: ProductCardProps[] = [
    {
      title: "Invisible Grills",
      href: "/invisible-grills",
      description:
        "Sleek high-tensile 316 stainless steel cable system designed for balconies, French windows, and open terraces without blocking the view.",
      badge1: "Top High-Rise Pick",
      badge2: "AISI 316 Wire",
      badge2Color: "primary",
      imageUrl: ASSETS.PRODUCTS.INVISIBLE_GRILLS,
      specs: [
        "400kg lateral breaking capacity per wire",
        "Transparent nylon protective sheath",
        "No caged-in feeling on the balcony",
      ],
    },
    {
      title: "Pleated Mosquito Mesh",
      href: "/pleated-mesh",
      description:
        "Retractable accordion mesh systems for sliding balcony doors, French casements, and wide spans. Keeps insects out with natural airflow.",
      badge1: "Smooth Gliding",
      badge2: "German Zig-Zag",
      badge2Color: "secondary",
      imageUrl: ASSETS.PRODUCTS.PLEATED_MOSQUITO_MESH,
      specs: [
        "Low-profile flush track (no tripping)",
        "UV-resistant waterproof polyester mesh",
        "Custom powder-coated frame matching UPVC/Alu",
      ],
    },
    {
      title: "Aluminum Security Mesh",
      href: "/aluminum-mesh-partition",
      description:
        "Heavy-gauge aluminum security mesh integrated into sturdy structural frames. Prevents unauthorized entry and withstands blade-cut attacks.",
      badge1: "Heavy-Duty Security",
      imageUrl: ASSETS.PRODUCTS.ALUMINUM_SECURITY_MESH,
      specs: [
        "Heavy-gauge 304/6063-T6 aluminum alloy",
        "Multi-point architectural locking systems",
        "Ideal for ground floor villas & offices",
      ],
    },
    {
      title: "Acoustic Honeycomb Partitions",
      href: "/honeycomb-partition",
      description:
        "Insulated folding partitions that isolate noise, modulate temperature, and instantly create modular zones in modern residences and office suites.",
      badge1: "Acoustic Shield",
      iconName: "view_column",
      iconSubtitle: "Thermal & Acoustic Barrier",
      specs: [
        "Dual-cell thermal air pocket structure",
        "Sound damping & light-filtering fabrics",
        "Smooth motorized or manual sliding glide",
      ],
    },
    {
      title: "Motorized Weather Screens",
      href: "/automatic-weather-screen",
      description:
        "High-wind rated motorized zip-track drop screens to protect open balconies and outdoor dining spaces from Delhi dust storms, heavy monsoons, and scorching sun.",
      badge1: "Automated Smart Drop",
      iconName: "weather_mix",
      iconSubtitle: "Wind & Rain Enclosure",
      specs: [
        "95% Rain, UV, and Dust particle blockage",
        "Remote control & home automation link",
        "Tested up to 70 km/h wind shear",
      ],
    },
    {
      title: "Skylights & Ceiling Hangers",
      description:
        "Precision architectural glass skylights for luxury stairwells paired with space-saving aluminum pulley ceiling cloth drying systems for utility balconies.",
      badge1: "Ergonomic Utility",
      iconName: "roofing",
      iconSubtitle: "Utility & Natural Lighting",
      specs: [
        "Heavy-load rust-free stainless steel pulley rods",
        "Full floor clearance underneath",
        "Laminated safety glass skylight casings",
      ],
    },
  ];

  return (
    <section
      className="w-full py-14 sm:py-20 bg-paper scroll-mt-28"
      id="products-showcase"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="kicker text-primary">What we make and fit</span>
            <h2
              id="products-heading"
              className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-0"
            >
              Six products, one crew
            </h2>
          </div>
          <p className="font-body-md text-body-md text-ink-soft max-w-md m-0">
            Fabricated from structural-grade aluminium and marine-grade wire,
            fitted by our own technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

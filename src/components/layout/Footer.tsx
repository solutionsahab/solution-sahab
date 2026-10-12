// File: src/components/layout/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACT_INFO } from "@/const";
import { FACTS } from "@/lib/facts";

export function Footer() {
  const logoUrl = ASSETS.LOGO_LOCAL;

  return (
    <footer className="w-full bg-paper border-t border-ink/10 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top: brand + phone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-ink/10">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <Link href="/" className="inline-block" aria-label="Solution Sahab Home">
              <Image
                alt="Solution Sahab - Architectural Safety & Fenestration"
                className="h-10 sm:h-12 w-auto object-contain"
                src={logoUrl}
                width={256}
                height={45}
                loading="lazy"
              />
            </Link>
            <p className="font-body-md text-body-md text-ink-soft max-w-md m-0">
              Balcony grills, insect screens and partitions — measured and
              fitted by our own crew across {FACTS.serviceAreasLabel}.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-1 lg:text-right lg:items-end">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-ink-soft">
              Talk to an installer
            </span>
            <a
              href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
              className="font-display-serif text-4xl sm:text-5xl text-ink hover:text-primary transition-colors leading-tight"
            >
              {CONTACT_INFO.PHONE_PRIMARY}
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-1 lg:justify-end font-label-md text-label-md font-semibold">
              <a
                className="text-primary hover:underline"
                href={CONTACT_INFO.WHATSAPP_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp us
              </a>
              <a
                className="text-primary hover:underline"
                href={`mailto:${CONTACT_INFO.EMAIL}`}
              >
                {CONTACT_INFO.EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10 border-b border-ink/10">
          <div>
            <h3 className="font-label-md text-label-md font-bold uppercase tracking-wider text-ink mb-4">
              Products
            </h3>
            <ul className="flex flex-col gap-2.5 font-body-md text-body-md text-ink-soft list-none m-0 p-0">
              <li>
                <Link className="hover:text-primary transition-colors" href="/invisible-grills">
                  Invisible Grills for Balconies
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/pleated-mesh">
                  Pleated Mosquito Mesh
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/honeycomb-partition">
                  Honeycomb Folding Partitions
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/aluminum-mesh-partition">
                  Aluminum Security Mesh
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/automatic-weather-screen">
                  Automatic Weather Screens
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/skylight">
                  Glass Skylights
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/ceiling-cloth-hanger">
                  Ceiling Cloth Hangers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-label-md text-label-md font-bold uppercase tracking-wider text-ink mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 font-body-md text-body-md text-ink-soft list-none m-0 p-0">
              <li>
                <Link className="hover:text-primary transition-colors" href="/who-we-are">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/our-team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/blog-list">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-label-md text-label-md font-bold uppercase tracking-wider text-ink mb-4">
              Find us
            </h3>
            <address className="not-italic font-body-md text-body-md text-ink-soft space-y-2">
              <div>{CONTACT_INFO.HEAD_OFFICE}</div>
              <div className="pt-2 font-semibold text-ink">Branch office</div>
              <div>{CONTACT_INFO.BRANCH_OFFICE}</div>
            </address>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-label-md text-label-md text-ink-soft">
          <p className="m-0">
            © {new Date().getFullYear()} {FACTS.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link className="hover:underline text-secondary" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:underline text-secondary" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

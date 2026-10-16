// File: src/components/layout/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACT_INFO } from "@/const";
import { FACTS } from "@/lib/facts";

export function Footer() {
  const logoUrl = ASSETS.LOGO_LOCAL;

  return (
    <footer className="w-full ">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Row: Brand & Direct Phone / WhatsApp */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-end border-b border-neutral-300">
          <div className="lg:col-span-7">
            <Link
              href="/"
              className="inline-block mb-4"
              aria-label="Solution Sahab Home"
            >
              <Image
                alt="Solution Sahab"
                className="h-10 sm:h-11 w-auto object-contain"
                src={logoUrl}
                width={240}
                height={44}
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-neutral-600 max-w-md m-0 leading-relaxed">
              Manufacturer and installer of AISI 316 invisible balcony grills,
              pleated mosquito mesh, honeycomb partitions, and weather screens
              across Delhi NCR.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col lg:items-end lg:text-right">
            <a
              href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
              className="text-2xl sm:text-4xl font-semibold text-neutral-950 hover:opacity-70 transition-opacity tracking-tight"
            >
              {CONTACT_INFO.PHONE_PRIMARY}
            </a>
            <div className="mt-2 flex flex-wrap items-center lg:justify-end gap-4 text-xs font-mono uppercase tracking-wider">
              <a
                href={CONTACT_INFO.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-950 font-semibold underline underline-offset-4 hover:opacity-70"
              >
                WhatsApp Quote →
              </a>
              <span className="text-neutral-400">|</span>
              <a
                href={`mailto:${CONTACT_INFO.EMAIL}`}
                className="text-neutral-600 hover:text-neutral-950 transition-colors lowercase font-sans text-xs"
              >
                {CONTACT_INFO.EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Middle Row: 4-Column Hairline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x divide-neutral-300 border-b border-neutral-300">
          {/* Column 1: Systems */}
          <div className="lg:col-span-4 py-8 sm:pr-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 m-0 mb-4">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-800 list-none m-0 p-0">
              <li>
                <Link className="hover:underline underline-offset-4" href="/invisible-grills">
                  Invisible Safety Grills
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/pleated-mesh">
                  Pleated Mosquito Mesh
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/aluminum-mesh-partition">
                  Aluminum Security Mesh
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/honeycomb-partition">
                  Honeycomb Partitions
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/automatic-weather-screen">
                  Motorized Weather Screens
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/skylight">
                  Glass Skylights
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/ceiling-cloth-hanger">
                  Ceiling Cloth Hangers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 py-8 sm:px-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 m-0 mb-4">
              Know About US
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-800 list-none m-0 p-0">
              <li>
                <Link className="hover:underline underline-offset-4" href="/who-we-are">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/gallery">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/our-team">
                  Installation Team
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/#customer-videos">
                  Customer Videos
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/blog-list">
                  Guides &amp; Blog
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Offices */}
          <div className="lg:col-span-5 py-8 sm:pl-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 m-0 mb-4">
              Locations - Delhi NCR
            </h3>
            <div className="space-y-4 text-sm text-neutral-700">
              <div>
                <span className="font-semibold text-neutral-950 block mb-0.5">
                  Head Office &amp; Fabrication
                </span>
                <p className="m-0 leading-relaxed text-neutral-600">
                  {CONTACT_INFO.HEAD_OFFICE}
                </p>
              </div>
              <div>
                <span className="font-semibold text-neutral-950 block mb-0.5">
                  South Delhi Branch
                </span>
                <p className="m-0 leading-relaxed text-neutral-600">
                  {CONTACT_INFO.BRANCH_OFFICE}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="m-0">
            © {new Date().getFullYear()} {FACTS.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link className="hover:text-neutral-950 transition-colors" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-neutral-950 transition-colors" href="/contact-us">
              Contact
            </Link>
            <a
              className="hover:text-neutral-950 transition-colors"
              href="https://www.youtube.com/@solutionsahab"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
// File: src/components/layout/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { ASSETS, CONTACT_INFO } from "@/lib/constants";
import { FACTS } from "@/lib/facts";
import { PRODUCT_LINKS } from "@/lib/site-links";

const COMPANY_LINKS = [
  { label: "About Us", href: "/who-we-are" },
  { label: "Project Gallery", href: "/gallery" },
  { label: "Installation Team", href: "/our-team" },
  { label: "Customer Videos", href: "/#customer-videos" },
  { label: "Guides & Blog", href: "/blog-list" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Pay Online", href: "/razorpaymesolutionsahab8809" },
];

const SOCIAL = [
  { label: "Solution Sahab on YouTube", href: CONTACT_INFO.YOUTUBE_URL, Icon: FaYoutube },
  { label: "Solution Sahab on Instagram", href: CONTACT_INFO.INSTAGRAM_URL, Icon: FaInstagram },
  { label: "Chat with Solution Sahab on WhatsApp", href: CONTACT_INFO.WHATSAPP_URL, Icon: FaWhatsapp },
];

const heading = "text-sm font-semibold text-white m-0 mb-5";
const link = "py-1 -my-1 text-white/70 hover:text-white transition-colors";

export function Footer() {
  return (
    <footer className="w-full bg-[#0F1B33] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-14 border-b border-white/10">
          {/* Brand: the logo has charcoal lettering, so it sits on its own white card */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex rounded-2xl bg-white px-5 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Solution Sahab Home"
            >
              <Image
                alt="Solution Sahab"
                className="h-9 sm:h-10 w-auto object-contain"
                src={ASSETS.LOGO_LOCAL}
                width={240}
                height={44}
                loading="lazy"
              />
            </Link>
            <p className="mt-6 mb-0 text-sm text-white/70 max-w-sm leading-relaxed">
              Manufacturer and installer of AISI 316 invisible balcony grills, pleated mosquito mesh,
              honeycomb partitions and weather screens across Delhi NCR.
            </p>
            <a
              href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
              className="mt-6 block font-gilroy font-extrabold text-3xl tracking-tight tabular-nums hover:text-[#A8C4F5] transition-colors"
            >
              {CONTACT_INFO.PHONE_PRIMARY}
            </a>
            <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="mt-1 inline-block text-sm text-white/70 hover:text-white">
              {CONTACT_INFO.EMAIL}
            </a>
            <ul className="mt-6 flex gap-3 list-none m-0 p-0">
              {SOCIAL.map(({ label, href, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg hover:bg-white hover:text-[#0F1B33] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Products" className="lg:col-span-3">
            <h3 className={heading}>Our Products</h3>
            <ul className="space-y-3 text-sm list-none m-0 p-0">
              {PRODUCT_LINKS.map((p) => (
                <li key={p.href}>
                  <Link className={link} href={p.href}>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <h3 className={heading}>Company</h3>
            <ul className="space-y-3 text-sm list-none m-0 p-0">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link className={link} href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className={heading}>Offices</h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="block font-semibold mb-1">Head Office</span>
                <p className="m-0 leading-relaxed text-white/70">{CONTACT_INFO.HEAD_OFFICE}</p>
              </div>
              <div>
                <span className="block font-semibold mb-1">Branch</span>
                <p className="m-0 leading-relaxed text-white/70">{CONTACT_INFO.BRANCH_OFFICE}</p>
              </div>
              <a
                href={CONTACT_INFO.GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#A8C4F5] hover:text-white"
              >
                <span className="material-symbols-outlined text-[18px]!" aria-hidden="true">map</span>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Service areas as plain text: local-search relevance without extra pages */}
        <div className="py-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="text-sm font-semibold shrink-0">Site visits across</span>
          <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
            {FACTS.serviceAreas.map((city) => (
              <li key={city} className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/80">
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="m-0">
            © {new Date().getFullYear()} {FACTS.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link className="py-1 -my-1 hover:text-white transition-colors" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="py-1 -my-1 hover:text-white transition-colors" href="/contact-us">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

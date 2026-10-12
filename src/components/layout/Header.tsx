// File: src/components/layout/Header.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavState } from "@/lib/state/nav-state";
import { ASSETS, CONTACT_INFO } from "@/const";

export function Header() {
  const {
    isMobileMenuOpen,
    openDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDropdown,
    closeDropdown,
  } = useNavState();

  const logoUrl = ASSETS.LOGO_LOCAL;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Notification Bar */}
      <div className="bg-inverse-surface text-inverse-on-surface py-1 sm:py-1.5 px-3 sm:px-4 text-center border-b border-inverse-surface/10 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 font-caption-caps text-[10px] sm:text-caption-caps tracking-wider uppercase">
          <span>Free site visit across Delhi NCR</span>
          <span className="opacity-40" aria-hidden="true">
            •
          </span>
          <a
            className="text-primary-fixed hover:underline flex items-center gap-1 font-bold whitespace-nowrap"
            href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
            aria-label="Call Solution Sahab"
          >
            <span
              className="material-symbols-outlined text-[13px]"
              aria-hidden="true"
            >
              call
            </span>
            {CONTACT_INFO.PHONE_PRIMARY}
          </a>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="h-16 sm:h-20 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo & Brand Name */}
          <Link
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-0.5 shrink-0"
            href="/"
            aria-label="Solution Sahab Home"
          >
            <Image
              alt="Solution Sahab - Architectural Safety & Fenestration"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              src={logoUrl}
              width={256}
              height={45}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-7 h-full"
            aria-label="Main Navigation"
          >
            {/* Products Dropdown */}
            <div className="relative group h-full flex items-center">
              <button
                type="button"
                className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors py-2 flex items-center gap-1 font-semibold focus:outline-none"
                onClick={() => toggleDropdown("products")}
                aria-expanded={openDropdown === "products"}
              >
                Products
                <span
                  className="material-symbols-outlined text-[18px] text-secondary transition-transform group-hover:rotate-180"
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </button>
              <div
                className={`absolute top-full left-0 w-80 max-h-[70vh] overflow-y-auto bg-surface-container-lowest shadow-2xl rounded-xl p-3 ${
                  openDropdown === "products"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                } transition-all duration-200 border border-surface-container grid grid-cols-1 gap-1`}
              >
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low transition-colors block"
                  href="/invisible-grills"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Invisible Grills
                  </div>
                  <div className="font-caption-caps text-caption-caps text">
                    316 Grade SS High-Tensile Wire Cables
                  </div>
                </Link>
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low transition-colors block"
                  href="/pleated-mesh"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Pleated Mosquito Mesh
                  </div>
                  <div className="font-caption-caps text-caption-caps text-secondary">
                    Retractable German Zig-Zag Mesh Screen
                  </div>
                </Link>
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low transition-colors block"
                  href="/honeycomb-partition"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Honeycomb Partitions
                  </div>
                  <div className="font-caption-caps text-caption-caps text-secondary">
                    Acoustic Thermal Room Dividers
                  </div>
                </Link>
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low transition-colors block"
                  href="/aluminum-mesh-partition"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Aluminum Security Mesh
                  </div>
                  <div className="font-caption-caps text-caption-caps text-secondary">
                    Heavy Gauge Burglar-Proof Fenestration
                  </div>
                </Link>
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low transition-colors block"
                  href="/automatic-weather-screen"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Automatic Weather Screens
                  </div>
                  <div className="font-caption-caps text-caption-caps text-secondary">
                    Motorized Balcony Rain &amp; Dust Barriers
                  </div>
                </Link>
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low transition-colors block"
                  href="/skylight"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Glass Skylights
                  </div>
                  <div className="font-caption-caps text-caption-caps text-secondary">
                    Laminated Safety Glass Stairwell Casings
                  </div>
                </Link>
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low transition-colors block"
                  href="/ceiling-cloth-hanger"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Ceiling Cloth Hangers
                  </div>
                  <div className="font-caption-caps text-caption-caps text-secondary">
                    Space-Saving Stainless Pulley Drying Systems
                  </div>
                </Link>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group h-full flex items-center">
              <button
                type="button"
                className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors py-2 flex items-center gap-1 font-semibold focus:outline-none"
                onClick={() => toggleDropdown("about")}
                aria-expanded={openDropdown === "about"}
              >
                About Us
                <span
                  className="material-symbols-outlined text-[18px] text-secondary transition-transform group-hover:rotate-180"
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </button>
              <div
                className={`absolute top-full left-0 w-56 bg-surface-container-lowest shadow-2xl rounded-xl p-3 ${
                  openDropdown === "about"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                } transition-all duration-200 border border-surface-container flex flex-col gap-1`}
              >
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low font-label-md text-label-md text-on-surface font-medium block"
                  href="/who-we-are"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  Who We Are
                </Link>
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low font-label-md text-label-md text-on-surface font-medium block"
                  href="/gallery"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  Gallery
                </Link>
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low font-label-md text-label-md text-on-surface font-medium block"
                  href="/our-team"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  Our Team
                </Link>
                <Link
                  className="p-2.5 rounded-lg hover:bg-surface-container-low font-label-md text-label-md text-on-surface font-medium block"
                  href="/privacy-policy"
                  onClick={() => {
                    closeMobileMenu();
                    closeDropdown();
                  }}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            <Link
              className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors py-2 font-semibold"
              href="/blog-list"
            >
              Blog
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors py-2 font-semibold"
              href="/#customer-videos"
            >
              Reviews
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors py-2 font-semibold"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop Booking Button */}
            <Link
              className="hidden xl:inline-flex items-center justify-center bg-secondary hover:bg-blue-800 text-on-secondary font-label-md text-label-md px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap font-bold"
              href="/#quick-booking"
            >
              Book Free Site Visit
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl text-on-surface hover:bg-surface-container active:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary transition-colors shrink-0"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <span
                className="material-symbols-outlined text-[26px]"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            className="xl:hidden bg-surface-container-lowest border-b border-surface-container px-4 sm:px-6 py-5 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
            id="mobile-menu"
          >
            <div className="flex flex-col gap-3">
              {/* Primary Mobile CTA Button */}
              <div className="pb-3 border-b border-slate-100">
                <Link
                  href="/#quick-booking"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-blue-800 text-on-secondary py-3 px-4 rounded-xl font-bold text-sm shadow-sm transition-colors text-center"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    calendar_month
                  </span>
                  Book Free Site Visit
                </Link>
              </div>

              <div className="pb-3 border-b border-slate-100">
                <div className="font-label-md text-label-md font-bold text-on-surface mb-2">
                  Our Products
                </div>
                <div className="flex flex-col gap-2 pl-2">
                  <Link
                    href="/invisible-grills"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Invisible Grills
                  </Link>
                  <Link
                    href="/pleated-mesh"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Pleated Mosquito Mesh
                  </Link>
                  <Link
                    href="/honeycomb-partition"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Honeycomb Folding Partitions
                  </Link>
                  <Link
                    href="/aluminum-mesh-partition"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Aluminum Security Mesh
                  </Link>
                  <Link
                    href="/automatic-weather-screen"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Automatic Weather Screens
                  </Link>
                  <Link
                    href="/skylight"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Glass Skylights
                  </Link>
                  <Link
                    href="/ceiling-cloth-hanger"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Ceiling Cloth Hangers
                  </Link>
                </div>
              </div>

              <div className="pb-3 border-b border-slate-100">
                <div className="font-label-md text-label-md font-bold text-on-surface mb-2">
                  Solutions By Space
                </div>
                <div className="flex flex-col gap-2 pl-2">
                  <Link
                    href="/#audience-solutions"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Residential High-Rise Safety
                  </Link>
                  <Link
                    href="/#audience-solutions"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Commercial &amp; Hospitality
                  </Link>
                  <Link
                    href="/#audience-solutions"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Architects &amp; Designers
                  </Link>
                </div>
              </div>

              <div className="pb-3 border-b border-slate-100">
                <div className="font-label-md text-label-md font-bold text-on-surface mb-2">
                  About Us
                </div>
                <div className="flex flex-col gap-2 pl-2">
                  <Link
                    href="/who-we-are"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/gallery"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/our-team"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/blog-list"
                    className="font-body-md text-slate-700 hover:text-primary py-1"
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </Link>
                </div>
              </div>

              <Link
                href="/#how-it-works"
                className="font-label-md text-label-md font-semibold text-on-surface hover:text-primary py-1.5"
                onClick={closeMobileMenu}
              >
                How Our Process Works
              </Link>
              <Link
                href="/contact-us"
                className="font-label-md text-label-md font-semibold text-on-surface hover:text-primary py-1.5"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
              <Link
                href="/#customer-videos"
                className="font-label-md text-label-md font-semibold text-on-surface hover:text-primary py-1.5"
                onClick={closeMobileMenu}
              >
                Customer Reviews
              </Link>
              <Link
                href="/#faqs"
                className="font-label-md text-label-md font-semibold text-on-surface hover:text-primary py-1.5"
                onClick={closeMobileMenu}
              >
                Frequently Asked Questions
              </Link>

              <div className="pt-3 flex flex-col gap-2.5 border-t border-slate-100">
                <a
                  className="flex items-center justify-center gap-2 bg-emerald-50 text-primary py-2.5 rounded-xl font-bold border border-emerald-200 text-sm"
                  href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>
                  Call {CONTACT_INFO.PHONE_PRIMARY}
                </a>
                <a
                  className="flex items-center justify-center gap-2 bg-primary text-on-primary py-2.5 rounded-xl font-bold text-sm"
                  href={CONTACT_INFO.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  WhatsApp Us Direct
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

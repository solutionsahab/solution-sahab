import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StructuredData } from "@/components/common/StructuredData";
import { ASSETS } from "@/lib/constants";

const gilroy = localFont({
  src: [
    {
      path: "../fonts/Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

// Self-hosted (latin subset, variable weight) so the build never fetches from Google Fonts.
const jakarta = localFont({
  src: "../fonts/PlusJakartaSans-latin.woff2",
  weight: "400 800",
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1B4D8E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://solutionsahab.com"),
  title: "Invisible Grills & Pleated Mesh, Delhi NCR | Solution Sahab",
  description:
    "Invisible grills, pleated mosquito mesh, honeycomb partitions and security mesh across Delhi NCR. AISI 316 cables with a 5-year rust guarantee.",
  keywords: [
    "Invisible Grills Delhi NCR",
    "Invisible Grills Gurgaon",
    "Invisible Grills Noida",
    "Pleated Mosquito Mesh",
    "Balcony Safety Grills",
    "Balcony Invisible Net",
    "AISI 316 Stainless Steel Grills",
    "Child Safety Balcony",
    "Pet Safety Grills",
    "Honeycomb Partitions",
    "Aluminum Security Mesh",
    "Architectural Fenestration Systems",
  ],
  authors: [{ name: "Solution Sahab" }],
  creator: "Solution Sahab",
  publisher: "Solution Sahab",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://solutionsahab.com",
  },
  openGraph: {
    title: "Solution Sahab | Invisible Grills & Architectural Fenestration",
    description:
      "Modern high-rise balcony invisible safety grills and pleated mosquito screens in Delhi NCR. 400kg load capacity, 100% rust-proof, site inspection.",
    url: "https://solutionsahab.com",
    siteName: "Solution Sahab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ASSETS.HERO_IMAGE_HOME,
        width: 1200,
        height: 630,
        alt: "Solution Sahab Invisible Grill Balcony Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solution Sahab | Modern Safety. Unobstructed Views.",
    description:
      "Custom-engineered invisible grills, pleated mosquito mesh, and architectural partitions across Delhi NCR.",
    images: [ASSETS.HERO_IMAGE_HOME],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi",
    "geo.position": "28.6692;77.0654",
    ICBM: "28.6692, 77.0654",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${gilroy.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* shortcut: only these icons are downloaded (~5 KB vs 1.1 MB); add any new icon name here (alphabetical) or it renders as text. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font, @next/next/google-font-display -- root layout loads it on every page; "block" stops icon names flashing as text */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=account_circle,apartment,arrow_forward,arrow_outward,article,calendar_month,calendar_today,call,chat,chevron_left,chevron_right,close,design_services,done,expand_more,factory,handshake,lightbulb,location_on,mail,map,menu,payments,photo_camera,play_arrow,schedule,send,task_alt,verified&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface min-h-screen flex flex-col font-sans selection:bg-primary selection:text-on-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-primary focus:px-4 focus:py-3 focus:font-semibold focus:ring-2 focus:ring-primary"
        >
          Skip to content
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

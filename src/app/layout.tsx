import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/common/StructuredData";
import { ASSETS } from "@/const";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});
export const viewport: Viewport = {
  themeColor: "#006046",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://solutionsahab.com"),
  title: "Solution Sahab | Invisible Grills, Pleated Mosquito Mesh & Architectural Fenestration Delhi NCR",
  description:
    "Solution Sahab provides custom-engineered invisible grills, pleated mosquito mesh, honeycomb partitions, and security screens across Delhi NCR. 400kg tensile load tested AISI 316 marine-grade cables with a 10-year rust guarantee.",
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
      "Modern high-rise balcony invisible safety grills and pleated mosquito screens in Delhi NCR. 400kg load capacity, 100% rust-proof, free site inspection.",
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
      className={`${jakarta.variable} ${fraunces.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface min-h-screen flex flex-col font-sans selection:bg-primary selection:text-on-primary">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

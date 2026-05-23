import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/common/Preloader";
import FloatingButtons from "@/components/common/FloatingButtons";
import SmoothScroll from "@/components/common/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WanderLux Travels — Luxury Travel Experiences",
    template: "%s | WanderLux Travels",
  },
  description:
    "Discover bespoke luxury travel packages to Dubai, Bali, Maldives, Switzerland, and beyond. WanderLux crafts unforgettable journeys for discerning travelers.",
  keywords: [
    "luxury travel",
    "travel agency",
    "holiday packages",
    "Maldives trips",
    "Dubai tours",
    "Bali packages",
    "Switzerland travel",
    "WanderLux",
  ],
  authors: [{ name: "WanderLux Travels" }],
  creator: "WanderLux Travels",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wanderlux.travel",
    siteName: "WanderLux Travels",
    title: "WanderLux Travels — Luxury Travel Experiences",
    description:
      "Discover bespoke luxury travel packages to the world's finest destinations.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "WanderLux Travels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WanderLux Travels",
    description: "Luxury travel experiences crafted for you.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body style={{ fontFamily: "var(--font-inter, sans-serif)", overflowX: "hidden" }}>
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <FloatingButtons />
      </body>
    </html>
  );
}

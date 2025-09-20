import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData/StructuredData";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TXBROWN | London Music Producer | Hip-Hop, Jazz & Soul Beats",
  description: "TXBROWN is a London-based music producer blending hip-hop foundations with jazz and soul to create unique sonic textures. From beat-making to bass guitar, exploring lo-fi and R&B territories while maintaining that core hip-hop essence. Creator of Midicircuit music app.",
  keywords: "TXBROWN, music producer London, hip-hop producer, jazz beats, soul music, lo-fi producer, R&B beats, beat maker London, music production, Midicircuit, sonic textures, Cold Season, Fading Season, Barbecue Season, Bandcamp artist",
  authors: [{ name: "TXBROWN" }],
  creator: "TXBROWN",
  publisher: "TXBROWN",
  category: "Music",
  classification: "Music Producer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "TXBROWN | London Music Producer | Hip-Hop, Jazz & Soul",
    description: "London-based music producer blending hip-hop, jazz & soul to create unique sonic textures. Listen to Cold Season, Fading Season & Barbecue Season.",
    type: "website",
    siteName: "TXBROWN",
    locale: "en_GB",
    images: [
      {
        url: "/pictures/24970002.jpeg",
        width: 1200,
        height: 630,
        alt: "TXBROWN - London Music Producer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@txbrown__",
    creator: "@txbrown__",
    title: "TXBROWN | London Music Producer | Hip-Hop, Jazz & Soul",
    description: "London-based music producer blending hip-hop, jazz & soul. Listen to my latest releases on Bandcamp.",
    images: [
      {
        url: "/pictures/24970002.jpeg",
        alt: "TXBROWN - London Music Producer",
      },
    ],
  },
  other: {
    "music:musician": "TXBROWN",
    "music:genre": "Hip-Hop, Jazz, Soul, Lo-Fi, R&B",
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278",
    "ICBM": "51.5074, -0.1278",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

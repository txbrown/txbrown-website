import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
  title: "TXBROWN | Texture + Brown | Music Producer",
  description: "TXBROWN is a London-based music producer blending hip-hop foundations with jazz and soul to create unique sonic textures. From beat-making to bass guitar, exploring lo-fi and R&B territories while maintaining that core hip-hop essence.",
  keywords: "TXBROWN, texture brown, music producer, hip-hop, jazz, soul, lo-fi, R&B, London, beat maker, Midicircuit, sonic textures",
  authors: [{ name: "TXBROWN" }],
  openGraph: {
    title: "TXBROWN | Texture + Brown",
    description: "London-based music producer blending hip-hop, jazz & soul to create unique sonic textures",
    type: "website",
    siteName: "TXBROWN",
    images: ["/pictures/24970002.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TXBROWN | Texture + Brown",
    description: "London-based music producer blending hip-hop, jazz & soul",
    images: ["/pictures/24970002.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

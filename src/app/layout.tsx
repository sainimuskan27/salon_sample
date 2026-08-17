import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Séréna Beauty Studio | Luxury Salon in Amritsar",
  description:
    "Discover Séréna Beauty Studio — a luxury salon in Amritsar offering premium hair styling, facials, nail art, and hair coloring. Book your appointment today.",
  keywords: [
    "luxury salon",
    "beauty studio",
    "Amritsar salon",
    "hair styling",
    "nail art",
    "facial",
    "Séréna",
  ],
  openGraph: {
    title: "Séréna Beauty Studio",
    description: "Where beauty meets relaxation. Premium salon services in Amritsar.",
    type: "website",
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
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

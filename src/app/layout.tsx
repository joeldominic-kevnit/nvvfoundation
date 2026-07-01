import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const siteUrl = "https://nvvfoundation.com";
const title = "National Videsh Vidya Foundation — Study Medicine Abroad";
const description =
  "An admissions advisory for Indian students pursuing MBBS and post-graduate medicine in Georgia, Uzbekistan, and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — NVVF",
  },
  description,
  keywords:
    "MBBS Georgia, MBBS Uzbekistan, study medicine abroad, NMC approved universities, NVVF, FMGE preparation",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "National Videsh Vidya Foundation",
    title,
    description,
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
        <SmoothScroll>
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

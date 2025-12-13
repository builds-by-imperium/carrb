import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLoader from "./RootLoader";

// Font setup
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// SEO metadata
export const metadata: Metadata = {
  title: "Carrb - Transport Service in Auchi",
  description:
    "Looking for a reliable transport service in auchi? Carrb connects you with reliable drivers for fast and affordable rides. Book in seconds, track in real-time, and enjoy safe journeys.",
  icons: {
    icon: "/favicon-32x32.png",
  },

  openGraph: {
    title: "Carrb - Transport Service in Auchi",
    description:
      "Looking for a reliable transport service in auchi?   Carrb connects you with reliable drivers for fast and affordable rides. Book in seconds, track in real-time, and enjoy safe journeys.",
    url: "https://carrb.vercel.app",
    siteName: "Carrb",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 1200,
        height: 630,
        alt: "Carrb Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrb - Transport Service in Auchi",
    description:
      "Looking for a reliable transport service in auchi?   Carrb connects you with reliable drivers for fast and affordable rides. Book in seconds, track in real-time, and enjoy safe journeys.",
    images: ["/favicon-32x32.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="canonical" href="https://carrb.vercel.app" />
      </head>

      <body className={`${inter.variable} antialiased`}>
        <RootLoader>
          <main>{children}</main>
        </RootLoader>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

import { Inter, Outfit, Dancing_Script } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://completecarehospital.com.ng"),
  title: {
    default: "Complete Care Hospital | Premium Healthcare in Gwagwalada, Abuja",
    template: "%s | Complete Care Hospital",
  },
  description:
    "Complete Care Hospital delivers world-class medical services, emergency care, diagnostics, and specialist consultations in Gwagwalada, Abuja. Your health, our priority.",
  keywords: [
    "Complete Care Hospital",
    "hospital in Gwagwalada",
    "Abuja healthcare",
    "Nigeria premium hospital",
    "emergency care Abuja",
    "medical center",
    "specialist consultations",
  ],
  authors: [{ name: "Complete Care Hospital" }],
  creator: "Complete Care Hospital",
  publisher: "Complete Care Hospital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Complete Care Hospital | Premium Healthcare in Gwagwalada, Abuja",
    description:
      "World-class medical services, emergency care, diagnostics, and specialist consultations in Gwagwalada, Abuja. Available 24/7.",
    url: "https://completecarehospital.com.ng",
    siteName: "Complete Care Hospital",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Complete Care Hospital Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Care Hospital | Premium Healthcare in Gwagwalada, Abuja",
    description:
      "World-class medical services, emergency care, diagnostics, and specialist consultations in Gwagwalada, Abuja.",
    images: ["/logo.png"],
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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/site.webmanifest",
};

import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { CookieConsent } from "@/components/ui/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: "Complete Care Hospital",
              image: "https://completecarehospital.com.ng/logo.png",
              "@id": "https://completecarehospital.com.ng",
              url: "https://completecarehospital.com.ng",
              telephone: "+2348065395623",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Phase 1, Opposite ABC Bakery, Police Barack Gate",
                addressLocality: "Gwagwalada",
                addressRegion: "FCT",
                postalCode: "902101",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 8.9482, // Approximate
                longitude: 7.0789,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${dancingScript.variable} font-sans antialiased flex min-h-screen flex-col`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] focus:p-4 focus:bg-white focus:text-primary focus:font-bold">
          Skip to content
        </a>
        <NextTopLoader color="#2A9D8F" showSpinner={false} shadow="0 0 10px #2A9D8F,0 0 5px #2A9D8F" />
        <EmergencyBanner />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  );
}

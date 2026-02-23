import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAC Calculator — Free Blood Alcohol Content Calculator & Tracker",
  description:
    "Free online BAC calculator. Calculate your blood alcohol content in real-time, track drinks, view BAC charts, and estimate when you'll be sober. Uses the Widmark formula. Supports metric & imperial.",
  keywords: [
    "BAC calculator",
    "blood alcohol content calculator",
    "blood alcohol calculator",
    "BAC tracker",
    "blood alcohol content",
    "alcohol calculator",
    "drink calculator",
    "BAC estimator",
    "how long until sober",
    "sober time calculator",
    "alcohol metabolism calculator",
    "Widmark formula calculator",
    "blood alcohol level",
    "BAC monitor",
    "alcohol tracker",
    "drink tracker",
    "alcohol consumption tracker",
    "BAC chart",
    "sobriety calculator",
    "drunk calculator",
    "am I sober",
    "when will I be sober",
    "how drunk am I",
    "alcohol units calculator",
    "drink responsibly",
  ],
  authors: [{ name: "BAC Calculator" }],
  creator: "BAC Calculator",
  publisher: "BAC Calculator",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alcoholtrackr.com",
    title: "BAC Calculator — Free Blood Alcohol Content Calculator & Tracker",
    description:
      "Calculate your blood alcohol content in real-time. Track drinks, estimate sobriety time, and view BAC charts. Free, private, and accurate.",
    siteName: "BAC Calculator",
    images: [
      {
        url: "https://alcoholtrackr.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BAC Calculator - Free Blood Alcohol Content Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BAC Calculator — Free Blood Alcohol Content Calculator & Tracker",
    description:
      "Calculate your blood alcohol content in real-time. Track drinks, estimate sobriety time, and view BAC charts.",
    images: ["https://alcoholtrackr.com/og-image.png"],
  },
  category: "health",
  alternates: {
    canonical: "https://alcoholtrackr.com",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#1f2937" />
        <link rel="canonical" href="https://alcoholtrackr.com" />
        {/* Google Consent Mode v2 — deny all by default until user consents */}
        <Script id="consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        {/* Google AdSense */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

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
  metadataBase: new URL("https://alcoholtrackr.com"),
  title: "BAC Calculator — Free Blood Alcohol Content Calculator & Tracker",
  description:
    "Free online BAC calculator based on the Widmark formula. Estimate your blood alcohol content in real time, chart it over time, and see when you'll return to 0.00%. Educational resource on alcohol metabolism, legal limits, and responsible drinking.",
  keywords: [
    "BAC calculator",
    "blood alcohol content calculator",
    "Widmark formula",
    "alcohol metabolism",
    "sober time estimator",
    "legal BAC limits",
    "responsible drinking",
    "alcohol education",
  ],
  authors: [{ name: "BAC Calculator Editorial Team", url: "https://alcoholtrackr.com/editorial-policy" }],
  creator: "BAC Calculator Editorial Team",
  publisher: "alcoholtrackr.com",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "BAC Calculator — Free Blood Alcohol Content Calculator & Tracker",
    description:
      "Calculate your blood alcohol content in real-time. Track drinks, estimate sobriety time, and view BAC charts.",
  },
  category: "health",
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

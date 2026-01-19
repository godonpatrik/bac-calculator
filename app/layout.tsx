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
  title: "BAC Tracker - Blood Alcohol Content Calculator",
  description:
    "Free BAC calculator and tracker. Monitor your blood alcohol content in real-time with accurate calculations based on weight, gender, and drink consumption. Track your BAC levels over time and know when you'll be sober.",
  keywords: [
    "BAC calculator",
    "blood alcohol content",
    "BAC tracker",
    "alcohol calculator",
    "drink tracker",
    "blood alcohol level",
    "BAC monitor",
    "alcohol consumption tracker",
    "drink responsibly",
    "sobriety calculator",
  ],
  authors: [{ name: "BAC Tracker" }],
  creator: "BAC Tracker",
  publisher: "BAC Tracker",
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
    title: "BAC Tracker - Blood Alcohol Content Calculator",
    description:
      "Track your blood alcohol content in real-time. Free BAC calculator with accurate measurements based on your weight, gender, and drinks consumed.",
    siteName: "BAC Tracker",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "BAC Tracker",
              description:
                "Free blood alcohol content calculator and tracker. Monitor your BAC in real-time with accurate calculations.",
              url: "https://alcoholtrackr.com",
              applicationCategory: "HealthApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Real-time BAC calculation",
                "Drink tracking with timestamps",
                "BAC over time visualization",
                "Sobriety time estimation",
                "Support for metric and imperial units",
                "Local data storage for privacy",
              ],
            }),
          }}
        />
        {/* Google AdSense - Replace with your actual ad client ID */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

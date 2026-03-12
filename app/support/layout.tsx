import type { Metadata } from "next";
import SupportStructuredData from "@/components/SupportStructuredData";

export const metadata: Metadata = {
  title: "Alcohol Support & Resources — Find AA Meetings, Helplines & Treatment",
  description:
    "Find help for alcohol problems. Search Alcoholics Anonymous (AA) offices worldwide, access 24/7 crisis helplines (SAMHSA: 1-800-662-4357), discover treatment resources, and connect with support groups. Recovery is possible.",
  keywords: [
    "alcohol support",
    "AA meetings",
    "Alcoholics Anonymous",
    "AA office finder",
    "find AA meetings",
    "alcohol helpline",
    "SAMHSA helpline",
    "alcohol crisis help",
    "alcohol addiction help",
    "alcohol treatment",
    "alcohol recovery",
    "quit drinking",
    "stop drinking help",
    "alcohol use disorder",
    "alcoholism help",
    "AA worldwide",
    "AA contacts",
    "local AA meetings",
    "drinking problem",
    "alcohol withdrawal help",
    "sober support",
    "recovery resources",
    "addiction support groups",
    "SMART recovery",
    "Al-Anon",
    "alcohol counseling",
    "treatment locator",
    "rehab finder",
    "alcohol hotline numbers",
  ],
  alternates: {
    canonical: "https://alcoholtrackr.com/support",
  },
  openGraph: {
    title:
      "Alcohol Support & Resources — Find AA Meetings, Helplines & Treatment",
    description:
      "Find help for alcohol problems. Search Alcoholics Anonymous (AA) offices worldwide, access 24/7 crisis helplines, and discover treatment resources. Recovery is possible.",
    url: "https://alcoholtrackr.com/support",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Alcohol Support & Resources — Find AA Meetings, Helplines & Treatment",
    description:
      "Find help for alcohol problems. Search AA offices worldwide, access 24/7 crisis helplines (SAMHSA: 1-800-662-4357), discover treatment resources.",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SupportStructuredData />
      {children}
    </>
  );
}

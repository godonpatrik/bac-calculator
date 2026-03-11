import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & Resources — BAC Calculator | Help for Alcohol Problems",
  description:
    "Find help and support for alcohol problems. Search for local Alcoholics Anonymous (AA) meetings, access helplines, and discover treatment resources. Recovery is possible.",
  alternates: {
    canonical: "https://alcoholtrackr.com/support",
  },
  openGraph: {
    title: "Support & Resources — BAC Calculator | Help for Alcohol Problems",
    description:
      "Find help and support for alcohol problems. Search for local Alcoholics Anonymous (AA) meetings, access helplines, and discover treatment resources.",
    url: "https://alcoholtrackr.com/support",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support & Resources — BAC Calculator | Help for Alcohol Problems",
    description:
      "Find help and support for alcohol problems. Search for local AA meetings, access helplines, and discover treatment resources.",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

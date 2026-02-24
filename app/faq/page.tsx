import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ — BAC Calculator | Frequently Asked Questions",
  description:
    "Frequently asked questions about the BAC Calculator. Learn about blood alcohol content, the Widmark formula, legal BAC limits, standard drinks, and more.",
  alternates: {
    canonical: "https://alcoholtrackr.com/faq",
  },
  openGraph: {
    title: "FAQ — BAC Calculator | Frequently Asked Questions",
    description:
      "Frequently asked questions about the BAC Calculator. Learn about blood alcohol content, the Widmark formula, legal BAC limits, standard drinks, and more.",
    url: "https://alcoholtrackr.com/faq",
    siteName: "BAC Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — BAC Calculator | Frequently Asked Questions",
    description:
      "Frequently asked questions about the BAC Calculator. Learn about blood alcohol content, the Widmark formula, legal BAC limits, standard drinks, and more.",
  },
};

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 text-sm mb-6 inline-block"
      >
        ← Back to Calculator
      </Link>

      <h1 className="text-3xl font-bold text-white mb-6">
        Frequently Asked Questions
      </h1>

      <FAQSection />

      <section className="bg-gray-800 rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-white mb-3">
          Still Have Questions?
        </h2>
        <div className="text-gray-300 text-sm space-y-2">
          <p>
            If you didn&apos;t find the answer you were looking for, feel free
            to reach out to us directly.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="inline-block px-4 py-2 border border-gray-600 hover:bg-gray-700 text-gray-300 text-sm font-medium rounded-lg transition-colors"
            >
              Learn More About BAC
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

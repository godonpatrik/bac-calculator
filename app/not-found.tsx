import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — BAC Calculator",
  description:
    "The page you're looking for doesn't exist. Return to the BAC Calculator to estimate your blood alcohol content for free.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-gray-500 mb-2">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-gray-400 text-sm mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            🍺 Go to BAC Calculator
          </Link>
          <Link
            href="/faq"
            className="inline-block px-6 py-2.5 border border-gray-600 hover:bg-gray-700 text-gray-300 text-sm font-medium rounded-lg transition-colors"
          >
            View FAQ
          </Link>
        </div>

        <div className="mt-10 text-gray-500 text-xs space-y-1">
          <p>Looking for something specific?</p>
          <nav className="flex flex-wrap justify-center gap-3 mt-2">
            <Link
              href="/about"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Contact
            </Link>
            <Link
              href="/disclaimer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Disclaimer
            </Link>
            <Link
              href="/privacy-policy"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

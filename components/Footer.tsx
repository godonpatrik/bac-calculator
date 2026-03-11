import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-8">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
            FAQ
          </Link>
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
            Disclaimer
          </Link>
          <Link href="/research" className="text-gray-400 hover:text-white transition-colors">
            Scientific Research
          </Link>
        </nav>
        <div className="mt-6 pt-4 border-t border-gray-700 text-center text-gray-500 text-xs">
          <p>
            © {new Date().getFullYear()} BAC Calculator (alcoholtrackr.com). All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

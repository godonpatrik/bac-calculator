import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-lg hover:text-blue-400 transition-colors"
        >
          🍺 BAC Calculator
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Calculator
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/faq"
            className="text-gray-300 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

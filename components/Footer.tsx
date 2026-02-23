import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-8">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-2">Tool</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  BAC Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Connect</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-700 text-center text-gray-500 text-xs">
          <p>
            © {new Date().getFullYear()} BAC Calculator (alcoholtrackr.com). All
            rights reserved.
          </p>
          <p className="mt-1">
            This tool provides estimates only. Never drink and drive.
          </p>
        </div>
      </div>
    </footer>
  );
}

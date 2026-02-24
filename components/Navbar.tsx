"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-end">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-base">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Calculator
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Mobile Navigation Title */}
          <div className="md:hidden text-white font-bold text-lg">
            BAC Calculator
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded p-2 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-1">
            <Link
              href="/"
              onClick={closeMenu}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 transition-colors px-4 py-3 rounded text-base font-medium"
            >
              Calculator
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 transition-colors px-4 py-3 rounded text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/faq"
              onClick={closeMenu}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 transition-colors px-4 py-3 rounded text-base font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 transition-colors px-4 py-3 rounded text-base font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

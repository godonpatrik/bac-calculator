"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isMobileLearnOpen, setIsMobileLearnOpen] = useState(false);
  const learnTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileLearnOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileLearnOpen(false);
  };

  const handleLearnMouseEnter = () => {
    if (learnTimeoutRef.current) {
      clearTimeout(learnTimeoutRef.current);
      learnTimeoutRef.current = null;
    }
    setIsLearnOpen(true);
  };

  const handleLearnMouseLeave = () => {
    learnTimeoutRef.current = setTimeout(() => {
      setIsLearnOpen(false);
    }, 500);
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
              Home
            </Link>

            {/* Learn Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleLearnMouseEnter}
              onMouseLeave={handleLearnMouseLeave}
            >
              <button
                className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-1"
                aria-expanded={isLearnOpen}
                aria-haspopup="true"
              >
                Learn
                <svg
                  className={`w-4 h-4 transition-transform ${isLearnOpen ? "rotate-180" : ""}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLearnOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2 z-50">
                  <Link
                    href="/bac-effects"
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    BAC Effects
                    <span className="block text-xs text-gray-500">How BAC levels affect you</span>
                  </Link>
                  <Link
                    href="/alcohol-metabolism"
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    Alcohol Metabolism
                    <span className="block text-xs text-gray-500">How your body processes alcohol</span>
                  </Link>
                  <Link
                    href="/responsible-drinking"
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    Responsible Drinking
                    <span className="block text-xs text-gray-500">Safety tips &amp; harm reduction</span>
                  </Link>
                  <Link
                    href="/research"
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    Research
                    <span className="block text-xs text-gray-500">Scientific papers &amp; sources</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/faq"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/support"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Support
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
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
              Home
            </Link>

            {/* Mobile Learn Accordion */}
            <button
              onClick={() => setIsMobileLearnOpen(!isMobileLearnOpen)}
              className="w-full text-left text-gray-300 hover:text-white hover:bg-gray-700 transition-colors px-4 py-3 rounded text-base font-medium flex items-center justify-between"
              aria-expanded={isMobileLearnOpen}
            >
              Learn
              <svg
                className={`w-4 h-4 transition-transform ${isMobileLearnOpen ? "rotate-180" : ""}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileLearnOpen && (
              <div className="ml-4 space-y-1 border-l-2 border-gray-700 pl-2">
                <Link
                  href="/bac-effects"
                  onClick={closeMenu}
                  className="block text-gray-400 hover:text-white hover:bg-gray-700 transition-colors px-4 py-2.5 rounded text-sm"
                >
                  BAC Effects
                </Link>
                <Link
                  href="/alcohol-metabolism"
                  onClick={closeMenu}
                  className="block text-gray-400 hover:text-white hover:bg-gray-700 transition-colors px-4 py-2.5 rounded text-sm"
                >
                  Alcohol Metabolism
                </Link>
                <Link
                  href="/responsible-drinking"
                  onClick={closeMenu}
                  className="block text-gray-400 hover:text-white hover:bg-gray-700 transition-colors px-4 py-2.5 rounded text-sm"
                >
                  Responsible Drinking
                </Link>
                <Link
                  href="/research"
                  onClick={closeMenu}
                  className="block text-gray-400 hover:text-white hover:bg-gray-700 transition-colors px-4 py-2.5 rounded text-sm"
                >
                  Research
                </Link>
              </div>
            )}

            <Link
              href="/faq"
              onClick={closeMenu}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 transition-colors px-4 py-3 rounded text-base font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/support"
              onClick={closeMenu}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 transition-colors px-4 py-3 rounded text-base font-medium"
            >
              Support
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 transition-colors px-4 py-3 rounded text-base font-medium"
            >
              About
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

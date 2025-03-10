"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/[.08] dark:border-white/[.08]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-lg font-semibold font-[family-name:var(--font-geist-sans)]"
          >
            TK
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/work"
              className="text-sm hover:text-gray-600 transition-colors font-[family-name:var(--font-geist-sans)]"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm hover:text-gray-600 transition-colors font-[family-name:var(--font-geist-sans)]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-gray-600 transition-colors font-[family-name:var(--font-geist-sans)]"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/work"
                className="block px-3 py-2 text-base font-medium hover:text-gray-600 transition-colors font-[family-name:var(--font-geist-sans)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium hover:text-gray-600 transition-colors font-[family-name:var(--font-geist-sans)]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium hover:text-gray-600 transition-colors font-[family-name:var(--font-geist-sans)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

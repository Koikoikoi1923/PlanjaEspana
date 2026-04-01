"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Verhuizen", href: "/verhuizen-naar-spanje" },
  { label: "Wonen", href: "/wonen-in-spanje" },
  { label: "Werken", href: "/werken-in-spanje" },
  { label: "Belasting", href: "/belasting-en-regels" },
  { label: "Zorg", href: "/zorg-en-verzekeringen" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-200/95 backdrop-blur-sm border-b border-pink-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground tracking-tight">
              Planja<span className="text-pink-700">España</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-pink-800 hover:text-pink-950 transition-colors rounded-lg hover:bg-pink-300/60"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/start-hier"
              className="ml-3 px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Start hier
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-pink-800 hover:text-pink-950"
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-pink-300 bg-pink-100">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-muted hover:text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/start-hier"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-4 py-2.5 text-center text-base font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Start hier
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

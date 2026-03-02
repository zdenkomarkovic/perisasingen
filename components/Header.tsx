"use client";

import { useState } from "react";
import { PHONE_1, PHONE_1_HREF } from "@/lib/constants";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Galerie", href: "#galerie" },
  { label: "Über uns", href: "#uber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span
            className="text-gold font-bold text-xl tracking-wide"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Periša
          </span>
          <span className="text-gray-400 text-xs uppercase tracking-widest">
            Schuh &amp; Schlüsseldienst
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone + Notdienst */}
        <div className="hidden md:flex flex-col items-end gap-1">
          <span className="bg-gold text-dark text-xs font-bold px-2 py-0.5 rounded tracking-wide">
            NOTDIENST 24/7
          </span>
          <a
            href={PHONE_1_HREF}
            className="text-white font-semibold text-sm hover:text-gold transition-colors"
          >
            {PHONE_1}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-300 hover:text-gold transition-colors"
          aria-label="Menü öffnen"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-3 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-gold text-sm font-medium py-1 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-1">
            <span className="bg-gold text-dark text-xs font-bold px-2 py-0.5 rounded w-fit tracking-wide">
              NOTDIENST 24/7
            </span>
            <a
              href={PHONE_1_HREF}
              className="text-white font-bold text-lg hover:text-gold transition-colors"
            >
              {PHONE_1}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

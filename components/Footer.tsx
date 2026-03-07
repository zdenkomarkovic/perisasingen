import Image from "next/image";
import {
  PHONE_1,
  PHONE_2,
  PHONE_1_HREF,
  PHONE_2_HREF,
  ADDRESS_STREET,
  ADDRESS_CITY,
  ADDRESS_ADDITION,
} from "@/lib/constants";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="POSTARKADE Schuh & Schlüsseldienst"
                width={140}
                height={56}
                className="h-24 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Traditionelles Handwerk mit persönlichem Service. Qualität und Zuverlässigkeit seit
              Generationen – direkt in Singen.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                ["Unsere Leistungen", "#leistungen"],
                ["Galerie", "#galerie"],
                ["Über uns", "#uber-uns"],
                ["Kontakt", "#kontakt"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={PHONE_1_HREF} className="hover:text-gold transition-colors">
                  {PHONE_1}
                </a>
              </li>
              <li>
                <a href={PHONE_2_HREF} className="hover:text-gold transition-colors">
                  {PHONE_2}
                </a>
              </li>
              <li className="pt-1">
                <span className="block">{ADDRESS_ADDITION}</span>
                <span className="block">{ADDRESS_STREET}</span>
                <span className="block">{ADDRESS_CITY}</span>
              </li>
              <li className="pt-2 space-y-1">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Öffnungszeiten
                </p>
                <div className="flex justify-between">
                  <span>Mo – Fr</span>
                  <span className="text-gray-300">10:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span className="text-gray-300">10:00 – 16:00</span>
                </div>
              </li>
              <li className="pt-2">
                <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-2 py-0.5 rounded">
                  NOTDIENST 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} POSTARKADE Schuh- und Schlüsseldienst Singen. Alle Rechte
            vorbehalten.
          </p>
          <a
            href="https://manikamwebsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xs transition-colors"
          >
            Webdesign: Manikam Web Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}

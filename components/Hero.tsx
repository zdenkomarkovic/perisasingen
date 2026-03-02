import Image from "next/image";
import { PHONE_1_HREF, PHONE_1 } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Schuh- und Schlüsseldienst Periša Singen"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold/50 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase backdrop-blur-sm">
          <svg
            className="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          Postarkade &bull; Singen
        </div>

        {/* Heading */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-3 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Schuh- &amp;{" "}
          <span className="text-gold">Schlüsseldienst</span>
        </h1>
        <p
          className="text-4xl md:text-5xl font-semibold text-white/90 mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Periša
        </p>

        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Traditionelles Handwerk mit persönlichem Service –{" "}
          <span className="text-white">Qualität, die man spürt.</span>
          <br className="hidden md:block" /> Schuhreparaturen, Schlüssel, Gravuren und mehr – alles unter einem Dach.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#leistungen"
            className="bg-gold hover:bg-gold-light text-dark font-bold px-8 py-4 rounded transition-colors duration-200 text-sm tracking-wide uppercase w-full sm:w-auto"
          >
            Unsere Leistungen
          </a>
          <a
            href={PHONE_1_HREF}
            className="border-2 border-white/70 hover:border-gold hover:text-gold text-white font-bold px-8 py-4 rounded transition-colors duration-200 text-sm tracking-wide uppercase w-full sm:w-auto"
          >
            {PHONE_1} anrufen
          </a>
        </div>

        {/* 24/7 note */}
        <p className="mt-6 text-gold/80 text-xs tracking-widest uppercase font-semibold">
          24/7 Notdienst &bull; Schlüsseldienst &amp; Türöffnung
        </p>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

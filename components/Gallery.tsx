"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  {
    src: "/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%282%29.jpeg",
    alt: "Werkstatt Postarkade Singen",
  },
  {
    src: "/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%283%29.jpeg",
    alt: "Schuhreparatur Postarkade",
  },
  {
    src: "/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%284%29.jpeg",
    alt: "Schlüsselservice Singen",
  },
  {
    src: "/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%285%29.jpeg",
    alt: "Lederarbeiten Postarkade",
  },
  {
    src: "/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%286%29.jpeg",
    alt: "Gravuren und Pokale",
  },
  {
    src: "/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%287%29.jpeg",
    alt: "Stempel Anfertigung",
  },
  {
    src: "/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%288%29.jpeg",
    alt: "Batteriewechsel Service",
  },
  {
    src: "/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%289%29.jpeg",
    alt: "Schuhpflege und Polieren",
  },
  {
    src: "/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%2810%29.jpeg",
    alt: "Postarkade Postarkade Singen",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : 0));
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i + 1) % images.length : 0));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [activeIndex, prev, next]);

  return (
    <>
      <section id="galerie" className="bg-dark py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Einblicke
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Unsere Galerie
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative overflow-hidden rounded-xl group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-gold ${
                  i === 0 ? "col-span-2 sm:col-span-1 row-span-2" : ""
                }`}
              >
                <div
                  className={`relative w-full ${
                    i === 0 ? "aspect-[4/5] sm:h-full min-h-[300px]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gold text-dark rounded-full p-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            aria-label="Schließen"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/50 text-sm">
            {activeIndex + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={images[activeIndex]?.src ?? ""}
                alt={images[activeIndex]?.alt ?? ""}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <p className="text-center text-white/60 text-sm mt-3">
              {images[activeIndex]?.alt}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Nächstes Bild"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

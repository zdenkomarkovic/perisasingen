import Image from "next/image";

const highlights = [
  {
    label: "Generationen",
    desc: "Familiengeführtes Unternehmen mit langjähriger Erfahrung",
  },
  {
    label: "Handarbeit",
    desc: "Viele Aufträge werden sorgfältig in echter Handarbeit ausgeführt",
  },
  {
    label: "Garantie",
    desc: "Schlüssel & Batterien mit 1 Jahr Garantie – Qualität, die hält",
  },
  {
    label: "Notdienst",
    desc: "24/7 erreichbar – schnell und unkompliziert",
  },
];

export default function About() {
  return (
    <section id="uber-uns" className="bg-warm py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Über uns
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tradition trifft{" "}
              <span className="text-gold">moderne Dienstleistung</span>
            </h2>

            <div className="w-16 h-0.5 bg-gold mb-7" />

            <p className="text-muted text-base leading-relaxed mb-5">
              Wir stehen für traditionelles Handwerk, Qualität und persönlichen
              Service – und das über Generationen hinweg. In unserem Betrieb
              verbinden wir Erfahrung mit moderner Dienstleistung und arbeiten
              viele Aufträge noch sorgfältig in echter Handarbeit aus.
            </p>
            <p className="text-muted text-base leading-relaxed mb-8">
              Bei uns stehen Zuverlässigkeit, saubere Arbeit und
              Kundenzufriedenheit an erster Stelle. Wir nehmen uns Zeit für
              eine persönliche Beratung und finden für jedes Anliegen die
              passende Lösung.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{h.label}</p>
                    <p className="text-muted text-xs leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/WhatsApp%20Image%202026-02-27%20at%2010.12.11%20%281%29.jpeg"
                alt="Schuh- und Schlüsseldienst Periša – Werkstatt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-dark text-white rounded-xl p-4 shadow-xl">
              <p className="text-gold font-bold text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
                24/7
              </p>
              <p className="text-gray-400 text-xs leading-tight">
                Notdienst<br />erreichbar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

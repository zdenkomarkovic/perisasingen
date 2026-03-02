const services = [
  {
    title: "Schuhservice",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <path
          d="M4 44c0 0 8-4 20-4s18 4 32 4v4H4v-4z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M4 44c0-8 6-14 14-16l10-2h8l12-8 4 4-6 6 2 2c4 0 6 4 6 6v2"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      "Schuhreparaturen aller Art",
      "Absätze & Sohlen erneuern",
      "Handgenähte Lederarbeiten",
      "Lederverkauf",
      "Pflege & Polieren",
    ],
  },
  {
    title: "Schlüsselservice",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="22" cy="22" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M32 30l20 20M44 44l-4 4M50 38l-4 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      "Schlüssel nachmachen",
      "Auto-Schlüssel Service",
      "Türöffnung – Notdienst 24/7",
      "Schlüssel mit Garantie",
      "Beratung zu Schließsystemen",
    ],
  },
  {
    title: "Batteriewechsel",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="8" y="20" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M48 28h4a4 4 0 010 8h-4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M20 32h8M28 28v8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      "Uhren – Batteriewechsel",
      "Fernbedienungen",
      "Auto-Schlüssel Batterien",
      "1 Jahr Garantie",
      "Schneller Service",
    ],
  },
  {
    title: "Gravuren & Pokale",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <path
          d="M20 8h24l-4 24H24L20 8z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 8c-4 0-8 4-8 10 0 6 4 10 12 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M44 8c4 0 8 4 8 10 0 6-4 10-12 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M28 32v10M36 32v10M22 42h20M26 50h12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      "Gravuren auf Pokalen",
      "Schilder & Schmuck gravieren",
      "Pokale zum Verkauf",
      "Individuelle Gravurwünsche",
      "Aller Art",
    ],
  },
  {
    title: "Stempel",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="12" y="8" width="40" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <rect x="20" y="14" width="24" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 30v8a4 4 0 004 4h16a4 4 0 004-4v-8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M12 50h40"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      "Individuelle Stempel",
      "Wunschtext & Motiv",
      "Firmenstempel",
      "Adressstempel",
      "Schnelle Anfertigung",
    ],
  },
  {
    title: "Leder & Näharbeiten",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <path
          d="M8 56L32 8l24 48"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 40h32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="24" r="3" fill="currentColor" />
        <path
          d="M28 32l4 8 4-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      "Handgenähte Lederarbeiten",
      "Lederreparaturen",
      "Lederverkauf",
      "Maßanfertigungen",
      "Sorgfältige Handarbeit",
    ],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-cream py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Was wir für Sie tun
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Unsere Leistungen
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-warm group"
            >
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                {service.icon}
              </div>
              <h3
                className="text-xl font-bold text-dark mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <svg
                      className="w-4 h-4 text-gold mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlight strip */}
        <div className="mt-12 bg-dark rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gold font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
              Schlüssel & Batterien mit 1 Jahr Garantie
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Qualitätsversprechen für jeden Auftrag – Ihr Vertrauen ist unser Ansporn.
            </p>
          </div>
          <a
            href="#kontakt"
            className="bg-gold hover:bg-gold-light text-dark font-bold px-6 py-3 rounded text-sm tracking-wide uppercase transition-colors duration-200 whitespace-nowrap"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}

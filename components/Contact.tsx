import {
  PHONE_1,
  PHONE_2,
  PHONE_1_HREF,
  PHONE_2_HREF,
  ADDRESS_STREET,
  ADDRESS_CITY,
  ADDRESS_ADDITION,
} from "@/lib/constants";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-charcoal py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            So finden Sie uns
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Kontakt &amp; Standort
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="flex flex-col gap-5">
            {/* 24/7 Notdienst */}
            <div className="bg-gold rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-dark/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-dark text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                  Notdienst 24/7
                </p>
                <p className="text-dark/70 text-sm mt-1">
                  Rund um die Uhr erreichbar – schnell und unkompliziert.
                  Türöffnung, Schlüsseldienst und Notfälle.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-dark/40 border border-white/10 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  Telefon
                </p>
                <a
                  href={PHONE_1_HREF}
                  className="block text-white font-bold text-xl hover:text-gold transition-colors"
                >
                  {PHONE_1}
                </a>
                <a
                  href={PHONE_2_HREF}
                  className="block text-gray-400 text-base hover:text-gold transition-colors mt-1"
                >
                  {PHONE_2}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="bg-dark/40 border border-white/10 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  Adresse
                </p>
                <p className="text-white font-bold text-base">
                  {ADDRESS_ADDITION}
                </p>
                <p className="text-gray-300 text-base">{ADDRESS_STREET}</p>
                <p className="text-gray-400 text-sm">{ADDRESS_CITY}</p>
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-dark/40 border border-white/10 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Öffnungszeiten
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Montag – Freitag</span>
                    <span className="text-white font-semibold text-sm">10:00 – 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Samstag</span>
                    <span className="text-white font-semibold text-sm">10:00 – 16:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Sonntag</span>
                    <span className="text-gray-500 text-sm">Geschlossen</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">24/7</span>
                    <span className="text-gray-400 text-xs">Notdienst außerhalb der Öffnungszeiten</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services quick list */}
            <div className="bg-dark/40 border border-white/10 rounded-xl p-6">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                Unsere Services
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Schuhreparaturen",
                  "Schlüssel nachmachen",
                  "Batteriewechsel",
                  "Leder- & Näharbeiten",
                  "Gravuren & Pokale",
                  "Stempel",
                  "Türöffnung",
                  "Notdienst 24/7",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-[500px] lg:h-auto shadow-xl border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=Bahnhofstra%C3%9Fe+15%2C+78224+Singen&hl=de&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Periša Singen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { PHONE_1, PHONE_1_HREF } from "@/lib/constants";

const faqs = [
  {
    question: "Wo kann ich in Singen eine Uhr-Batterie wechseln lassen?",
    answer:
      "Bei Schuh- und Schlüsseldienst Postarkade in der Postarkade, Bahnhofstraße 15, Singen. Wir wechseln Batterien für Armbanduhren aller Marken – schnell und mit 1 Jahr Garantie.",
  },
  {
    question: "Welche Batterien werden bei Postarkade Singen gewechselt?",
    answer:
      "Wir wechseln Batterien für Armbanduhren, Taschenuhren, Fernbedienungen, Auto-Schlüssel und andere Kleingeräte. Einfach vorbeikommen – der Wechsel dauert in der Regel nur wenige Minuten.",
  },
  {
    question: "Wie viel kostet ein Batteriewechsel in Singen?",
    answer:
      "Die Kosten für einen Batteriewechsel sind bei uns fair und transparent. Rufen Sie uns an oder kommen Sie direkt vorbei – wir informieren Sie gerne vor Ort. Alle gewechselten Batterien erhalten 1 Jahr Garantie.",
  },
  {
    question: "Bietet Postarkade Singen auch Batteriewechsel für Auto-Schlüssel an?",
    answer:
      "Ja, wir wechseln Batterien für Auto-Schlüssel und Fernbedienungen aller gängigen Fahrzeugmarken – inklusive 1 Jahr Garantie. Einfach in der Postarkade, Bahnhofstraße 15, vorbeikommen.",
  },
  {
    question: "Wie lange dauert ein Batteriewechsel bei Postarkade Singen?",
    answer:
      "Ein Batteriewechsel dauert bei uns meist nur wenige Minuten. Kein Termin nötig – einfach während der Öffnungszeiten vorbeikommen.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BatteriewechselInfo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section id="batteriewechsel-singen" className="bg-cream py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Left – keyword text */}
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Batteriewechsel Singen
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Batteriewechsel in Singen –{" "}
                <span className="text-gold">schnell & mit Garantie</span>
              </h2>
              <div className="w-14 h-0.5 bg-gold mb-6" />

              <p className="text-muted text-base leading-relaxed mb-4">
                Sie suchen einen zuverlässigen <strong className="text-dark">Batteriewechsel in Singen</strong>? Bei Schuh- und Schlüsseldienst Postarkade wechseln wir Batterien für <strong className="text-dark">Armbanduhren</strong>, Taschenuhren, <strong className="text-dark">Fernbedienungen</strong> und <strong className="text-dark">Auto-Schlüssel</strong> – schnell, professionell und zu fairen Preisen.
              </p>
              <p className="text-muted text-base leading-relaxed mb-4">
                Unser <strong className="text-dark">Uhrservice in Singen</strong> ist auf Batterienwechsel spezialisiert. Egal ob klassische Armbanduhr, Sportuhr oder Smartwatch-Batterie – wir helfen Ihnen unkompliziert und ohne Wartezeit. Kein Termin nötig, einfach vorbeikommen.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                Alle gewechselten Batterien erhalten bei uns <strong className="text-dark">1 Jahr Garantie</strong>. Finden Sie uns direkt in der <strong className="text-dark">Postarkade, Bahnhofstraße 15 in Singen</strong> – zentral und gut erreichbar.
              </p>

              <a
                href={PHONE_1_HREF}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-dark font-bold px-6 py-3 rounded transition-colors duration-200 text-sm tracking-wide uppercase"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_1} – Jetzt anrufen
              </a>
            </div>

            {/* Right – FAQ */}
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Häufige Fragen
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Fragen & Antworten
              </h3>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-warm rounded-lg overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none bg-white hover:bg-warm transition-colors duration-200">
                      <span className="font-semibold text-dark text-sm">{faq.question}</span>
                      <svg
                        className="w-4 h-4 text-gold shrink-0 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 py-4 bg-cream text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

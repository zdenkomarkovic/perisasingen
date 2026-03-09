import { PHONE_1, PHONE_1_HREF } from "@/lib/constants";

const faqs = [
  {
    question: "Gibt es einen Schlüsseldienst Notdienst in Singen?",
    answer:
      "Ja – Schlüsseldienst Postarkade in Singen ist 24 Stunden am Tag, 7 Tage die Woche erreichbar. Bei Aussperrung oder verlorenen Schlüsseln helfen wir schnell und unkompliziert. Einfach anrufen.",
  },
  {
    question: "Wo kann ich in Singen einen Schlüssel nachmachen lassen?",
    answer:
      "Bei Schlüsseldienst Postarkade in der Postarkade, Bahnhofstraße 15, Singen. Wir fertigen Schlüsselkopien für alle gängigen Schließsysteme – schnell und mit 1 Jahr Garantie.",
  },
  {
    question: "Macht Postarkade auch Auto-Schlüssel in Singen?",
    answer:
      "Ja, wir bieten Auto-Schlüssel Service in Singen an – inklusive Batteriewechsel für Autoschlüssel-Fernbedienungen mit 1 Jahr Garantie.",
  },
  {
    question: "Was kostet eine Türöffnung in Singen?",
    answer:
      "Die Kosten für eine Türöffnung hängen von der Situation ab. Rufen Sie uns einfach an – wir beraten Sie ehrlich und kommen schnell zu Ihnen.",
  },
  {
    question: "Wo befindet sich der Schlüsseldienst Postarkade in Singen?",
    answer:
      "Wir befinden uns direkt in der Postarkade, Bahnhofstraße 15, 78224 Singen – zentral und gut erreichbar.",
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

export default function SchluesseldienstInfo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section id="schluesseldienst-singen" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Left – keyword text */}
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Schlüsseldienst Singen
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Ihr vertrauensvoller{" "}
                <span className="text-gold">Schlüsseldienst in Singen</span>
              </h2>
              <div className="w-14 h-0.5 bg-gold mb-6" />

              <p className="text-muted text-base leading-relaxed mb-4">
                Als langjähriger <strong className="text-dark">Schlüsseldienst in Singen</strong> bieten wir Ihnen alles rund um Schlüssel und Sicherheit. Ob Sie einen <strong className="text-dark">Schlüssel nachmachen</strong> lassen möchten, Hilfe bei einer <strong className="text-dark">Türöffnung in Singen</strong> benötigen oder einen neuen Auto-Schlüssel brauchen – wir sind Ihr zuverlässiger Ansprechpartner.
              </p>
              <p className="text-muted text-base leading-relaxed mb-4">
                Unser <strong className="text-dark">Schlüsseldienst Notdienst in Singen</strong> ist rund um die Uhr erreichbar – 24 Stunden, 7 Tage die Woche. Wir helfen schnell und ohne versteckte Kosten, damit Sie so bald wie möglich wieder Zugang zu Ihrer Wohnung oder Ihrem Fahrzeug haben.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                Alle von uns gefertigten Schlüssel und Batterien werden mit <strong className="text-dark">1 Jahr Garantie</strong> geliefert. Finden Sie uns direkt in der <strong className="text-dark">Postarkade, Bahnhofstraße 15 in Singen</strong>.
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
                    <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none bg-cream hover:bg-warm transition-colors duration-200">
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
                    <div className="px-5 py-4 bg-white text-muted text-sm leading-relaxed">
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

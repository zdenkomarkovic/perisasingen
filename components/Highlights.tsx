export default function Highlights() {
  return (
    <div className="bg-gold py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Uhrservice */}
        <div className="flex items-center gap-4 bg-dark/10 rounded-xl px-6 py-5">
          <div className="w-14 h-14 bg-dark/20 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-dark font-bold text-lg leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Uhrservice &amp; Batteriewechsel
              </p>
              <span className="bg-dark text-gold text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                1 Jahr Garantie
              </span>
            </div>
            <p className="text-dark/70 text-sm">
              Batteriewechsel für Armbanduhren, Fernbedienungen &amp; Auto-Schlüssel –
              schnell, zuverlässig und mit Garantie.
            </p>
          </div>
        </div>

        {/* Notdienst */}
        <div className="flex items-center gap-4 bg-dark rounded-xl px-6 py-5">
          <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Türöffnung – Notdienst
              </p>
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse whitespace-nowrap">
                24/7
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Rund um die Uhr erreichbar – schnell, diskret und unkompliziert.
              Schlüsseldienst für den Notfall.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function Hero() {
  return (
    <div id="hero" className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0 bg-blue-900/50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ihr Partner für maßgeschneiderten Unternehmenserfolg
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Als junges Consulting-Unternehmen bieten wir maßgeschneiderte Beratungsleistungen, perfekt auf Ihre spezifischen Herausforderungen zugeschnitten. Mit fundiertem Fachwissen und professionellem Ansatz entwickeln wir exzellente Strategien für Ihren nachhaltigen Erfolg. Unser engagierter Beratungsstil zeichnet uns aus: Proaktiv, partnerschaftlich, nahbar und zielgerichtet.
        </p>
      </div>
    </div>
  );
}

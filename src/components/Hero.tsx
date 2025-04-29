import React from 'react';

export default function Hero() {
  return (
    <div id="hero" className="relative h-[600px] flex items-center overflow-hidden">
      {/* Hintergrund-Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/hero-video.mp4" // Pfad zu deinem Video
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Überlagerung */}
      <div className="absolute inset-0 bg-primary/70 z-10"></div>

      {/* Inhalt */}
      <div className="container mx-auto px-4 relative z-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ihr Partner für massgeschneiderten Unternehmenserfolg
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Als junges Consulting-Unternehmen bieten wir maßgeschneiderte Beratungsleistungen, perfekt auf Ihre spezifischen Herausforderungen zugeschnitten. Mit fundiertem Fachwissen und professionellem Ansatz entwickeln wir exzellente Strategien für Ihren nachhaltigen Erfolg. Unser engagierter Beratungsstil zeichnet uns aus: Proaktiv, partnerschaftlich, nahbar und zielgerichtet.
        </p>
      </div>
    </div>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background text-primary mt-16">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Beschreibung */}
        <div>
          <h3 className="text-xl font-bold mb-2">Verein Dampflok Elfe</h3>
          <p className="text-secondary">
            Für den Erhalt von Technikgeschichte und Gemeinschaft. Wir restaurieren die Elfe mit Leidenschaft.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li><a href="#hero" className="hover:text-highlight">Home</a></li>
            <li><a href="#elfe" className="hover:text-highlight">Die Elfe</a></li>
            <li><a href="#steinbruch" className="hover:text-highlight">Steinbruch</a></li>
            <li><a href="#verein" className="hover:text-highlight">Der Verein</a></li>
            <li><a href="#contact" className="hover:text-highlight">Kontakt</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Kontakt</h4>
          <address className="not-italic text-secondary space-y-1">
            <p>Verein Dampflok Elfe</p>
            <p>Beispielweg 1</p>
            <p>1234 Musterort</p>
            <p><a href="mailto:info@dampflok-elfe.ch" className="hover:text-highlight">info@dampflok-elfe.ch</a></p>
          </address>
        </div>

        {/* Rechtliches */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Dokumente</h4>
          <ul className="space-y-1">
            <li><a href="/statuten.pdf" target="_blank" className="hover:text-highlight">Statuten (PDF)</a></li>
            <li><a href="/impressum" className="hover:text-highlight">Impressum</a></li>
            <li><a href="/privacy" className="hover:text-highlight">Datenschutz</a></li>
          </ul>
        </div>
      </div>

      {/* Footer-Bottom */}
      <div className="border-t border-white/10 mt-8 pt-6 text-sm text-center text-secondary">
        <p>&copy; {new Date().getFullYear()} Verein Dampflok Elfe. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

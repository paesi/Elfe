import React from 'react';

export default function Verein() {
  return (
    <main className="py-16 px-4 bg-background text-primary">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Der Verein</h1>

        <p className="mb-6 text-secondary text-lg">
          Unser Verein wurde gegründet, um die Dampflok „Elfe“ zu restaurieren und die Geschichte des lokalen Steinbruchs zu bewahren.
          Wir setzen uns leidenschaftlich für den Erhalt historischer Technik ein – ehrenamtlich, gemeinnützig und mit viel Herzblut.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Ziele</h2>
        <ul className="list-disc list-inside text-secondary space-y-2 mb-6">
          <li>Restaurierung der Lokomotive „Elfe“</li>
          <li>Dokumentation und Aufarbeitung der Geschichte des Steinbruchs</li>
          <li>Öffentlichkeitsarbeit zur Förderung von Technikgeschichte</li>
          <li>Langfristig: Aufbau eines kleinen Technikmuseums</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Das Team</h2>
        <p className="mb-6 text-secondary">
          Unser Team besteht aus Eisenbahnliebhabern, Technikfans, Historikern und engagierten Menschen aus der Region. 
          Jeder bringt sein Wissen und seine Fähigkeiten ein – vom Schweißer bis zur Fotografin.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Mitglied werden</h2>
        <p className="mb-6 text-secondary">
          Möchten Sie unsere Arbeit unterstützen? Werden Sie Mitglied in unserem Verein! 
          Ob aktiv bei der Restaurierung oder fördernd durch Ihren Beitrag – jede Hilfe zählt.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Kontakt</h2>
        <p className="text-secondary">
          Schreiben Sie uns eine E-Mail oder besuchen Sie uns vor Ort. 
          Die Kontaktmöglichkeiten finden Sie auf unserer <a href="/#contact" className="text-highlight hover:underline">Kontaktseite</a>.
        </p>
      </div>
    </main>
  );
}


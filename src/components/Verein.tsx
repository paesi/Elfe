import React from 'react';
import PraesidentImg from '../assets/Platzhalter.png';
import VizeImg from '../assets/Platzhalter.png';
import SekretärinImg from '../assets/Platzhalter.png';
import KassierinImg from '../assets/Platzhalter.png';


const team = [
  {
    name: 'Marc Robinson',
    rolle: 'Präsident',
    bild: PraesidentImg,
    beschreibung:
      'Marc ist unser Gründungsmitglied und Herz des Vereins. Er koordiniert alle Aktivitäten und steht mit Leidenschaft hinter dem Projekt.',
  },
  {
    name: 'Peter Hofmann',
    rolle: 'Vizepräsident',
    bild: VizeImg,
    beschreibung:
      'Peter bringt organisatorisches Talent und Technikbegeisterung zusammen. Er betreut unsere Partnerschaften und Öffentlichkeitsarbeit.',
  },
  {
    name: 'Ursula Marti',
    rolle: 'Sekretärin',
    bild: SekretärinImg,
    beschreibung:
      'Ursula unterstützt den Verein und übernimmt die Administration. Sie sorgt für klare Abläufe und eine gut organisierte Kommunikation.',
  },
];

export default function Verein() {
  return (
    <section id="verein" className="py-16 px-4 bg-background text-primary">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Der Verein</h1>

        <p className="mb-6 text-secondary text-lg text-center">
          Unser Verein setzt sich für die Restaurierung der Dampflok „Elfe“ und die Bewahrung der Geschichte des Steinbruchs ein. 
          Ehrenamtlich, gemeinnützig und mit Herz.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-12 text-center">Unser Vorstand</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {team.map((mitglied) => (
            <div key={mitglied.name} className="text-center">
              <img
                src={mitglied.bild}
                alt={mitglied.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold mb-1 text-primary">{mitglied.name}</h3>
              <p className="text-primary font-medium mb-2">{mitglied.rolle}</p>
              <p className="text-secondary text-sm">{mitglied.beschreibung}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-12">Mitglied werden</h2>
        <p className="text-secondary mb-6">
          Ob aktiv mitanpacken oder durch einen Beitrag unterstützen – wir freuen uns über neue Mitglieder! 
          Kontaktieren Sie uns einfach über das <a href="/#contact" className="text-primary font-bold hover:underline">Kontaktformular</a>.
        </p>
      </div>
    </section>
  );
}

import React from 'react';
import Bruch1 from '../assets/Rekonstruktion_steinbruchbahn.jpg'; // Beispielbild
import Bruch2 from '../assets/Steinbrecherhuesli.jpg';   // kannst später eigene Steinbruchbilder einsetzen
import Bruch3 from '../assets/Pferde.jpg';

const inhalte = [
  {
    image: Bruch1,
    title: 'Ein Ort der Arbeit',
    text: 'Der Steinbruch wurde über Jahrzehnte genutzt, um wertvolle Gesteine für Bauprojekte in der ganzen Region zu fördern. Es war ein Ort harter, aber ehrlicher Arbeit.',
  },
  {
    image: Bruch2,
    title: 'Die Verbindung zur Elfe',
    text: 'Die Dampflok „Elfe“ war das Rückgrat des Transports – sie bewegte die schweren Wagen mit dem Material vom Bruch ins Tal. Ohne sie hätte der Betrieb nicht funktioniert.',
  },
  {
    image: Bruch3,
    title: 'Heute ein Ort der Erinnerung',
    text: 'Obwohl der Bruch nicht mehr in Betrieb ist, erzählen die Spuren im Gestein und die Schienenreste noch heute Geschichten aus der Vergangenheit.',
  },
];

export default function Steinbruch() {
  return (
    <section id="steinbruch" className="py-16 px-4 bg-background text-primary">
      <div className="container mx-auto space-y-20 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12">Der historische Steinbruch</h1>

        {inhalte.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow-lg w-full max-h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-secondary">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



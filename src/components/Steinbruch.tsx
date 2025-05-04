import React, { useState } from 'react';
import Bruch1 from '../assets/steinbruch/1.jpg';
import Bruch2 from '../assets/steinbruch/2.jpg';
import Bruch3 from '../assets/steinbruch/3.jpg';

const steinbruchSlides = [
  {
    image: Bruch1,
    description: 'Übersicht über den ehemaligen Steinbruch im Frühling.',
  },
  {
    image: Bruch2,
    description: 'Die alten Gleisreste, auf denen die Elfe einst fuhr.',
  },
  {
    image: Bruch3,
    description: 'Ein Blick in die Tiefe des historischen Gesteinsabbaus.',
  },
];

export default function Steinbruch() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + steinbruchSlides.length) % steinbruchSlides.length);
  const nextSlide = () => setCurrent((current + 1) % steinbruchSlides.length);

  return (
    <section id="steinbruch" className="py-16 px-4 bg-background text-primary">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">Der historische Steinbruch</h1>

        {/* Karussell */}
        <div className="relative mb-4">
          <img
            src={steinbruchSlides[current].image}
            alt={`Steinbruch Bild ${current + 1}`}
            className="mx-auto rounded-lg shadow-lg max-h-[400px] object-contain"
          />
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 px-4 text-2xl">‹</button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 px-4 text-2xl">›</button>
        </div>

        <p className="text-secondary text-lg mt-4">
          {steinbruchSlides[current].description}
        </p>

        <div className="mt-10 text-left">
          <h2 className="text-2xl font-semibold mb-4">Geschichte</h2>
          <p className="mb-6 text-secondary">
            Der Steinbruch wurde um 1880 erschlossen und diente über viele Jahrzehnte dem Abbau von Kalkstein. Die geförderten Gesteine wurden u. a. im Eisenbahnbau und für öffentliche Gebäude verwendet.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Bedeutung</h2>
          <p className="mb-6 text-secondary">
            Neben der industriellen Bedeutung war der Steinbruch auch ein wichtiger Arbeitgeber der Region. Der Transport innerhalb des Bruchs erfolgte über eine eigene Schmalspurbahn – hier war unsere Lok „Elfe“ im Einsatz.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Zukunft</h2>
          <p className="text-secondary">
            Unser Verein arbeitet daran, den Steinbruch als Teil des kulturellen Erbes sichtbar zu machen. Langfristig soll er durch Führungen und Ausstellungen zugänglich gemacht werden.
          </p>
        </div>
      </div>
    </section>
  );
}


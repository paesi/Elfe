import React, { useState } from 'react';
import Elfe1 from '../assets/elfeputz_07.jpg';
import Elfe2 from '../assets/Elfe_historic.jpg';
import Elfe3 from '../assets/Elfe_zeichnung.jpg';

const elfeSlides = [
  {
    image: Elfe1,
    description: 'Die Lokomotive in ihrem aktuellen Zustand vor der Restaurierung.',
  },
  {
    image: Elfe2,
    description: 'Detailaufnahme des Kessels – hier wird besondere Präzision gefordert.',
  },
  {
    image: Elfe3,
    description: 'Das Fahrgestell wurde bereits teilweise überarbeitet.',
  },
];

export default function Elfe() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + elfeSlides.length) % elfeSlides.length);
  const nextSlide = () => setCurrent((current + 1) % elfeSlides.length);

  return (
    <section id="elfe" className="py-16 px-4 bg-background text-primary">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">Die Dampflok „Elfe“</h1>

        {/* Karussell */}
        <div className="relative mb-4">
          <img
            src={elfeSlides[current].image}
            alt={`Elfe Bild ${current + 1}`}
            className="mx-auto rounded-lg shadow-lg max-h-[400px] object-contain"
          />
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 px-4 text-2xl">‹</button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 px-4 text-2xl">›</button>
        </div>

        <p className="text-secondary text-lg mt-4">
          {elfeSlides[current].description}
        </p>
      </div>
    </section>
  );
}

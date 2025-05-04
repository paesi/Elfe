import React, { useState } from 'react';
import Elfe1 from '../assets/elfe/1.jpg';
import Elfe2 from '../assets/elfe/2.jpg';
import Elfe3 from '../assets/elfe/3.jpg';

const elfeImages = [Elfe1, Elfe2, Elfe3];

export default function Elfe() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + elfeImages.length) % elfeImages.length);
  const nextSlide = () => setCurrent((current + 1) % elfeImages.length);

  return (
    <section id="elfe" className="py-16 px-4 bg-background text-primary">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">Die Dampflok „Elfe“</h1>
        
        {/* Karussell */}
        <div className="relative mb-8">
          <img
            src={elfeImages[current]}
            alt={`Elfe Bild ${current + 1}`}
            className="mx-auto rounded-lg shadow-lg max-h-[400px] object-contain"
          />
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 px-4 text-2xl">‹</button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 px-4 text-2xl">›</button>
        </div>

        <p className="text-secondary text-lg">
          Die Lokomotive „Elfe“ wird mit viel Liebe zum Detail restauriert...
        </p>
      </div>
    </section>
  );
}


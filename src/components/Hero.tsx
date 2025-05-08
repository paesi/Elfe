import React from 'react';
import Background from '../assets/Elfe_historic.jpg'; // ersetze durch dein Wunschbild

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[600px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Die Dampflok „Elfe“ lebt wieder
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Unser Verein restauriert mit Herzblut ein technisches Kulturerbe – und erweckt den historischen Steinbruch zu neuem Leben.
        </p>
        <a
          href="#elfe"
          className="inline-block bg-highlight text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-primary transition"
        >
          Mehr Erfahren
        </a>
      </div>
    </section>
  );
}

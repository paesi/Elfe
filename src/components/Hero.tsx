import React from 'react';

export default function Hero() {
  return (
    <div id="hero" className="relative h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Professionelle Immobilienpflege in Bern
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Ihr zuverlässiger Partner für Reinigung, Wartung, Reparatur und Verwaltung von Immobilien.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Kontaktieren Sie uns
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Unsere Dienstleistungen
          </button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from './services/data';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
          Unsere Dienstleistungen
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Wir bieten Ihnen ein umfassendes Spektrum an professionellen Immobiliendienstleistungen für Ihre Liegenschaft.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
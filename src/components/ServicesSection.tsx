import React from 'react';
import ServiceCard from './ServiceCard';
import { Target, Building2, Users } from 'lucide-react';

const services = [
  {
    title: 'Kundengewinnung und Marketing',
    description: 'Wir entwickeln maßgeschneiderte Marketingstrategien, die Ihr Unternehmen vom Wettbewerb abheben. Durch datengetriebene Analysen und innovative Kampagnen steigern wir Ihre Kundengewinnung nachhaltig.',
    icon: Target
  },
  {
    title: 'Digitalisierung und Optimierung von Prozessen',
    description: 'Von der digitalen Transformation bis zur Prozessoptimierung begleiten wir Sie auf dem Weg zum zukunftsfähigen Unternehmen.',
    icon: Building2
  },
  {
    title: 'Fachkräftegewinnung und Mitarbeiterbindung',
    description: 'Wir helfen Ihnen, die besten Talente zu finden und zu binden — durch modernes Employer Branding und effizientes Recruiting.',
    icon: Users
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
          Unsere Dienstleistungen
        </h2>
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

import React from 'react';

const team = [
  {
    name: 'Jorick Mischler',
    position: 'Verhandlungsexperte',
    description: 'Jorick sorgt für wirkungsvolle Verhandlungen, erfolgreichen Vertrieb und effektives Marketing.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Ruben Meier',
    position: 'Strategieberater',
    description: 'Ruben berät Unternehmen dabei, wegweisende Strategien zu entwickeln und nachhaltiges Wachstum zu generieren.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Pascal Hofmann',
    position: 'Business Analyst',
    description: 'Pascal treibt digitale Innovation voran und optimiert Geschäftsprozesse für mehr Effizienz und Agilität.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Unser Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.position}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

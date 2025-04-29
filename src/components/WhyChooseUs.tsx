import React from 'react';
import JorickImage from '../assets/team/Jorick.jpeg';
import RubenImage from '../assets/team/Ruben.jpeg';
import PascalImage from '../assets/team/Pascal.jpg';

const team = [
  {
    name: 'Jorick Mischler',
    position: 'Verhandlungsexperte',
    description: 'Jorick sorgt für wirkungsvolle Verhandlungen, erfolgreichen Vertrieb und effektives Marketing.',
    image: JorickImage
  },
  {
    name: 'Ruben Meier',
    position: 'Strategieberater',
    description: 'Ruben berät Unternehmen dabei, wegweisende Strategien zu entwickeln und nachhaltiges Wachstum zu generieren.',
    image: RubenImage
  },
  {
    name: 'Pascal Hofmann',
    position: 'Business Analyst',
    description: 'Pascal treibt digitale Innovation voran und optimiert Geschäftsprozesse für mehr Effizienz und Agilität.',
    image: PascalImage
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Unser Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{member.name}</h3>
              <p className="text-highlight mb-2">{member.position}</p>
              <p className="text-secondary">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

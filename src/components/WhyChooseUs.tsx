import React from 'react';

interface FeatureProps {
  number: string;
  title: string;
  description: string;
}

function Feature({ number, title, description }: FeatureProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-blue-900">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      number: "20+",
      title: "Jahre Erfahrung",
      description: "Langjährige Expertise im Immobilienservice"
    },
    {
      number: "100%",
      title: "Kundenzufriedenheit",
      description: "Höchste Qualitätsstandards und Service"
    },
    {
      number: "24/7",
      title: "Notfallservice",
      description: "Immer für Sie da, wenn Sie uns brauchen"
    }
  ];

  return (
    <section id="why-choose-us" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Warum Hofmann Immo-Service?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
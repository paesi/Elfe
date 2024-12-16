import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-blue-900" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a 
        href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
      >
        Mehr erfahren →
      </a>
    </div>
  );
}
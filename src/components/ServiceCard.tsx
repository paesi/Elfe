import React from 'react';

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <Icon className="h-8 w-8 text-highlight mt-1" />
        <h3 className="text-xl font-semibold text-primary mt-1">{title}</h3>
      </div>
      <p className="text-secondary">{description}</p>
    </div>
  );
}

import React from 'react';

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-highlight mr-3" />
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </div>
      <p className="text-secondary">{description}</p>
    </div>
  );
}

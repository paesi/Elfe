import React from 'react';
import { ServiceType } from './types';

interface ServiceTypeToggleProps {
  value: ServiceType;
  onChange: (type: ServiceType) => void;
}

export function ServiceTypeToggle({ value, onChange }: ServiceTypeToggleProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Dienstleistungsart</h3>
      <div className="flex gap-4">
        <button
          onClick={() => onChange('cleaning')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
            value === 'cleaning'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Reinigung
        </button>
        <button
          onClick={() => onChange('management')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
            value === 'management'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Verwaltung
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { ServiceOption } from './types';

interface ServiceSelectorProps {
  service: ServiceOption;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export function ServiceSelector({ service, quantity, onQuantityChange }: ServiceSelectorProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-blue-900 font-medium">
          CHF {service.basePrice} / {service.unit}
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded"
          >
            -
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

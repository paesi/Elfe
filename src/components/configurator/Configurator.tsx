import React, { useState } from 'react';
import { useConfigurator } from './useConfigurator';
import { ServiceSelector } from './ServiceSelector';
import { services } from './data';

export default function Configurator() {
  const {
    state,
    updateService,
    updatePropertySize,
    updateFrequency,
    calculateTotal,
    reset
  } = useConfigurator();

  // State for service type toggle
  const [selectedServiceType, setSelectedServiceType] = useState<'cleaning' | 'management'>('cleaning');

  return (
    <section className="py-16 bg-gray-50" id="configurator">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
          Angebot berechnen
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Kalkulieren Sie hier Ihr individuelles Angebot für unsere Dienstleistungen.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Toggle Buttons for Service Type */}
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedServiceType('cleaning')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  selectedServiceType === 'cleaning'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Reinigung
              </button>
              <button
                onClick={() => setSelectedServiceType('management')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  selectedServiceType === 'management'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Verwaltung
              </button>
            </div>

            {/* Property Size */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Objektgröße</h3>
              <input
                type="number"
                min="1"
                value={state.propertySize}
                onChange={(e) => updatePropertySize(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-2 text-gray-600">m²</p>
            </div>

            {/* Frequency Selection */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Häufigkeit</h3>
              <select
                value={state.frequency}
                onChange={(e) => updateFrequency(e.target.value as any)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="weekly">Wöchentlich (10% Rabatt)</option>
                <option value="biweekly">Alle zwei Wochen (5% Rabatt)</option>
                <option value="monthly">Monatlich</option>
              </select>
            </div>

            {/* Services */}
            {selectedServiceType === 'cleaning' && (
              <div className="space-y-4">
                {services.filter(s => s.type === 'cleaning').map((service) => (
                  <ServiceSelector
                    key={service.id}
                    service={service}
                    quantity={state.selectedServices[service.id] || 0}
                    onQuantityChange={(quantity) => updateService(service.id, quantity)}
                  />
                ))}
              </div>
            )}

            {selectedServiceType === 'management' && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Verwaltungskosten</h3>
                <input
                  type="number"
                  placeholder="Pauschale in CHF"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => updateService('management', parseInt(e.target.value) || 0)}
                />
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-semibold mb-6 text-blue-900">
              Ihre Auswahl
            </h3>

            <div className="space-y-4 mb-6">
              {selectedServiceType === 'cleaning' && (
                Object.entries(state.selectedServices).map(([serviceId, quantity]) => {
                  const service = services.find(s => s.id === serviceId);
                  if (service && quantity > 0) {
                    return (
                      <div key={serviceId} className="flex justify-between">
                        <span>{service.name}</span>
                        <span>{quantity} {service.unit}</span>
                      </div>
                    );
                  }
                  return null;
                })
              )}

              {selectedServiceType === 'management' && (
                <div className="flex justify-between">
                  <span>Verwaltungskosten</span>
                  <span>CHF {state.selectedServices['management'] || 0}</span>
                </div>
              )}
              <div className="flex justify-between font-medium pt-4 border-t">
                <span>Geschätzte Kosten</span>
                <span>CHF {calculateTotal()}</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Angebot anfragen
              </button>
              <button
                onClick={reset}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Zurücksetzen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

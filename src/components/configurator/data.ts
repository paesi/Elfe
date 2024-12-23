import { ServiceOption, PricingFactors } from './types';

export const services: ServiceOption[] = [
  {
    id: 'basic-cleaning',
    name: 'Grundreinigung',
    description: 'Regelmäßige Reinigung von Böden, Oberflächen und Sanitäranlagen',
    basePrice: 3.5, // CHF pro m²
    unit: 'm²',
    type: 'cleaning'
  },
  {
    id: 'window-cleaning',
    name: 'Fensterreinigung',
    description: 'Professionelle Reinigung aller Fenster und Glasflächen',
    basePrice: 12, // CHF pro Fenster
    unit: 'Fenster',
    type: 'cleaning'
  },
  {
    id: 'maintenance',
    name: 'Technische Wartung',
    description: 'Regelmäßige Wartung von technischen Anlagen',
    basePrice: 120, // CHF pro Stunde
    unit: 'Stunden',
    type: 'cleaning'
  },
  {
    id: 'property-management',
    name: 'Objektverwaltung',
    description: 'Professionelle Verwaltung und Betreuung Ihrer Immobilie',
    basePrice: 500, // CHF Pauschal
    unit: 'pauschal',
    type: 'management'
  },
  {
    id: 'tenant-communication',
    name: 'Mieterkommunikation',
    description: 'Abwicklung von Anfragen und Kommunikation mit Mietern',
    basePrice: 250, // CHF Pauschal
    unit: 'pauschal',
    type: 'management'
  }
];

export const frequencyFactors: PricingFactors = {
  weekly: 0.9,    // 10% Rabatt
  biweekly: 0.95, // 5% Rabatt
  monthly: 1      // Standardpreis
};


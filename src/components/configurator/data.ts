import { ServiceOption, PricingFactors } from './types';

export const services: ServiceOption[] = [
  {
    id: 'basic-cleaning',
    name: 'Grundreinigung',
    description: 'Regelmäßige Reinigung von Böden, Oberflächen und Sanitäranlagen',
    unit: 'm²',
    type: 'cleaning'
  },
  {
    id: 'property-management',
    name: 'Immobilienverwaltung',
    description: 'Professionelle Verwaltung Ihrer Immobilie inkl. Mieterbetreuung',
    basePrice: 2.5,
    unit: 'm²',
    type: 'management'
  }
];

export const frequencyFactors: PricingFactors = {
  weekly: 0.9,    // 10% Rabatt
  biweekly: 0.95, // 5% Rabatt
  monthly: 1      // Standardpreis
};

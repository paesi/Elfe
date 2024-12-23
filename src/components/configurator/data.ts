import { ServiceOption, PricingFactors } from './types';

export const services: ServiceOption[] = [
  {
    id: 'basic-cleaning',
    name: 'Grundreinigung',
    description: 'Regelmäßige Reinigung von Böden, Oberflächen und Sanitäranlagen',
    basePrice: 3.5, // CHF per m²
    unit: 'm²',
  },
  {
    id: 'window-cleaning',
    name: 'Fensterreinigung',
    description: 'Professionelle Reinigung aller Fenster und Glasflächen',
    basePrice: 12, // CHF per window
    unit: 'Fenster',
  },
  {
    id: 'maintenance',
    name: 'Technische Wartung',
    description: 'Regelmäßige Wartung von technischen Anlagen',
    basePrice: 120, // CHF per hour
    unit: 'Stunden',
  },
];

export const frequencyFactors: PricingFactors = {
  weekly: 0.9, // 10% discount
  biweekly: 0.95, // 5% discount
  monthly: 1, // Standard price
};

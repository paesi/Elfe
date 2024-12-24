import { ServiceOption, PricingFactors } from './types';

export const services: ServiceOption[] = [
  {
    id: 'basic-cleaning',
    name: 'Grundreinigung',
    description: 'Regelmäßige Reinigung von Böden, Oberflächen und Sanitäranlagen',
    basePrice: 3.5,
    unit: 'm²',
    type: 'cleaning'
  },
];

export const frequencyFactors: PricingFactors = {
  weekly: 0.9,    // 10% Rabatt
  biweekly: 0.95, // 5% Rabatt
  monthly: 1      // Standardpreis
};

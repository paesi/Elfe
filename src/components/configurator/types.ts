export interface ServiceOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  unit: string;
}

export interface ConfiguratorState {
  selectedServices: {
    [key: string]: number; // serviceId -> quantity
  };
  propertySize: number;
  frequency: 'weekly' | 'biweekly' | 'monthly';
}

export interface PricingFactors {
  weekly: number;
  biweekly: number;
  monthly: number;
}

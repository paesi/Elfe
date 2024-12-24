export type ServiceType = 'cleaning' | 'management';

export interface ServiceOption {
  id: string;
  name: string;
  description: string;
  basePrice?: number;
  unit: string;
  type: ServiceType;
}

export interface ConfiguratorState {
  selectedServices: {
    [key: string]: number;
  };
  propertySize: number;
  frequency: 'weekly' | 'biweekly' | 'monthly';
  serviceType: ServiceType;
  residentialUnits?: number;
}

export interface PricingFactors {
  weekly: number;
  biweekly: number;
  monthly: number;
}

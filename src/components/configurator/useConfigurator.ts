import { useState, useCallback } from 'react';
import { ConfiguratorState } from './types';
import { services, frequencyFactors } from './data';

const initialState: ConfiguratorState = {
  selectedServices: {},
  propertySize: 100,
  frequency: 'monthly',
  serviceType: 'cleaning' // New state field for service type
};

export function useConfigurator() {
  const [state, setState] = useState<ConfiguratorState>(initialState);

  const updateService = useCallback((serviceId: string, quantity: number) => {
    setState(prev => ({
      ...prev,
      selectedServices: {
        ...prev.selectedServices,
        [serviceId]: quantity
      }
    }));
  }, []);

  const updatePropertySize = useCallback((size: number) => {
    setState(prev => ({
      ...prev,
      propertySize: size
    }));
  }, []);

  const updateFrequency = useCallback((frequency: ConfiguratorState['frequency']) => {
    setState(prev => ({
      ...prev,
      frequency
    }));
  }, []);

  const updateServiceType = useCallback((serviceType: 'cleaning' | 'management') => {
    setState(prev => ({
      ...prev,
      serviceType,
      selectedServices: {} // Reset selected services when changing type
    }));
  }, []);

  const calculateMonthlyCost = useCallback(() => {
    let total = 0;

    // Calculate base price for each selected service
    Object.entries(state.selectedServices).forEach(([serviceId, quantity]) => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        if (service.id === 'basic-cleaning') {
          // Grundreinigung: Objektgröße * Anzahl
          total += service.basePrice * state.propertySize * quantity;
        }
      }
    });

    // Apply frequency discount only for cleaning services
    if (state.serviceType === 'cleaning') {
      total *= frequencyFactors[state.frequency];
    }

    return Math.round(total * 100) / 100; // Round to 2 decimal places
  }, [state]);

  const calculateTotal = useCallback(() => {
    const monthlyCost = calculateMonthlyCost();

    // Adjust for monthly costs based on frequency
    const frequencyMultiplier = state.frequency === 'weekly' ? 4 : state.frequency === 'biweekly' ? 2 : 1;
    const total = monthlyCost * frequencyMultiplier;

    return Math.round(total * 100) / 100; // Round to 2 decimal places
  }, [state, calculateMonthlyCost]);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    updateService,
    updatePropertySize,
    updateFrequency,
    updateServiceType, // Expose new function
    calculateTotal,
    calculateMonthlyCost, // Expose monthly cost calculation
    reset
  };
}


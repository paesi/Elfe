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

  const calculateTotal = useCallback(() => {
    let total = 0;

    // Calculate base price for each selected service
    Object.entries(state.selectedServices).forEach(([serviceId, quantity]) => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        if (service.unit === 'm²' && service.type === 'cleaning') {
          total += service.basePrice * state.propertySize * quantity;
        } else {
          total += service.basePrice * quantity;
        }
      }
    });

    // Apply frequency discount only for cleaning services
    if (state.serviceType === 'cleaning') {
      total *= frequencyFactors[state.frequency];
    }

    return Math.round(total * 100) / 100; // Round to 2 decimal places
  }, [state]);

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
    reset
  };
}


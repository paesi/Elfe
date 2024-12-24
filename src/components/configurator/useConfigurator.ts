import { useState, useCallback } from 'react';
import { ConfiguratorState, ServiceType } from './types';
import { services } from './data';
import { calculateCleaningTotal, calculateManagementTotal } from './utils/pricing';

const initialState: ConfiguratorState = {
  selectedServices: {},
  propertySize: 100,
  frequency: 'monthly',
  serviceType: 'cleaning',
  residentialUnits: 0
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

  const updateServiceType = useCallback((type: ServiceType) => {
    setState(prev => ({
      ...prev,
      serviceType: type,
      selectedServices: {}
    }));
  }, []);

  const updateResidentialUnits = useCallback((units: number) => {
    setState(prev => ({
      ...prev,
      residentialUnits: units
    }));
  }, []);

  const calculateTotal = useCallback(() => {
    if (state.serviceType === 'management') {
      return calculateManagementTotal(state.residentialUnits);
    }

    let baseTotal = 0;
    Object.entries(state.selectedServices).forEach(([serviceId, quantity]) => {
      const service = services.find(s => s.id === serviceId);
      if (service?.basePrice) {
        baseTotal += service.basePrice * state.propertySize * quantity;
      }
    });

    return Math.round(calculateCleaningTotal(baseTotal, state.frequency) * 100) / 100;
  }, [state]);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    updateService,
    updatePropertySize,
    updateFrequency,
    updateServiceType,
    updateResidentialUnits,
    calculateTotal,
    reset
  };
}

import { useState, useCallback } from 'react';
import { ConfiguratorState } from './types';
import { services, frequencyFactors } from './data';

const initialState: ConfiguratorState = {
  selectedServices: {},
  propertySize: 100,
  frequency: 'monthly',
  address: '',
  distance: 0,
};

const BASE_ADDRESS = 'Vorderdorfstrasse 1b, 3114 Wichtrach';

export function useConfigurator() {
  const [state, setState] = useState<ConfiguratorState>(initialState);

  const updateService = useCallback((serviceId: string, quantity: number) => {
    setState((prev) => ({
      ...prev,
      selectedServices: {
        ...prev.selectedServices,
        [serviceId]: quantity,
      },
    }));
  }, []);

  const updatePropertySize = useCallback((size: number) => {
    setState((prev) => ({
      ...prev,
      propertySize: size,
    }));
  }, []);

  const updateFrequency = useCallback((frequency: ConfiguratorState['frequency']) => {
    setState((prev) => ({
      ...prev,
      frequency,
    }));
  }, []);

  const calculateTotal = useCallback(() => {
    let total = 0;

    // Calculate base price for each selected service
    Object.entries(state.selectedServices).forEach(([serviceId, quantity]) => {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        if (service.unit === 'm²') {
          total += service.basePrice * state.propertySize * quantity;
        } else {
          total += service.basePrice * quantity;
        }
      }
    });

    // Apply frequency discount
    total *= frequencyFactors[state.frequency];

    // Add distance cost (1 CHF per kilometer)
    total += state.distance * 1;

    return Math.round(total * 100) / 100; // Round to 2 decimal places
  }, [state]);

  const updateAddress = useCallback(async (address: string) => {
    setState((prev) => ({ ...prev, address }));

    if (!address) {
      setState((prev) => ({ ...prev, distance: 0 }));
      return;
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        BASE_ADDRESS
      )}&destinations=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`
    );
    const data = await response.json();

    if (
      data.rows &&
      data.rows[0] &&
      data.rows[0].elements &&
      data.rows[0].elements[0] &&
      data.rows[0].elements[0].distance
    ) {
      const distanceInMeters = data.rows[0].elements[0].distance.value;
      const distanceInKm = distanceInMeters / 1000;
      setState((prev) => ({ ...prev, distance: distanceInKm }));
    } else {
      setState((prev) => ({ ...prev, distance: 0 }));
    }
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    updateService,
    updatePropertySize,
    updateFrequency,
    updateAddress,
    calculateTotal,
    reset,
  };
}


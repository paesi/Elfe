import { useState } from 'react';
import { ConfiguratorState } from './types';

const BASE_ADDRESS = 'Vorderdorfstrasse 1b, 3114 Wichtrach';

export const useConfigurator = () => {
  const [state, setState] = useState<ConfiguratorState>({
    selectedServices: {},
    propertySize: 0,
    frequency: 'monthly',
    address: '',
    distance: 0,
  });

  const calculateDistance = async (address: string): Promise<number> => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        BASE_ADDRESS
      )}&destinations=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`
    );
    const data = await response.json();
    const distanceInMeters = data.rows[0].elements[0].distance.value;
    return distanceInMeters / 1000; // Convert to kilometers
  };

  const updateAddress = async (address: string) => {
    const distance = await calculateDistance(address);
    setState((prev) => ({ ...prev, address, distance }));
  };

  const calculateTotal = (): number => {
    const servicesCost = Object.entries(state.selectedServices).reduce(
      (total, [serviceId, quantity]) =>
        total + services.find((s) => s.id === serviceId)!.basePrice * quantity,
      0
    );
    const frequencyFactor = frequencyFactors[state.frequency];
    const distanceCost = state.distance * 1; // 1 CHF per kilometer
    return servicesCost * frequencyFactor + distanceCost;
  };

  return {
    state,
    setState,
    updateService: (id: string, quantity: number) =>
      setState((prev) => ({
        ...prev,
        selectedServices: { ...prev.selectedServices, [id]: quantity },
      })),
    updatePropertySize: (size: number) =>
      setState((prev) => ({ ...prev, propertySize: size })),
    updateFrequency: (frequency: 'weekly' | 'biweekly' | 'monthly') =>
      setState((prev) => ({ ...prev, frequency })),
    updateAddress,
    calculateTotal,
  };
};

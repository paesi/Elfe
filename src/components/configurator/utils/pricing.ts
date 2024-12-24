import { ConfiguratorState } from '../types';

export const frequencyMultipliers = {
  weekly: 4,    // 4 times per month
  biweekly: 2,  // 2 times per month
  monthly: 1    // 1 time per month
};

const MANAGEMENT_FLAT_RATE = 2000; // CHF per year
const MANAGEMENT_UNIT_RATE = 500;  // CHF per unit per year

export function calculateCleaningTotal(
  baseTotal: number,
  frequency: ConfiguratorState['frequency']
): number {
  return baseTotal * frequencyMultipliers[frequency];
}

export function calculateManagementTotal(units: number = 0): number {
  return MANAGEMENT_FLAT_RATE + (units * MANAGEMENT_UNIT_RATE);
}

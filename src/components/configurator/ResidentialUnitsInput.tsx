import React from 'react';

interface ResidentialUnitsInputProps {
  value: number;
  onChange: (units: number) => void;
}

export function ResidentialUnitsInput({ value, onChange }: ResidentialUnitsInputProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Anzahl Wohneinheiten</h3>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}

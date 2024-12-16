import React from 'react';

interface MobileNavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function MobileNavButton({ onClick, children }: MobileNavButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2 transition-colors"
    >
      {children}
    </button>
  );
}
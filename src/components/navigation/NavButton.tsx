import React from 'react';

interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function NavButton({ onClick, children }: NavButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
    >
      {children}
    </button>
  );
}
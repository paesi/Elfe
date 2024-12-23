import React from 'react';

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-[104px]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">{title}</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

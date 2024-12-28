import React from 'react';

const ThankYouPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold">Vielen Dank!</h1>
      <p className="mt-4 text-lg">
        Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.
      </p>
    </div>
  );
};

export default ThankYouPage;

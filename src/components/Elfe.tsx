import React from 'react';

export default function Elfe() {
  return (
    <main className="py-16 px-4 bg-background text-primary">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Die Dampflok „Elfe“</h1>
        <p className="mb-6 text-secondary text-lg">
          Die Lokomotive „Elfe“ wurde Anfang des 20. Jahrhunderts gebaut und diente jahrzehntelang im Steinbruchbetrieb. 
          Sie ist ein bedeutendes Stück Industriegeschichte und steht heute im Zentrum unseres Vereinsprojekts zur Restaurierung.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Historie der Lok</h2>
        <p className="mb-6 text-secondary">
          Die „Elfe“ wurde 1911 von der Maschinenfabrik Esslingen gefertigt und war bis in die 1960er Jahre im Einsatz. 
          Ihre robuste Konstruktion und das charakteristische Erscheinungsbild machten sie zum Herzstück des Steinbruchbetriebs.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Restaurierung</h2>
        <p className="mb-6 text-secondary">
          Der Verein hat sich das Ziel gesetzt, die Lokomotive in ihren Originalzustand zu versetzen. 
          Viele Bauteile sind noch erhalten, andere müssen nachgebaut werden. Die Arbeiten erfolgen mit großer Sorgfalt und viel ehrenamtlichem Engagement.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Mitmachen</h2>
        <p className="text-secondary">
          Sie möchten helfen? Ob mit Know-how, Zeit oder finanzieller Unterstützung – wir freuen uns über jede Form der Beteiligung!
        </p>
      </div>
    </main>
  );
}


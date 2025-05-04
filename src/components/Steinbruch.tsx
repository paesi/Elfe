import React from 'react';

export default function Steinbruch() {
  return (
    <main className="py-16 px-4 bg-background text-primary">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Der historische Steinbruch</h1>

        <p className="mb-6 text-secondary text-lg">
          Der Steinbruch, in dem unsere Lok „Elfe“ jahrzehntelang im Einsatz war, ist ein bedeutendes Zeugnis der industriellen Vergangenheit unserer Region.
          Über Generationen hinweg wurde hier hart gearbeitet – mit einfachsten Mitteln, aber großem Einsatz.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Geschichte</h2>
        <p className="mb-6 text-secondary">
          Der Steinbruch wurde um 1880 erschlossen und diente hauptsächlich dem Abbau von Kalkstein. 
          Die Förderung und der Transport erfolgten zunächst von Hand und mit Pferdekarren, später dann mit Schienen- und Dampfkraft.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Bedeutung</h2>
        <p className="mb-6 text-secondary">
          Der Bruch war ein zentraler Arbeitgeber der Region. Die dort gewonnenen Steine fanden Verwendung im Brücken-, Straßen- und Hausbau.
          Die betriebseigene Bahnstrecke verband den Bruch mit dem regionalen Eisenbahnnetz.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Heute</h2>
        <p className="text-secondary">
          Heute ist der Steinbruch ein stiller Ort – doch mit der Restaurierung der Lok und der Pflege der Geschichte wird neues Leben eingehaucht.
          Der Verein plant, langfristig eine kleine Ausstellung oder ein Freilichtmuseum zu entwickeln.
        </p>
      </div>
    </main>
  );
}


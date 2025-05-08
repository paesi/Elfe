import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Bild1 from '../assets/Elfe_historic.jpg';
import Bild2 from '../assets/elfeputz_07.jpg';
import Bild3 from '../assets/Elfe_zeichnung.jpg';

const inhalte = [
  {
    image: Bild1,
    title: 'Die Geschichte der Elfe',
    text: 'Die Dampflok „Elfe“ wurde 1911 gebaut und transportierte jahrzehntelang Stein im Bruch. Ihr massiver Stahlkörper und der unverkennbare Dampf machten sie zum Symbol technischer Stärke.',
  },
  {
    image: Bild2,
    title: 'Restaurierung mit Leidenschaft',
    text: 'Mit viel Engagement und technischem Know-how wird die Lok Stück für Stück wieder in ihren Ursprungszustand versetzt. Jede Schraube zählt – und jeder Fortschritt begeistert.',
  },
  {
    image: Bild3,
    title: 'Technische Besonderheiten',
    text: 'Die Elfe war eine sogenannte Feldbahnlokomotive mit Schmalspur. Ihr Aufbau erlaubte präzises Rangieren auf engem Raum – ideal für Steinbruchbedingungen.',
  },
];

const imageUrls = inhalte.map((item) => item.image);

export default function Elfe() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section id="elfe" className="py-16 px-4 bg-background text-primary">
      <div className="container mx-auto space-y-20 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12">Die Dampflok „Elfe“</h1>

        {inhalte.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow-lg w-full max-h-[400px] object-cover cursor-zoom-in"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-secondary">{item.text}</p>
            </div>
          </div>
        ))}

        {isOpen && (
          <Lightbox
            mainSrc={imageUrls[photoIndex]}
            nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
            prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % imageUrls.length)
            }
            imageCaption={inhalte[photoIndex].title}
          />
        )}
      </div>
    </section>
  );
}


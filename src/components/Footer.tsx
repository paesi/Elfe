import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background text-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Epexon</h3>
            <p className="text-primary">
              Ihr Partner für maßgeschneiderten Unternehmenserfolg
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <address className="not-italic text-primary">
              <p>Vorderdorfstrasse 1b</p>
              <p>3114 Wichtrach</p>
              <p>Tel: +41 79 735 60 59</p>
              <p>info@epexon.com</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Öffnungszeiten</h4>
            <div className="text-primary">
              <p>Mo-Fr: 08:00 - 17:00</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Folgen Sie uns</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-highlight transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-highlight transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-highlight transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white mt-8 pt-8 text-sm text-primary">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Epexon. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-highlight">Datenschutz</a>
              <a href="/imprint" className="hover:text-highlight">Impressum</a>
              <a href="/terms" className="hover:text-highlight">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

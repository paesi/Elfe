import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hofmann Immo-Service</h3>
            <p className="text-blue-100">
              Ihr Partner für professionelle Immobiliendienstleistungen in Bern.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <address className="not-italic text-blue-100">
              <p>Musterstrasse 123</p>
              <p>3000 Bern</p>
              <p>Tel: +41 XX XXX XX XX</p>
              <p>info@hofmann-immo-service.ch</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Öffnungszeiten</h4>
            <div className="text-blue-100">
              <p>Mo-Fr: 08:00 - 17:00</p>
              <p>Sa-So: Geschlossen</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Folgen Sie uns</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-sm text-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Hofmann Immo-Service. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white">Datenschutz</a>
              <a href="/imprint" className="hover:text-white">Impressum</a>
              <a href="/terms" className="hover:text-white">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
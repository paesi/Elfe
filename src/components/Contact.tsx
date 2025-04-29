import React from 'react';
import ContactForm from './contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
          Kontaktieren Sie uns
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Haben Sie Fragen oder möchten Sie ein Angebot? Wir freuen uns auf Ihre Nachricht.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
            <h3 className="text-xl font-semibold mb-6 text-blue-900">
              Kontaktinformationen
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-gray-600">Vorderdorfstrasse 1b<br />3114 Wichtrach</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <a href="tel:+41797356059" className="text-gray-600 hover:text-blue-600">
                    +41 79 735 60 59
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">E-Mail</p>
                  <a href="mailto:info@h-i-s.ch" className="text-gray-600 hover:text-blue-600">
                    info@epexon.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Öffnungszeiten</p>
                  <p className="text-gray-600">Mo-Fr: 08:00 - 17:00<br />Sa-So: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

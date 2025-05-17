import React from 'react';
import ContactForm from './contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-backgroundAlt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Kontaktieren Sie uns
        </h2>
        <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
          Haben Sie Fragen oder möchten Sie Mitglied werden? Wir freuen uns auf Ihre Nachricht.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Kontaktinformationen
            </h3>

            <div className="flex items-start space-x-3 mb-4">
              <Phone className="text-highlight mt-1" />
              <div>
                <p className="font-medium">Telefon</p>
                <a href="tel:+4177602182" className="text-secondary hover:text-highlight">
                  +41 79 602 18 12
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="text-highlight mt-1" />
              <div>
                <p className="font-medium">E-Mail</p>
                <a href="mailto:info@steinbruch.be" className="text-secondary hover:text-highlight">
                  info@steinbruch.be
                </a>
              </div>
            </div>

          </div> {/* End contact info box */}
        </div> {/* End grid */}
      </div> {/* End container */}
    </section>
  );
}



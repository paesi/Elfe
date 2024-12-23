import React from 'react';
import { LegalPage } from '../components/legal/LegalPage';

export default function Imprint() {
  return (
    <LegalPage title="Impressum">
      <div className="prose max-w-none">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Hofmann Immo-Service<br />
          Musterstrasse 123<br />
          3000 Bern<br />
          Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +41 XX XXX XX XX<br />
          E-Mail: info@h-i-s.ch
        </p>

        <h2>Handelsregister</h2>
        <p>
          Handelsregisternummer: CHE-XXX.XXX.XXX<br />
          Registergericht: Handelsregisteramt des Kantons Bern
        </p>

        <h2>Geschäftsführung</h2>
        <p>Max Hofmann</p>
      </div>
    </LegalPage>
  );
}

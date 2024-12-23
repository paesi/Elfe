import React from 'react';
import { LegalPage } from '../components/legal/LegalPage';

export default function Terms() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <div className="prose max-w-none">
        <h2>1. Geltungsbereich</h2>
        <p>Diese AGB gelten für alle Dienstleistungen der Hofmann Immo-Service, nachfolgend "Anbieter" genannt.</p>

        <h2>2. Leistungsbeschreibung</h2>
        <p>Der Anbieter erbringt Dienstleistungen im Bereich:</p>
        <ul>
          <li>Immobilienverwaltung</li>
          <li>Gebäudereinigung</li>
          <li>Wartung und Instandhaltung</li>
          <li>Technischer Support</li>
        </ul>

        <h2>3. Preise und Zahlungsbedingungen</h2>
        <p>Die Preise für unsere Dienstleistungen werden individuell vereinbart. Rechnungen sind innerhalb von 30 Tagen zu begleichen.</p>

        <h2>4. Haftung</h2>
        <p>Der Anbieter haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.</p>

        <h2>5. Schlussbestimmungen</h2>
        <p>Es gilt schweizerisches Recht. Gerichtsstand ist Bern.</p>
      </div>
    </LegalPage>
  );
}

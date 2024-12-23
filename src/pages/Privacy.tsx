import React from 'react';
import { LegalPage } from '../components/legal/LegalPage';

export default function Privacy() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <div className="prose max-w-none">
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

        <h2>2. Datenerfassung auf unserer Website</h2>
        <h3>Cookies</h3>
        <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.</p>

        <h2>3. Ihre Rechte</h2>
        <p>Sie haben das Recht:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
          <li>Diese Daten berichtigen oder löschen zu lassen</li>
          <li>Die Verarbeitung einschränken zu lassen</li>
          <li>Der Verarbeitung zu widersprechen</li>
          <li>Ihre Daten übertragen zu lassen</li>
        </ul>

        <h2>4. Kontakt</h2>
        <p>Bei Fragen zum Datenschutz erreichen Sie uns unter:<br />
        E-Mail: info@h-i-s.ch<br />
        Telefon: +41 XX XXX XX XX</p>
      </div>
    </LegalPage>
  );
}

import React from 'react';
import { LegalPage } from '../components/legal/LegalPage';
import { SEO } from '../components/SEO';

export default function Imprint() {
  return (
    <LegalPage title="Impressum">
      <div className="prose max-w-none">
        <h2>Angaben gemäß den gesetzlichen Vorgaben in der Schweiz</h2>
        <p>
          <strong>P-Motion GmbH</strong><br />
          Vorderdorfstrasse 1b<br />
          3114 Wichtrach<br />
          Schweiz
        </p>

        <h3>Vertreten durch:</h3>
        <p>Pascal Hofmann</p>

        <h3>Kontakt:</h3>
        <p>
          Telefon: 0797356059<br />
          E-Mail: <a href="mailto:info@h-i-s.ch">info@epexon.com</a><br />
          Website: <a href="http://www.hofmann-immo-service.ch" target="_blank" rel="noopener noreferrer">www.hofmann-immo-service.ch</a>
        </p>

        <h3>Handelsregistereintrag:</h3>
        <p>
          Eingetragen im Handelsregister des Kantons Bern.<br />
          UID-Nummer: CHE-243.748.728
        </p>

        <h3>Verantwortlich für den Inhalt:</h3>
        <p>Pascal Hofmann</p>

        <h2>Haftungsausschluss</h2>
        <p>
          Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
        </p>
        <p>
          Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
        </p>
        <p>
          Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Verweise und Links auf Webseiten Dritter liegen außerhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
        </p>

        <h2>Urheberrechte</h2>
        <p>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschließlich der P-Motion GmbH oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
        </p>

        <h2>Hinweis zur Online-Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
        </p>
        <p>
          Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </LegalPage>
  );
}

import React from 'react';
import { LegalPage } from '../components/legal/LegalPage';
import { SEO } from '../components/SEO';

export default function Terms() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <div className="prose max-w-none">
        <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <h2>1. Geltungsbereich</h2>
        <ol>
          <li>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen und Geschäftsbeziehungen zwischen der P-Motion GmbH (nachfolgend "Auftragnehmer") und ihren Kunden (nachfolgend "Auftraggeber"), soweit nicht schriftlich etwas anderes vereinbart wurde.</li>
          <li>Die Kernkompetenzen der P-Motion GmbH umfassen die Immobilienverwaltung und Reinigungsdienstleistungen.</li>
          <li>Abweichende Bedingungen des Auftraggebers werden nur anerkannt, wenn diese ausdrücklich und schriftlich vom Auftragnehmer bestätigt wurden.</li>
        </ol>

        <h2>2. Vertragsabschluss</h2>
        <ol>
          <li>Ein Vertrag kommt durch die schriftliche Bestätigung eines Angebots durch den Auftraggeber oder durch Unterzeichnung eines Dienstleistungsvertrags zustande.</li>
          <li>Der Umfang der Dienstleistungen ergibt sich aus dem jeweiligen Vertrag, Angebot oder Leistungsverzeichnis des Auftragnehmers.</li>
        </ol>

        <h2>3. Leistungen der P-Motion GmbH</h2>
        <ol>
          <li>Die P-Motion GmbH verpflichtet sich, die vereinbarten Leistungen fachgerecht und mit der gebotenen Sorgfalt auszuführen.</li>
          <li>Bei der Immobilienverwaltung umfasst dies insbesondere:
            <ul>
              <li>Mietverwaltung</li>
              <li>Betriebskostenabrechnung</li>
              <li>Instandhaltungsmanagement</li>
              <li>Mietvertragsabwicklung</li>
            </ul>
          </li>
          <li>Bei Reinigungsdienstleistungen umfasst dies unter anderem:
            <ul>
              <li>Regelmäßige Unterhaltsreinigungen</li>
              <li>Spezialreinigungen</li>
              <li>Fenster- und Fassadenreinigungen</li>
              <li>Reinigung nach Bauarbeiten</li>
            </ul>
          </li>
        </ol>

        <h2>4. Pflichten des Auftraggebers</h2>
        <ol>
          <li>Der Auftraggeber verpflichtet sich, dem Auftragnehmer alle zur Leistungserbringung erforderlichen Informationen rechtzeitig und vollständig zur Verfügung zu stellen.</li>
          <li>Der Auftraggeber stellt sicher, dass der Zugang zu den räumlichen Gegebenheiten gewährt ist und alle notwendigen Betriebsmittel bereitgestellt werden.</li>
          <li>Zusätzliche Arbeiten, die durch unvorhergesehene Umstände entstehen, werden gesondert vergütet.</li>
        </ol>

        <h2>5. Preise und Zahlungsbedingungen</h2>
        <ol>
          <li>Alle Preise verstehen sich netto, zuzüglich der gesetzlichen Mehrwertsteuer.</li>
          <li>Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen.</li>
          <li>Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 5% p.a. sowie Mahngebühren zu verlangen.</li>
        </ol>

        <h2>6. Haftung und Gewährleistung</h2>
        <ol>
          <li>Der Auftragnehmer haftet für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz verursacht wurden.</li>
          <li>Bei leichter Fahrlässigkeit ist die Haftung des Auftragnehmers auf den vertragstypischen und vorhersehbaren Schaden begrenzt.</li>
          <li>Gewährleistungsansprüche sind unverzüglich nach Kenntnis eines Mangels schriftlich anzuzeigen. Der Auftragnehmer hat das Recht zur Nachbesserung.</li>
        </ol>

        <h2>7. Vertragsdauer und Kündigung</h2>
        <ol>
          <li>Die Vertragslaufzeit ergibt sich aus dem jeweiligen Vertrag.</li>
          <li>Eine ordentliche Kündigung ist unter Einhaltung der vereinbarten Frist möglich.</li>
          <li>Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.</li>
        </ol>

        <h2>8. Datenschutz</h2>
        <ol>
          <li>Der Auftragnehmer verpflichtet sich, alle personenbezogenen Daten des Auftraggebers gemäß den geltenden Datenschutzbestimmungen zu behandeln.</li>
          <li>Nähere Informationen sind in der Datenschutzerklärung der P-Motion GmbH enthalten.</li>
        </ol>

        <h2>9. Schlussbestimmungen</h2>
        <ol>
          <li>Es gilt ausschließlich das Recht der Schweiz.</li>
          <li>Gerichtsstand ist der Sitz der P-Motion GmbH, soweit gesetzlich zulässig.</li>
          <li>Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung tritt eine Regelung, die dem wirtschaftlichen Zweck am nächsten kommt.</li>
        </ol>
      </div>
    </LegalPage>
  );
}

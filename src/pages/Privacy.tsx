import React from 'react';
import { LegalPage } from '../components/legal/LegalPage';
import { SEO } from '../components/SEO';

export default function Privacy() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <div className="prose max-w-none">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist der P-Motion GmbH ein besonderes
          Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften der Schweiz sowie dieser
          Datenschutzerklärung.
        </p>

        <h2>2. Verantwortliche Stelle</h2>
        <address>
          <p>P-Motion GmbH</p>
          <p>Vorderdorfstrasse 1b</p>
          <p>3114 Wichtrach</p>
          <p>Schweiz</p>
          <p>Telefon: 079 735 60 59</p>
          <p>E-Mail: info@epexon.com</p>
        </address>

        <h2>3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der Verwendung</h2>
        <h3>3.1 Beim Besuch unserer Website</h3>
        <ul>
          <li>
            Beim Aufrufen unserer Website werden automatisch Informationen über den
            Browsertyp, das Betriebssystem, die IP-Adresse, die Uhrzeit des Zugriffs und
            die besuchten Seiten erfasst.
          </li>
          <li>
            Diese Daten dienen ausschließlich der Gewährleistung eines reibungslosen
            Verbindungsaufbaus, der Systemsicherheit sowie zu statistischen Auswertungen.
          </li>
        </ul>

        <h3>3.2 Bei Kontaktaufnahme</h3>
        <ul>
          <li>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, speichern wir die von Ihnen
            bereitgestellten Informationen wie Name, E-Mail-Adresse, Telefonnummer und die
            Anfrage.
          </li>
          <li>Diese Daten verwenden wir ausschließlich, um Ihre Anfrage zu beantworten.</li>
        </ul>

        <h3>3.3 Im Rahmen von Vertragsbeziehungen</h3>
        <ul>
          <li>
            Für die Abwicklung von Verträgen, insbesondere im Bereich
            Immobilienverwaltung und Reinigungsdienstleistungen, erheben wir
            personenbezogene Daten wie Namen, Adressen, Kontaktinformationen und
            Zahlungsdaten.
          </li>
          <li>Diese Daten sind für die ordnungsgemäße Vertragserfüllung erforderlich.</li>
        </ul>

        <h2>4. Weitergabe von Daten an Dritte</h2>
        <ul>
          <li>
            Eine Weitergabe Ihrer Daten erfolgt nur, wenn dies zur Vertragserfüllung
            notwendig ist (z. B. an Zahlungsdienstleister oder Subunternehmer).
          </li>
          <li>Eine Übermittlung Ihrer Daten an Dritte zu Werbezwecken erfolgt nicht.</li>
          <li>
            In allen anderen Fällen erfolgt eine Weitergabe nur nach ausdrücklicher
            Zustimmung.
          </li>
        </ul>

        <h2>5. Datenspeicherung und -sicherheit</h2>
        <ul>
          <li>
            Ihre personenbezogenen Daten werden so lange gespeichert, wie es zur Erfüllung
            des Zwecks erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
          </li>
          <li>
            Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor
            Verlust, Missbrauch und unbefugtem Zugriff zu schützen.
          </li>
        </ul>

        <h2>6. Rechte der betroffenen Personen</h2>
        <p>Sie haben das Recht:</p>
        <ul>
          <li>Auskunft über die Verarbeitung Ihrer personenbezogenen Daten zu erhalten.</li>
          <li>Berichtigung unrichtiger oder unvollständiger Daten zu verlangen.</li>
          <li>
            Löschung Ihrer Daten zu fordern, sofern diese nicht zur Vertragserfüllung oder
            aufgrund gesetzlicher Pflichten gespeichert werden müssen.
          </li>
          <li>Die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
          <li>Ihre Datenübertragbarkeit zu verlangen.</li>
          <li>
            Eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.
          </li>
        </ul>
        <p>
          Zur Geltendmachung dieser Rechte können Sie sich an die oben genannte
          verantwortliche Stelle wenden.
        </p>

        <h2>7. Nutzung von Cookies und Analysetools</h2>
        <ul>
          <li>
            Unsere Website verwendet Cookies, um die Nutzererfahrung zu verbessern und
            statistische Auswertungen zu ermöglichen.
          </li>
          <li>
            Sie können der Nutzung von Cookies in den Einstellungen Ihres Browsers
            widersprechen.
          </li>
        </ul>

        <h2>8. Änderungen der Datenschutzerklärung</h2>
        <ul>
          <li>
            Diese Datenschutzerklärung wird regelmäßig aktualisiert, um den gesetzlichen
            Anforderungen zu entsprechen oder Änderungen in unseren Dienstleistungen
            abzubilden.
          </li>
          <li>Die jeweils aktuelle Version finden Sie auf unserer Website.</li>
        </ul>

        <h2>9. Kontakt bei Fragen zum Datenschutz</h2>
        <p>
          Wenn Sie Fragen zum Datenschutz haben, können Sie uns jederzeit unter den oben
          genannten Kontaktdaten erreichen.
        </p>
      </div>
    </LegalPage>
  );
}

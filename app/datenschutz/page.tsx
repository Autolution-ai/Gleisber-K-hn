import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { company } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Gleisberg & Kühn',
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Datenschutzerklärung
          </h1>

          <h2 className="mt-10 text-xl font-bold text-ink">1. Verantwortlicher</h2>
          <p className="mt-3 text-stone">
            {company.legalName}, {company.street}, {company.zip} {company.city}.
            E-Mail: {company.email}, Telefon: {company.phone}.
          </p>

          <h2 className="mt-8 text-xl font-bold text-ink">2. Erhebung von Daten</h2>
          <p className="mt-3 text-stone">
            Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung der
            Website und unserer Leistungen erforderlich ist. Beim Besuch der Website werden
            technisch notwendige Daten (z. B. IP-Adresse) durch den Hosting-Anbieter
            verarbeitet.
          </p>

          <h2 className="mt-8 text-xl font-bold text-ink">3. Kontaktformular</h2>
          <p className="mt-3 text-stone">
            Wenn Sie uns über das Formular kontaktieren, verarbeiten wir die angegebenen
            Daten (Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.
          </p>

          <h2 className="mt-8 text-xl font-bold text-ink">4. Schriftarten</h2>
          <p className="mt-3 text-stone">
            Schriftarten werden lokal ausgeliefert. Es findet keine Verbindung zu externen
            Font-Servern statt.
          </p>

          <h2 className="mt-8 text-xl font-bold text-ink">5. Ihre Rechte</h2>
          <p className="mt-3 text-stone">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung sowie Widerspruch und Datenübertragbarkeit. Wenden Sie sich hierzu
            an die oben genannten Kontaktdaten.
          </p>

          <p className="mt-10 text-sm text-stone">
            {/* PLATZHALTER: Vollständige, rechtssichere Datenschutzerklärung vor Go-Live einsetzen. */}
            Hinweis: Dies ist eine gekürzte Demo-Fassung und ersetzt keine rechtsverbindliche
            Datenschutzerklärung.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

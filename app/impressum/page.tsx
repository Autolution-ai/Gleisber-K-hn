import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { company } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Impressum | Gleisberg & Kühn',
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="container-x py-16 md:py-24">
        <div className="prose-legal max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">Impressum</h1>

          <h2 className="mt-10 text-xl font-bold text-ink">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3 text-stone">
            {company.legalName}
            <br />
            {company.street}
            <br />
            {company.zip} {company.city}
          </p>

          <h2 className="mt-8 text-xl font-bold text-ink">Vertreten durch</h2>
          <p className="mt-3 text-stone">{company.managers.join(', ')}</p>

          <h2 className="mt-8 text-xl font-bold text-ink">Kontakt</h2>
          <p className="mt-3 text-stone">
            Telefon: {company.phone}
            <br />
            Telefax: {company.fax}
            <br />
            E-Mail: {company.email}
          </p>

          <h2 className="mt-8 text-xl font-bold text-ink">Steuernummer</h2>
          <p className="mt-3 text-stone">{company.taxId}</p>

          <h2 className="mt-8 text-xl font-bold text-ink">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-3 text-stone">
            {company.managers[0]}, {company.street}, {company.zip} {company.city}
          </p>

          <p className="mt-10 text-sm text-stone">
            {/* PLATZHALTER: Handelsregister/HRB-Nummer und USt-IdNr. ergänzen, sobald vorliegend. */}
            Hinweis: Dies ist eine Demo-Website. Handelsregistereintrag und USt-IdNr. sind als
            Platzhalter zu ergänzen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { company } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-x grid gap-8 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-ink">Gleisberg</span>
            <span className="text-lg font-light text-stone">&amp;</span>
            <span className="text-lg font-bold text-gold">Kühn</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-stone">
            Komplettsanierung, Maler- und Trockenbauarbeiten in Berlin. Alles aus einer Hand.
          </p>
        </div>

        <div className="text-sm text-stone">
          <p className="font-semibold text-ink">Kontakt</p>
          <p className="mt-3">{company.legalName}</p>
          <p>{company.street}</p>
          <p>{company.zip} {company.city}</p>
          <p className="mt-2">Tel.: {company.phone}</p>
          <p>{company.email}</p>
        </div>

        <div className="text-sm text-stone">
          <p className="font-semibold text-ink">Rechtliches</p>
          <ul className="mt-3 space-y-2">
            <li><a href="/impressum" className="hover:text-ink">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:text-ink">Datenschutz</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-stone md:flex-row">
          <span>© {new Date().getFullYear()} {company.legalName}. Alle Rechte vorbehalten.</span>
          <span>Demo-Website</span>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { company, navLinks } from '@/lib/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-[var(--header-h)] border-b transition-colors ${
        scrolled
          ? 'border-line bg-sand/85 shadow-soft backdrop-blur-md'
          : 'border-transparent bg-sand/60 backdrop-blur-sm'
      }`}
    >
      <div className="container-x flex h-full items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2" aria-label={company.name}>
          <span className="text-lg font-bold tracking-tight text-ink">Gleisberg</span>
          <span className="text-lg font-light text-stone">&amp;</span>
          <span className="text-lg font-bold tracking-tight text-gold">Kühn</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="#kontakt" className="btn-gold !px-5 !py-2.5 text-sm">
            Angebot anfragen
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-sand md:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-stone transition hover:bg-gold-soft hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${company.phoneHref}`}
              className="mt-2 inline-flex items-center gap-2 px-2 py-3 font-semibold text-gold"
            >
              <Phone size={18} /> {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

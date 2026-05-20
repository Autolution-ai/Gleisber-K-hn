'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Check } from 'lucide-react';
import { company } from '@/lib/site';
import { fadeInUp, viewportOnce } from '@/lib/motion';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot: von Bots ausgefüllt, von Menschen nicht
    if ((form.elements.namedItem('website') as HTMLInputElement)?.value) return;
    // Demo: kein Backend, nur Bestätigung anzeigen
    setSent(true);
    form.reset();
  }

  const inputClass =
    'w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20';

  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="eyebrow">Kontakt</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Wir beraten Sie gern
          </h2>
          <p className="mt-4 text-stone">
            Schildern Sie uns kurz Ihr Vorhaben. Wir melden uns mit einem transparenten
            Angebot.
          </p>

          <ul className="mt-8 space-y-4 text-stone">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-gold" size={20} />
              <span>
                {company.legalName}
                <br />
                {company.street}, {company.zip} {company.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="shrink-0 text-gold" size={20} />
              <a href={`tel:${company.phoneHref}`} className="hover:text-ink">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="shrink-0 text-gold" size={20} />
              <a href={`mailto:${company.email}`} className="hover:text-ink">
                {company.email}
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-2xl border border-line bg-white p-8 shadow-soft"
        >
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-gold">
                <Check size={28} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">Vielen Dank!</h3>
              <p className="mt-2 text-stone">
                Ihre Nachricht ist angekommen. Wir melden uns zeitnah.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Name
                </label>
                <input id="name" name="name" required className={inputClass} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Ihre Nachricht
                </label>
                <textarea id="message" name="message" rows={4} required className={inputClass} />
              </div>

              {/* Honeypot: für Menschen unsichtbar */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-[-9999px]"
                aria-hidden="true"
              />

              <label className="flex items-start gap-2 text-sm text-stone">
                <input type="checkbox" required className="mt-1 accent-gold" />
                <span>
                  Ich habe die{' '}
                  <a href="/datenschutz" className="text-gold underline">
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und akzeptiere diese.
                </span>
              </label>

              <button type="submit" className="btn-gold w-full">
                Nachricht senden
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

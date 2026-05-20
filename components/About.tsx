'use client';

import { motion } from 'framer-motion';
import { company, partners } from '@/lib/site';
import { fadeInUp, stagger, viewportOnce } from '@/lib/motion';

const team = [
  { name: 'Ingo Gleisberg', role: 'Geschäftsführer · Maler' },
  { name: 'Ronny Kühn', role: 'Geschäftsführer · Trockenbauer' },
  { name: 'Karina Klein', role: 'Büro & Organisation' },
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-20 md:py-28">
      <div className="container-x grid gap-14 md:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="eyebrow">Über uns</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Seit {company.founded} im Großraum Berlin
          </h2>
          <p className="mt-5 text-stone">
            {company.legalName} wurde {company.founded} von {company.managers[0]} und{' '}
            {company.managers[1]} gegründet. Heute sorgen {company.employees} feste
            Mitarbeiter dafür, dass jedes Projekt sorgfältig und termingerecht läuft.
          </p>
          <p className="mt-4 text-stone">
            Ein Netzwerk aus festen Partnern erweitert unser Leistungsspektrum, ausgeführt
            von spezialisierten Fachkräften.
          </p>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone">
              Unser Partnernetzwerk
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {partners.map((p) => (
                <span
                  key={p}
                  className="rounded-md bg-gold-soft px-3 py-1.5 text-sm font-medium text-stone"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid content-start gap-4"
        >
          {team.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeInUp}
              className="flex items-center gap-4 rounded-xl border border-line bg-white p-5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-base font-bold text-white">
                {m.name.split(' ').map((n) => n[0]).join('')}
              </span>
              <div>
                <div className="font-semibold text-ink">{m.name}</div>
                <div className="text-sm text-stone">{m.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

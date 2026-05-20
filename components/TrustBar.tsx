'use client';

import { motion } from 'framer-motion';
import { company } from '@/lib/site';
import { fadeInUp, stagger, viewportOnce } from '@/lib/motion';

const stats = [
  { value: `seit ${company.founded}`, label: 'in Berlin tätig' },
  { value: `${company.employees}`, label: 'feste Mitarbeiter' },
  { value: 'Keller–Dach', label: 'alles aus einer Hand' },
  { value: 'B2B & Privat', label: 'Hausverwaltungen & Eigentümer' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeInUp} className="text-center md:text-left">
            <div className="text-2xl font-bold text-ink md:text-3xl">{s.value}</div>
            <div className="mt-1 text-sm text-stone">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

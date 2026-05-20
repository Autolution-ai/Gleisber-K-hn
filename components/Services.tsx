'use client';

import { motion } from 'framer-motion';
import { Building2, PaintRoller, LayoutGrid, Check, type LucideIcon } from 'lucide-react';
import { services } from '@/lib/site';
import { fadeInUp, stagger, viewportOnce } from '@/lib/motion';

const icons: Record<string, LucideIcon> = { Building2, PaintRoller, LayoutGrid };

export default function Services() {
  return (
    <section id="leistungen" className="py-20 md:py-28">
      <div className="container-x">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <p className="eyebrow">Was wir können</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Drei Kernkompetenzen, ein Ansprechpartner
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.article
                key={s.title}
                variants={fadeInUp}
                className="group flex flex-col rounded-2xl border border-line bg-white p-8 transition hover:border-gold/40 hover:shadow-lift"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold">
                  {Icon ? <Icon size={24} /> : null}
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{s.tagline}</p>
                <p className="mt-3 text-stone">{s.text}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-stone">
                      <Check size={16} className="shrink-0 text-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

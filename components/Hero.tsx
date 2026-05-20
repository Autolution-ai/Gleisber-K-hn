'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { company, images } from '@/lib/site';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="eyebrow">Sanierung &amp; Renovierung in Berlin</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-6xl">
            Räume zum{' '}
            <span className="relative whitespace-nowrap text-gold">Wohlfühlen</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-stone">
            Vom Keller bis zum Dach. Komplettsanierung, Malerarbeiten und Trockenbau,
            sauber koordiniert und termingerecht ausgeführt.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#kontakt" className="btn-gold">
              Angebot anfragen <ArrowRight size={18} />
            </a>
            <a href={`tel:${company.phoneHref}`} className="btn-outline">
              <Phone size={18} /> {company.phone}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-xl2"
        >
          <Image
            src={images.hero}
            alt="Hell sanierter Berliner Altbau mit frisch gestrichenen Wänden und Parkettboden"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

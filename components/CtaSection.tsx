'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, viewportOnce } from '@/lib/motion';

export default function CtaSection() {
  return (
    <section className="bg-ink">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-x flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20"
      >
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          Lassen Sie uns über Ihr Projekt sprechen.
        </h2>
        <a href="#kontakt" className="btn-gold shrink-0">
          Jetzt Angebot anfragen <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clients, images } from '@/lib/site';
import { fadeInUp, viewportOnce } from '@/lib/motion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function References() {
  const pinContainer = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const afterImg = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(afterImg.current, { clipPath: 'inset(0 100% 0 0)' });

        gsap.to(afterImg.current, {
          clipPath: 'inset(0 0% 0 0)',
          ease: 'none',
          scrollTrigger: {
            trigger: pinContainer.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            onUpdate: (self) => {
              if (label.current) {
                label.current.textContent = self.progress > 0.5 ? 'Nachher' : 'Vorher';
              }
            },
          },
        });

        ScrollTrigger.create({
          trigger: pinContainer.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: sticky.current,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        mm.revert();
      };
    },
    { scope: pinContainer }
  );

  return (
    <section id="referenzen" className="bg-white">
      <div className="container-x pt-20 md:pt-28">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <p className="eyebrow">Referenzen</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Vorher und nachher: scrollen Sie sich durch
          </h2>
          <p className="mt-4 text-stone">
            Aus alt mach neu. Bewegen Sie sich durch ein typisches Sanierungsprojekt
            und sehen Sie den Unterschied, den saubere Arbeit macht.
          </p>
        </motion.div>
      </div>

      {/* Scroll-getriebener Vorher/Nachher-Reveal */}
      <div ref={pinContainer} className="relative mt-12 h-[220vh]">
        <div ref={sticky} className="flex h-screen items-center overflow-hidden">
          <div className="container-x w-full">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-xl2">
              {/* Vorher (unten) */}
              <Image
                src={images.before}
                alt="Wohnraum vor der Sanierung mit abblätternder Farbe"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
              {/* Nachher (Overlay, wird per clip-path enthüllt) */}
              <div ref={afterImg} className="absolute inset-0">
                <Image
                  src={images.after}
                  alt="Derselbe Wohnraum nach der Sanierung, hell und modern"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
              <span
                ref={label}
                className="absolute left-4 top-4 rounded-full bg-ink/80 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur"
              >
                Vorher
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Auftraggeber */}
      <div className="container-x pb-20 md:pb-28">
        <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-stone">
          Diese Kunden haben auf uns gebaut
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {clients.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-sand px-4 py-2 text-sm font-medium text-stone"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

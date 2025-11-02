import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft overlay gradient to enhance contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-900/60 via-sky-900/30 to-sky-900/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Ocean-inspired craftsmanship
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Orenda Pools
          <span className="block text-2xl font-normal opacity-90 sm:text-3xl md:text-4xl">From land to a private oasis</span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/85 md:text-lg">
          We design and build serene, modern swimming pools that transform ordinary backyards into resort‑style escapes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#transform"
            className="rounded-full bg-emerald-400 px-6 py-3 font-medium text-sky-950 shadow-lg shadow-emerald-400/30 transition hover:brightness-110"
          >
            See the transformation
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import Hero from './components/Hero';
import ParallaxShowcase from './components/ParallaxShowcase';
import BeforeAfter from './components/BeforeAfter';
import ContactCTA from './components/ContactCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-sky-950 selection:bg-emerald-300 selection:text-sky-950">
      <Hero />

      {/* Intro copy */}
      <section className="bg-sky-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Design. Engineer. Build.</h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/80">
            Orenda is a boutique swimming pool construction company crafting tranquil, modern pools with ocean‑inspired aesthetics. We handle everything end‑to‑end—permitting, structural engineering, water systems, and refined finishes.
          </p>
        </div>
      </section>

      <ParallaxShowcase />
      <BeforeAfter />
      <ContactCTA />

      <footer className="border-t border-white/10 bg-sky-950 py-8 text-center text-white/70">
        <p>© {new Date().getFullYear()} Orenda Pools. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

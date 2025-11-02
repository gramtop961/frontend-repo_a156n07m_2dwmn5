import React, { useEffect, useRef, useState } from 'react';

const ParallaxCard = ({ image, title, subtitle, speed = 0.3 }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      setOffset(progress * speed * 100); // translateY in px
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className="group relative overflow-hidden rounded-2xl bg-sky-900/30 shadow-2xl ring-1 ring-white/10">
      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        style={{ transform: `translateY(${offset}px)` }}
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-900/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-white/80">{subtitle}</p>
      </div>
    </div>
  );
};

const ParallaxShowcase = () => {
  return (
    <section className="relative isolate bg-sky-950 py-24 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.12),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Crafted for calm</h2>
            <p className="mt-2 max-w-2xl text-white/80">
              Natural materials, modern engineering, and meticulous detailing—built to feel like water has always belonged here.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ParallaxCard
            image="https://images.unsplash.com/photo-1545412158-2747f0f2c2bd?q=80&w=1600&auto=format&fit=crop"
            title="Infinity edges"
            subtitle="Seamless horizons with anti-slosh channeling"
            speed={0.25}
          />
          <ParallaxCard
            image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop"
            title="Subtle lighting"
            subtitle="Evening glows with low-energy LEDs"
            speed={0.35}
          />
          <ParallaxCard
            image="https://images.unsplash.com/photo-1523246122873-9fa9d8e0a1a5?q=80&w=1600&auto=format&fit=crop"
            title="Textured stone"
            subtitle="Slip-resistant, cool underfoot surfaces"
            speed={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;

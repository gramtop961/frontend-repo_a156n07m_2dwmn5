import React, { useEffect, useRef, useState } from 'react';

const BeforeAfter = () => {
  const [value, setValue] = useState(50);
  const trackRef = useRef(null);

  // Simple parallax on container to add depth
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      setOffset(progress * 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="transform" className="relative bg-sky-900 py-24 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_10%_80%,rgba(20,184,166,0.12),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.12),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">From dirt to dream</h2>
          <p className="mt-2 text-white/80">Slide to reveal how Orenda turns bare ground into a beautiful pool.</p>
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585152974-2fdce15a2121?q=80&w=2000&auto=format&fit=crop"
            alt="Before - bare ground"
            className="pointer-events-none block h-[460px] w-full select-none object-cover"
            loading="lazy"
          />

          <div
            className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${value}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1519822471928-086baf8ef8a5?q=80&w=2000&auto=format&fit=crop"
              alt="After - finished pool"
              className="block h-[460px] w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Divider handle */}
          <div
            className="absolute inset-y-0"
            style={{ left: `calc(${value}% - 1px)` }}
          >
            <div className="relative h-full w-0.5 bg-white/70">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-sky-900 shadow">
                {Math.round(value)}%
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-900/70 to-transparent p-4 text-right text-xs text-white/80">
            Slide to compare
          </div>

          <input
            ref={trackRef}
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Reveal transformation"
            className="absolute inset-x-0 bottom-0 h-full w-full cursor-ew-resize appearance-none bg-transparent [ &::-webkit-slider-thumb ]:appearance-none [ &::-webkit-slider-thumb ]:h-6 [ &::-webkit-slider-thumb ]:w-6 [ &::-webkit-slider-thumb ]:rounded-full [ &::-webkit-slider-thumb ]:bg-white/90 [ &::-webkit-slider-thumb ]:shadow [ &::-moz-range-thumb ]:h-6 [ &::-moz-range-thumb ]:w-6 [ &::-moz-range-thumb ]:rounded-full [ &::-moz-range-thumb ]:bg-white/90"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

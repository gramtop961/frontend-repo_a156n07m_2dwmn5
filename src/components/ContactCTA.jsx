import React from 'react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-sky-950 to-sky-900 py-20 text-white">
      <div className="absolute inset-0 -z-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <svg className="h-full w-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee"/>
              <stop offset="100%" stopColor="#34d399"/>
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#g)" strokeWidth="0.7" opacity="0.4">
            {Array.from({ length: 24 }).map((_, i) => (
              <circle key={i} cx="400" cy="300" r={20 + i * 20} />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:p-12">
          <h3 className="text-2xl font-semibold sm:text-3xl">Ready to create your private oasis?</h3>
          <p className="mt-2 max-w-2xl text-white/80">
            Share your vision and we'll provide a tailored design, timeline, and transparent pricing—no obligations.
          </p>
          <form
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              alert(`Thanks, ${name}! We'll be in touch shortly.`);
            }}
          >
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/30"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/30"
            />
            <input
              name="location"
              placeholder="Project location"
              className="sm:col-span-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/30"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your dream pool..."
              className="sm:col-span-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/30"
            />
            <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-emerald-400 px-6 py-3 font-medium text-sky-950 shadow-lg shadow-emerald-400/30 transition hover:brightness-110"
              >
                Request a quote
              </button>
              <p className="text-sm text-white/70">Response within 24 hours • Fully licensed & insured</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

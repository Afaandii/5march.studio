"use client";

import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiArrowUpRight } from "react-icons/hi2";

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof PORTFOLIO_ITEMS)[number];
  index: number;
}) {
  const ref = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className="reveal group flex flex-col gap-6"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Visual Preview Area */}
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${item.gradient} p-8 glow-border group-hover:scale-[1.02] transition-all duration-700 ease-out`}
      >
        {/* Abstract Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
           <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full border border-white/20 blur-sm group-hover:scale-110 transition-transform duration-1000" />
           <div className="absolute top-1/2 left-0 h-32 w-32 rounded-3xl border border-white/10 rotate-12 blur-[1px] group-hover:-rotate-12 transition-transform duration-1000" />
           <div className="absolute bottom-1/4 right-1/4 h-20 w-20 bg-white/5 rounded-full blur-xl animate-pulse" />
        </div>

        {/* Category Pill */}
        <div className="relative z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-xl">
          <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
          {item.category}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 hover:scale-110">
            <HiArrowUpRight size={28} />
          </button>
        </div>
      </div>

      {/* Textual Content */}
      <div className="px-4">
        <div className="mb-4 flex flex-wrap gap-2">
          {item.techStack.map((tech) => (
            <span key={tech} className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              #{tech}
            </span>
          ))}
        </div>
        <h3 className="mb-3 text-2xl font-black tracking-tight text-white group-hover:gradient-text transition-all duration-300">
          {item.title}
        </h3>
        <p className="max-w-md text-[15px] leading-relaxed text-slate-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const headerRef = useScrollReveal();

  return (
    <section id="portfolio" className="relative px-6 py-32 md:py-48">
      {/* Background decoration */}
      <div className="gradient-orb gradient-orb-accent absolute right-0 bottom-0 h-[800px] w-[800px] opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Modern Header Layout */}
        <div ref={headerRef} className="reveal mb-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                OUR PROJECT SHOWCASE
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              Recent <span className="gradient-text">Showcase.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-medium leading-relaxed text-slate-500 md:mb-4">
            Kami mengkurasi proyek terbaik kami yang mendefinisikan standar 
            kualitas dan inovasi tinggi dalam pengembangan web.
          </p>
        </div>

        {/* Portfolio Staggered Grid */}
        <div className="grid gap-y-20 gap-x-12 sm:grid-cols-2">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

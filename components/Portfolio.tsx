"use client";

import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

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
      className="reveal group flex flex-col bg-[#0d0d12] rounded-[2rem] border border-white/[0.03] overflow-hidden transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-black/50"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Visual Preview Area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Background Image from Unsplash */}
        <img 
          src={item.image} 
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Subtle Gradient/Concept Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-black/20" />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 bg-black/60 opacity-0 backdrop-blur-[4px] transition-all duration-500 group-hover:opacity-100">
          <a 
            href={item.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-xl bg-white px-6 text-[13px] font-black tracking-tight text-black transition-transform duration-300 hover:scale-105 active:scale-95 shadow-xl"
          >
            Live Demo
          </a>
          <a 
            href={item.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-xl border border-white/20 bg-black/40 px-6 text-[13px] font-black tracking-tight text-white transition-transform duration-300 hover:bg-white/5 hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Textual Content */}
      <div className="flex flex-col flex-grow p-8">
        <h3 className="mb-3 text-[22px] font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
          {item.title}
        </h3>
        <p className="mb-8 text-[15px] font-medium leading-relaxed text-slate-400 line-clamp-2">
          {item.description}
        </p>
        
        {/* Tags at the bottom */}
        <div className="mt-auto flex flex-wrap gap-2">
          {item.techStack.map((tech, i) => (
            <span 
              key={tech} 
              className="text-[11px] font-bold text-slate-500 bg-white/[0.03] border border-white/[0.05] px-4 py-1.5 rounded-full hover:bg-white/[0.08] transition-colors"
            >
              {tech}
            </span>
          ))}
          {item.techStack.length > 3 && (
            <span className="text-[11px] font-bold text-slate-600 bg-white/[0.02] px-3 py-1.5 rounded-full">
              +{item.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const headerRef = useScrollReveal();

  return (
    <section id="portfolio" className="relative py-28 md:py-40 bg-[#030712]">
      {/* Decorative Orbs Overlay */}
      <div className="gradient-orb gradient-orb-primary absolute -left-40 top-1/4 h-[600px] w-[600px] opacity-[0.02] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Engaging Header */}
        <div ref={headerRef} className="reveal mb-24 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              EXPLORE OUR CRAFT
            </span>
          </div>
          <h2 className="mb-8 text-5xl font-black tracking-tight text-white sm:text-7xl">
            Bringing <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">Ideas</span> to Life.
          </h2>
          <p className="max-w-xl text-xl font-medium leading-relaxed text-slate-500">
            Kami mengkurasi proyek terbaik kami yang mendefinisikan standar 
            kualitas dan inovasi tinggi dalam pengembangan perangkat lunak modern.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


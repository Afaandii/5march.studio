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
      className="reveal group flex flex-col bg-black rounded-none border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Visual Preview Area */}
      <div className="relative aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        <img 
          src={item.image} 
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 bg-black/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <a 
            href={item.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center bg-white px-6 text-[11px] font-bold uppercase tracking-widest text-black transition-transform duration-300 hover:bg-silver"
          >
            Live Demo
          </a>
          <a 
            href={item.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center border border-white/20 bg-black/40 px-6 text-[11px] font-bold uppercase tracking-widest text-white transition-transform duration-300 hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Textual Content */}
      <div className="flex flex-col flex-grow p-8">
        <h3 className="mb-3 text-[20px] font-bold tracking-tight text-white uppercase group-hover:text-silver transition-colors">
          {item.title}
        </h3>
        <p className="mb-8 text-[14px] font-medium leading-relaxed text-silver line-clamp-2">
          {item.description}
        </p>
        
        {/* Tags at the bottom */}
        <div className="mt-auto flex flex-wrap gap-2">
          {item.techStack.map((tech, i) => (
            <span 
              key={tech} 
              className="text-[10px] font-bold uppercase tracking-widest text-charcoal bg-white/[0.03] border border-white/10 px-4 py-1.5 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const headerRef = useScrollReveal();

  return (
    <section id="portfolio" className="relative py-28 md:py-40 bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Engaging Header */}
        <div ref={headerRef} className="reveal mb-24 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver">
              EXPLORE OUR CRAFT
            </span>
          </div>
          <h2 className="mb-8 text-5xl font-black tracking-tight text-white sm:text-7xl uppercase">
            Bringing <span className="text-charcoal italic">Ideas</span> to Life.
          </h2>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-silver">
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

"use client";

import { STATS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiArrowRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="home"
      className="noise-overlay relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 bg-black"
    >
      {/* Grid Pattern (Minimal) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1
            className="animate-fade-in-up mb-8 max-w-5xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[100px] uppercase"
            style={{ animationDelay: "0.1s" }}
          >
            Create <span className="text-silver">Exceptional</span>
            <br />
            Digital Studios.
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-in-up mb-12 max-w-2xl text-lg font-medium leading-relaxed text-silver sm:text-xl md:text-2xl"
            style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          >
            Kami membangun web app premium dengan sentuhan <span className="text-white italic">modern design</span> & <span className="text-white">robust technology</span> untuk bisnis yang ingin naik kelas.
          </p>

          {/* CTA Group */}
          <div
            className="animate-fade-in-up mb-24 flex flex-col gap-5 sm:flex-row"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <a href="#services" className="btn-primary flex items-center gap-3 px-10 py-5 text-lg">
              Check Our Services
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/api/contact/whatsapp" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-3 px-10 py-5 text-lg">
              Let's Talk
              <FaWhatsapp className="text-white" size={22} />
            </a>
          </div>

          {/* Modern Stats Card */}
          <div ref={revealRef} className="reveal group w-full max-w-4xl">
            <div className="glass-card relative overflow-hidden bg-white/[0.02] p-8 sm:p-12 border border-white/10">
              <div className="grid grid-cols-2 gap-8 divide-white/5 sm:grid-cols-4 sm:divide-x">
                {STATS.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center justify-center gap-2 transition-transform duration-500" style={{transitionDelay: `${index * 50}ms`}}>
                    <div className="relative">
                       <span className="text-white text-4xl font-black sm:text-5xl">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

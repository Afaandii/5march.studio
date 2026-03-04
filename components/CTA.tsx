"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FaWhatsapp, FaCalendarCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="relative px-6 py-32 md:py-48 overflow-hidden">
      {/* Dynamic Background */}
      <div className="gradient-orb gradient-orb-primary absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] blur-[120px]" />
      <div className="gradient-orb gradient-orb-accent absolute left-1/4 bottom-0 h-[500px] w-[500px] opacity-[0.05]" />

      {/* Decorative Shimmers */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="animate-shimmer absolute top-0 left-0 h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div ref={ref} className="reveal">
          <div className="glass-card glow-border overflow-hidden bg-white/[0.02] p-12 text-center sm:p-24">
            {/* Visual Flair */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-40 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            
            <div className="mb-10 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 p-[1px]">
               <div className="flex h-full w-full items-center justify-center rounded-[23px] bg-[#0d0d1a]">
                  <FaCalendarCheck className="text-3xl text-indigo-400" />
               </div>
            </div>

            <h2 className="mb-8 text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              Start Your <br className="hidden sm:block" />
              <span className="gradient-text">Journey Now.</span>
            </h2>

            <p className="mx-auto mb-16 max-w-2xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
              Punya ide brilian? Mari diskusikan bagaimana solusi teknologi kami 
              bisa mengakselerasi pertumbuhan bisnis dan efisiensi operasional Anda.
            </p>

            {/* Action Group */}
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex w-full items-center justify-center gap-3 px-10 py-5 text-lg sm:w-auto"
              >
                <FaWhatsapp size={24} />
                <span>Konsultasi Gratis</span>
              </a>
              <a
                href="mailto:hello@5march.studio"
                className="btn-secondary flex w-full items-center justify-center gap-3 px-10 py-5 text-lg sm:w-auto"
              >
                <MdEmail size={24} className="text-indigo-400" />
                <span>Kirim Penawaran</span>
              </a>
            </div>

            {/* Sub-note */}
            <div className="mt-12 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500">
               <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
               Response time: Less than 12 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

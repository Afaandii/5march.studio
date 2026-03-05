"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiPaperAirplane } from "react-icons/hi2";

export default function Contact() {
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal(0.1);
  const mapRef = useScrollReveal(0.2);

  return (
    <section id="contact" className="relative px-6 py-32 lg:py-48 bg-[#030712] overflow-hidden">
      {/* Background decoration */}
      <div className="gradient-orb gradient-orb-primary absolute -left-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-[0.05] blur-[120px]" />
      <div className="gradient-orb gradient-orb-accent absolute -right-20 bottom-0 h-[500px] w-[500px] opacity-[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-20 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              READY TO SCALE?
            </span>
          </div>
          <h2 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl">
            Transform <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent italic">Your Vision.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-slate-400">
            Punya ide besar yang ingin diwujudkan? Kami siap membantu mengakselerasi 
            bisnis Anda dengan solusi teknologi kelas dunia.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Left: Contact Form Card */}
          <div 
            ref={formRef}
            className="reveal group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl sm:p-12 transition-all duration-500 hover:border-white/20"
          >
            <div className="relative z-10">
              <h3 className="mb-8 text-3xl font-black text-white">Share Your Project</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/5 bg-[#0d0d1a] px-6 py-4 text-sm text-white placeholder:text-slate-700 outline-none transition-all focus:border-cyan-500/50 focus:bg-[#0d0d25]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-white/5 bg-[#0d0d1a] px-6 py-4 text-sm text-white placeholder:text-slate-700 outline-none transition-all focus:border-cyan-500/50 focus:bg-[#0d0d25]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Subject</label>
                  <input 
                    type="text" 
                    placeholder="E-Commerce / Landing Page / Mobile App"
                    className="w-full rounded-2xl border border-white/5 bg-[#0d0d1a] px-6 py-4 text-sm text-white placeholder:text-slate-700 outline-none transition-all focus:border-cyan-500/50 focus:bg-[#0d0d25]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your goals and requirements..."
                    className="w-full rounded-3xl border border-white/5 bg-[#0d0d1a] px-6 py-4 text-sm text-white placeholder:text-slate-700 outline-none transition-all focus:border-cyan-500/50 focus:bg-[#0d0d25] resize-none"
                  />
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f5f5f5] px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-white hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                  <span>Send Message</span>
                  <HiPaperAirplane className="rotate-325 mb-2" size={18} />
                </button>
              </form>
            </div>

            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 -z-0 h-64 w-64 bg-cyan-500/5 blur-[100px]" />
          </div>

          {/* Right: Map Card */}
          <div 
            ref={mapRef}
            className="reveal group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 backdrop-blur-xl transition-all duration-500 hover:border-white/20"
          >
            <div className="absolute inset-0 z-0 h-full w-full transition-all duration-1000 group-hover:scale-105">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126606.3314!2d112.646!3d-7.4478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1086d1b5761%3A0x3027a76352920f0!2sSidoarjo%2C%20Sidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1709630000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiPaperAirplane } from "react-icons/hi2";

export default function Contact() {
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal(0.1);
  const mapRef = useScrollReveal(0.2);

  return (
    <section id="contact" className="relative px-6 py-32 lg:py-48 bg-black overflow-hidden border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-20 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver">
              READY TO SCALE?
            </span>
          </div>
          <h2 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl uppercase">
            Transform <br className="hidden lg:block" />
            <span className="text-charcoal italic">Your Vision.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-silver">
            Punya ide besar yang ingin diwujudkan? Kami siap membantu mengakselerasi 
            bisnis Anda dengan solusi teknologi kelas dunia.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Left: Contact Form Card */}
          <div 
            ref={formRef}
            className="reveal group relative overflow-hidden rounded-none border border-white/10 bg-white/[0.02] p-8 sm:p-12 transition-all duration-500 hover:border-white/30"
          >
            <div className="relative z-10">
              <h3 className="mb-8 text-3xl font-black text-white uppercase">Share Your Project</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-charcoal">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full border border-white/10 bg-black px-6 py-4 text-sm text-white placeholder:text-graphite outline-none transition-all focus:border-white/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-charcoal">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full border border-white/10 bg-black px-6 py-4 text-sm text-white placeholder:text-graphite outline-none transition-all focus:border-white/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-charcoal">Subject</label>
                  <input 
                    type="text" 
                    placeholder="E-Commerce / Landing Page / Mobile App"
                    className="w-full border border-white/10 bg-black px-6 py-4 text-sm text-white placeholder:text-graphite outline-none transition-all focus:border-white/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-charcoal">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your goals and requirements..."
                    className="w-full border border-white/10 bg-black px-6 py-4 text-sm text-white placeholder:text-graphite outline-none transition-all focus:border-white/30 resize-none"
                  />
                </div>

                <button className="flex w-full items-center justify-center gap-2 bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-silver shadow-xl">
                  <span>Send Message</span>
                  <HiPaperAirplane className="rotate-325" size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Right: Map Card */}
          <div 
            ref={mapRef}
            className="reveal group relative min-h-[500px] overflow-hidden rounded-none border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 hover:border-white/30"
          >
            <div className="absolute inset-0 z-0 h-full w-full grayscale contrast-125 transition-all duration-1000 group-hover:scale-105">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126606.3314!2d112.646!3d-7.4478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1086d1b5761%3A0x3027a76352920f0!2sSidoarjo%2C%20Sidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1709630000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

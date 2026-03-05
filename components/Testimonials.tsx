"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiStar } from "react-icons/hi2";
import { RiDoubleQuotesR } from "react-icons/ri";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="group relative flex w-[350px] shrink-0 flex-col items-start rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
      {/* Visual Quote Icon */}
      <RiDoubleQuotesR className="absolute right-8 top-8 text-4xl text-white/[0.04]" />

      {/* Modern Star Rating */}
      <div className="mb-6 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <HiStar
            key={i}
            className="text-amber-500/80 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]"
            size={16}
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className="mb-8 text-base font-medium leading-relaxed tracking-tight text-slate-200">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Layout */}
      <div className="mt-auto flex items-center gap-4">
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-[1px]">
             <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#0d0d1a] text-xs font-black text-white">
              {testimonial.avatar}
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#030712] bg-emerald-500" />
        </div>
        <div>
          <h4 className="text-sm font-black tracking-tight text-white">
            {testimonial.name}
          </h4>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useScrollReveal();

  // Duplicate items for seamless marquee loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="relative py-14 md:py-10 bg-[#030712] overflow-hidden">
      {/* Decorative Orbs */}
      <div className="gradient-orb gradient-orb-primary absolute -left-40 top-1/4 h-[600px] w-[600px] opacity-[0.05] blur-[120px]" />
      <div className="gradient-orb gradient-orb-accent absolute -right-40 bottom-1/4 h-[500px] w-[500px] opacity-[0.03] blur-[100px]" />

      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div ref={headerRef} className="reveal mb-24 text-center px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
              VOICES OF SUCCESS
            </span>
          </div>
          <h2 className="mb-8 text-5xl font-black tracking-tighter text-white sm:text-7xl">
            What They <span className="bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent italic">Think.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-400">
            Kisah sukses klien kami adalah bukti dedikasi kami dalam 
            memberikan hasil terbaik untuk setiap tantangan digital.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="pause-on-hover relative flex overflow-hidden py-10">
          {/* Side Gradients for Fade Effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#030712] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#030712] to-transparent" />

          <div className="animate-marquee flex gap-8 px-4">
            {marqueeItems.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


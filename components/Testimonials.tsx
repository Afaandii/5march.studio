"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiStar } from "react-icons/hi2";
import { RiDoubleQuotesR } from "react-icons/ri";

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  const ref = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className="reveal glass-card glow-border relative flex flex-col items-start p-10 hover:bg-white/[0.05] transition-all duration-500"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Visual Quote Icon */}
      <RiDoubleQuotesR className="absolute right-10 top-10 text-6xl text-white/[0.04]" />

      {/* Modern Star Rating */}
      <div className="mb-8 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <HiStar
            key={i}
            className="text-amber-500/80 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]"
            size={20}
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className="mb-10 text-lg font-medium leading-relaxed tracking-tight text-slate-200">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Layout */}
      <div className="mt-auto flex items-center gap-5">
        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-[1px]">
             <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#0d0d1a] text-sm font-black text-white">
              {testimonial.avatar}
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#06060e] bg-emerald-500" />
        </div>
        <div>
          <h4 className="text-base font-black tracking-tight text-white">
            {testimonial.name}
          </h4>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useScrollReveal();

  return (
    <section id="testimonials" className="relative px-6 py-32 md:py-48">
      <div className="gradient-orb gradient-orb-primary absolute -left-40 top-1/4 h-[500px] w-[500px] opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div ref={headerRef} className="reveal mb-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="mb-8 text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
            Success <span className="gradient-text italic font-serif leading-none">Voices.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-400">
            Kisah sukses klien kami adalah bukti dedikasi kami dalam 
            memberikan hasil terbaik untuk setiap tantangan digital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

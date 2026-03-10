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
    <div className="group relative flex w-[350px] shrink-0 flex-col items-start rounded-none border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:bg-white/[0.05]">
      {/* Visual Quote Icon */}
      <RiDoubleQuotesR className="absolute right-8 top-8 text-4xl text-white/[0.04]" />

      {/* Modern Star Rating */}
      <div className="mb-6 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <HiStar
            key={i}
            className="text-white"
            size={16}
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className="mb-8 text-base font-medium leading-relaxed tracking-tight text-silver">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Layout */}
      <div className="mt-auto flex items-center gap-4">
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-white/5">
             <div className="flex h-full w-full items-center justify-center text-xs font-black text-white">
              {testimonial.avatar}
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black tracking-tight text-white uppercase">
            {testimonial.name}
          </h4>
          <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal">
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
    <section id="testimonials" className="relative py-28 md:py-40 bg-black overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div ref={headerRef} className="reveal mb-24 text-center px-6">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver">
              VOICES OF SUCCESS
            </span>
          </div>
          <h2 className="mb-8 text-5xl font-black tracking-tighter text-white sm:text-7xl uppercase">
            What They <span className="text-charcoal italic">Think.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-silver">
            Kisah sukses klien kami adalah bukti dedikasi kami dalam 
            memberikan hasil terbaik untuk setiap tantangan digital.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="pause-on-hover relative flex overflow-hidden py-10">
          {/* Side Gradients for Fade Effect (Modified to use black) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />

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

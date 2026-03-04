"use client";

import { SERVICES } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiCheckCircle } from "react-icons/hi2";

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const ref = useScrollReveal(0.15);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="reveal glass-card glass-card-hover group relative flex h-full flex-col overflow-hidden p-8"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Dynamic Background Glow */}
      <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20`} />

      {/* Modern Icon Box */}
      <div className={`relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px]`}>
        <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#0d0d1a] transition-all duration-300 group-hover:bg-transparent">
          <Icon className={`text-3xl text-white group-hover:scale-110 transition-transform duration-300`} />
        </div>
      </div>

      {/* Content */}
      <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">
        {service.title}
      </h3>
      <p className="mb-8 flex-grow text-[15px] leading-relaxed text-slate-400">
        {service.description}
      </p>

      {/* Modern Checklist */}
      <div className="mt-auto space-y-3">
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <HiCheckCircle className="text-emerald-400/80" size={18} />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative Index */}
      <div className="absolute top-6 right-8 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
        0{index + 1}
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useScrollReveal();

  return (
    <section id="services" className="relative px-6 py-32 md:py-48 bg-[#06060e]">
      {/* Decorative Orbs */}
      <div className="gradient-orb gradient-orb-primary absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/2 opacity-[0.05]" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div ref={headerRef} className="reveal mb-24 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_indigo]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
              SERVICES & SOLUTIONS
            </span>
          </div>
          <h2 className="mb-8 text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
            Solusi Digital yang <br className="hidden sm:block" />
            <span className="gradient-text">Terintegrasi.</span>
          </h2>
          <p className="text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
            Dari simple landing page hingga enterprise-level web applications dengan integrasi AI, 
            Payment Gateway, dan Real-time Database.
          </p>
        </div>

        {/* Improved Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
      className="reveal group relative flex flex-col bg-[#0d0d12] rounded-[1.5rem] border border-white/[0.03] p-10 transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-black/60"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Subtle Accent Glow */}
      <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-10`} />

      {/* Neat Icon Presentation */}
      <div className={`relative mb-10 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] transition-all duration-500 group-hover:scale-110 group-hover:bg-white/[0.08]`}>
        <Icon className="text-2xl text-white/80 group-hover:text-white transition-colors" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow">
        <h3 className="mb-4 text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
          {service.title}
        </h3>
        <p className="mb-10 text-[15px] font-medium leading-relaxed text-slate-400">
          {service.description}
        </p>

        {/* Improved Feature List */}
        <div className="mt-auto space-y-4">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <HiCheckCircle className="text-indigo-500/60 group-hover:text-indigo-400 transition-colors" size={16} />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Numbering */}
      <div className="absolute top-8 right-10 text-xs font-black text-slate-800 tracking-widest group-hover:text-slate-700 transition-colors">
        #{index + 1}
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useScrollReveal();

  return (
    <section id="services" className="relative py-28 md:py-40 bg-[#030712] overflow-hidden">
      {/* Background decoration */}
      <div className="gradient-orb gradient-orb-primary absolute -left-40 top-0 h-[600px] w-[600px] opacity-[0.02] blur-[120px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16">
        {/* Modern & Neat Header */}
        <div ref={headerRef} className="reveal mb-24 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_indigo]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-300">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="mb-8 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Solusi Digital yang <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent italic">Berkelas.</span>
          </h2>
          <p className="text-lg font-medium leading-relaxed text-slate-500">
            Kami menghadirkan rekayasa perangkat lunak yang presisi dengan fokus pada 
            skalabillitas, performa tinggi, dan pengalaman pengguna yang luar biasa.
          </p>
        </div>

        {/* Neat Service Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


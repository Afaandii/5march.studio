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
      className="reveal group relative flex flex-col bg-black rounded-none border border-white/10 p-10 transition-all duration-500 hover:border-white/30"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Neat Icon Presentation */}
      <div className={`relative mb-10 flex h-14 w-14 items-center justify-center rounded-none bg-white/[0.03] border border-white/[0.1] transition-all duration-500 group-hover:bg-white/[0.08]`}>
        <Icon className="text-2xl text-silver group-hover:text-white transition-colors" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow">
        <h3 className="mb-4 text-xl font-bold tracking-tight text-white uppercase transition-colors">
          {service.title}
        </h3>
        <p className="mb-10 text-[15px] font-medium leading-relaxed text-silver">
          {service.description}
        </p>

        {/* Improved Feature List */}
        <div className="mt-auto space-y-4">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <HiCheckCircle className="text-white transition-colors" size={16} />
              <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal group-hover:text-silver transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Numbering */}
      <div className="absolute top-8 right-10 text-xs font-black text-graphite tracking-widest transition-colors">
        0{index + 1}
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useScrollReveal();

  return (
    <section id="services" className="relative py-28 md:py-40 bg-black overflow-hidden border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16">
        {/* Modern & Neat Header */}
        <div ref={headerRef} className="reveal mb-24 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-silver">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="mb-8 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
            Solusi Digital yang <br className="hidden sm:block" />
            <span className="text-charcoal italic">Berkelas.</span>
          </h2>
          <p className="text-lg font-medium leading-relaxed text-silver">
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

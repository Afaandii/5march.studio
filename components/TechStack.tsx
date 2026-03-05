"use client";

import { TECH_STACK } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, 
  SiHtml5, SiNodedotjs, SiExpress, SiGo, SiGraphql, SiSocketdotio,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiSupabase, SiPrisma,
  SiGit, SiDocker, SiVercel, SiFigma, SiPostman
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { HiOutlineCommandLine } from "react-icons/hi2";

const TECH_ICONS: Record<string, any> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "HTML5/CSS3": SiHtml5,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Go (Golang)": SiGo,
  "REST API": HiOutlineCommandLine,
  "GraphQL": SiGraphql,
  "WebSocket": SiSocketdotio,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Redis": SiRedis,
  "Supabase": SiSupabase,
  "Prisma": SiPrisma,
  "Git": SiGit,
  "Docker": SiDocker,
  "Vercel": SiVercel,
  "Figma": SiFigma,
  "Postman": SiPostman,
  "VS Code": VscCode
};

function TechCard({ name, index }: { name: string; index: number }) {
  const Icon = TECH_ICONS[name] || HiOutlineCommandLine;

  return (
    <div 
      className="group relative flex aspect-square items-center justify-center rounded-2xl bg-white/[0.03] border border-white/5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
      title={name}
    >
      <Icon className="text-3xl text-slate-400 grayscale transition-all duration-300 group-hover:text-white group-hover:grayscale-0 group-hover:scale-110" />
      
      {/* Tooltip on Hover */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-md bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none z-20">
        {name}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none" />
    </div>
  );
}

export default function TechStack() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal(0.1);

  return (
    <section id="techstack" className="relative px-6 py-32 md:py-48 bg-[#06060e]">
      {/* Decorative Orbs */}
      <div className="gradient-orb gradient-orb-purple absolute top-0 left-1/4 h-[500px] w-[500px] opacity-[0.05] blur-[120px]" />
      <div className="gradient-orb gradient-orb-primary absolute bottom-0 right-1/4 h-[500px] w-[500px] opacity-[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              TRUSTED TECHNOLOGY
            </span>
          </div>
          <h2 className="mb-8 text-5xl font-black tracking-tighter text-white sm:text-7xl">
            Our <span className="bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent italic">Tech Stack.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium tracking-tight text-slate-400">
            Stack teknologi modern yang kami gunakan untuk membangun solusi 
            perangkat lunak yang skalabel, aman, dan performan.
          </p>
        </div>

        {/* Simplified Unified Grid */}
        <div 
          ref={gridRef} 
          className="reveal grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
        >
          {TECH_STACK.map((tech, index) => (
            <TechCard key={tech.name} name={tech.name} index={index} />
          ))}
        </div>
        
        {/* Bottom indicator */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-4 py-4 px-8 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Industry Standard Tools</span>
            <div className="h-1 w-1 rounded-full bg-slate-700" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Modern Frameworks</span>
          </div>
        </div>
      </div>
    </section>
  );
}


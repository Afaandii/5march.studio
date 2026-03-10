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
      className="group relative flex aspect-square items-center justify-center rounded-none bg-white/[0.03] border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/30"
      title={name}
    >
      <Icon className="text-3xl text-charcoal transition-all duration-300 group-hover:text-white group-hover:scale-110" />
      
      {/* Tooltip on Hover */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none z-20">
        {name}
      </div>
    </div>
  );
}

export default function TechStack() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal(0.1);

  return (
    <section id="techstack" className="relative px-6 py-32 md:py-48 bg-black border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver">
              TRUSTED TECHNOLOGY
            </span>
          </div>
          <h2 className="mb-8 text-5xl font-black tracking-tighter text-white sm:text-7xl uppercase">
            Our <span className="text-charcoal italic">Tech Stack.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium tracking-tight text-silver">
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
          <div className="flex items-center gap-4 py-4 px-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal">Industry Standard Tools</span>
            <div className="h-1 w-1 rounded-full bg-charcoal" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal">Modern Frameworks</span>
          </div>
        </div>
      </div>
    </section>
  );
}

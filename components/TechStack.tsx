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

const CATEGORIES = ["Frontend", "Backend", "Database", "Tools"] as const;

const CATEGORY_COLORS: Record<string, { accent: string; glow: string }> = {
  Frontend: { accent: "indigo-500", glow: "rgba(99, 102, 241, 0.15)" },
  Backend: { accent: "cyan-500", glow: "rgba(6, 182, 212, 0.15)" },
  Database: { accent: "emerald-500", glow: "rgba(16, 185, 129, 0.15)" },
  Tools: { accent: "amber-500", glow: "rgba(245, 158, 11, 0.15)" },
};

function TechBadge({ name, category }: { name: string, category: string }) {
  const Icon = TECH_ICONS[name] || HiOutlineCommandLine;
  const colors = CATEGORY_COLORS[category];

  return (
    <div className="group relative flex flex-col items-center gap-3">
      <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.06] group-hover:border-white/10 group-hover:shadow-[0_10px_30px_${colors.glow}]`}>
        <Icon className={`text-2xl text-slate-400 transition-colors duration-500 group-hover:text-white`} />
        {/* Hover Border Glow */}
        <div className={`absolute -inset-[1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-${colors.accent}/30 pointer-events-none`} />
      </div>
      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 transition-colors group-hover:text-slate-200">
        {name}
      </span>
    </div>
  );
}

function CategorySection({ category }: { category: string }) {
  const ref = useScrollReveal(0.15);
  const techs = TECH_STACK.filter((t) => t.category === category);
  const colors = CATEGORY_COLORS[category];

  return (
    <div ref={ref} className="reveal flex flex-col gap-10">
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-black uppercase tracking-[0.3em] text-white">
          {category}
        </h3>
        <div className={`h-px flex-grow bg-gradient-to-r from-${colors.accent}/30 to-transparent`} />
      </div>
      
      <div className="grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6">
        {techs.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} category={category} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const headerRef = useScrollReveal();

  return (
    <section id="techstack" className="relative px-6 py-32 md:py-48 bg-[#06060e]">
      <div className="gradient-orb gradient-orb-purple absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-32 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">
              TRUSTED TECHNOLOGY
            </span>
          </div>
          <h2 className="mb-8 text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
            Our <span className="gradient-text font-serif italic">Arsenal.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium tracking-tight text-slate-400">
            Kami hanya menggunakan framework dan tools paling mutakhir untuk 
            memastikan performa, keamanan, dan skalabilitas ekosistem digital Anda.
          </p>
        </div>

        {/* Categories Section */}
        <div className="flex flex-col gap-24">
          {CATEGORIES.map((category) => (
            <CategorySection key={category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { IconType } from "react-icons";
import {
  HiRocketLaunch,
  HiBolt,
  HiCodeBracket,
} from "react-icons/hi2";

// ===== NAVIGATION =====
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#portfolio" },
  { label: "Capabilities", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

// ===== CAPABILITIES =====
export interface Service {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export const SERVICES: Service[] = [
  {
    icon: HiRocketLaunch,
    title: "Brand Strategy & Launch",
    description:
      "Membangun kehadiran digital yang kuat dengan landing page dan profil perusahaan yang didesain untuk mendominasi pasar Anda.",
    features: ["Conversion-Focused", "Brand Identity", "High Performance", "Modern UI"],
    gradient: "bg-graphite",
  },
  {
    icon: HiCodeBracket,
    title: "Enterprise Automation",
    description:
      "Mengotomatiskan alur kerja bisnis yang kompleks lewat sistem manajemen internal dan integrasi API yang skalabel.",
    features: ["Process Efficiency", "Security-First", "Custom Workflows", "Automated Logic"],
    gradient: "bg-charcoal",
  },
  {
    icon: HiBolt,
    title: "Scalable Platforms",
    description:
      "Mengembangkan platform e-commerce dan SaaS yang tangguh untuk mendukung pertumbuhan bisnis Anda secara berkelanjutan.",
    features: ["Seamless Payment", "Robust Backend", "User Analytics", "Inventory Control"],
    gradient: "bg-graphite",
  },
];

// ===== PORTFOLIO =====
export interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  techStack: string[];
  gradient: string;
  image: string;
  demoLink: string;
  githubLink: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "EduPay — Financial Clarity",
    description:
      "Mengotomatiskan sistem pembayaran sekolah untuk SMA Negeri 1, mengurangi 80% beban administrasi manual dan memberikan transparansi real-time.",
    category: "Financial System",
    techStack: ["Next.js", "Go", "PostgreSQL"],
    gradient: "from-graphite/40 via-charcoal/10 to-transparent",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://demo.edupay.com",
    githubLink: "https://github.com/5march/edupay",
  },
  {
    title: "TaskFlow — Team Velocity",
    description:
      "Meningkatkan produktivitas tim sebesar 40% lewat manajemen tugas berbasis Kanban yang intuitif dan sinkronisasi real-time.",
    category: "Productivity SaaS",
    techStack: ["Next.js", "Node.js", "MongoDB"],
    gradient: "from-graphite/40 via-charcoal/10 to-transparent",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://taskflow.studio",
    githubLink: "https://github.com/5march/taskflow",
  },
  {
    title: "ShopVerse — Revenue Growth",
    description:
      "Membangun platform e-commerce berperforma tinggi dengan sistem checkout kilat, siap menangani ribuan transaksi per menit.",
    category: "Scalable Commerce",
    techStack: ["Next.js", "Supabase", "Stripe"],
    gradient: "from-graphite/40 via-charcoal/10 to-transparent",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://shopverse.id",
    githubLink: "https://github.com/5march/shopverse",
  },
  {
    title: "TechCorp — Digital Authority",
    description:
      "Redesign profil perusahaan menjadi aset digital futuristik yang meningkatkan leads bisnis sebesar 300% dalam 3 bulan pertama.",
    category: "Enterprise Identity",
    techStack: ["Next.js", "Framer Motion", "Sanity"],
    gradient: "from-graphite/40 via-charcoal/10 to-transparent",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://techcorp.com",
    githubLink: "https://github.com/5march/techcorp",
  },
];

// ===== STATS =====
export const STATS = [
  { value: "50+", label: "Impactful Projects" },
  { value: "30+", label: "Success Stories" },
  { value: "3+", label: "Years Mastery" },
  { value: "99%", label: "Client Success" },
] as const;

// ===== SOCIAL LINKS =====
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/5march", icon: "github" },
  { label: "Instagram", href: "https://instagram.com/5march.studio", icon: "instagram" },
  { label: "WhatsApp", href: "/api/contact/whatsapp", icon: "whatsapp" },
  { label: "Email", href: "mailto:hello@5march.studio", icon: "email" },
] as const;

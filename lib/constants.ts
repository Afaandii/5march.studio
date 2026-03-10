import { IconType } from "react-icons";
import {
  HiRocketLaunch,
  HiBuildingOffice,
  HiBolt,
  HiCreditCard,
  HiClipboardDocumentList,
  HiCodeBracket,
} from "react-icons/hi2";

// ===== NAVIGATION =====
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Kontak", href: "#contact" },
] as const;

// ===== SERVICES =====
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
    title: "Landing Page",
    description:
      "Website landing page yang memukau dengan desain modern, responsif, dan dioptimasi untuk konversi tinggi.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI"],
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    icon: HiBuildingOffice,
    title: "Company Profile",
    description:
      "Website profil perusahaan profesional yang merepresentasikan brand dan nilai bisnis Anda secara digital.",
    features: ["Multi-page", "CMS Integration", "Contact Form", "Analytics"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: HiBolt,
    title: "E-Commerce",
    description:
      "Platform toko online lengkap dengan sistem pembayaran, manajemen produk, dan pengalaman belanja yang seamless.",
    features: ["Payment Gateway", "Inventory System", "Order Tracking", "Dashboard"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: HiCreditCard,
    title: "Sistem Pembayaran SPP",
    description:
      "Aplikasi web untuk manajemen pembayaran SPP sekolah dengan laporan otomatis dan notifikasi realtime.",
    features: ["Auto Invoice", "Payment History", "Report Export", "Notification"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: HiClipboardDocumentList,
    title: "Task Management",
    description:
      "Aplikasi manajemen tugas dan proyek kolaboratif dengan fitur realtime, kanban board, dan team management.",
    features: ["Kanban Board", "Team Collab", "Deadline Tracker", "Progress Report"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: HiCodeBracket,
    title: "Custom API & Integration",
    description:
      "Pengembangan API kustom dan integrasi sistem yang menghubungkan berbagai layanan untuk efisiensi bisnis.",
    features: ["RESTful API", "Database Design", "3rd Party Integration", "Documentation"],
    gradient: "from-purple-500 to-fuchsia-500",
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
    title: "EduPay — Sistem SPP Digital",
    description:
      "Solusi cerdas untuk transparansi keuangan sekolah. Dilengkapi dengan auto-billing, payment gateway Midtrans, dan laporan real-time untuk mempermudah administrasi.",
    category: "Web Application",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Midtrans"],
    gradient: "from-indigo-600/40 via-cyan-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://demo.edupay.com",
    githubLink: "https://github.com/5march/edupay",
  },
  {
    title: "TaskFlow — Project Management",
    description:
      "Tingkatkan produktivitas tim dengan manajemen tugas berbasis Kanban. Visualisasikan alur kerja dan selesaikan proyek lebih cepat dengan TaskFlow.",
    category: "SaaS Platform",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    gradient: "from-purple-600/40 via-pink-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://taskflow.studio",
    githubLink: "https://github.com/5march/taskflow",
  },
  {
    title: "ShopVerse — E-Commerce Hub",
    description:
      "Bangun kerajaan bisnis online Anda sekarang. ShopVerse menawarkan pengalaman belanja yang seamless dengan integrasi Stripe dan performa kilat lewat Redis.",
    category: "E-Commerce",
    techStack: ["Next.js", "Supabase", "Stripe", "Redis"],
    gradient: "from-emerald-600/40 via-teal-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://shopverse.id",
    githubLink: "https://github.com/5march/shopverse",
  },
  {
    title: "TechCorp — Enterprise Identity",
    description:
      "Representasi digital yang elegan untuk bisnis kelas dunia. Company profile dengan desain futuristik, animasi interaktif, dan performa web core vitals yang sempurna.",
    category: "Identity Design",
    techStack: ["Next.js", "Sanity CMS", "Framer Motion", "i18n"],
    gradient: "from-orange-600/40 via-amber-500/10 to-transparent",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://techcorp.com",
    githubLink: "https://github.com/5march/techcorp",
  },
];

// ===== TECH STACK =====
export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
}

export const TECH_STACK: TechItem[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "HTML5/CSS3", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Go (Golang)", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "WebSocket", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "Prisma", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];

// ===== TESTIMONIALS =====
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmad Rizky",
    role: "Kepala Sekolah",
    company: "SMA Negeri 1",
    quote:
      "Sistem SPP digital yang dibuat sangat membantu administrasi sekolah kami. Proses pembayaran jadi lebih cepat dan transparan.",
    avatar: "AR",
  },
  {
    name: "Siti Nurhaliza",
    role: "CEO",
    company: "TechVentura",
    quote:
      "Company profile yang dibuatkan sangat profesional dan modern. Traffic website kami meningkat 3x lipat setelah redesign.",
    avatar: "SN",
  },
  {
    name: "Budi Santoso",
    role: "Owner",
    company: "TokoMaju Online",
    quote:
      "E-commerce yang dibangun sangat user-friendly. Fitur payment gateway dan inventory management sangat lengkap.",
    avatar: "BS",
  },
];

// ===== STATS =====
export const STATS = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "30+", label: "Klien Puas" },
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "99%", label: "Kepuasan Klien" },
] as const;

// ===== SOCIAL LINKS =====
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/5march", icon: "github" },
  { label: "Instagram", href: "https://instagram.com/5march.studio", icon: "instagram" },
  { label: "WhatsApp", href: "/api/contact/whatsapp", icon: "whatsapp" },
  { label: "Email", href: "mailto:hello@5march.studio", icon: "email" },
] as const;

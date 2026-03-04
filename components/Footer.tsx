import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const SOCIAL_ICONS = {
  github: FaGithub,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  email: MdEmail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 px-6 pb-12 pt-24 bg-[#06060e] overflow-hidden">
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px]">
                 <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#06060e] text-sm font-black text-white">
                    5m
                 </div>
              </div>
              <span className="text-xl font-black text-white tracking-tighter">
                5march<span className="gradient-text">.studio</span>
              </span>
            </div>
            <p className="mb-8 text-[15px] font-medium leading-[1.8] text-slate-400">
              Elite digital craft for high-growth businesses. Membangun masa depan digital Anda dengan presisi dan inovasi.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.icon as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:scale-110 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-white">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] font-semibold text-slate-500 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:ml-auto">
            <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-white">
              Solutions
            </h4>
            <ul className="space-y-4">
              {["Custom Web App", "E-Commerce", "Company Profile", "Payment System", "API Development"].map((item) => (
                <li key={item} className="text-[15px] font-semibold text-slate-500 hover:text-slate-300 transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:ml-auto">
            <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-white">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 text-slate-400">
                  <MdEmail size={20} />
                </div>
                <span className="text-[15px] font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer">hello@5march.studio</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 text-slate-400">
                  <MdLocationOn size={20} />
                </div>
                <span className="text-[15px] font-semibold text-slate-400">Yogyakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Improved Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
            © {currentYear} 5MARCH.STUDIO — BEYOND DIGITAL.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Changelog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { useScrollspy } from "@/hooks/useScrollspy";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SOCIAL_ICONS = {
  github: FaGithub,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  email: MdEmail,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeId = useScrollspy(
    NAV_LINKS.map((link) => link.href.replace("#", "")),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
      setIsMobileOpen(false);
    },
    []
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? "glass-navbar py-3 shadow-2xl" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-3 text-xl font-bold"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-[1px] transition-transform duration-300 group-hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#06060e] text-sm font-black text-white">
              5m
            </div>
          </div>
          <span className="text-white tracking-tight">
            5march<span className="gradient-text">.studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.03] p-1.5 backdrop-blur-md md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative rounded-xl px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-3 pr-4 border-r border-white/10">
            {SOCIAL_LINKS.slice(0, 3).map((social) => {
              const Icon = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary !px-6 !py-2.5 !text-sm"
          >
            Mulai Proyek
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] transition-all duration-500 md:hidden ${
          isMobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm border-l border-white/10 bg-[#06060e]/95 p-8 shadow-2xl transition-transform duration-500 ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 pt-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Menu</span>
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`rounded-2xl px-5 py-4 text-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 text-white translate-x-2"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            
            <div className="mt-4 flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Social</span>
              <div className="flex items-center gap-4 px-4 py-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary mt-8 text-center text-lg"
            >
              Mulai Proyek
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

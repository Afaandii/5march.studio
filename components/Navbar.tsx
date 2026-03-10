"use client";

import { useState, useEffect, useCallback } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollspy } from "@/hooks/useScrollspy";
import { HiMenuAlt3, HiX, HiPhone } from "react-icons/hi";

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
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-8 py-3 transition-all duration-500 border border-white/10 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-2xl shadow-2xl"
            : "bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-3 text-xl font-bold uppercase tracking-tighter"
        >
          <span className="text-white hidden sm:block">
            5march<span className="text-silver">.studio</span>
          </span>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive ? "text-white" : "text-charcoal hover:text-silver"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA Desktop */}
        <div className="hidden items-center md:flex">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary flex items-center gap-2 !px-6 !py-2.5 !text-xs"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
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
          className="absolute inset-0 bg-black/90 backdrop-blur-lg"
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={`absolute right-4 top-24 w-[calc(100%-2rem)] max-w-sm border border-white/10 bg-black p-8 shadow-2xl transition-all duration-500 ${
            isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-3 px-5 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-charcoal hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary mt-4 flex items-center justify-center gap-2 !py-4 !text-sm"
            >
              <HiPhone size={20} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

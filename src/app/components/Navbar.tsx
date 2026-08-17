"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#faf8f5]/90 backdrop-blur-xl shadow-sm shadow-[#b76578]/10 py-3"
            : "bg-[#faf8f5] py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3d6dc] transition-transform duration-300 hover:scale-105">
              <span className="text-base font-serif text-[#8f4a5c]">S</span>
            </div>
            <div>
              <p className="font-serif text-xl tracking-wide text-[#292323] leading-none">
                SÉRÉNA
              </p>
              <p className="text-[8px] tracking-[0.35em] text-[#9b777f] mt-0.5">
                BEAUTY STUDIO
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm text-[#6f6265] transition hover:text-[#b76578]"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-[1px] w-0 bg-[#b76578] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Phone — only large screens */}
            <div className="hidden text-right xl:block">
              <p className="text-[9px] uppercase tracking-widest text-[#a18d91]">Bookings</p>
              <p className="text-sm font-medium text-[#292323]">+91 98765 43210</p>
            </div>

            {/* Book button — hidden on very small mobile to save space */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-[#292323] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#b76578] hover:shadow-lg hover:shadow-[#b76578]/20 hover:scale-105"
            >
              Book Now
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded4d5] transition hover:border-[#b76578] md:hidden"
            >
              <div className="relative h-4 w-5 flex flex-col justify-between">
                <span
                  className={`block h-[1.5px] w-full bg-[#292323] transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-[#292323] transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-[#292323] transition-all duration-300 origin-center ${
                    menuOpen ? "w-full -rotate-45 -translate-y-[7px]" : "w-3/4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-72 max-w-[85vw] bg-[#faf8f5] shadow-2xl transition-transform duration-400 ease-in-out md:hidden flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[#e7dfe0] px-6 py-5 mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b76578]">Menu</p>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#f3d6dc] transition"
            aria-label="Close menu"
          >
            <span className="text-[#292323] text-lg leading-none">✕</span>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 rounded-2xl px-4 py-4 text-[#292323] transition-all duration-200 hover:bg-white hover:text-[#b76578] hover:shadow-sm group"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-xs text-[#d8a9b4] font-medium">0{i + 1}</span>
              <span className="text-base font-medium">{link.label}</span>
              <span className="ml-auto text-[#d8a9b4] transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-[#e7dfe0] px-6 py-6">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full rounded-full bg-[#292323] py-3.5 text-center text-sm font-medium text-white transition hover:bg-[#b76578]"
          >
            Book Appointment
          </a>
          <p className="mt-4 text-center text-xs text-[#a18d91]">+91 98765 43210</p>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className={`transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`} />
    </>
  );
}
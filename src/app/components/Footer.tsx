"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

export default function Footer() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <footer id="contact" className="bg-[#292323] px-5 sm:px-8 pb-8 pt-14 sm:pt-20 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:pb-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">
              SÉRÉNA<span className="text-[#d8a9b4]">.</span>
            </h2>
            <p className="mt-1.5 text-[9px] uppercase tracking-[0.4em] text-[#d8a9b4]">
              Beauty Studio
            </p>
            <p className="mt-6 text-sm leading-7 text-white/50 max-w-sm">
              A modern beauty studio created for slow moments,
              beautiful transformations and feeling your absolute best.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-3">
              {[
                { label: "IG", href: "https://instagram.com" },
                { label: "FB", href: "https://facebook.com" },
                { label: "PI", href: "https://pinterest.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs transition hover:border-[#d8a9b4] hover:bg-[#d8a9b4] hover:text-[#292323]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[#d8a9b4]">
              Explore
            </h3>
            <div className="mt-5 space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#about", label: "About us" },
                { href: "#gallery", label: "Gallery" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[#d8a9b4]">
              Visit us
            </h3>
            <address className="mt-5 not-italic text-sm leading-7 text-white/60">
              <p>24 Rose Avenue</p>
              <p>Amritsar, Punjab</p>
              <p>India — 143001</p>
            </address>
            <div className="mt-4 text-sm leading-6 text-white/60">
              <p>Mon–Sat: 9am – 8pm</p>
              <p>Sunday: 10am – 6pm</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[#d8a9b4]">
              Get in touch
            </h3>
            <div className="mt-5 space-y-3">
              <a
                href="tel:+917717399046"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                +91 77173 99046
              </a>
              <a
                href="mailto:sainimuskan731@gmail.com"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                sainimuskan731@gmail.com
              </a>
            </div>

            {/* Quick book CTA */}
            <button
              id="footer-quick-book-btn"
              onClick={() => setBookingOpen(true)}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f3d6dc] px-5 py-2.5 text-sm font-medium text-[#292323] transition hover:bg-white"
            >
              Book Now ↗
            </button>
          </div>

        </div>

        {/* Big CTA */}
        <div className="border-b border-white/10 py-12 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-3xl font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Your next beautiful
              <br />
              <span className="italic text-[#d8a9b4]">moment awaits.</span>
            </h2>
            <button
              id="footer-cta-book-btn"
              onClick={() => setBookingOpen(true)}
              className="shrink-0 flex items-center gap-3 rounded-full bg-[#f3d6dc] px-6 sm:px-7 py-3.5 text-sm font-medium text-[#292323] transition hover:bg-white hover:shadow-lg"
            >
              Book Now
              <span>↗</span>
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-3 pt-7 text-[10px] uppercase tracking-[0.15em] text-white/30 sm:flex-row sm:items-center">
          <p>© 2026 Séréna Beauty Studio</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
          </div>
          <p>Made with care ♥</p>
        </div>

      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </footer>
  );
}
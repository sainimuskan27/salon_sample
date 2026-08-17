"use client";

import { useEffect, useRef } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PHONE = "917888746980"; // WhatsApp needs country code, no +
const PHONE_DISPLAY = "+91 7888746980";
const EMAIL = "sainimuskan731@gmail.com";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I came across Séréna Beauty Studio and I'm interested in booking an appointment. Could you please help me with the available slots and services?"
);

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const options = [
    {
      id: "whatsapp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: "WhatsApp",
      sublabel: "Chat with us instantly",
      href: `https://wa.me/${PHONE}?text=${WHATSAPP_MESSAGE}`,
      bg: "bg-[#25D366]",
      hoverBg: "hover:bg-[#1ebe5d]",
      text: "text-white",
      sublabelClass: "opacity-80",
      external: true,
    },
    {
      id: "email",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      label: "Send an Email",
      sublabel: EMAIL,
      href: `mailto:${EMAIL}?subject=Appointment%20Booking%20%E2%80%94%20S%C3%A9r%C3%A9na%20Beauty%20Studio&body=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20slots.%0A%0AThank%20you!`,
      bg: "bg-[#f3d6dc]",
      hoverBg: "hover:bg-[#ecc4cc]",
      text: "text-[#292323]",
      sublabelClass: "text-[#6f6265]",
      external: false,
    },
    {
      id: "phone",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      label: "Call us",
      sublabel: PHONE_DISPLAY,
      href: `tel:+${PHONE}`,
      bg: "bg-[#292323]",
      hoverBg: "hover:bg-[#3d3030]",
      text: "text-white",
      sublabelClass: "opacity-70",
      external: false,
    },
  ];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
      aria-label="Book an appointment"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        className="relative w-full max-w-md rounded-[2rem] bg-[#faf8f5] shadow-2xl shadow-black/20 overflow-hidden"
        style={{ animation: "modalSlide 0.28s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        {/* Gradient top bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#b76578] via-[#d8a9b4] to-[#f3d6dc]" />

        {/* Header */}
        <div className="px-7 pt-7 pb-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#b76578] font-medium">
                Séréna Beauty Studio
              </p>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#292323] leading-tight">
                Book your appointment
              </h2>
              <p className="mt-2 text-sm text-[#75696c] leading-6">
                Choose how you&apos;d like to reach us — we&apos;re happy to help!
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e7dfe0] text-[#a18d91] transition hover:border-[#b76578] hover:bg-[#fdf1f3] hover:text-[#b76578] ml-4 mt-0.5"
              aria-label="Close booking modal"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contact options */}
        <div className="flex flex-col gap-3 px-7 pb-8">
          {options.map((opt) => (
            <a
              key={opt.id}
              href={opt.href}
              target={opt.external ? "_blank" : undefined}
              rel={opt.external ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 ${opt.bg} ${opt.hoverBg} ${opt.text} transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group`}
              onClick={onClose}
            >
              <span className="shrink-0 opacity-90">{opt.icon}</span>
              <div className="min-w-0">
                <p className="font-medium text-sm leading-none">{opt.label}</p>
                <p className={`mt-1.5 text-xs leading-none truncate ${opt.sublabelClass}`}>
                  {opt.sublabel}
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="ml-auto w-4 h-4 shrink-0 opacity-50 transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-[#e7dfe0] px-7 py-4">
          <p className="text-center text-[11px] text-[#a18d91] leading-5">
            Open Mon–Sat: 9am–8pm &nbsp;·&nbsp; Sun: 10am–6pm
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalSlide {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

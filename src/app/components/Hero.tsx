"use client";

import { useState } from "react";
import Image from "next/image";
import BookingModal from "./BookingModal";

export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section id="home" className="bg-[#faf8f5] px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left side */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <p className="mb-4 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-[#b76578]">
              Beauty • Style • Confidence
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#292323]">
              Your beauty,
              <br />
              <span className="italic text-[#b76578]">our passion.</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base leading-7 text-[#75696c] max-w-lg mx-auto lg:mx-0">
              Discover a space where beauty meets relaxation.
              From elegant hair styling to luxurious treatments,
              we are here to make you feel your absolute best.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                id="hero-book-appointment-btn"
                onClick={() => setBookingOpen(true)}
                className="rounded-full bg-[#292323] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#b76578] hover:shadow-lg hover:shadow-[#b76578]/20 hover:scale-105"
              >
                Book Appointment
              </button>
              <a
                href="#services"
                className="rounded-full border border-[#cfc4c6] px-6 py-3 text-sm font-medium text-[#292323] transition-all duration-300 hover:border-[#b76578] hover:text-[#b76578] hover:bg-[#fdf1f3]"
              >
                Explore Services
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-10 flex gap-8 justify-center lg:justify-start">
              {[
                { value: "10+", label: "Years" },
                { value: "5K+", label: "Clients" },
                { value: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-xl sm:text-2xl text-[#292323]">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#a18d91] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — image */}
          <div className="relative order-1 lg:order-2">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-[#b76578]/10">
              <Image
                src="/salon.jpeg"
                alt="Luxury salon — professional hair styling at Séréna Beauty Studio"
                width={800}
                height={900}
                priority
                className="h-[380px] sm:h-[480px] lg:h-[580px] w-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating card — repositioned to avoid overflow on mobile */}
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 rounded-2xl bg-white px-5 py-4 shadow-xl border border-[#f3d6dc]">
              <p className="text-[10px] uppercase tracking-widest text-[#a18d91]">Experience</p>
              <p className="mt-1 font-serif text-lg text-[#292323]">Beauty & Relaxation</p>
            </div>
          </div>

        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
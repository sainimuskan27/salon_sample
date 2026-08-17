"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "The entire experience was beautiful from start to finish. I walked in feeling stressed and walked out feeling completely refreshed.",
    name: "Aarushi Sharma",
    service: "Hair Styling",
  },
  {
    quote:
      "The attention to detail is incredible. Everyone was so welcoming, and I absolutely loved the final result.",
    name: "Mehak Kapoor",
    service: "Nail Art",
  },
  {
    quote:
      "This is more than just a salon. It genuinely feels like a place where you can relax and take time for yourself.",
    name: "Simran Kaur",
    service: "Facial & Skincare",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="bg-white px-5 sm:px-8 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 sm:mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#b76578]">
            Client love
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#292323]">
            Words from our
            <br />
            <span className="italic text-[#b76578]">beautiful clients.</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="grid overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-[#faf8f5] lg:grid-cols-[0.8fr_1.2fr]">

          {/* Image */}
          <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[550px]">
            <Image
              src="/exp.jpeg"
              alt="Happy salon client at Séréna Beauty Studio"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-black/10" />

            {/* Rating */}
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur shadow">
              <div className="flex gap-0.5 text-sm text-[#b76578]">★★★★★</div>
              <p className="mt-1 text-xs text-[#75696c]">4.9 / 5 from 500+ reviews</p>
            </div>
          </div>

          {/* Quote */}
          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-14">

            <span className="font-serif text-5xl sm:text-7xl leading-none text-[#d8a9b4]">"</span>

            <blockquote className="mt-3 font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-[#292323] transition-all duration-300">
              {testimonials[active].quote}
            </blockquote>

            {/* Client */}
            <div className="mt-8 flex items-center justify-between border-t border-[#ded4d5] pt-6">
              <div>
                <p className="text-sm font-medium text-[#292323]">{testimonials[active].name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#a18d91]">
                  {testimonials[active].service}
                </p>
              </div>

              {/* Arrows */}
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#d8cdcf] text-[#292323] transition hover:border-[#b76578] hover:bg-[#b76578] hover:text-white"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#292323] text-white transition hover:bg-[#b76578]"
                >
                  →
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Small review strip */}
        <div className="mt-5 grid gap-3 sm:gap-4 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              onClick={() => setActive(index)}
              className={`rounded-xl sm:rounded-2xl border p-5 sm:p-6 text-left transition duration-300 ${
                index === active
                  ? "border-[#d8a9b4] bg-[#faf8f5] shadow-sm"
                  : "border-[#e7dfe0] hover:border-[#d8a9b4]"
              }`}
            >
              <div className="flex justify-between">
                <div className="flex gap-0.5 text-sm text-[#b76578]">★★★★★</div>
                <span className="text-xs text-[#a18d91]">0{index + 1}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#75696c] line-clamp-3">
                {testimonial.quote}
              </p>
              <div className="mt-5">
                <p className="text-sm font-medium text-[#292323]">{testimonial.name}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-[#a18d91]">
                  {testimonial.service}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
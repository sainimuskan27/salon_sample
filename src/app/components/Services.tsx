"use client";

import { useState } from "react";
import Image from "next/image";
import BookingModal from "./BookingModal";

const services = [
  {
    number: "01",
    category: "HAIR",
    title: "Hair Styling",
    description:
      "Precision cuts, elegant styling and treatments tailored to your personality.",
    price: "From ₹999",
    duration: "45–90 min",
    image: "/services/hairstyling.jpeg",
  },
  {
    number: "02",
    category: "SKIN",
    title: "Facial & Glow",
    description:
      "Relaxing skincare rituals designed to refresh, nourish and illuminate your skin.",
    price: "From ₹1,499",
    duration: "60 min",
    image: "/services/facial.jpeg",
  },
  {
    number: "03",
    category: "NAILS",
    title: "Nail Art",
    description:
      "Beautiful manicures, gel extensions and artistic details for effortlessly polished nails.",
    price: "From ₹799",
    duration: "45–75 min",
    image: "/services/nails.jpg",
  },
  {
    number: "04",
    category: "COLOR",
    title: "Hair Color",
    description:
      "From subtle highlights to bold transformations, discover a color made for you.",
    price: "From ₹1,999",
    duration: "90–180 min",
    image: "/services/haircoloring.jpeg",
  },
];

export default function Services() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
    <section
      id="services"
      className="bg-[#faf8f5] px-5 sm:px-8 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:mb-16">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#b76578]">
              Our services
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#292323]">
              A little luxury
              <br />
              <span className="italic text-[#b76578]">just for you.</span>
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <div className="max-w-md">
              <p className="text-sm sm:text-base leading-7 text-[#75696c]">
                From everyday beauty rituals to special occasions,
                every treatment is thoughtfully designed around you.
                Sit back, relax and let us take care of the rest.
              </p>
              <button className="mt-5 inline-flex items-center gap-3 border-b border-[#292323] pb-1.5 text-sm font-medium text-[#292323] transition hover:border-[#b76578] hover:text-[#b76578]">
                Explore all services
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-white shadow-sm hover:shadow-xl hover:shadow-[#b76578]/10 transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Number */}
                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xs font-medium text-[#292323] backdrop-blur shadow-sm">
                  {service.number}
                </span>

                {/* Category */}
                <span className="absolute right-5 top-6 text-[10px] font-medium tracking-[0.25em] text-white/90">
                  {service.category}
                </span>

                {/* Image content */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl">{service.title}</h3>
                      <p className="mt-1.5 text-xs sm:text-sm leading-5 text-white/80 max-w-xs">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg text-[#292323] transition duration-300 group-hover:-rotate-45">
                      ↗
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom information */}
              <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#a18d91]">Starting at</p>
                  <p className="mt-1 text-sm font-medium text-[#292323]">{service.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-[#a18d91]">Duration</p>
                  <p className="mt-1 text-sm font-medium text-[#292323]">{service.duration}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-5 rounded-[1.5rem] sm:rounded-[2rem] bg-[#292323] px-6 sm:px-10 py-8 sm:py-10 text-center md:flex-row md:text-left">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8a9b4]">
              Ready for your next look?
            </p>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl text-white">
              Let&apos;s make you feel beautiful.
            </h3>
          </div>
          <button
            id="services-book-appointment-btn"
            onClick={() => setBookingOpen(true)}
            className="shrink-0 rounded-full bg-[#f3d6dc] px-7 py-3.5 text-sm font-medium text-[#292323] transition duration-300 hover:bg-white hover:shadow-lg"
          >
            Book an Appointment
          </button>
        </div>

      </div>
    </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
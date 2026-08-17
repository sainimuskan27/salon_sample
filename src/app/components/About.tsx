import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-5 sm:px-8 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top heading */}
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-10 bg-[#b76578]" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b76578]">
            Our story
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-xl shadow-[#b76578]/10">
              <Image
                src="/interior.jpeg"
                alt="Séréna Beauty Studio interior — elegant luxury salon space"
                width={700}
                height={900}
                className="h-[380px] sm:h-[480px] lg:h-[560px] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-5 right-4 sm:-bottom-8 sm:-right-4 lg:-right-8 flex h-28 w-28 sm:h-32 sm:w-32 flex-col items-center justify-center rounded-full bg-[#f3d6dc] text-center shadow-xl">
              <span className="font-serif text-2xl sm:text-3xl text-[#8f4a5c]">10+</span>
              <span className="mt-1 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#8f4a5c] leading-tight px-2">
                Years of<br />experience
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="pt-6 sm:pt-0">

            <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#a18d91]">
              More than a salon
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#292323]">
              Beauty is not just
              <br />
              how you <span className="italic text-[#b76578]">look.</span>
            </h2>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base leading-7 sm:leading-8 text-[#75696c] max-w-xl">
              We believe beauty is about how you feel when you
              walk out of our doors. Our studio was created as a
              calm, welcoming space where you can slow down,
              switch off and spend a little time taking care of yourself.
            </p>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-[#75696c] max-w-xl">
              Every appointment is personal. From the first
              consultation to the final touch, our team focuses
              on understanding you, your style and what makes
              you feel confident.
            </p>

            {/* Signature */}
            <div className="mt-8 sm:mt-10">
              <p className="font-serif text-2xl sm:text-3xl italic text-[#8f4a5c]">Séréna</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#a18d91]">
                Founder & Creative Director
              </p>
            </div>

          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 sm:mt-24 grid border-y border-[#e7dfe0] py-8 sm:py-10 grid-cols-3">
          {[
            { value: "10+", label: "Years of experience" },
            { value: "5K+", label: "Happy clients" },
            { value: "4.9", label: "Average rating" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center sm:text-left ${
                i < 2 ? "border-r border-[#e7dfe0]" : ""
              } ${i === 0 ? "pr-4 sm:pr-10" : i === 1 ? "px-4 sm:px-10" : "pl-4 sm:pl-10"}`}
            >
              <p className="font-serif text-2xl sm:text-4xl text-[#292323]">{stat.value}</p>
              <p className="mt-1 sm:mt-2 text-[9px] sm:text-xs uppercase tracking-[0.2em] text-[#a18d91] leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
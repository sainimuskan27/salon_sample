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
  return (
    <section className="bg-white px-6 py-24 md:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#b76578]">
            Client love
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#292323] md:text-6xl">
            Words from our
            <br />
            <span className="italic text-[#b76578]">
              beautiful clients.
            </span>
          </h2>

        </div>


        {/* Main testimonial */}
        <div className="grid overflow-hidden rounded-[2rem] bg-[#faf8f5] lg:grid-cols-[0.8fr_1.2fr]">

          {/* Image */}
          <div className="relative min-h-[400px] lg:min-h-[550px]">

            <img
              src="/exp.jpeg"
              alt="Happy salon client"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            {/* Rating */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur">
              <div className="flex gap-1 text-[#b76578]">
                ★ ★ ★ ★ ★
              </div>

              <p className="mt-1 text-xs text-[#75696c]">
                4.9 / 5 from 500+ reviews
              </p>
            </div>

          </div>


          {/* Quote */}
          <div className="flex flex-col justify-center px-8 py-12 md:px-14 lg:px-20">

            <span className="font-serif text-7xl leading-none text-[#d8a9b4]">
              “
            </span>

            <blockquote className="mt-4 max-w-2xl font-serif text-3xl leading-relaxed text-[#292323] md:text-4xl">
              {testimonials[0].quote}
            </blockquote>


            {/* Client */}
            <div className="mt-10 flex items-center justify-between border-t border-[#ded4d5] pt-7">

              <div>
                <p className="text-sm font-medium text-[#292323]">
                  {testimonials[0].name}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#a18d91]">
                  {testimonials[0].service}
                </p>
              </div>


              {/* Arrows */}
              <div className="flex gap-3">

                <button
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cdcf] text-[#292323] transition hover:border-[#b76578] hover:bg-[#b76578] hover:text-white"
                >
                  ←
                </button>

                <button
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#292323] text-white transition hover:bg-[#b76578]"
                >
                  →
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* Small review strip */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`rounded-2xl border p-6 transition duration-300 ${
                index === 0
                  ? "border-[#d8a9b4] bg-[#faf8f5]"
                  : "border-[#e7dfe0] hover:border-[#d8a9b4]"
              }`}
            >

              <div className="flex justify-between">

                <div className="flex gap-1 text-sm text-[#b76578]">
                  ★★★★★
                </div>

                <span className="text-xs text-[#a18d91]">
                  0{index + 1}
                </span>

              </div>

              <p className="mt-5 text-sm leading-6 text-[#75696c]">
                {testimonial.quote}
              </p>

              <div className="mt-6">
                <p className="text-sm font-medium text-[#292323]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#a18d91]">
                  {testimonial.service}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
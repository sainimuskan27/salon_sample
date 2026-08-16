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
  return (
    <section
      id="services"
      className="bg-[#faf8f5] px-6 py-24 md:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#b76578]">
              Our services
            </p>

            <h2 className="font-serif text-5xl leading-[1.05] text-[#292323] md:text-7xl">
              A little luxury
              <br />
              <span className="italic text-[#b76578]">
                just for you.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <div className="max-w-md">
              <p className="text-base leading-7 text-[#75696c]">
                From everyday beauty rituals to special occasions,
                every treatment is thoughtfully designed around you.
                Sit back, relax and let us take care of the rest.
              </p>

              <button className="mt-7 inline-flex items-center gap-3 border-b border-[#292323] pb-2 text-sm font-medium text-[#292323] transition hover:border-[#b76578] hover:text-[#b76578]">
                Explore all services
                <span>↗</span>
              </button>
            </div>
          </div>

        </div>


        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-2">

          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-[2rem] bg-white"
            >

              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Number */}
                <span className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xs font-medium text-[#292323] backdrop-blur">
                  {service.number}
                </span>

                {/* Category */}
                <span className="absolute right-6 top-7 text-xs font-medium tracking-[0.25em] text-white">
                  {service.category}
                </span>

                {/* Image content */}
                <div className="absolute bottom-7 left-7 right-7 text-white">

                  <div className="flex items-end justify-between gap-4">

                    <div>
                      <h3 className="font-serif text-4xl md:text-5xl">
                        {service.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#292323] transition duration-300 group-hover:-rotate-45">
                      ↗
                    </div>

                  </div>

                </div>

              </div>


              {/* Bottom information */}
              <div className="flex items-center justify-between px-7 py-5">

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#a18d91]">
                    Starting at
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#292323]">
                    {service.price}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-[#a18d91]">
                    Duration
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#292323]">
                    {service.duration}
                  </p>
                </div>

              </div>

            </article>
          ))}

        </div>


        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-[#292323] px-8 py-10 text-center md:flex-row md:text-left md:px-12">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8a9b4]">
              Ready for your next look?
            </p>

            <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">
              Let&apos;s make you feel beautiful.
            </h3>
          </div>

          <button className="shrink-0 rounded-full bg-[#f3d6dc] px-7 py-3.5 text-sm font-medium text-[#292323] transition duration-300 hover:bg-white">
            Book an Appointment
          </button>

        </div>

      </div>
    </section>
  );
}
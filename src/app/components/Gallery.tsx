const galleryImages = [
  {
    src: "/services/haircoloring.jpeg",
    alt: "Salon interior",
    size: "large",
  },
  {
    src: "/services/facial.jpeg",
    alt: "Hair styling",
    size: "small",
  },
  {
    src: "/services/nails.jpg",
    alt: "Beauty treatment",
    size: "small",
  },
  {
    src: "/services/hairstyling.jpeg",
    alt: "Nail art",
    size: "large",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#faf8f5] px-6 py-24 md:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#b76578]">
              Our world
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#292323] md:text-6xl">
              A glimpse into
              <br />
              <span className="italic text-[#b76578]">
                Séréna.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#75696c]">
            Step inside our world of beauty, creativity and
            little moments of luxury.
          </p>

        </div>


        {/* Gallery */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* Left column */}
          <div className="space-y-5">

            <div className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              <div className="absolute bottom-6 left-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#292323] backdrop-blur">
                  Our studio
                </span>
              </div>
            </div>


            <div className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              <div className="absolute bottom-6 left-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#292323] backdrop-blur">
                  Hair artistry
                </span>
              </div>
            </div>

          </div>


          {/* Right column */}
          <div className="space-y-5 pt-0 md:pt-20">

            <div className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              <div className="absolute bottom-6 left-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#292323] backdrop-blur">
                  Beauty rituals
                </span>
              </div>
            </div>


            <div className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              <div className="absolute bottom-6 left-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#292323] backdrop-blur">
                  Nail artistry
                </span>
              </div>
            </div>

          </div>

        </div>


        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">
          <button className="group flex items-center gap-3 rounded-full border border-[#cfc4c6] px-7 py-3.5 text-sm font-medium text-[#292323] transition duration-300 hover:border-[#b76578] hover:bg-[#b76578] hover:text-white">

            View Instagram

            <span className="transition duration-300 group-hover:translate-x-1">
              ↗
            </span>

          </button>
        </div>

      </div>
    </section>
  );
}
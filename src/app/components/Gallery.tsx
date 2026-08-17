import Image from "next/image";

const galleryImages = [
  {
    src: "/services/haircoloring.jpeg",
    alt: "Professional hair coloring service at Séréna Beauty Studio",
    label: "Hair Coloring",
  },
  {
    src: "/services/facial.jpeg",
    alt: "Luxury facial treatment",
    label: "Facial Rituals",
  },
  {
    src: "/services/nails.jpg",
    alt: "Elegant nail art manicure",
    label: "Nail Artistry",
  },
  {
    src: "/services/hairstyling.jpeg",
    alt: "Hair styling in luxury salon",
    label: "Hair Styling",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#faf8f5] px-5 sm:px-8 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 sm:mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#b76578]">
              Our world
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#292323]">
              A glimpse into
              <br />
              <span className="italic text-[#b76578]">Séréna.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#75696c] sm:text-right">
            Step inside our world of beauty, creativity and
            little moments of luxury.
          </p>
        </div>

        {/* Gallery — 2-col masonry on md+, single col on mobile */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">

          {/* Left column */}
          <div className="space-y-4 sm:space-y-5">
            {/* Large image */}
            <div className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                width={700}
                height={900}
                className="h-[280px] sm:h-[400px] lg:h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#292323] backdrop-blur shadow">
                  {galleryImages[0].label}
                </span>
              </div>
            </div>

            {/* Small image */}
            <div className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                width={700}
                height={600}
                className="h-[220px] sm:h-[280px] lg:h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#292323] backdrop-blur shadow">
                  {galleryImages[1].label}
                </span>
              </div>
            </div>
          </div>

          {/* Right column — offset on desktop for masonry feel */}
          <div className="space-y-4 sm:space-y-5 md:pt-16 lg:pt-20">
            {/* Small image */}
            <div className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                width={700}
                height={600}
                className="h-[220px] sm:h-[280px] lg:h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#292323] backdrop-blur shadow">
                  {galleryImages[2].label}
                </span>
              </div>
            </div>

            {/* Large image */}
            <div className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                width={700}
                height={900}
                className="h-[280px] sm:h-[400px] lg:h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#292323] backdrop-blur shadow">
                  {galleryImages[3].label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-[#cfc4c6] px-7 py-3.5 text-sm font-medium text-[#292323] transition duration-300 hover:border-[#b76578] hover:bg-[#b76578] hover:text-white"
          >
            View Instagram
            <span className="transition duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
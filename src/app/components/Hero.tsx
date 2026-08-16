export default function Hero() {
  return (
    <section className="bg-[#faf8f5] px-8 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left side */}
        <div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#b76578]">
            Beauty • Style • Confidence
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-tight text-[#292323] md:text-7xl">
            Your beauty,
            <br />
            <span className="italic text-[#b76578]">
              our passion.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#75696c]">
            Discover a space where beauty meets relaxation.
            From elegant hair styling to luxurious treatments,
            we are here to make you feel your absolute best.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-full bg-[#292323] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#b76578]">
              Book Appointment
            </button>

            <button className="rounded-full border border-[#cfc4c6] px-7 py-3.5 text-sm font-medium text-[#292323] transition duration-300 hover:border-[#b76578] hover:text-[#b76578]">
              Explore Services
            </button>

          </div>

        </div>

        {/* Right side */}
        <div className="relative">

          {/* Main image */}
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/salon.jpeg"
              alt="Luxury salon"
              className="h-[550px] w-full object-cover"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-6 py-5 shadow-xl">
            <p className="text-xs uppercase tracking-widest text-[#a18d91]">
              Experience
            </p>

            <p className="mt-1 font-serif text-xl text-[#292323]">
              Beauty & Relaxation
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
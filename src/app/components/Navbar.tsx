export default function Navbar() {
  return (
    <nav className="w-full bg-[#faf8f5]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3d6dc]">
            <span className="text-lg font-serif text-[#8f4a5c]">
              S
            </span>
          </div>

          <div>
            <h1 className="font-serif text-2xl tracking-wide text-[#292323]">
              SÉRÉNA
            </h1>

            <p className="text-[9px] tracking-[0.35em] text-[#9b777f]">
              BEAUTY STUDIO
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">

          <a
            href="#home"
            className="group relative text-sm text-[#292323]"
          >
            Home
            <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#b76578] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#services"
            className="group relative text-sm text-[#6f6265] transition hover:text-[#b76578]"
          >
            Services
            <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#b76578] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#about"
            className="group relative text-sm text-[#6f6265] transition hover:text-[#b76578]"
          >
            About
            <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#b76578] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#gallery"
            className="group relative text-sm text-[#6f6265] transition hover:text-[#b76578]"
          >
            Gallery
            <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#b76578] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#contact"
            className="group relative text-sm text-[#6f6265] transition hover:text-[#b76578]"
          >
            Contact
            <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#b76578] transition-all duration-300 group-hover:w-full" />
          </a>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-5">

          {/* Phone */}
          <div className="hidden text-right lg:block">
            <p className="text-[10px] uppercase tracking-widest text-[#a18d91]">
              Bookings
            </p>

            <p className="text-sm font-medium text-[#292323]">
              +91 98765 43210
            </p>
          </div>

          {/* Button */}
          <button className="group relative overflow-hidden rounded-full bg-[#292323] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#b76578] hover:shadow-xl hover:shadow-[#b76578]/20">
            <span className="relative z-10">
              Book Appointment
            </span>
          </button>

          {/* Mobile menu */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ded4d5] md:hidden">
            <div className="space-y-1.5">
              <span className="block h-[1px] w-5 bg-[#292323]" />
              <span className="block h-[1px] w-5 bg-[#292323]" />
              <span className="block h-[1px] w-3 bg-[#292323]" />
            </div>
          </button>

        </div>

      </div>
    </nav>
  );
}
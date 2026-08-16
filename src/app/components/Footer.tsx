export default function Footer() {
  return (
    <footer className="bg-[#292323] px-6 pb-8 pt-20 text-white md:px-10">

      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <h2 className="font-serif text-4xl tracking-wide">
              SÉRÉNA<span className="text-[#d8a9b4]">.</span>
            </h2>

            <p className="mt-2 text-[9px] uppercase tracking-[0.4em] text-[#d8a9b4]">
              Beauty Studio
            </p>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
              A modern beauty studio created for slow moments,
              beautiful transformations and feeling your absolute best.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs transition hover:border-[#d8a9b4] hover:bg-[#d8a9b4] hover:text-[#292323]"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs transition hover:border-[#d8a9b4] hover:bg-[#d8a9b4] hover:text-[#292323]"
              >
                FB
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs transition hover:border-[#d8a9b4] hover:bg-[#d8a9b4] hover:text-[#292323]"
              >
                PI
              </a>

            </div>

          </div>


          {/* Explore */}
          <div>

            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[#d8a9b4]">
              Explore
            </h3>

            <div className="mt-6 space-y-4">

              <a
                href="#home"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#services"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                Services
              </a>

              <a
                href="#about"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                About us
              </a>

              <a
                href="#gallery"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                Gallery
              </a>

            </div>

          </div>


          {/* Visit */}
          <div>

            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[#d8a9b4]">
              Visit us
            </h3>

            <div className="mt-6 text-sm leading-7 text-white/60">
              <p>
                24 Rose Avenue
              </p>

              <p>
                Amritsar, Punjab
              </p>

              <p>
                India
              </p>
            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[#d8a9b4]">
              Get in touch
            </h3>

            <div className="mt-6 space-y-4">

              <a
                href="tel:+919876543210"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@serenabeauty.com"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                hello@serenabeauty.com
              </a>

            </div>

          </div>

        </div>


        {/* Big CTA */}
        <div className="border-b border-white/10 py-16">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">

            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Your next beautiful
              <br />
              <span className="italic text-[#d8a9b4]">
                moment awaits.
              </span>
            </h2>

            <a
              href="#contact"
              className="flex shrink-0 items-center gap-3 rounded-full bg-[#f3d6dc] px-7 py-3.5 text-sm font-medium text-[#292323] transition hover:bg-white"
            >
              Book Now
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 pt-7 text-[10px] uppercase tracking-[0.15em] text-white/30 md:flex-row">

          <p>
            © 2026 Séréna Beauty Studio
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </a>

          </div>

          <p>
            Made with care
          </p>

        </div>

      </div>

    </footer>
  );
}
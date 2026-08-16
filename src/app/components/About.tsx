export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 md:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top heading */}
        <div className="mb-16 flex items-center gap-5">
          <span className="h-px w-12 bg-[#b76578]" />

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b76578]">
            Our story
          </p>
        </div>


        {/* Main content */}
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/interior.jpeg"
                alt="Salon interior"
                className="h-[550px] w-full object-cover"
              />
            </div>

            {/* Floating experience card */}
            <div className="absolute -bottom-8 -right-5 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#f3d6dc] text-center shadow-lg md:-right-8">
              <span className="font-serif text-3xl text-[#8f4a5c]">
                10+
              </span>

              <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8f4a5c]">
                Years of
                <br />
                experience
              </span>
            </div>

          </div>


          {/* Content */}
          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#a18d91]">
              More than a salon
            </p>

            <h2 className="max-w-2xl font-serif text-5xl leading-[1.05] text-[#292323] md:text-6xl">
              Beauty is not just
              <br />
              how you <span className="italic text-[#b76578]">look.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#75696c]">
              We believe beauty is about how you feel when you
              walk out of our doors. Our studio was created as a
              calm, welcoming space where you can slow down,
              switch off and spend a little time taking care of
              yourself.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#75696c]">
              Every appointment is personal. From the first
              consultation to the final touch, our team focuses
              on understanding you, your style and what makes
              you feel confident.
            </p>


            {/* Signature */}
            <div className="mt-10">
              <p className="font-serif text-3xl italic text-[#8f4a5c]">
                Séréna
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#a18d91]">
                Founder & Creative Director
              </p>
            </div>

          </div>

        </div>


        {/* Statistics */}
        <div className="mt-24 grid border-y border-[#e7dfe0] py-10 md:grid-cols-3">

          <div className="border-b border-[#e7dfe0] pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">
            <p className="font-serif text-4xl text-[#292323]">
              10+
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#a18d91]">
              Years of experience
            </p>
          </div>


          <div className="border-b border-[#e7dfe0] py-8 md:border-b-0 md:border-r md:px-10 md:py-0">
            <p className="font-serif text-4xl text-[#292323]">
              5K+
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#a18d91]">
              Happy clients
            </p>
          </div>


          <div className="pt-8 md:pl-10 md:pt-0">
            <p className="font-serif text-4xl text-[#292323]">
              4.9
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#a18d91]">
              Average rating
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
import Navbar from  "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import About from "@/app/components/About";
import Gallery from "@/app/components/Gallery";
import Testinomials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testinomials />
      <Footer />
      <main>
       
      </main>
    </>
  );
}
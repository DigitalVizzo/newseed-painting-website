import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Reviews from '@/components/Reviews';
import Areas from '@/components/Areas';
import Gallery from '@/components/Gallery';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Reviews />
        <Gallery />
        <Areas />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

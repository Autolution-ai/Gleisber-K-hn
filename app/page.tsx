import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import References from '@/components/References';
import About from '@/components/About';
import CtaSection from '@/components/CtaSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <References />
        <About />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

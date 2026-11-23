import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './sections/AboutSection';
import ProductsSection from './sections/ProductsSection';
import ApplicationsSection from './sections/ApplicationsSection';
import CapabilitiesSection from './sections/CapabilitiesSection';
import MarketsSection from './sections/MarketsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ApplicationsSection />
      <CapabilitiesSection />
      <MarketsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

// app/page.tsx
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WorkProcessSection from '../components/WorkProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import AvatarGrid from '../components/AvatarGrid'; // <- import your new team section
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WorkProcessSection />
      <PortfolioSection />

      {/* Team Section */}
      <section className="py-16 bg-vermaxx-offwhite">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <AvatarGrid />
      </section>

      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
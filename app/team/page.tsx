import ServicesSection from '../../components/ServicesSection';

export default function ServicesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-3 text-gray-700">Outcome-driven packages designed to scale your business.</p>
      <div className="mt-8">
        <ServicesSection />
      </div>
    </div>
  );
}
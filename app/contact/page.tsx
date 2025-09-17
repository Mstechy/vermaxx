import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-gray-700">Let's talk about growing your business.</p>
      <div className="mt-8 max-w-2xl">
        <ContactForm />
      </div>
    </div>
  );
}
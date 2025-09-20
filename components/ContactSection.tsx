import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-vermaxx-offwhite to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Form Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16">
          <h2 className="text-4xl font-extrabold text-vermaxx-green mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Have a project, question, or idea? Send us a message and our team will guide you every step.
          </p>

          <ContactForm />

          <div className="mt-8">
            <p className="text-gray-600">Prefer a direct conversation?</p>
            <a
              href="/book"
              className="inline-block mt-3 px-8 py-3 bg-vermaxx-green text-white font-semibold rounded-xl hover:bg-vermaxx-copper transition duration-300"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>

        {/* Right: Illustration / Image */}
        <div className="relative flex justify-center">
          <img
            src="/contact-illustration.png" // <-- place your image in /public folder
            alt="Contact Illustration"
            className="rounded-3xl shadow-xl w-full h-auto object-cover"
          />
        </div>

      </div>

      {/* Footer Info */}
      <div className="mt-16 text-center text-gray-700 space-y-3">
        <p>📞 7016323724</p>
        <p>✉vermaxxdigital@outlook.com</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="https://facebook.com" className="hover:text-vermaxx-green transition">Facebook</a>
          <a href="https://instagram.com" className="hover:text-vermaxx-green transition">Instagram</a>
          <a href="https://twitter.com" className="hover:text-vermaxx-green transition">Twitter</a>
        </div>
      </div>
    </section>
  );
}
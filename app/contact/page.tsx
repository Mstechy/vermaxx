import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <section className="relative bg-gradient-to-b from-vermaxx-offwhite to-white py-24 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-vermaxx-green opacity-10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-72 h-72 bg-vermaxx-copper opacity-10 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Column: Form Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 transform transition-transform hover:scale-[1.01] duration-300">
          <h1 className="text-4xl md:text-5xl font-extrabold text-vermaxx-green mb-4">
            Let’s Build Something Amazing
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Whether you’re a business, learner, or creative, send us a message and we’ll guide you to grow online.
          </p>

          <ContactForm />

          {/* CTA Button */}
          <div className="mt-8">
            <p className="text-gray-600">Prefer talking directly?</p>
            <a
              href="/book"
              className="mt-3 inline-block px-8 py-3 bg-vermaxx-green text-white font-semibold rounded-xl shadow-lg hover:bg-vermaxx-copper hover:scale-105 transition duration-300"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="flex justify-center relative">
          <img
            src="/contact-illustration.png" // Add your illustration in /public
            alt="Contact Illustration"
            className="rounded-3xl shadow-xl object-cover w-full max-w-md lg:max-w-full transform transition-transform hover:scale-105 duration-300"
          />
        </div>
      </div>

      {/* Bottom Contact Info */}
      <div className="mt-20 text-center space-y-3 text-gray-700 relative z-10">
        <p className="text-lg font-medium">📞 +234 808 965 0396</p>
        <p className="text-lg font-medium">✉ info@vermaxx.com</p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="https://facebook.com" className="hover:text-vermaxx-green transition duration-300">Facebook</a>
          <a href="https://instagram.com" className="hover:text-vermaxx-green transition duration-300">Instagram</a>
          <a href="https://twitter.com" className="hover:text-vermaxx-green transition duration-300">Twitter</a>
        </div>
      </div>
    </section>
  );
}
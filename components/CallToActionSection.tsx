export default function CallToActionSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-vermaxx-green to-vermaxx-teal text-white text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
        Ready to Take the Next Step?
      </h2>
      <p className="text-lg mb-8 max-w-prose mx-auto">
        Whether you want to grow your business or learn the skills to create it yourself, we have a solution for you.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a href="/book" className="bg-white text-vermaxx-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Book Consultation
        </a>
        <a href="/courses" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-vermaxx-teal transition">
          Enroll in a Course
        </a>
      </div>
    </section>
  );
}
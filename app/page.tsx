export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold text-vermaxx-green">
            Maximum Growth. Maximum Impact.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Helping businesses scale online through creative, technical, and strategic digital solutions.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/services" className="bg-vermaxx-green text-white px-6 py-3 rounded-lg">Our Services</a>
            <a href="/book" className="border border-vermaxx-green text-vermaxx-green px-6 py-3 rounded-lg">Book Consultation</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-vermaxx-offwhite py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-vermaxx-green">About Vermaxx</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            Vermaxx is a growth-driven agency that combines design, engineering, and strategy to help businesses thrive online.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-vermaxx-teal/10 py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-vermaxx-green">Our Services</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Service cards */}
            <div className="bg-white p-6 rounded-lg shadow">Web Development</div>
            <div className="bg-white p-6 rounded-lg shadow">SEO Optimization</div>
            <div className="bg-white p-6 rounded-lg shadow">Creative Design</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sky-100 py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold">Ready to Grow?</h2>
          <p className="mt-2 text-gray-700">Book a consultation with us today.</p>
          <a href="/book" className="bg-vermaxx-copper text-white px-6 py-3 mt-4 inline-block rounded-lg">
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
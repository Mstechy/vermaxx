export default function BookPage() {
  return (
    <div className="bg-vermaxx-offwhite min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4 py-20">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-vermaxx-green">
            Book a Growth Call
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a free consultation with the Vermaxx team and discover how we
            can help your business achieve maximum growth and impact.
          </p>
        </div>

        {/* Booking Form (placeholder) */}
        <div className="mt-12 bg-white shadow-lg rounded-xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-vermaxx-green focus:ring focus:ring-vermaxx-green/30"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-vermaxx-green focus:ring focus:ring-vermaxx-green/30"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Date
              </label>
              <input
                type="date"
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-vermaxx-green focus:ring focus:ring-vermaxx-green/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-vermaxx-green focus:ring focus:ring-vermaxx-green/30"
                placeholder="Tell us more about your goals..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-vermaxx-green text-white font-semibold py-3 rounded-lg hover:bg-vermaxx-teal transition"
            >
              Submit Booking Request
            </button>
          </form>
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Prefer a quick setup? Book directly via WhatsApp.
          </p>
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            className="mt-4 inline-block bg-vermaxx-copper text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
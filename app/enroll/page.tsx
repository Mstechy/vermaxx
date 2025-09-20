export default function EnrollPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-vermaxx-offwhite px-6 py-20">
      {/* Heading */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
          Enroll in a Course
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Whether you’re growing your business or learning new skills, Vermaxx has
          a course designed for <span className="text-vermaxx-green font-semibold">your success</span>.
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 md:p-10 space-y-6 border border-gray-100">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="mt-2 w-full rounded-lg border-gray-300 shadow-sm focus:ring-vermaxx-green focus:border-vermaxx-green px-4 py-3"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="mt-2 w-full rounded-lg border-gray-300 shadow-sm focus:ring-vermaxx-green focus:border-vermaxx-green px-4 py-3"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
          <input
            type="tel"
            className="mt-2 w-full rounded-lg border-gray-300 shadow-sm focus:ring-vermaxx-green focus:border-vermaxx-green px-4 py-3"
            placeholder="+234 812 345 6789"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Course of Interest</label>
          <select
            className="mt-2 w-full rounded-lg border-gray-300 shadow-sm focus:ring-vermaxx-green focus:border-vermaxx-green px-4 py-3"
            required
          >
            <option value="">Select a course</option>
            <option>Web Development</option>
            <option>SEO & Growth</option>
            <option>Design & Branding</option>
            <option>Digital Marketing</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button
            type="submit"
            className="flex-1 bg-vermaxx-green text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-700 transition"
          >
            Enroll Now
          </button>
          <a
            href="https://wa.me/2348123456789?text=I%20want%20to%20enroll%20in%20a%20Vermaxx%20course"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-vermaxx-green border-2 border-vermaxx-green font-semibold py-3 px-6 rounded-lg shadow hover:bg-vermaxx-green hover:text-white transition text-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      </form>

      {/* Contact Info */}
      <div className="max-w-3xl text-center mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
        <p className="text-gray-600 mb-2">📧 Email: <a href="vermaxxdigital@outlook.com" className="text-vermaxx-green font-medium">vermaxxdigital@outlook.com</a></p>
        <p className="text-gray-600 mb-2">📱 WhatsApp: <a href="https://wa.me/7016323724" className="text-vermaxx-green font-medium">+2347016323724</a></p>
        <p className="text-gray-600">🏢 Office: Ilorin, Nigeria</p>
      </div>
    </section>
  );
}
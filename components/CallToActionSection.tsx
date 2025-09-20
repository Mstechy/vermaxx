import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-vermaxx-green to-vermaxx-teal text-white text-center">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Let’s Build Something Great Together
        </h2>
        <p className="text-lg mb-10 leading-relaxed opacity-90">
          From scaling your business online to mastering the skills that drive 
          the digital world, Vermaxx gives you the tools, strategy, and guidance 
          to reach your next level.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/book"
            className="bg-white text-vermaxx-green px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition text-center"
          >
            Book a Free Consultation
          </Link>

          <Link
            href="/enroll"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-vermaxx-teal transition text-center"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
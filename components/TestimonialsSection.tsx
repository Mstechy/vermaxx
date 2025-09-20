type Testimonial = {
  id: string;
  name: string;
  role: string;
  feedback: string;
  image?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Adeola A.",
    role: "CEO, TechStartup",
    feedback:
      "Vermaxx built our website and SEO strategy. Our traffic increased by 60% in just 3 months!",
    image: "/testimonials/adeola.jpg",
  },
  {
    id: "t2",
    name: "Chinedu M.",
    role: "Web Development Student",
    feedback:
      "The Web Development Mastery course gave me real skills. I built my first portfolio site confidently.",
    image: "/testimonials/chinedu.jpg",
  },
  {
    id: "t3",
    name: "Fatima R.",
    role: "Founder, E-Shop",
    feedback:
      "The team’s creative design solutions completely transformed our brand identity. Highly recommended!",
    image: "/testimonials/fatima.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-vermaxx-offwhite to-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-vermaxx-green mb-4">
          Trusted by Clients & Learners Worldwide
        </h2>
        <p className="text-gray-700 max-w-prose mx-auto mb-12">
          Hear from those who have worked with us or taken our courses —
          real feedback, real results.
        </p>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 ${
                i === 1 ? "md:scale-105 border border-vermaxx-green" : ""
              }`}
            >
              {t.image && (
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 mx-auto ring-2 ring-vermaxx-green"
                />
              )}

              {/* Feedback */}
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>

              {/* Rating */}
              <div className="flex justify-center mb-3 text-vermaxx-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Author */}
              <div className="font-semibold text-vermaxx-green">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
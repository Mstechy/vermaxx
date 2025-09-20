import Image from "next/image";

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
    name: "Victoria W.",
    role: "Web Development Student",
    feedback:
      "The Web Development Mastery course gave me real skills. I built my first portfolio site confidently.",
    image: "/testimonials/victoria.jpg",
  },
  {
    id: "t3",
    name: "Clayla R.",
    role: "Founder, E-Shop",
    feedback:
      "The team’s creative design solutions completely transformed our brand identity. Highly recommended!",
    image: "/testimonials/clayla.jpg",
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
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="80px"
                    className="rounded-full object-cover ring-2 ring-vermaxx-green"
                  />
                </div>
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
type Testimonial = {
  id: string;
  name: string;
  role: string;
  feedback: string;
  image?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Adeola A.',
    role: 'CEO, TechStartup',
    feedback: 'Vermaxx built our website and SEO strategy. Our traffic increased by 60% in 3 months!',
    image: '/testimonials/adeola.jpg',
  },
  {
    id: 't2',
    name: 'Chinedu M.',
    role: 'Web Development Student',
    feedback: 'The Web Development Mastery course gave me real skills. I built my first portfolio site confidently.',
    image: '/testimonials/chinedu.jpg',
  },
  {
    id: 't3',
    name: 'Fatima R.',
    role: 'Founder, E-Shop',
    feedback: 'The team’s creative design solutions completely transformed our brand identity.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-vermaxx-offwhite max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-vermaxx-green mb-4">
        Trusted by Clients & Learners Worldwide
      </h2>
      <p className="text-gray-700 max-w-prose mx-auto mb-12">
        Hear from those who have worked with us or taken our courses — real feedback, real results.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform text-left"
          >
            {t.image && (
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
            )}
            <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
            <div className="font-semibold text-vermaxx-green">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
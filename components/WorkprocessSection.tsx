const WORK_STEPS = [
  {
    id: 'plan',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into your goals, industry, and audience to craft a clear roadmap tailored for maximum impact.',
  },
  {
    id: 'design',
    title: 'Creative Design',
    description:
      'Our team brings ideas to life with modern, user-centered designs that blend beauty and functionality.',
  },
  {
    id: 'develop',
    title: 'Smart Development',
    description:
      'From sleek websites to robust applications, we build with precision, performance, and scalability in mind.',
  },
  {
    id: 'launch',
    title: 'Seamless Launch',
    description:
      'We test, refine, and roll out your project with zero stress—delivering polished results that just work.',
  },
  {
    id: 'grow',
    title: 'Scale & Optimize',
    description:
      'Post-launch, we track performance, refine strategies, and unlock new growth opportunities for your brand.',
  },
];

export default function WorkProcessSection() {
  return (
    <section className="py-20 px-6 bg-vermaxx-offwhite max-w-6xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-vermaxx-green mb-4">
        How We Work
      </h2>
      <p className="text-gray-700 max-w-prose mx-auto mb-12">
        Our structured workflow ensures every client achieves growth, and every learner gains real skills that last.
      </p>

      {/* Steps */}
      <div className="grid gap-8 md:grid-cols-3">
        {WORK_STEPS.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform"
          >
            <div className="text-2xl font-bold text-vermaxx-green mb-2">
              {step.title}
            </div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
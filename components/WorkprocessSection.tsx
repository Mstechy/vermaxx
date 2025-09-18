const WORK_STEPS = [
  {
    id: 'plan',
    title: 'Plan & Strategize',
    description: 'We understand your goals and outline a clear roadmap for projects or learning paths.',
  },
  {
    id: 'design',
    title: 'Design & Prototype',
    description: 'Create visually appealing and functional designs for websites or course layouts.',
  },
  {
    id: 'develop',
    title: 'Develop & Build',
    description: 'Implement features, code websites, and provide hands-on learning projects.',
  },
  {
    id: 'launch',
    title: 'Launch & Deliver',
    description: 'Deploy websites, launch campaigns, or complete courses with practical outcomes.',
  },
  {
    id: 'grow',
    title: 'Optimize & Grow',
    description: 'Measure results, refine strategies, and continue scaling your business or skills.',
  },
];

export default function WorkProcessSection() {
  return (
    <section className="py-20 px-6 bg-vermaxx-offwhite max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-vermaxx-green mb-4">
        How We Work
      </h2>
      <p className="text-gray-700 max-w-prose mx-auto mb-12">
        Our structured workflow ensures clients achieve growth and learners gain real skills efficiently.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {WORK_STEPS.map((step) => (
          <div key={step.id} className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-vermaxx-green mb-2">{step.title}</div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
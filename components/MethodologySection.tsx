export default function MethodologySection() {
  const items = [
    { title: 'Diagnose', desc: 'We identify the core growth bottleneck.' },
    { title: 'Design', desc: 'Human-first interfaces that convert.' },
    { title: 'Develop', desc: 'Reliable, measurable engineering.' },
    { title: 'Grow', desc: 'Data-driven optimization for scale.' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Our Formula for Growth</h2>
      <p className="mt-2 text-gray-700 max-w-prose">
        A pragmatic, measurable approach that ties every deliverable to growth outcomes.
      </p>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {items.map(item => (
          <div key={item.title} className="card">
            <div className="text-sm kicker">{item.title}</div>
            <h3 className="mt-2 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
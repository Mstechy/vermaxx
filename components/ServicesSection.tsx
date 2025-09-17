type Service = { id: string; title: string; short: string; owners?: string[] };

const SERVICES: Service[] = [
  { id: 'traffic', title: 'Traffic Growth Engine', short: 'Web + SEO to increase qualified visitors', owners: ['Musliu','Emmanuel'] },
  { id: 'conversion', title: 'Brand Conversion Suite', short: 'Design + Email to lift conversions', owners: ['Malik'] },
  { id: 'creative', title: 'Creative Impact Lab', short: 'Product design & full-stack builds', owners: ['Majeed'] },
];

export default function ServicesSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Services Built for Growth</h2>
      <p className="mt-2 text-gray-700 max-w-prose">Outcome-focused packages that match your objective.</p>

      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
        {SERVICES.map(s => (
          <article key={s.id} className="card">
            <div className="kicker">{s.title}</div>
            <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.short}</p>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-gray-500">Team: {s.owners?.join(', ')}</div>
              <a href="/book" className="btn-primary text-sm">Start</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
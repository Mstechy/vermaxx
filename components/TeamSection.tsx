type Member = { id: string; name: string; role: string; skills: string[] };

const MEMBERS: Member[] = [
  { id: 'm1', name: 'Musliu', role: 'Growth Engineer', skills:['Web development (intermediate)','Website promotion'] },
  { id: 'm2', name: 'Malik', role: 'Creative Strategist', skills:['Web design','Email marketing'] },
  { id: 'm3', name: 'Majeed', role: 'Innovation Architect', skills:['Creative design','Full stack development'] },
  { id: 'm4', name: 'Emmanuel', role: 'Visibility Builder', skills:['SEO','Logo design (beginner)'] },
];

export default function TeamSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold">The Vermaxx Squad</h2>
      <p className="mt-2 text-gray-700">Small, focused team — big results.</p>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {MEMBERS.map(m => (
          <div className="card" key={m.id}>
            <div className="text-lg font-semibold">{m.name}</div>
            <div className="text-sm text-gray-500">{m.role}</div>
            <ul className="mt-3 text-sm text-gray-600 space-y-1">
              {m.skills.map(s => <li key={s}>• {s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
type Service = { id: string; title: string; short: string; owners?: string[] };

const SERVICES: Service[] = [
  {
    id: 'webdev',
    title: 'Web Design & Development',
    short: 'Custom websites that are fast, responsive, and built to convert visitors into clients.',
    owners: ['Musliu', 'Emmanuel'],
  },
  {
    id: 'marketing',
    title: 'SEO & Digital Marketing',
    short: 'Boost your visibility with targeted SEO, paid ads, and content strategies that drive growth.',
    owners: ['Malik'],
  },
  {
    id: 'branding',
    title: 'Branding & Creative Design',
    short: 'From logos to full brand systems, we craft identities and visuals that stand out.',
    owners: ['Majeed'],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-vermaxx-offwhite">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Our Core Services
        </h2>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          We provide end-to-end digital solutions designed to help businesses
          grow, engage, and thrive online.
        </p>

        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="bg-white shadow-lg rounded-xl p-6 text-left border border-gray-100 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-3 text-gray-600">{s.short}</p>

              <div className="mt-6 flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  Team: {s.owners?.join(', ')}
                </span>
                <a
                  href="/book"
                  className="text-vermaxx-green font-medium hover:underline"
                >
                  Get Started →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
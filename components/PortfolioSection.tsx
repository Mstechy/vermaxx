type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  image: string; // Path to image in /public
  type: 'client' | 'learner';
  link?: string; // Optional live project or course example
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'project1',
    title: 'E-Commerce Website',
    description: 'Custom-built e-commerce platform that increased sales by 45%.',
    image: '/portfolio/ecommerce.jpg',
    type: 'client',
    link: '/work/ecommerce',
  },
  {
    id: 'project2',
    title: 'SEO Growth Project',
    description: 'Optimized website traffic and improved Google rankings.',
    image: '/portfolio/seo.jpg',
    type: 'client',
    link: '/work/seo',
  },
  {
    id: 'course1',
    title: 'Student Web Project',
    description: 'A learner-built responsive portfolio website.',
    image: '/portfolio/student-web.jpg',
    type: 'learner',
    link: '/courses/student-web',
  },
  {
    id: 'course2',
    title: 'Creative Design Mockup',
    description: 'UI/UX project completed during the Creative Design Bootcamp.',
    image: '/portfolio/design-mockup.jpg',
    type: 'learner',
    link: '/courses/design-mockup',
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-vermaxx-offwhite">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-vermaxx-green">
          Portfolio & Student Projects
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Explore our client projects and learner work — showcasing real results and hands-on skills.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
          >
            <div className="relative h-64 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="kicker text-sm font-medium uppercase text-vermaxx-green">
                {item.type === 'client' ? 'Client Project' : 'Learner Project'}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  className="inline-block mt-4 px-5 py-2 bg-vermaxx-green text-white rounded-xl font-medium hover:bg-vermaxx-copper transition duration-300"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
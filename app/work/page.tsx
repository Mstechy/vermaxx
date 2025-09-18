import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: "Project Alpha",
    category: "Web Design",
    image: "https://via.placeholder.com/600x400?text=Project+Alpha",
    problem: "Outdated landing page with poor conversion rates.",
    solution: "Redesigned the landing page with modern UI and clear CTAs.",
    impact: "Increased sales by 35% in 3 months.",
  },
  {
    title: "Project Beta",
    category: "SEO Optimization",
    image: "https://via.placeholder.com/600x400?text=Project+Beta",
    problem: "Organic traffic was stagnating for 6 months.",
    solution: "Implemented on-page SEO and content strategy.",
    impact: "Organic traffic increased by 60% in 4 months.",
  },
  {
    title: "Project Gamma",
    category: "E-commerce",
    image: "https://via.placeholder.com/600x400?text=Project+Gamma",
    problem: "High cart abandonment rates.",
    solution: "Improved checkout flow and added personalized recommendations.",
    impact: "Cart completion rate improved by 28%.",
  },
];

export default function WorkPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-2">Work / Case Studies</h1>
      <p className="text-gray-700 mb-8">Problem → Solution → Impact</p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </div>
  );
}
import ProjectCard from '../../components/ProjectCard';

export default function WorkPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Work / Case Studies</h1>
      <p className="mt-3 text-gray-700">Problem → Solution → Impact</p>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
        <ProjectCard title="Project Alpha" summary="Sales growth via landing page redesign." />
        <ProjectCard title="Project Beta" summary="Organic traffic increase from SEO." />
      </div>
    </div>
  );
}
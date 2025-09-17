export default function ProjectCard({ title, summary }: { title: string; summary?: string }) {
  return (
    <article className="card">
      <h3 className="font-semibold">{title}</h3>
      {summary && <p className="mt-2 text-sm text-gray-600">{summary}</p>}
      <div className="mt-4 flex justify-between items-center">
        <a className="text-sm font-medium text-[color:var(--ver-green)]" href="#">Read case study</a>
        <a className="btn-primary text-sm" href="/book">Book</a>
      </div>
    </article>
  );
}
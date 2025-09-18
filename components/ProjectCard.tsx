"use client";

type Project = {
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  impact: string;
};

export default function ProjectCard({ title, category, image, problem, solution, impact }: Project) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Problem:</span> {problem}</p>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Solution:</span> {solution}</p>
        <p className="text-gray-700"><span className="font-semibold">Impact:</span> {impact}</p>
      </div>
    </div>
  );
}
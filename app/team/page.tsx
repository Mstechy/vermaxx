'use client';

import ChromaGrid from '../../components/ChromaGrid';

const team = [
  {
    image: "https://i.pravatar.cc/300?img=11",
    title: "Musliu",
    subtitle: "Growth Engineer",
    handle: "@musliu",
    borderColor: "#0E3B2E",
    gradient: "linear-gradient(145deg, #0E3B2E, #4A7C76)",
    url: "#",
  },
  {
    image: "https://i.pravatar.cc/300?img=22",
    title: "Malik",
    subtitle: "Creative Strategist",
    handle: "@malik",
    borderColor: "#B67A3D",
    gradient: "linear-gradient(180deg, #B67A3D, #000)",
    url: "#",
  },
  {
    image: "https://i.pravatar.cc/300?img=33",
    title: "Majeed",
    subtitle: "Innovation Architect",
    handle: "@majeed",
    borderColor: "#4A7C76",
    gradient: "linear-gradient(145deg, #4A7C76, #000)",
    url: "#",
  },
  {
    image: "https://i.pravatar.cc/300?img=44",
    title: "Emmanuel",
    subtitle: "Visibility Builder",
    handle: "@emmanuel",
    borderColor: "#1A1A1A",
    gradient: "linear-gradient(145deg, #1A1A1A, #000)",
    url: "#",
  },
];

export default function TeamPage() {
  return (
    <section className="section bg-vermaxx-offwhite py-20">
      <h1 className="text-3xl font-heading text-center mb-12">Meet the Vermaxx Squad</h1>
      <div className="relative">
        <ChromaGrid items={team} />
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

type Member = {
  id: string;
  name: string;
  role: string;
  skills: string[];
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

const MEMBERS: Member[] = [
  {
    id: 'm1',
    name: 'Musliu',
    role: 'Growth Engineer',
    skills: ['Web development (intermediate)', 'Website promotion'],
    image: 'https://i.pravatar.cc/300?img=11',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 'm2',
    name: 'Malik',
    role: 'Creative Strategist',
    skills: ['Web design', 'Email marketing'],
    image: 'https://i.pravatar.cc/300?img=12',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 'm3',
    name: 'Majeed',
    role: 'Innovation Architect',
    skills: ['Creative design', 'Full stack development'],
    image: 'https://i.pravatar.cc/300?img=13',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 'm4',
    name: 'Emmanuel',
    role: 'Visibility Builder',
    skills: ['SEO', 'Logo design (beginner)'],
    image: 'https://i.pravatar.cc/300?img=14',
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-vermaxx-offwhite via-white to-vermaxx-teal/10">
      <div className="container text-center">
        <h2 className="text-4xl font-bold text-vermaxx-charcoal">The Vermaxx Squad</h2>
        <p className="mt-2 text-lg text-gray-600">Small, focused team — big results.</p>

        {/* Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 transition-all"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-vermaxx-green">{m.name}</h3>
                <p className="text-gray-500">{m.role}</p>

                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  {m.skills.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>

                {/* Socials */}
                <div className="mt-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {m.socials.github && (
                    <a href={m.socials.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-gray-500 hover:text-vermaxx-green text-lg" />
                    </a>
                  )}
                  {m.socials.linkedin && (
                    <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-gray-500 hover:text-vermaxx-green text-lg" />
                    </a>
                  )}
                  {m.socials.twitter && (
                    <a href={m.socials.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-gray-500 hover:text-vermaxx-green text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
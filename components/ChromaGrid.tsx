'use client';
import { motion, Variants } from 'framer-motion';

type Item = {
  image: string;   // Avatar URL
  title: string;   
  subtitle?: string;
  handle?: string;
  url: string;     
  borderColor?: string;
  gradient?: string;
};

export default function ChromaGrid({ items }: { items: Item[] }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center items-center gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map((item, i) => (
        <motion.a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={card}
          className="w-48 p-4 rounded-xl shadow-lg bg-white hover:scale-105 hover:shadow-xl transition-transform flex flex-col items-center"
          style={{
            border: item.borderColor ? `3px solid ${item.borderColor} `: undefined,
            backgroundImage: item.gradient || undefined,
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 rounded-full mb-3 border-2 border-white shadow"
          />
          <h3 className="text-lg font-semibold text-gray-800 text-center">{item.title}</h3>
          {item.subtitle && <p className="text-sm text-gray-600 text-center">{item.subtitle}</p>}
          {item.handle && <p className="text-xs text-gray-400 text-center">{item.handle}</p>}
        </motion.a>
      ))}
    </motion.div>
  );
}
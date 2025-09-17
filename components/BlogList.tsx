const posts = [
  { title: "5 Strategies for Online Growth", date: "Sep 2025", link: "#" },
  { title: "The Future of Web Development", date: "Aug 2025", link: "#" },
  { title: "SEO Myths You Should Ignore", date: "Jul 2025", link: "#" },
];

export default function BlogList() {
  return (
    <section className="py-20 px-6 bg-brand-offwhite text-center">
      <h2 className="text-4xl font-heading text-brand-green mb-6">From Our Blog</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-heading mb-2">{post.title}</h3>
            <p className="text-sm text-brand-textSecondary mb-4">{post.date}</p>
            <a
              href={post.link}
              className="text-brand-gold hover:text-brand-teal font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
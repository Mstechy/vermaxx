export default function AboutSection() {
  return (
    <section className="py-20 px-6 text-center max-w-5xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-4xl font-heading text-vermaxx-green mb-6">
        Who We Are
      </h2>

      {/* Story-driven intro */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        At Vermaxx, we don’t just build websites — we build momentum.  
        We exist to help brands grow with digital tools that actually work, 
        and to guide learners who want to master real-world tech skills.  
        Our belief is simple: when creativity meets strategy, growth follows.
      </p>

      {/* 2-column vibe */}
      <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-vermaxx-green mb-3">For Businesses</h3>
          <p className="text-gray-600">
            From startups finding their voice to established companies seeking scale, 
            we design high-performing websites, SEO strategies, and branding systems 
            that bring measurable results. Growth isn’t a buzzword here — it’s the outcome.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-vermaxx-green mb-3">For Learners</h3>
          <p className="text-gray-600">
            Our courses in web development, design, and digital marketing are built 
            around doing, not just theory. Every learner leaves with skills, confidence, 
            and a portfolio that proves their capability to employers and clients.
          </p>
        </div>
      </div>

      {/* Social proof / credibility */}
      <div className="mt-12 text-gray-600">
        <p className="text-lg font-medium">
          🚀 Trusted by <span className="text-vermaxx-green font-semibold">50+ clients</span> 
          and <span className="text-vermaxx-green font-semibold">200+ learners</span> who’ve seen 
          real results with us.
        </p>
      </div>
    </section>
  );
}
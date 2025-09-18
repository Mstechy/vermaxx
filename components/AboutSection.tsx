export default function AboutSection() {
  return (
    <section className="py-20 px-6 text-center max-w-4xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-4xl font-heading text-vermaxx-green mb-6">
        About Vermaxx
      </h2>

      {/* Benefit-driven Description */}
      <p className="text-lg text-gray-700 leading-relaxed">
        At Vermaxx, we empower businesses and individuals to thrive online. 
        For clients, we create scalable, high-performing websites and digital solutions that drive growth. 
        For learners, we offer hands-on courses in web development, design, and digital skills — helping ambitious creators turn ideas into results.
      </p>

      {/* Optional Credibility / Mini Stats */}
      <p className="mt-4 text-gray-600 opacity-90">
        Trusted by startups, entrepreneurs, and learners to deliver professional results and meaningful impact.
      </p>
    </section>
  );
}
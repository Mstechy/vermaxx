export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[color:var(--ver-green)] to-[color:var(--ver-teal)] text-white">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative container">
        <div className="max-w-3xl text-center mx-auto">
          
          {/* Brand */}
          <div className="text-sm uppercase tracking-widest opacity-80">
            Maximum Growth Maximum Impact.
          </div>

          {/* Headline */}
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Digital Solutions & Skills That Elevate Your Business
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg opacity-90 leading-relaxed">
            From custom websites to result-driven marketing and expert-led courses, 
            <span className="font-semibold"> Vermaxx </span> empowers companies and individuals 
            to grow, stand out, and succeed in the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            {/* Primary Button with gradient */}
            <a
              href="/work"
              className="bg-gradient-to-r from-[color:var(--ver-green)] to-[color:var(--ver-teal)] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition"
            >
              View Case Studies
            </a>

            {/* Secondary Button with subtle depth */}
            <a
              href="/courses"
              className="bg-white/10 border border-white/70 px-6 py-3 rounded-lg font-semibold shadow hover:bg-white/20 hover:shadow-md transition"
            >
              Enroll in a Course
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
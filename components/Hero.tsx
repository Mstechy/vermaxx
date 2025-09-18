export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-[color:var(--ver-green)] to-[color:var(--ver-teal)] text-white">
      <div className="container">
        <div className="max-w-3xl text-center">
          
          {/* Brand / Kicker */}
          <div className="kicker text-sm uppercase tracking-widest opacity-80">Vermaxx</div>

          {/* Headline */}
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Learn, Create & Grow — <br className="hidden md:block" />
            Professional Web Solutions & Courses
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg opacity-90 leading-relaxed">
            Helping businesses scale online and empowering learners to master web development, design, and digital skills — all with creative, technical, and strategic solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <a href="/work" className="btn-primary hover:scale-105 transition-transform">
              See Our Work
            </a>
            <a href="/courses" className="btn-ghost hover:bg-white hover:text-[color:var(--ver-green)] transition-all">
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
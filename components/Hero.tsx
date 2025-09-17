export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-[color:var(--ver-green)] to-[color:var(--ver-teal)] text-white">
      <div className="container">
        <div className="max-w-3xl">
          <div className="kicker">Vermaxx</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Maximum Growth. Maximum Impact.</h1>
          <p className="mt-4 text-lg opacity-90">
            We help businesses scale online through creative, technical, and strategic digital solutions.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/work" className="btn-primary">See Our Work</a>
            <a href="/book" className="btn-ghost">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
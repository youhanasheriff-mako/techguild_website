import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Welcome to <span className="text-primary">TechGuild</span>
          </h1>
          <p className="mt-3 text-xl text-[color-mix(in_srgb,var(--color-foreground),#000_25%)]">
            Your Hub for Tech Excellence
          </p>
          <p className="mt-6 text-base sm:text-lg max-w-2xl">
            Join a thriving community where technology professionals connect, learn, and grow together. From cutting-edge insights to hands-on workshops, TechGuild is where innovation meets collaboration.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Join Our LinkedIn Community
            </a>
            <Link
              href="#events"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-semibold hover:bg-[color-mix(in_srgb,var(--color-card),#000_3%)]"
            >
              Explore Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


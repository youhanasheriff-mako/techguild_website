import Link from "next/link";

export function CallToAction() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Level Up Your Tech Journey?</h2>
            <p className="mt-4 text-base sm:text-lg">
              Join hundreds of tech professionals who are already part of TechGuild. Whether you&apos;re a seasoned developer or just starting your tech journey, there&apos;s a place for you in our community.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Join LinkedIn Group
              </a>
              <Link
                href="#events"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-semibold hover:bg-[color-mix(in_srgb,var(--color-card),#000_3%)]"
              >
                View Event Calendar
              </Link>
              <form className="w-full sm:w-auto sm:ml-auto flex gap-2" action="/api/newsletter/subscribe" method="post">
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="flex-1 min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-primary),#fff_30%)]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-[color-mix(in_srgb,var(--color-accent),#000_7%)] px-4 py-2 text-sm font-semibold text-black dark:text-white hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">What Our Members Say</h2>
          <p className="mt-3 text-[var(--color-muted)]">Stories of growth, connection, and impact.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <blockquote className="text-sm">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium">
                {t.name}
                <span className="block text-xs text-[var(--color-muted)]">{t.role}{t.company ? ` • ${t.company}` : ""}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


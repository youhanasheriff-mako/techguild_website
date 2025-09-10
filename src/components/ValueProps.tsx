import { valueProps } from "@/lib/data";

export function ValueProps() {
  return (
    <section id="why" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Why Join TechGuild?</h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Grow your network, expand your skills, and make an impact.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-sm">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


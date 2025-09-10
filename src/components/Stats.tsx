import { communityStats } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-xl border border-border bg-card p-6">
          {communityStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


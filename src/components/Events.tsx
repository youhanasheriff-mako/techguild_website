import { CalendarDays, Clock, MapPin } from "lucide-react";
import { upcomingEvents } from "@/lib/data";

export function Events() {
  return (
    <section id="events" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Next Events</h2>
            <p className="mt-3 text-[var(--color-muted)]">Don’t miss our upcoming sessions.</p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-[color-mix(in_srgb,var(--color-card),#000_3%)]"
          >
            View Event Calendar
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((ev) => (
            <div key={ev.id} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{ev.title}</h3>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
                <div className="inline-flex items-center gap-2"><CalendarDays size={16} />{new Date(ev.date).toLocaleDateString()}</div>
                <div className="inline-flex items-center gap-2"><Clock size={16} />{ev.time}</div>
                <div className="inline-flex items-center gap-2"><MapPin size={16} />{ev.format}</div>
              </div>
              <p className="mt-3 text-sm">{ev.description}</p>
              <div className="mt-4">
                <a
                  href={ev.registrationUrl}
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-semibold shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Register
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { MessageSquare, BookOpen, CalendarRange, Share2 } from "lucide-react";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "LinkedIn Community",
    points: [
      "Exclusive group for members",
      "Daily discussions on trending tech",
      "Jobs and career guidance",
      "Peer-to-peer problem solving",
    ],
  },
  {
    icon: BookOpen,
    title: "Tech Blogs & Resources",
    points: [
      "Weekly articles and tutorials",
      "Industry insights & trends",
      "Case studies and success stories",
      "Curated learning resources",
    ],
  },
  {
    icon: CalendarRange,
    title: "Events & Workshops",
    points: [
      "Monthly tech talks & webinars",
      "Hands-on coding workshops",
      "Annual tech conference",
      "Networking meetups",
    ],
  },
  {
    icon: Share2,
    title: "Knowledge Sharing",
    points: [
      "Expert-led masterclasses",
      "Open-source collaborations",
      "Documentation library",
      "Best practices repository",
    ],
  },
] as const;

export function Features() {
  return (
    <section id="offer" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">What We Offer</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-[color-mix(in_srgb,var(--color-primary),#fff_85%)] p-2 ring-1 ring-border">
                  <f.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">
                    {f.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


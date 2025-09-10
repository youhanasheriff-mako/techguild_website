export type EventItem = {
  id: string;
  title: string;
  date: string; // ISO string
  time: string; // human readable
  format: "Virtual" | "In-person" | "Hybrid";
  description: string;
  registrationUrl: string;
};

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  authorAvatar?: string;
  date: string; // ISO
  excerpt: string;
  url: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
};

export const communityStats = [
  { label: "Members", value: "1,200+" },
  { label: "Events Conducted", value: "35" },
  { label: "Blog Posts", value: "90+" },
  { label: "Teams Represented", value: "18" },
];

export const upcomingEvents: EventItem[] = [
  {
    id: "ai-summit",
    title: "AI Engineering Summit",
    date: "2025-10-05",
    time: "10:00 AM – 4:00 PM EAT",
    format: "Hybrid",
    description:
      "A deep-dive into productionizing LLMs: evaluation, observability, and safety.",
    registrationUrl: "#",
  },
  {
    id: "perf-workshop",
    title: "Web Performance Workshop",
    date: "2025-10-18",
    time: "6:00 PM – 8:00 PM EAT",
    format: "Virtual",
    description:
      "Hands-on session optimizing Core Web Vitals with real-world case studies.",
    registrationUrl: "#",
  },
  {
    id: "k8s-bootcamp",
    title: "Kubernetes Bootcamp",
    date: "2025-11-02",
    time: "9:00 AM – 3:00 PM EAT",
    format: "In-person",
    description:
      "From zero to production-ready clusters with GitOps and best practices.",
    registrationUrl: "#",
  },
  {
    id: "monthly-meetup",
    title: "TechGuild Monthly Meetup",
    date: "2025-11-15",
    time: "5:30 PM – 7:30 PM EAT",
    format: "In-person",
    description: "Lightning talks, networking, and open Q&A across disciplines.",
    registrationUrl: "#",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "edge-ai",
    title: "Deploying Edge AI: Patterns and Pitfalls",
    author: "Alex Kim",
    date: "2025-09-01",
    excerpt:
      "We explore deployment strategies for running lightweight models on the edge with robust monitoring.",
    url: "#",
  },
  {
    id: "platform-engineering",
    title: "Platform Engineering for Speed and Safety",
    author: "Priya Nair",
    date: "2025-08-20",
    excerpt:
      "A practical guide to building golden paths, paved roads, and developer platforms that scale.",
    url: "#",
  },
  {
    id: "data-contracts",
    title: "Data Contracts: Aligning Teams with Guarantees",
    author: "Marco Santos",
    date: "2025-08-05",
    excerpt:
      "How data contracts reduce breakages and improve trust between data producers and consumers.",
    url: "#",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "jana",
    name: "Jana Patel",
    role: "Senior Software Engineer",
    company: "Acme Corp",
    quote:
      "TechGuild helped me find a mentor and speak at my first internal tech talk. The support is incredible!",
  },
  {
    id: "michael",
    name: "Michael Chen",
    role: "DevOps Lead",
    company: "Cloudify",
    quote:
      "The hands-on workshops dramatically improved our team's delivery speed without sacrificing reliability.",
  },
  {
    id: "sara",
    name: "Sara Lopez",
    role: "Data Scientist",
    company: "Insight Labs",
    quote:
      "From masterclasses to peer review sessions, I've grown faster here than anywhere else.",
  },
];

export const valueProps = [
  {
    title: "Connect & Collaborate",
    points: [
      "Network with passionate tech professionals",
      "Share knowledge and best practices",
      "Find mentors and collaboration partners",
    ],
  },
  {
    title: "Learn & Grow",
    points: [
      "Access exclusive tech blogs and insights",
      "Attend workshops and technical sessions",
      "Stay ahead with emerging technology trends",
    ],
  },
  {
    title: "Engage & Contribute",
    points: [
      "Participate in hackathons and challenges",
      "Share your expertise through speaking opportunities",
      "Shape the future of our tech community",
    ],
  },
];


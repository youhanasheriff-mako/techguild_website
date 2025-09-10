import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded bg-[color-mix(in_srgb,var(--color-primary),#fff_10%)] ring-1 ring-border" />
          <Link href="#" className="text-lg font-bold tracking-tight">TechGuild</Link>
          <span className="sr-only">TechGuild — Your Hub for Tech Excellence</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#why" className="hover:text-primary">Why Join</Link>
          <Link href="#offer" className="hover:text-primary">What We Offer</Link>
          <Link href="#events" className="hover:text-primary">Events</Link>
          <Link href="#blog" className="hover:text-primary">Blog</Link>
          <Link href="#testimonials" className="hover:text-primary">Testimonials</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-semibold shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Join LinkedIn Group
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}


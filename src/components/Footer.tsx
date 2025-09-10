import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="text-lg font-bold">TechGuild</div>
          <p className="mt-3 text-[var(--color-muted)] max-w-sm">
            Your Hub for Tech Excellence — fostering collaboration, learning, and innovation.
          </p>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2">
            <li><Link href="#about" className="hover:text-primary">About TechGuild</Link></li>
            <li><Link href="#events" className="hover:text-primary">Upcoming Events</Link></li>
            <li><Link href="#blog" className="hover:text-primary">Blog</Link></li>
            <li><Link href="#offer" className="hover:text-primary">Resources</Link></li>
            <li><Link href="#contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Stay Connected</div>
          <ul className="mt-3 space-y-2">
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn Group</a></li>
            <li><a href="#" className="hover:text-primary">Email Newsletter</a></li>
            <li><a href="#" className="hover:text-primary">RSS Feed</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Community Guidelines</div>
          <ul className="mt-3 space-y-2">
            <li><Link href="#" className="hover:text-primary">Code of Conduct</Link></li>
            <li><Link href="#" className="hover:text-primary">Contribution Guidelines</Link></li>
            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-[var(--color-muted)]">
        © {new Date().getFullYear()} TechGuild. All rights reserved.
      </div>
    </footer>
  );
}


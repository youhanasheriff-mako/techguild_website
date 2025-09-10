import { blogPosts } from "@/lib/data";
import Link from "next/link";

export function BlogPreview() {
  return (
    <section id="blog" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest from Our Blog</h2>
            <p className="mt-3 text-[var(--color-muted)]">Fresh insights and practical tutorials.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-semibold hover:text-primary">View All</a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="h-40 bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent))]" />
              <div className="p-5">
                <h3 className="text-lg font-semibold tracking-tight">
                  <Link href={post.url} className="hover:text-primary">{post.title}</Link>
                </h3>
                <div className="mt-2 text-xs text-[var(--color-muted)]">
                  {new Date(post.date).toLocaleDateString()} • {post.author}
                </div>
                <p className="mt-3 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="mt-4">
                  <Link href={post.url} className="text-sm font-semibold text-primary hover:underline">
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


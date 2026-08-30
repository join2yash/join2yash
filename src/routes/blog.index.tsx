import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatDate, posts } from "@/content/posts";
import { PageShell } from "@/components/PageShell";

const title = "Writing on SQL, Data & Enterprise Systems — Yash Parashar";
const description =
  "Notes from production: query and index tuning at scale, decoupling business rules from code, and digitising operations without stopping them.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PageShell
      eyebrow="Writing"
      title="Notes from production"
      intro="Short pieces on the things that only show up when a system has real users: performance under load, policy that outgrows its code, and change that has to happen without downtime."
    >
      <ul className="space-y-4">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-primary/60 hover:bg-surface sm:flex-row sm:items-start sm:gap-8"
            >
              <div className="shrink-0 text-xs text-muted-foreground sm:w-36 sm:pt-1">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <p className="mt-1">{post.readingTime}</p>
              </div>
              <div className="mt-3 flex-1 sm:mt-0">
                <h2 className="flex items-start gap-2 text-xl font-semibold transition-colors group-hover:text-primary-glow">
                  {post.title}
                  <ArrowUpRight
                    className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <li key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

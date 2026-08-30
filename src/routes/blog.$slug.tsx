import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { formatDate, getPost } from "@/content/posts";
import { site } from "@/content/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Post not found — Yash Parashar" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const title = `${post.title} — Yash Parashar`;
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            keywords: post.tags.join(", "),
            author: { "@type": "Person", name: site.name },
            mainEntityOfPage: `/blog/${params.slug}`,
          }),
        },
      ],
    };
  },
  component: PostDetail,
});

function PostDetail() {
  const { post } = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-2xl px-5 pt-10 pb-4">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All writing
      </Link>

      <article className="rise-in mt-8">
        <header>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.description}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <li key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-10 space-y-8 border-t border-border/70 pt-10">
          {post.body.map((block, i) => (
            <section key={block.heading ?? i}>
              {block.heading ? (
                <h2 className="font-display text-xl font-semibold">{block.heading}</h2>
              ) : null}
              {block.paragraphs?.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {block.list ? (
                <ul className="mt-4 space-y-3">
                  {block.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}

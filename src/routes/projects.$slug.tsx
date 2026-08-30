import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import { getProject } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Yash Parashar" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Yash Parashar`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Projects", item: "/projects" },
              {
                "@type": "ListItem",
                position: 3,
                name: project.title,
                item: `/projects/${params.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-3xl px-5 pt-10 pb-4">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </Link>

      <header className="rise-in mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="font-normal">
            {project.kind}
          </Badge>
          {project.award ? (
            <Badge className="gap-1 font-normal">
              <Award className="size-3" aria-hidden="true" />
              {project.award}
            </Badge>
          ) : null}
          <span className="text-xs text-muted-foreground">
            {project.org} · {project.period}
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-lg font-medium text-gradient">{project.headline}</p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.summary}</p>
      </header>

      <dl className="mt-10 grid gap-3 sm:grid-cols-3">
        {project.outcomes.map((o) => (
          <div key={o.label} className="rounded-lg border border-border bg-surface/60 p-5">
            <dt className="sr-only">{o.label}</dt>
            <dd>
              <p className="font-display text-2xl font-bold text-primary-glow">{o.value}</p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{o.label}</p>
            </dd>
          </div>
        ))}
      </dl>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold">The challenge</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{project.challenge}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">Approach</h2>
        <ol className="mt-4 space-y-4">
          {project.approach.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-accent font-display text-xs font-semibold text-accent-foreground">
                {i + 1}
              </span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">Stack</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li key={s} className="rounded-md bg-muted px-2.5 py-1.5 text-sm text-muted-foreground">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {project.link ? (
        <Button asChild className="mt-10">
          <a href={project.link.href} target="_blank" rel="noreferrer">
            {project.link.label}
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </Button>
      ) : null}

      <div className="mt-14 rounded-xl border border-border bg-surface/60 p-7 text-center">
        <p className="font-display text-lg font-semibold">Want the detail behind these numbers?</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Happy to walk through the design decisions and trade-offs.
        </p>
        <Button asChild className="mt-5">
          <Link to="/contact">Get in touch</Link>
        </Button>
      </div>
    </main>
  );
}

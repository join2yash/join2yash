import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail } from "lucide-react";
import { headlineMetrics, site } from "@/content/site";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { MetricCard, SectionHeading } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const title = "Yash Parashar — Business Systems & Data Analyst";
const description =
  "3+ years turning enterprise data into measurable outcomes: 40% lower database latency, 60% less manual effort, on ERP systems serving 10,000+ daily users.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.role,
          email: `mailto:${site.email}`,
          telephone: site.phone,
          address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
          sameAs: [site.linkedin],
          knowsAbout: [
            "SQL",
            "PL/SQL",
            "Oracle ERP",
            "Data Analysis",
            "Business Analysis",
            "Workflow Automation",
            "Microsoft Azure",
            "MongoDB",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="rise-in max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary-glow">
              {site.tagline}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-6xl">
              I turn messy enterprise data into decisions the business can act on.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/projects">
                  View case studies
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={site.resumeUrl} download>
                  <Download className="size-4" aria-hidden="true" />
                  Download résumé
                </a>
              </Button>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {headlineMetrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-border bg-surface/60 p-5">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">{m.label}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Case studies with measured outcomes"
            description="Each project led with the business problem first. The numbers below are production results, not estimates."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow hover:underline"
          >
            All projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="Where analysis meets engineering"
            description="I sit between the business and the database — gathering requirements on one side and writing the PL/SQL that satisfies them on the other."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-xl border border-border bg-background/50 p-6">
                <h3 className="font-display text-base font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-4 sm:grid-cols-3">
          <MetricCard value="20%" label="System uptime improvement from root-cause fixes" />
          <MetricCard value="22%" label="Increase in receivables collection" />
          <MetricCard value="55%" label="Faster warehouse dispatch after digitisation" />
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface/60 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Looking for someone who asks why first?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I'm open to roles in data analysis, business systems and modern data engineering. Happy
            to walk through any of the case studies in detail.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                <Mail className="size-4" aria-hidden="true" />
                Get in touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">More about me</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

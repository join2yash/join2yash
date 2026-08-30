import { createFileRoute } from "@tanstack/react-router";
import { Download, GraduationCap, BadgeCheck } from "lucide-react";
import { certifications, education, roles } from "@/content/experience";
import { site } from "@/content/site";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";

const title = "Experience & Certifications — Yash Parashar";
const description =
  "Oracle (D2K) Developer and internal PL/SQL lead at Staqo Software, 2022–2026: ERP architecture, production root-cause ownership, and workflow automation across Finance, Procurement and Inventory.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Career"
      title="Experience & credentials"
      intro="Three and a half years inside a production ERP, moving from developer to internal PL/SQL lead — and increasingly toward analysis, architecture and modern data platforms."
    >
      <Button asChild variant="outline" className="no-print">
        <a href={site.resumeUrl} download>
          <Download className="size-4" aria-hidden="true" />
          Download full résumé
        </a>
      </Button>

      <section aria-labelledby="roles-heading" className="mt-12">
        <h2 id="roles-heading" className="font-display text-xl font-semibold">
          Professional experience
        </h2>
        <div className="mt-6 space-y-8">
          {roles.map((role) => (
            <article
              key={role.title}
              className="relative rounded-xl border border-border bg-surface/60 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold">{role.title}</h3>
                  <p className="mt-1 text-sm text-primary-glow">
                    {role.company} · {role.location}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{role.period}</p>
              </div>
              <ul className="mt-5 space-y-3">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <section aria-labelledby="certs-heading">
          <h2 id="certs-heading" className="font-display text-xl font-semibold">
            Certifications
          </h2>
          <ul className="mt-5 space-y-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-4"
              >
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary-glow" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="edu-heading">
          <h2 id="edu-heading" className="font-display text-xl font-semibold">
            Education
          </h2>
          <ul className="mt-5 space-y-3">
            {education.map((e) => (
              <li
                key={e.degree}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-4"
              >
                <GraduationCap
                  className="mt-0.5 size-5 shrink-0 text-primary-glow"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium">{e.degree}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {e.school} · {e.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}

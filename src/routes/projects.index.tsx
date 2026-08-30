import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";

const title = "Projects & Case Studies — Yash Parashar";
const description =
  "Enterprise ERP frameworks and independent AI tools: credit risk controls, warehouse digitisation, stock take automation and an AI salary-benchmarking platform.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const enterprise = projects.filter((p) => p.kind === "Enterprise");
  const independent = projects.filter((p) => p.kind === "Independent");

  return (
    <PageShell
      eyebrow="Work"
      title="Projects & case studies"
      intro="Every project here started as a business problem, not a technical one. Each write-up covers the context, the constraint that made it hard, and the outcome that was actually measured."
    >
      <section aria-labelledby="enterprise-heading">
        <h2 id="enterprise-heading" className="font-display text-lg font-semibold">
          Enterprise systems
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {enterprise.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="independent-heading" className="mt-16">
        <h2 id="independent-heading" className="font-display text-lg font-semibold">
          Independent — AI-powered tools
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {independent.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

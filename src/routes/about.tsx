import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";

const title = "About Yash Parashar — Analyst, PL/SQL Lead, Builder";
const description =
  "How I work: business problem first, data second, code last. Skill matrix across business analysis, data, engineering, enterprise systems and modern cloud.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Business problem first. Data second. Code last."
      intro={site.summary}
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            I spent three and a half years inside a production Oracle ERP supporting more than
            10,000 daily users across Finance, Procurement and Inventory. That environment teaches
            something a tutorial cannot: every technical decision is a business decision wearing a
            different hat, and every shortcut eventually shows up as a support ticket at month-end.
          </p>
          <p>
            My work usually starts in a room with stakeholders rather than in an editor. I gather
            requirements, write the BRD and FRD, and push hard on the question underneath the
            request — because the feature people ask for and the problem they have are often
            different things. Then I go to the data to check whether the story holds.
          </p>
          <p>
            As the internal PL/SQL lead I owned module architecture, coding standards and reusable
            design patterns for the team. I was also the point of contact for production issues,
            which meant root-cause analysis under pressure and restructuring fragile logic rather
            than patching around it — worth 20% on system uptime.
          </p>
          <p>
            What I care about most is removing permanent dependencies. Automating Procurement and
            Asset Management workflows cut manual effort 60%. Moving credit policy out of code and
            into configuration removed Finance's dependency on developers entirely. Those are the
            changes that keep paying after I leave the project.
          </p>
          <p>
            Right now I'm deliberately expanding: Microsoft Azure, MongoDB, modern data engineering
            and AI-assisted development. I built and deployed{" "}
            <Link to="/projects/$slug" params={{ slug: "fair-pay-analyzer" }} className="text-primary-glow hover:underline">
              Fair Pay Analyzer
            </Link>{" "}
            end to end on my own — a live AI tool integrating the Claude API — because reading about
            a technology and shipping something with it are not the same skill.
          </p>
        </div>

        <aside className="rounded-xl border border-border bg-surface/60 p-6">
          <h2 className="font-display text-base font-semibold">At a glance</h2>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Based in</dt>
              <dd className="mt-0.5 font-medium">{site.location}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Current focus</dt>
              <dd className="mt-0.5 font-medium">
                Data analysis, business systems, modern data engineering
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Domains</dt>
              <dd className="mt-0.5 font-medium">Finance, Procurement, Inventory, Warehousing</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Recognition</dt>
              <dd className="mt-0.5 font-medium">ESG Award — Warehouse Digital Transformation</dd>
            </div>
          </dl>
          <Button asChild className="mt-6 w-full">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </aside>
      </div>

      <section aria-labelledby="matrix-heading" className="mt-16">
        <h2 id="matrix-heading" className="font-display text-xl font-semibold">
          Skill matrix
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-xl border border-border bg-surface/60 p-6">
              <h3 className="font-display text-base font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>
              <ul className="mt-4 space-y-1.5">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Award } from "lucide-react";
import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-primary/60 hover:bg-surface"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
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
            <span className="text-xs text-muted-foreground">{project.period}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-primary-glow">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight
          className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-glow"
          aria-hidden="true"
        />
      </div>

      <p className="mt-3 text-sm font-medium text-foreground/90">{project.headline}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/70 pt-4">
        {project.stack.map((s) => (
          <span key={s} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}

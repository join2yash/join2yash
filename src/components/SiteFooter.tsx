import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { navLinks, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="no-print mt-24 border-t border-border/70 bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.role}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.tagline}. Available for roles in data analysis, business systems and modern data
            engineering.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-display text-sm font-semibold">Pages</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-sm font-semibold">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                href={`mailto:${site.email}`}
              >
                <Mail className="size-4" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Built with React and TanStack Start.
      </div>
    </footer>
  );
}

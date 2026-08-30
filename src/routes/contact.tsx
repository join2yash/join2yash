import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";
import { site } from "@/content/site";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";

const title = "Contact Yash Parashar — Business Systems & Data Analyst";
const description =
  "Get in touch about data analysis, business systems and data engineering roles. Email, phone, LinkedIn and résumé download for Yash Parashar, New Delhi.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best for role enquiries — I reply within a day.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: "Available during IST business hours.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: site.linkedin,
    note: "For networking and quick messages.",
  },
];

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's talk"
      intro="I'm open to roles in data analysis, business systems and modern data engineering — and always happy to talk through any of the case studies in more depth."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noreferrer" : undefined}
            className="group rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-primary/60 hover:bg-surface"
          >
            <c.icon className="size-5 text-primary-glow" aria-hidden="true" />
            <p className="mt-4 font-display text-sm font-semibold">{c.label}</p>
            <p className="mt-1 break-words text-sm text-foreground/90 group-hover:text-primary-glow">
              {c.value}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.note}</p>
          </a>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-surface/60 p-6">
        <MapPin className="size-5 text-primary-glow" aria-hidden="true" />
        <div className="flex-1">
          <p className="text-sm font-medium">{site.location}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Open to on-site, hybrid and remote opportunities.
          </p>
        </div>
        <Button asChild variant="outline">
          <a href={site.resumeUrl} download>
            <Download className="size-4" aria-hidden="true" />
            Résumé
          </a>
        </Button>
      </div>
    </PageShell>
  );
}

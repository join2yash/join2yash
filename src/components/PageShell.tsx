import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-5 pt-14 pb-4">
      <header className="rise-in max-w-3xl">
        {eyebrow ? (
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1>
        {intro ? (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
        ) : null}
      </header>
      <div className="mt-14">{children}</div>
    </main>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2.5 text-2xl font-bold sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface/60 p-5">
      <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}

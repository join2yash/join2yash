import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Download } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Yash Parashar — home">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
            YP
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Yash Parashar
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-3">
            <a href={site.resumeUrl} download>
              <Download className="size-4" aria-hidden="true" />
              Résumé
            </a>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-surface">
            <SheetTitle className="px-5 pt-5 font-display text-base">Navigate</SheetTitle>
            <nav className="mt-4 flex flex-col gap-1 px-3" aria-label="Mobile">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "bg-accent text-foreground font-medium" }}
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild className="mt-3">
                <a href={site.resumeUrl} download>
                  <Download className="size-4" aria-hidden="true" />
                  Download résumé
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

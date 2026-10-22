import { Mail, Waves } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-ocean-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Waves className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                OceanGuard <span className="text-primary">AI</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Marine pollution monitoring and investigation — detecting
              potential oil spills, estimating their movement, and tracing the
              vessels that may be responsible.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">Contact</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Questions about the project or a collaboration?
            </p>
            <a
              href="mailto:team@oceanguard.ai"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              <Mail className="h-4 w-4" />
              team@oceanguard.ai
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              All dashboard figures on this site are simulated sample data for
              demonstration purposes.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© 2026 OceanGuard AI. All rights reserved.</p>
          <p>Marine Pollution Monitoring &amp; Investigation System</p>
        </div>
      </div>
    </footer>
  );
}

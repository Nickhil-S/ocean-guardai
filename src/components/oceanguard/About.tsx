import { Droplets, Radar, Ship, Waypoints } from "lucide-react";

const capabilities = [
  {
    icon: Radar,
    title: "Detect potential oil spills",
    description:
      "Scan satellite imagery for dark slicks and surface anomalies that may indicate an oil spill at sea.",
  },
  {
    icon: Droplets,
    title: "Analyze satellite imagery",
    description:
      "Process radar and optical scenes to separate likely pollution from look-alike features like algae or calm water.",
  },
  {
    icon: Waypoints,
    title: "Estimate spill movement",
    description:
      "Use currents and wind estimates to project where a suspected slick could drift over the next hours and days.",
  },
  {
    icon: Ship,
    title: "Investigate candidate vessels",
    description:
      "Correlate spill origins with nearby vessel tracks to build a shortlist of candidate vessels for review.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              About OceanGuard AI
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              From satellite pixels to actionable maritime insight
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              OceanGuard AI is a marine pollution monitoring and investigation
              system. It helps teams spot potential oil spills early, understand
              how a spill may evolve, and trace the vessels that may be
              involved — turning raw satellite data into a clear investigative
              workflow.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="og-float rounded-3xl border border-border bg-card p-8 og-glow">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <p className="text-sm font-semibold">Spill Analysis Snapshot</p>
                <span className="rounded-full bg-warning/15 px-3 py-1 text-xs font-semibold text-warning">
                  Sample data
                </span>
              </div>
              <div className="mt-6 space-y-5">
                {[
                  { label: "Detected slick area", value: "18.4 km²", width: "72%" },
                  { label: "Drift estimate (24h)", value: "SE · 9 km/h", width: "55%" },
                  { label: "Candidate vessels", value: "3 under review", width: "38%" },
                  { label: "Analysis confidence", value: "87%", width: "87%" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="font-semibold">{row.value}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: row.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-5 -right-5 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 -z-10 h-48 w-48 rounded-full bg-accent/40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

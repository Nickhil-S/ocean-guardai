import { BrainCircuit, FileSearch, Satellite, Route } from "lucide-react";

const features = [
  {
    icon: Satellite,
    title: "Satellite-Based Spill Detection",
    description:
      "Continuously review satellite passes over monitored waters to surface potential oil spills the moment they appear in imagery.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Assisted Analysis",
    description:
      "Automated analysis flags likely slicks, scores confidence, and helps analysts separate real pollution from look-alikes.",
  },
  {
    icon: Route,
    title: "Oil Spill Drift Estimation",
    description:
      "Estimate how a suspected spill may spread and drift with currents and wind, supporting faster response planning.",
  },
  {
    icon: FileSearch,
    title: "Vessel Tracking & Investigation",
    description:
      "Match spill origins against nearby vessel tracks to build a candidate list and support deeper investigation.",
  },
];

export function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Everything an investigation needs, in one system
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Four building blocks carry an incident from first detection to a
            documented report.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:og-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <span className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

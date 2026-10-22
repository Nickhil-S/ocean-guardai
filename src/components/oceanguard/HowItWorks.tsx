import {
  CheckCircle2,
  FileText,
  History,
  Radar,
  Ship,
  TrendingUp,
} from "lucide-react";

const steps = [
  { icon: Radar, title: "Detect", description: "Screen satellite passes for possible slicks." },
  { icon: CheckCircle2, title: "Validate", description: "Confirm signals are not look-alikes." },
  { icon: History, title: "Review Historical Data", description: "Compare against past scenes and incidents." },
  { icon: TrendingUp, title: "Estimate Drift", description: "Project how the spill may spread." },
  { icon: Ship, title: "Investigate Vessels", description: "Shortlist vessels near the origin." },
  { icon: FileText, title: "Generate Reports", description: "Document findings for response teams." },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            How It Works
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            A six-step investigation workflow
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Every suspected incident follows the same disciplined path from
            first detection to final report.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-4xl font-bold text-secondary group-hover:text-primary/25 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <span className="absolute -right-3.5 top-1/2 hidden h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background text-primary lg:flex">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

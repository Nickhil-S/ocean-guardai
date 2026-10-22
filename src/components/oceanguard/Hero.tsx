import { ArrowRight, Satellite } from "lucide-react";
import heroOcean from "@/assets/hero-ocean.jpg";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroOcean}
        alt="Satellite view of the ocean"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-deep/60 to-background" />
      <div className="absolute inset-0 og-grid-overlay opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="og-fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            <Satellite className="h-3.5 w-3.5" />
            Satellite Intelligence · Marine Monitoring
          </span>

          <h1 className="og-fade-up mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl" style={{ animationDelay: "120ms" }}>
            Protect Our Oceans with <span className="og-text-gradient">AI-Powered Intelligence</span>
          </h1>

          <p className="og-fade-up mt-6 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl" style={{ animationDelay: "240ms" }}>
            Detect potential oil spills, monitor marine pollution, and
            investigate vessel movements using satellite intelligence.
          </p>

          <div className="og-fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "360ms" }}>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-85 og-glow"
            >
              Explore Dashboard
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-input bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
            >
              Learn More
            </a>
          </div>

          <dl className="og-fade-up mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8" style={{ animationDelay: "480ms" }}>
            {[
              { value: "24/7", label: "Imagery monitoring" },
              { value: "6-step", label: "Investigation workflow" },
              { value: "100%", label: "Simulated sample data" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

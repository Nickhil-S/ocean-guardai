import { Ship, TriangleAlert, Waves } from "lucide-react";
import heroOcean from "@/assets/hero-ocean.jpg";

const stats = [
  { label: "Active Alerts", value: "3" },
  { label: "Monitored Vessels", value: "12" },
  { label: "Imagery Scans Today", value: "48" },
  { label: "Avg. Confidence", value: "87%" },
];

const incidents = [
  { id: "SP-0421", area: "Gulf of Kutch", status: "High confidence", tone: "bg-destructive/15 text-destructive" },
  { id: "SP-0418", area: "Straits of Malacca", status: "Under review", tone: "bg-warning/15 text-warning" },
  { id: "SP-0412", area: "North Arabian Sea", status: "Monitoring drift", tone: "bg-primary/15 text-primary" },
];

const vessels = [
  { name: "MV Coral Star", type: "Oil tanker", distance: "4.2 km from slick" },
  { name: "MV Iron Current", type: "Bulk carrier", distance: "11.8 km from slick" },
  { name: "MT Blue Heron", type: "Chemical tanker", distance: "22.5 km from slick" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              Dashboard Preview
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Mission control for the open ocean
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-warning/40 bg-warning/10 px-4 py-1.5 text-xs font-semibold text-warning">
            <TriangleAlert className="h-3.5 w-3.5" />
            Simulated sample data — not live feeds
          </span>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          {/* Toolbar */}
          <div className="flex items-center gap-3 border-b border-border bg-secondary/40 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <p className="ml-3 text-xs text-muted-foreground">
              OceanGuard AI · Live Operations Console (sample)
            </p>
          </div>

          <div className="grid lg:grid-cols-3">
            {/* Map */}
            <div className="relative min-h-[380px] overflow-hidden lg:col-span-2">
              <img
                src={heroOcean}
                alt="Simulated ocean map view"
                width={1920}
                height={1088}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ocean-deep/45" />
              <div className="absolute inset-0 og-grid-overlay" />

              {/* Spill markers */}
              <Marker className="left-[26%] top-[34%]" label="SP-0421" tone="destructive" />
              <Marker className="left-[58%] top-[58%]" label="SP-0418" tone="warning" />
              <Marker className="left-[74%] top-[30%]" label="SP-0412" tone="primary" />

              {/* Vessel markers */}
              <Marker className="left-[40%] top-[64%]" label="MV Coral Star" tone="muted" small />
              <Marker className="left-[66%] top-[22%]" label="MV Iron Current" tone="muted" small />

              {/* Radar sweep */}
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-primary/30">
                <div className="og-sweep absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent to-primary/25" />
              </div>

              <div className="absolute bottom-4 left-4 rounded-lg border border-border bg-ocean-deep/80 px-3 py-2 text-xs text-muted-foreground backdrop-blur">
                <span className="font-semibold text-foreground">18.4 km²</span> suspected slick · drift SE 9 km/h
              </div>
            </div>

            {/* Side panel */}
            <div className="border-t border-border lg:border-t-0 lg:border-l">
              <div className="grid grid-cols-2 gap-px bg-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card p-5">
                    <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Waves className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold">Recent Incidents</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {incidents.map((incident) => (
                    <li
                      key={incident.id}
                      className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-sm font-semibold">{incident.id}</p>
                        <p className="text-xs text-muted-foreground">{incident.area}</p>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${incident.tone}`}>
                        {incident.status}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2">
                  <Ship className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold">Candidate Vessels</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {vessels.map((vessel) => (
                    <li
                      key={vessel.name}
                      className="rounded-lg border border-border bg-secondary/30 px-3 py-2.5"
                    >
                      <p className="text-sm font-semibold">{vessel.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {vessel.type} · {vessel.distance}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marker({
  label,
  tone,
  className = "",
  small = false,
}: {
  label: string;
  tone: "destructive" | "warning" | "primary" | "muted";
  className?: string;
  small?: boolean;
}) {
  const toneClasses = {
    destructive: "bg-destructive text-destructive-foreground",
    warning: "bg-warning text-primary-foreground",
    primary: "bg-primary text-primary-foreground",
    muted: "bg-secondary text-foreground border border-border",
  }[tone];

  return (
    <div className={`absolute ${className}`}>
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <span
          className={`og-pulse-ring absolute inset-0 rounded-full ${toneClasses.split(" ")[0]}`}
          style={{ opacity: 0.4 }}
        />
        <span
          className={`relative flex items-center justify-center rounded-full ${toneClasses} ${
            small ? "h-3 w-3" : "h-4 w-4"
          }`}
        />
        <span
          className={`absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-ocean-deep/85 px-2 py-0.5 text-[10px] font-semibold text-foreground backdrop-blur ${
            small ? "text-[9px] opacity-80" : ""
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

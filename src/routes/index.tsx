import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/oceanguard/Navbar";
import { Hero } from "@/components/oceanguard/Hero";
import { About } from "@/components/oceanguard/About";
import { Features } from "@/components/oceanguard/Features";
import { DashboardPreview } from "@/components/oceanguard/DashboardPreview";
import { HowItWorks } from "@/components/oceanguard/HowItWorks";
import { Footer } from "@/components/oceanguard/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OceanGuard AI — Marine Pollution Monitoring & Investigation System" },
      {
        name: "description",
        content:
          "Detect potential oil spills, monitor marine pollution, and investigate vessel movements using satellite intelligence.",
      },
      {
        property: "og:title",
        content: "OceanGuard AI — Marine Pollution Monitoring & Investigation System",
      },
      {
        property: "og:description",
        content:
          "Detect potential oil spills, monitor marine pollution, and investigate vessel movements using satellite intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <DashboardPreview />
        <div id="how-it-works">
          <HowItWorks />
        </div>
      </main>
      <Footer />
    </div>
  );
}

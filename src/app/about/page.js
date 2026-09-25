import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import MissionVision from "@/components/about/MissionVision";
import Journey from "@/components/about/Journey";
import Objectives from "@/components/about/Objectives";
import Team from "@/components/Team";
import Achievements from "@/components/Achievements";
import CTA from "@/components/CTA";
import { pageImages } from "@/data/pages";

export const metadata = {
  title: "About IOJN — International Online Journal Network",
  description:
    "Learn about IOJN's mission, vision, values and journey since 2020 as an innovative research support centre.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="Research With Purpose,"
        highlight="Impact With Integrity"
        text="Since 2020, IOJN has helped researchers and institutions design, conduct and publish research that improves health, protects the environment and strengthens communities."
        image={pageImages.about}
        badge={{ value: "2020", label: "Established in Dhaka" }}
        anchors={[
          { label: "Mission", href: "#mission" },
          { label: "Journey", href: "#journey" },
          { label: "Objectives", href: "#objectives" },
          { label: "Team", href: "#team" },
        ]}
      />
      <About />
      <MissionVision />
      <Journey />
      {/* <Objectives /> */}
      {/* <Team /> */}
      <Achievements />
      {/* <CTA /> */}
    </PageShell>
  );
}

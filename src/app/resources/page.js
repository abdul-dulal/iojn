import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import ResourceLibrary from "@/components/resources/ResourceLibrary";
import ResearchTools from "@/components/resources/ResearchTools";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { pageImages, resourceFaqs } from "@/data/pages";

export const metadata = {
  title: "Resources — IOJN",
  description: "Free research guides, templates, webinars and datasets from IOJN, plus the tools our analysts use.",
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Guides, Tools &"
        highlight="Learning Materials"
        text="Free, practical resources to help you plan, analyse and publish better research — created by the IOJN team."
        image={pageImages.resources}
        badge={{ value: "Free", label: "For academic use" }}
        anchors={[
          { label: "Library", href: "#library" },
          { label: "Tools", href: "#tools" },
          { label: "FAQ", href: "#faq" },
        ]}
      />
      <ResourceLibrary />
      <ResearchTools />
      <FAQ items={resourceFaqs} text="Everything you need to know about using our resources." />
      <CTA />
    </PageShell>
  );
}

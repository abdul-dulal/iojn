import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import ServiceDetails from "@/components/services/ServiceDetails";
import ResearchProcess from "@/components/ResearchProcess";
import EngagementModels from "@/components/services/EngagementModels";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { pageImages, serviceFaqs } from "@/data/pages";

export const metadata = {
  title: "Research Services — IOJN",
  description: "Protocol development, article writing, data analysis, publication support and journal management by IOJN's research experts.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Expert Research Support"
        highlight="From Idea to Publication"
        text="Six specialised services delivered by experienced researchers, biostatisticians and editors — tailored to your study, timeline and target journal."
        image={pageImages.services}
        badge={{ value: "500+", label: "Projects supported" }}
        anchors={[
          { label: "Services", href: "#services" },
          { label: "In depth", href: "#how-we-help" },
          { label: "Engagement", href: "#engagement" },
          { label: "FAQ", href: "#faq" },
        ]}
      />
      <Services />
      <ServiceDetails />
      <ResearchProcess />
      <EngagementModels />
      <FAQ items={serviceFaqs} tone="offwhite" text="Answers to the questions researchers ask us most often." />
      <CTA />
    </PageShell>
  );
}

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Directions from "@/components/contact/Directions";
import FAQ from "@/components/FAQ";
import { contactFaqs, pageImages } from "@/data/pages";

export const metadata = {
  title: "Contact IOJN",
  description: "Get in touch with IOJN in Farmgate, Dhaka to discuss your research project, services or partnerships.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's Start a"
        highlight="Conversation"
        text="Tell us about your research idea, project or partnership. Our specialists reply within one business day."
        image={pageImages.contact}
        badge={{ value: "24h", label: "Average response time" }}
        anchors={[
          { label: "Message us", href: "#contact" },
          { label: "Directions", href: "#directions" },
          { label: "FAQ", href: "#faq" },
        ]}
      />
      <Contact />
      <Directions />
      <FAQ items={contactFaqs} tone="offwhite" text="Quick answers before you get in touch." />
    </PageShell>
  );
}

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Publications from "@/components/Publications";
import Journals from "@/components/publications/Journals";
import PublicationLibrary from "@/components/publications/PublicationLibrary";
import SubmissionGuide from "@/components/publications/SubmissionGuide";
import { pageImages } from "@/data/pages";

export const metadata = {
  title: "Publications — IOJN",
  description: "Browse IOJN's research publications, the journals we manage and how to submit your manuscript.",
};

export default function PublicationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Publications"
        title="Knowledge Shared,"
        highlight="Impact Multiplied"
        text="Peer-reviewed articles, reviews and reports from our research team and partners — plus the open-access journals we develop and manage."
        image={pageImages.publications}
        badge={{ value: "100+", label: "Published articles" }}
        anchors={[
          { label: "Latest", href: "#publications" },
          { label: "Journals", href: "#journals" },
          { label: "Library", href: "#library" },
          { label: "Submit", href: "#submit" },
        ]}
      />
      <Publications />
      <Journals />
      <PublicationLibrary />
      <SubmissionGuide />
    </PageShell>
  );
}

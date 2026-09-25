import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeaturedEvent from "@/components/events/FeaturedEvent";
import Events from "@/components/Events";
import PastEvents from "@/components/events/PastEvents";
import CTA from "@/components/CTA";
import { pageImages } from "@/data/pages";

export const metadata = {
  title: "Events & Conferences — IOJN",
  description: "Upcoming conferences, workshops and seminars from IOJN, plus highlights from past events.",
};

export default function EventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Events"
        title="Conferences, Workshops"
        highlight="& Knowledge Exchange"
        text="Learn, present and connect with researchers, practitioners and policymakers at IOJN's events — in person and online."
        image={pageImages.events}
        badge={{ value: "1,200+", label: "Participants in 2026" }}
        anchors={[
          { label: "Conference", href: "#conference" },
          { label: "Upcoming", href: "#events" },
          { label: "Highlights", href: "#past-events" },
        ]}
      />
      <FeaturedEvent />
      <Events />
      <PastEvents />
      <CTA />
    </PageShell>
  );
}

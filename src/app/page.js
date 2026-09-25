import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import About from "@/components/About";
import Team from "@/components/Team";
import ResearchAreas from "@/components/ResearchAreas";
import Services from "@/components/Services";
import ResearchProcess from "@/components/ResearchProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import Achievements from "@/components/Achievements";
import Publications from "@/components/Publications";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import GlobalNetwork from "@/components/GlobalNetwork";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <About />
        <Team />
        <ResearchAreas />
        {/* <Services /> */}
        <ResearchProcess />
        {/* <WhyChooseUs /> */}
        {/* <Achievements /> */}
        <Publications />
        {/* <Events /> */}
        {/* <Testimonials /> */}
        <GlobalNetwork />
        {/* <CTA /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

import About from "@/components/home/About";
import Blog from "@/components/shared/Blog";
import Hero from "@/components/home/Hero";
import OurTeam from "@/components/shared/OurTeam";
import PainRelief from "@/components/shared/CallToAction";
import Services from "@/components/home/Services";
import Testimonials from "@/components/shared/Testimonials";
import Faq from "@/components/shared/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <OurTeam />
      <PainRelief />
      <Faq />
      {/* <Blog /> */}
    </>
  );
}

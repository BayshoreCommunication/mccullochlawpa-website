import About from "@/components/home/About";
// import Blog from "@/components/shared/Blog";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/shared/Testimonials";
import Case from "@/components/home/Case";
import Expect from "@/components/home/Expect";
import Video from "@/components/home/Video";
import BlogPage from "@/components/shared/Blog";
import Blog from "@/components/shared/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Case />
      <Expect />
      <Video />
      <Blog />
    </>
  );
}

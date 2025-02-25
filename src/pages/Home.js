import Companies from "../components/Companies";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import Testimonial from "../components/Testimonial";
import WordCycle from "../components/WordCycle";

const Home = () => {
  return (
    <main>
      <HeroSection />
      {/* <Companies /> */}
      {/* <ProjectsSection /> */}
      {/* <Testimonial/> */}
      <WordCycle />
      <Contact />
    </main>
  );
};

export default Home;

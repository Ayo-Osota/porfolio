import Companies from "../components/Companies";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <main>
            <HeroSection />
            <Companies />
            {/* <ProjectsSection /> */}
            {/* <Testimonial/> */}
            <Contact />
        </main>
    )
}




export default Home;

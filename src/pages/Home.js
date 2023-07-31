import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <main>
            <HeroSection/>
            <ProjectsSection/>
            <Testimonial/>
            <Contact/>
            <img src="src/assets/motun.jpeg" alt="" />
            <img src="src/assets/motun-sign.jpeg" alt="" />
        </main>
    )
}

export default Home;
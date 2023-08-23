import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import Testimonial from "../components/Testimonial";
import motun from '../assets/motun.jpeg';
import motunSign from '../assets/motun-sign.jpeg';

const Home = () => {
    return (
        <main>
            <HeroSection/>
            <ProjectsSection/>
            <Testimonial/>
            <Contact/>
        </main>
    )
}

export default Home;

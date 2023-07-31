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
            <img src={motun} alt="sigh" />
            <img src={motunSign} alt=""sigh />
        </main>
    )
}

export default Home;
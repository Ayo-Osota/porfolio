import styled from "styled-components";
import heroImage from "../assets/hero-image.png";
import htmlReactImage from "../assets/html-to-react.png";
import { useGlobalContext } from "../context/context";

const HeroSection = () => {
    const {buttonAnimation, buttonMouseLeave} = useGlobalContext();
    
    return (
        <HeroContainer id="about" className="container even-columns section-mt">
            <div className="flow">
                <h4 className="fs-500 ff-header">
                    Hi, I'm Osota Ayomikun, a Front-End Developer.
                </h4>
                <h1 className="fs-primary-heading ff-header">
                    Front-End Developer Specializing in User-Friendly Web Experiences
                </h1>
                <p className="fs-400 ff-primary">
                    I create beautiful, functional, and mobile-friendly websites using 
                    React, HTML, CSS, and JavaScript. 
                    From responsive designs to optimized performance, 
                    I'm passionate about bringing your vision to life. 
                    With expertise in React, I can build dynamic, interactive user interfaces 
                    that engage your audience. Let's collaborate to create a web experience 
                    that truly stands out - whether revamping an existing site or starting from scratch.
                </p>
                <button onMouseLeave={buttonMouseLeave} onMouseMove={buttonAnimation} className="button">
                    Download CV (70kb)
                </button>
            </div>
            <div style={{backgroundImage: `url(${htmlReactImage})`}}>
                {/* <img src={heroImage} alt="hero" /> */}
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
.flow {
    overflow: hidden;
}

.fs-500 {
    transform: translateX(-100%);
    animation: slide-in-from-left 1.5s ease-in-out forwards;
}

.fs-primary-heading {
    transform: translateX(-100%);
    animation: slide-in-from-left 1.5s ease-in-out 0.4s forwards;
}

.fs-400 {
    transform: translateX(-100%);
    animation: slide-in-from-left 1.5s ease-in-out 0.8s forwards;
}

.button {
    opacity: 0;
    animation: fade-in 1s ease-in forwards;
}

div:last-child img {
    width: 100%;
}
`

export default HeroSection;
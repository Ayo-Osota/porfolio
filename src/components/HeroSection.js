import styled from "styled-components";
import heroImage from "../assets/hero-image.png";
import htmlReactImage from "../assets/html-to-react.png";
import { useGlobalContext } from "../context/context";

const HeroSection = () => {
    const { buttonAnimation, buttonMouseLeave } = useGlobalContext();

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
            <div className="hero-banner" style={{ backgroundImage: `url(${htmlReactImage})` }}>
                <div>
                    <article>
                        Say No more
                    </article>
                    <article>
                        I'm Your guy💯
                    </article>
                </div>
                <div><img src={heroImage} alt="hero" /></div>
                <div>
                    <article>
                        Hire me Today
                    </article>
                    <article>
                        Dev wey Sabi
                    </article>
                </div>
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
    animation: slide-in 1.5s ease-in-out forwards;
}

.fs-primary-heading {
    transform: translateX(-100%);
    animation: slide-in 1.5s ease-in-out 0.4s forwards;
}

.fs-400 {
    transform: translateX(-100%);
    animation: slide-in 1.5s ease-in-out 0.8s forwards;
}

.button {
    opacity: 0;
    animation: fade-in 1s ease-in forwards;
}

.hero-banner {
    padding-left: 2.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6875rem;
}

.hero-banner > div:not(:nth-child(2)) {
    display: flex;
    flex-direction: column;
}

.hero-banner > div:first-child {
    gap: 9.25rem;
}

.hero-banner > div:last-child {
    padding-top: 3.2rem;
    margin-left: 2.3125rem;
    gap: 13.0625rem;
}

.hero-banner article {
    padding: 1.125rem 1.5rem;
    border-radius: 1.33rem 1.33rem 0px 1.33rem;
    opacity: 0;
    font-size: var(--fs-300);
    white-space: nowrap;
}

.hero-banner > div:first-child > article:first-child {
    background: hsl(125, 71%, 66%);
    animation: fade-in 0.8s ease-in 1s forwards;
}

.hero-banner > div:first-child > article:last-child {
    background: #eae6eb;
    animation: fade-in 0.4s ease-in 2s forwards;
}

.hero-banner > div:last-child > article:first-child {
    background: #f4ad97;
    animation: fade-in 0.4s ease-in 2.2s forwards;
}

.hero-banner > div:last-child > article:last-child {
    background: hsl(360, 71%, 66%);
    animation: fade-in 0.4s ease-in 1.6s forwards;
}

.hero-banner > div:nth-child(2) {
    overflow: hidden;
}

.hero-banner > div:nth-child(2) > img {
    transform: translate(100%);
    animation: slide-in 1s forwards;
}

@media (max-width: 50em) {
    .hero-banner {
        padding-left: 0;
        gap: 0.5rem;
    }

    .hero-banner article {
        padding: 0.5rem;
        border-radius: 0.8rem 0.8rem 0px 0.8rem;
    }
    
    .hero-banner > div:last-child {
        margin-left: 0;
    }
}
`

export default HeroSection;
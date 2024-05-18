import styled from "styled-components";
import heroImage from "../assets/hero-image.png";
import htmlReactImage from "../assets/html-to-react.png";
import cv from "../assets/CV.pdf";
import { useGlobalContext } from "../context/context";
// import { SpotifyNowPlaying } from "./SpotiifyNowPlaying";

const HeroSection = () => {
    const { buttonAnimation, buttonMouseLeave } = useGlobalContext();

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight * 5 - window.innerHeight));
    }, false);

    return (
        <HeroContainer id="about" className="container even-columns">
            <div className="wrapper">
                <div className="flow">
                    <h4 className="fs-500 ff-header">
                        Osota Ayomikun: Software engineer.
                    </h4>
                    <h1 className="fs-600 ff-header">
                        UI/UX architecture | Performance optimization | Funtionality.
                    </h1>
                    <p className="fs-400 ff-primary">
                        I specialize in crafting high-performance web & mobile applications with a focus on intuitive,
                        user-centric design.
                        Let's partner to elevate your digital presence with seamless,
                        engaging experiences that deliver measurable results.
                    </p>
                    <a
                        href={cv}
                        download="Osota_Ayomikun CV"
                        onMouseLeave={buttonMouseLeave}
                        onMouseMove={buttonAnimation}
                        className="button">
                        Download CV (352kb)
                    </a>
                </div></div>
            {/* <div> */}
            {/* <SpotifyNowPlaying /> */}
            <div className="hero-banner" style={{ backgroundImage: `url(${htmlReactImage})` }}>

                <div>
                    <article>
                        Say No more
                    </article>
                    <article>
                        I'm Your guy💯
                    </article>
                </div>
                <div><img src={heroImage} alt="hero" className="hero-image" /></div>
                <div>
                    <article>
                        Hire me Today
                    </article>
                    <article>
                        Dev wey Sabi
                    </article>
                </div>
            </div>
            {/* </div> */}
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
margin-top: 3.5rem;
.flow {
    overflow: hidden;
}

.wrapper {
    height: 542px;
    display: flex;
    align-items: center;
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
    max-width: 42ch;
}

.button {
    margin-left: 0.125rem;
    opacity: 1;
    animation: fade-in 1s ease-in;
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
    animation: slide-in 0.1s reverse forwards infinite;
    animation-play-state: paused;
  /* Bind the animation to scroll */
  animation-delay: calc(var(--scroll) * -1s);
  /* These last 2 properites clean up overshoot weirdness */
  animation-iteration-count: 1;
  animation-fill-mode: both;
}

@media (max-width: 50em) {
    .wrapper {
        height: fit-content;
    }

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

    .hero-banner > div:nth-child(2) > img {
        animation-direction: normal;
    }
}
`

export default HeroSection;
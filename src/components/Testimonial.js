import { useEffect, useState } from "react";
import styled from "styled-components";
import { testimonials } from "../data";
import { BsArrowRightShort } from "react-icons/bs";

const Testimonial = () => {
    const [index, setIndex] = useState(0)
    const [testimony, setTestimony] = useState(testimonials[index]);

    useEffect(() => {
        setTestimony(testimonials[index])
    }, [index]);

    useEffect(() => {
        let autoSlide = setInterval(() => {
            1 + index < 0 ? setIndex(testimonials.length - 1) :
                1 + index > testimonials.length - 1 ? setIndex(0) :
                    setIndex(1 + index)
        }, 5000);
        return () => {
            clearInterval(autoSlide);
        };
    }, [index]);

    const { feedback, name, designation, pfp, siteLink, siteName } = testimony;

    return (
        <TestimonialSection className="section-mt">
            <div className="bg-dark container even-columns">
                <div className="testimony-wrapper">
                    <article className="testimony text-neutral-100 flow">
                        <h4 className="fs-500">TESTIMONIALS</h4>
                        <p className="fs-400">"{feedback}"</p>
                        <footer className="flow">
                            <article>
                                <div className="pfp" style={{ backgroundImage: `url(${pfp}` }}></div>
                                <div className="info">
                                    <p>{name}</p>
                                    <p>{designation}</p>
                                </div>
                            </article>
                            <a href={siteLink}>Visit {siteName} <BsArrowRightShort /></a>
                        </footer>
                    </article>
                </div>
                <div className="site-image">
                    <div>
                        {testimonials.map((Testimonial) => {
                            const { id, siteImage, siteName } = Testimonial;
                            return (
                                <div className="carousel-image-container"
                                key={id}>
                                    <img src={siteImage} alt={siteName} />
                                </div>
                            )
                        })}
                    </div>
                    {/* <div>
                        {testimonials.map((testimony, i) => {
                            return (
                                <button
                                    key={i}
                                    type="button"
                                    className={i === index ? "carousel-btn__active carousel-btn " : "carousel-btn"}
                                    onClick={() => setIndex(i)}
                                >
                                </button>
                            )
                        })}
                    </div> */}
                </div>
            </div>
        </TestimonialSection>
    )
}

const TestimonialSection = styled.section`
.container {
    height: 40em;
    border-radius: 1.25rem;
}

.testimony-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.testimony {
    padding: 6rem;
}

.testimony .fs-500 {
    border-bottom: 1px solid var(--clr-neutral-100);
}

.testimony footer {
    margin-top: 3rem;
}

.testimony footer > article {
    margin-bottom: 3rem;
    display: flex;
    gap: 0.5rem;
}

.pfp {
    width: 3rem;
    height: 3rem;
    background-size: cover;
    background-position: center;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.site-image {
    border-radius: 1.25rem;
    display: grid;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
}

.site-image > div:first-child {
    height: 100%;
    width: 300%;
    display: flex;
    align-self: flex-start;
}

.carousel-image-container {
    width: 100%;
    animation: carousel-slide 15000ms ease-in-out 0s infinite normal backwards running;
}

.carousel-image-container img {
    width: 100%;
    height: 100%;
}

// .site-image > div {
//     width: 100%;
//     display: flex;
//     gap: 1rem;
// }

.carousel-btn {
    height: 0.15rem;
    border: none;
    width: 100%;
    background: var(--clr-bg-button);
    cursor: pointer;
}

.carousel-btn__active {
    background: var(--clr-bg-dark);
}

.testimony footer > a {
    color: var(--clr-neutral-100);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    transition: 0.5s;
}

.testimony footer > a svg {
    font-size: var(--fs-600);
}

.testimony footer > a:hover,
.testimony footer > a:focus {
  gap: 0.5rem;
}

@media (min-width: 50em) {
    .even-columns {
        grid-auto-flow: column;
        grid-auto-columns: 2fr 1fr ;
    }
}

@media (max-width: 50em) {
    .container {
        height: 100%;
    }

    .testimony {
        padding: 1rem;
    }
}
`

export default Testimonial;
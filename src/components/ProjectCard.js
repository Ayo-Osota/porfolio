import styled from "styled-components";
import { useGlobalContext } from "../context/context";


const ProjectCard = ({ name, description, stacks, coverArt, projectRepoLInk, projectLiveLink }) => {
    const {buttonAnimation, buttonMouseLeave} = useGlobalContext();
    const sortedStacks = stacks.map(stack => stack.toLowerCase()).sort();

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);

    return (
        <Card>
            <div
                className="image-container"
                style={{ backgroundImage: `url(${coverArt})` }}
            >
            </div>
            <article>
                <h2 className="fs-secondary-heading fw-bold ff-header">{name}</h2>
                <p className="fs-400 fw-medium">{description}</p>
                <div className="stacks-container">
                    <p>Built with:</p>
                    <div className="flex">
                        {sortedStacks.map((stack, i) => {
                            return (
                                <i key={i} className={`devicon-${stack}-plain${stack !== "javascript" ? "-wordmark" : ""} colored`}
                                ></i>
                            )
                        })}
                    </div>
                </div>
                <div className="project_button-container">
                    <a onMouseLeave={buttonMouseLeave} onMouseMove={buttonAnimation} 
                    href={projectRepoLInk} target="_blank" rel="noreferrer" className="button">View code</a>
                    <a onMouseLeave={buttonMouseLeave} onMouseMove={buttonAnimation} 
                    href={projectLiveLink} target="_blank" rel="noreferrer" className="button">View live</a>
                </div>
            </article>
        </Card>
    )
}

const Card = styled.div`
margin-top: 2rem;
padding: 1.25rem;
display: grid;
grid-template-columns: 0.5fr 1fr;
gap: 2rem;
background-color: var(--clr-bg-light);
// animation: lighten 0.1s forwards infinite;
// animation-play-state: paused;
//   /* Bind the animation to scroll */
//   animation-delay: calc(var(--scroll) * -1s);
//   /* These last 2 properites clean up overshoot weirdness */
//   animation-iteration-count: 1;
//   animation-fill-mode: both;

.image-container {
    width: 100%;
    height: 345px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 1s;
}

.image-container:hover {
    background-size: contain;
}

article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.stacks-container .flex {
    margin-top: 0.5rem;
    justify-content: flex-start;
    gap: 1rem;
}

.stacks-container i {
    font-size: var(--fs-700);
    cursor: pointer;
}

.stacks-container i:hover {
    animation: bounce 1s ease-in-out 3;
}

.project_button-container {
    margin-top: 0.5rem;
    display: flex;
    gap: 2.5rem;
}

@media (max-width: 50em) {
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    border-radius: 1.25rem;
    box-shadow: 0px 3.83585px 19.1793px rgba(0, 0, 0, 0.1);

    .project_button-container {
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;
    }
}
`

export default ProjectCard;
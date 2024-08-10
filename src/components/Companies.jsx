import styled from "styled-components";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import boxeks from "../assets/BoxEks_logo.png"
import upcut from "../assets/upcut_logo.svg"

const Companies = () => {
    return (
        <Section id="projects" className="section-mt flow">
            <div className=" container">

                <a href="https://www.instagram.com/boxeks_gaming/" target="_blank" rel="noopener noreferrer">
                    <img src={boxeks} alt="BoxEks" />
                </a>

                <a href="https://x.com/Upcutteam" target="_blank" rel="noopener noreferrer">
                    <img src={upcut} alt="Upcut" />
                </a>
            </div>
        </Section>
    )
}

const Section = styled.div`
background-color: var(--clr-bg-light);
padding: 32px 0;

.container {
display: flex;
justify-content: space-evenly;
align-items: center;
}

.container a { 
 width: 25%;
 max-width: 200px;
}
.container a img { 
 width: 100%;
}
`

export default Companies;
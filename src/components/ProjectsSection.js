import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    return (
        <section id="projects" className="section-mt flow container">
            <h1 className="fs-primary-heading ff-header fw-bold text-center">
                About <span className="text-accent">Me</span>
            </h1>
            <p className="fs-400 text-center">
                As a front end developer, I've had the opportunity to work on a wide range of projects. Here are some examples of my recent work:
            </p>
            <div className="projects-container">
                {projects.map((project) => {
                    const { id } = project;
                    return (
                        <ProjectCard key={id} {...project} stacks={project.stacks} />
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsSection;
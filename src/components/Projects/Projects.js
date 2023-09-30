import uniqid from "uniqid";
import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Project Collection</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
      <a
        href="https://github.com/bala418?tab=repositories"
        className="viewother"
        target="_blank"
      >
        <span type="button" className="btn btn--outline">
          View more on GitHub
        </span>
      </a>
    </section>
  );
};

export default Projects;

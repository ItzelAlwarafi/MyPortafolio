import { FaGithub } from "react-icons/fa"
import projects from './ProjectsData'

export default function ProjectsList() {
    return (
        <div className="project-list-container">
            <h1 className="Bold-text-titles-Back">PROJECTS</h1>
            <h1 className="Bold-text-titles">PROJECTS</h1>
            <div className="projects-cards-container">
                {projects.map((project) => (
                    <div 
                        className="project-item-container" 
                        key={project.projectName} 
                        style={{ backgroundImage: `url(${project.projectBackground})` }}
                    >
                        <div className="Project-Details-container">
                            <h1 className="project-name">{project.projectName}</h1>
                        </div>
                        <div className="project-description-card-container">
                            <a 
                                href={project.githubPath} 
                                className="project-link-gitHub-repo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <p className="project-description-card">{project.projectDesc}</p>
                            <div className="technologies-container">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="technology-bubble">
                                        {tech} 
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

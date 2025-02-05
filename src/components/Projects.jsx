import React from "react";
import "../styles/App.css";

// Importera ikoner (exempel från react-icons)
import { FaReact, FaCss3Alt, FaJs, FaGithub, FaShoppingCart } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiMongodb, SiNextdotjs } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Min personliga portfolio byggd med React och CSS.",
    image: "portfolio.jpg", // Lägg bilden i public-mappen
    github: "https://github.com/dittkonto/portfolio",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    id: 2,
    title: "E-handelsplattform",
    description: "En enkel e-handelsplattform med produkter och kundvagn.",
    image: "ecommerce.jpg",
    github: "https://github.com/dittkonto/ecommerce",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <FaShoppingCart /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    id: 3,
    title: "Bloggplattform",
    description: "En blogg där användare kan skapa och kommentera inlägg.",
    image: "blog.jpg",
    github: "https://github.com/dittkonto/blog",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2>Mina Projekt</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              <FaGithub /> GitHub
            </a>
            <div className="tooltip">
              <p>Teknologier:</p>
              <div className="tech-icons">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-icon">
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

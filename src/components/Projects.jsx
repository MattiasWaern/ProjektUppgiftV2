import React from "react";
import "../styles/App.css";

// Importera ikoner (exempel från react-icons)
import { FaReact, FaCss3Alt, FaJs, FaGithub, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Söka efter böcker",
    description: "Sida som integrerar Open Librarys offentliga Api som gör det möjligt att söka efter någon specifik bok eller Författare",
    image: "Sökabok.png", // Lägg bilden i public-mappen
    github: "https://github.com/MattiasWaern/Testar-OpenLibrary-API",
    technologies: [
      { name: "Html", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    id: 2,
    title: "Resturang Sida",
    description: "En enkel Resturang sida med en contact, about och en meny",
    image: "BBQ.png",
    github: "https://github.com/Viktorwahlqvist/restaurant-project",
    technologies: [
      { name: "Html", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    id: 3,
    title: "Min Portfölj sida",
    description: "Min portfolia hemsida, där man kan se information om mig, samt kunna se olika projekt och slutligen kunna kontakta mig",
    image: "portfölj.png",
    github: "https://github.com/MattiasWaern/ProjektUppgiftV2",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Html", icon: <FaHtml5 /> },
    ],
  },
  {
    id: 4,
    title: "TEST EXEMPEL",
    description: "DETTA ÄR BARA ETT EXEMPEL",
    image: "cogspack.png",
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

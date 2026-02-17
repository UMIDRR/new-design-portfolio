import React, { useState } from "react";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import "./projects.css";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200";

const Projects = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="featured" id="projects">
      <div className="container">
        <div className="header">
          <h2>Featured Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const isActive = activeId === project.id;

            return (
              <div
                key={project.id}
                className={`project-card ${isActive ? "active" : ""}`}
                onClick={() => handleClick(project.id)}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMG;
                    }}
                  />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Overlay: grid tərpənmir */}
                  <div className={`expand-content ${isActive ? "show" : ""}`}>
                    <p>{project.description}</p>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub size={18} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

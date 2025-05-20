import React from "react";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">{project.title}</h2>

        <div className="gallery">
          {project.images?.map((img: string, index: number) => (
            <img key={index} src={img} alt={`${project.title}-${index}`} />
          ))}
        </div>

        <div className="modal-section">
          <h3>Tâches réalisées</h3>
          <ul>
            {project.tasks?.map((task: string, index: number) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h3>Outils utilisés</h3>
          <p>{project.technologies}</p>
        </div>

        <div className="button-row">
          {project.figmaLink && (
            <a
              href={project.figmaLink}
              className="figma-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

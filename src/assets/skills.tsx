import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faJsSquare,
  faGit,
  faBootstrap,
  faPhp,
  faSymfony,
  faHtml5,
  faCss3Alt,
  faDocker,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

// Liste des compétences et outils
const devSkills = [
  { id: 1, logo: faHtml5, name: "HTML", color: "#E34F26" },
  { id: 2, logo: faCss3Alt, name: "CSS", color: "#1572B6" },
  { id: 3, logo: faJsSquare, name: "JavaScript", color: "#F7DF1E" },
  { id: 4, logo: faReact, name: "React", color: "#61DBFB" },
  { id: 5, logo: faNode, name: "Node.js", color: "#68A063" },
  { id: 6, logo: faPhp, name: "PHP", color: "#8C8C8C" },
  { id: 7, logo: faSymfony, name: "Symfony", color: "#000000" },
  { id: 8, logo: faBootstrap, name: "Bootstrap", color: "#563D7C" },
  { id: 9, logo: faGit, name: "Git", color: "#F05032" },
  { id: 10, logo: faDocker, name: "Docker", color: "#2496ED" },
];

const designTools = [
  { id: 1, logo: faFigma, name: "Figma", color: "#FF1493" },
  { id: 2, logo: "/public/icons8-adobe-after-effects.svg", name: "After Effect" },
  { id: 3, logo: "/public/icons8-adobe-photoshop.svg", name: "Photoshop" },
  { id: 4, logo: "/public/icons8-adobe-illustrator.svg", name: "Illustrator" },
  { id: 5, logo: "/public/icons8-adobe-indesign.svg", name: "Indesign" },
  { id: 6, logo: "/public/icons8-adobe-premiere-pro.svg", name: "Premiere Pro" },
  { id: 7, logo: "/public/icons8-toile.svg", name: "Canva" },
  { id: 8, logo: "/public/icons8-adobe-xd.svg", name: "Adobe XD" },
  { id: 1, logo: faFigma, name: "Figma", color: "#FF1493" },
  { id: 2, logo: "/public/icons8-adobe-after-effects.svg", name: "After Effect" },
  { id: 3, logo: "/public/icons8-adobe-photoshop.svg", name: "Photoshop" },
  { id: 4, logo: "/public/icons8-adobe-illustrator.svg", name: "Illustrator" },
  { id: 5, logo: "/public/icons8-adobe-indesign.svg", name: "Indesign" },
  { id: 6, logo: "/public/icons8-adobe-premiere-pro.svg", name: "Premiere Pro" },
  { id: 7, logo: "/public/icons8-toile.svg", name: "Canva" },
  { id: 8, logo: "/public/icons8-adobe-xd.svg", name: "Adobe XD" },
];

const SkillsSlider = () => {
  return (
    <div className="skills-slider-container">
      {/* Titre et Défilement pour les compétences de développement */}
      <h2 className="slider-title">Développement</h2>
      <div className="skills-slider dev-skills">
        <div className="slider-track">
          {[...devSkills, ...devSkills].map((skill, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={skill.logo} size="4x" style={{ color: skill.color }} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Titre et Défilement pour les outils de design */}
      <h2 className="slider-title">Design</h2>
      <div className="skills-slider design-tools">
        <div className="slider-track">
          {[...designTools, ...designTools].map((tool, index) => (
            <div className="skill" key={index}>
              {typeof tool.logo === "string" ? (
                <img src={tool.logo} alt={tool.name} width={65} height={65} />
              ) : (
                <FontAwesomeIcon icon={tool.logo} size="4x" style={{ color: "#ff1493" }} />
              )}
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlider;

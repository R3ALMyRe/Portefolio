import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import ProjectModal from "./ProjectModal";
import '../styles/projets.css';

const projects = [
  {
    id: 1,
    title: "Journée Porte Ouverte (JPO)",
    description:
      "Site web interactif pour la journée porte ouverte de l'université, permettant aux visiteurs de découvrir les différentes formations et services.",
    tasks: [
      "Développement de l'interface en React",
      "Connexion backend avec SpringBoot",
      "Création de la base H2",
      "Mise en place du routage",
      "Maquettage UI/UX mobile et pc sur Figma",
    ],
    technologies: "React, SpringBoot, H2, SQL, Figma",
    gallery: [
      "images/sae501_1.png",
      "images/sae501_2.png",
      "images/sae501_3.png"
    ],
    image: "images/sae501.png",
    figmaLink:
      "https://www.figma.com/design/stg7baNWJei3pr99RJ5eli/Maquette?node-id=0-1&t=zXyA1BTxeqwzArkD-1",
    githubLink: "https://github.com/xtraide/501.git"
  },
  {
    id: 2,
    title: "Hakoshi",
    description:
      "Plateforme de gestion de stock et de suivi des commandes pour un commerce de sushi.",
    technologies: "Angular, Symfony, SQL, Figma",
    image: "images/sae401.png",
    tasks: [
      "Conception du modèle de base de données",
      "Maquettage UI/UX sur Figma",
      "Développement des composants Angular",
      "Création des routes API Symfony",
      "Système de gestion de stock en temps réel"
    ],
    gallery: [
      "images/hakoshi_1.png",
      "images/hakoshi_2.png",
      "images/hakoshi_3.png"
    ],
    figmaLink:
      "https://www.figma.com/design/T09ITGulXjBEqKCvg3gFOV/SAE-401?node-id=344-252&t=6HZWe6K7Apyov5w7-1",
    githubLink: "https://github.com/R3ALMyRe/hakoshi-sae-401-.git"
  },
  {
    id: 3,
    title: "Webdoc",
    description:
      "Documentaire interactif en ligne permettant d'explorer des récits multimédias sur le musée de la grande guerre de Meaux.",
    technologies: "HTML, CSS, Premiere Pro, Figma",
    image: "images/webdoc.png",
    tasks: [
      "Structure HTML sémantique",
      "Intégration de contenus audio/vidéo",
      "Animations CSS sur le scroll",
      "Navigation fluide entre sections"
    ],
    gallery: [
      "images/webdoc_1.png",
      "images/webdoc_2.png",
      "images/webdoc_3.png"
    ],
    figmaLink: "https://www.figma.com/design/2yBVp4Qyg0NoHf77KhMGbw/Webdoc?node-id=0-1&t=653xz82empPEOXXf-1",
    githubLink: "https://github.com/R3ALMyRe/Webdoc.git"
  },
  {
    id: 4,
    title: "AC2FL",
    description:
      "AC2FL est la refonte du site web d’un aéroclub de Frotey, modernisant son design et améliorant l’expérience utilisateur.",
    technologies: "PHP, Angular, Bootstrap, Figma",
    image: "images/AC2FL.png",
    tasks: [
      "Maquettage UI/UX sur Figma",
      "Implémentation responsive avec Bootstrap",
      "Développement Angular dynamique",
      "Formulaires PHP sécurisés"
    ],
    gallery: [
      "images/ac2fl_1.png",
      "images/ac2fl_2.png",
      "images/ac2fl_3.png"
    ],
    figmaLink: "https://www.figma.com/design/g5IYmFF43BX4PWjxD3b0VF/Projet-SAE-303?node-id=0-1&t=UgdTnICl2OMksibb-1",
    githubLink: "https://github.com/R3ALMyRe/sae303.git"
  },
  {
    id: 5,
    title: "Xspace",
    description:
      "Site Xspace est un site web pour une entreprise fictive de téléportation offrant une alternative écologique aux sauts en parachute traditionnels, sans avion.",
    technologies: "HTML, CSS, Photoshop, Figma",
    image: "images/xspace.png",
    tasks: [
      "Création de visuels avec Photoshop",
      "Mise en page en HTML/CSS",
      "Effets de parallaxe et animations",
      "Mauqetteage sur Figma"
    ],
    gallery: [
      "images/xspace_1.png",
      "images/xspace_2.png",
      "images/xspace_3.png"
    ],
    figmaLink:
      "https://www.figma.com/design/hQyMiNojSlVPkt6Q5inp4M/Untitled?node-id=0-1&t=D44y5kYy50v1EwF4-1",
    githubLink: ""
  },
  {
    id: 6,
    title: "Site de Réservation de Matériels",
    description:
      "Système de réservation en ligne pour le prêt de matériel multimédia.",
    technologies: "HTML, CSS, PHP, MySQL, Figma",
    image: "images/SRM.png",
    tasks: [
      "Formulaires PHP dynamiques",
      "Connexion à une base MySQL",
      "Interface de gestion des réservations",
      "Gestion des utilisateurs et droits",
      "Maquettage sur Figma"
    ],
    gallery: [
      "images/srm_1.png",
      "images/srm_2.png",
      "images/srm_3.png"
    ],
    figmaLink: "https://www.figma.com/design/RXeLnYUHZwbvFfg4QFlHWY/Untitled?node-id=0-1&t=BysN9mlbv0CduMJW-1",
    githubLink: "https://github.com/R3ALMyRe/sae203.git"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const projectsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  let lastScrollY = useRef(window.scrollY).current;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      const observer = new IntersectionObserver(
        (entries) => {
          const currentScrollY = window.scrollY;
          const scrollingDown = currentScrollY > lastScrollY;
          lastScrollY = currentScrollY;

          entries.forEach((entry) => {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );

            if (entry.isIntersecting) {
              if (scrollingDown) {
                gsap.to(entry.target, {
                  opacity: 1,
                  x: 0,
                  duration: 0.6,
                  ease: "power3.out",
                });
              }
            } else {
              if (!scrollingDown) {
                gsap.to(entry.target, {
                  opacity: 0,
                  x: index % 2 === 0 ? -200 : 200,
                  duration: 0.6,
                  ease: "power3.out",
                });
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      projectsRefs.current.forEach((project) => {
        if (project) observer.observe(project);
      });

      return () => {
        projectsRefs.current.forEach((project) => {
          if (project) observer.unobserve(project);
        });
      };
    }
  }, [isMobile]);

  return (
    <Container fluid className="projects-container">
      <h2 ref={titleRef} className="projects-title">
        PROJETS
      </h2>
      <Row className="g-0">
        {projects.map((project, index) => (
          <Col
            key={project.id}
            xs={12}
            md={6}
            className="project"
            style={{
              backgroundImage: `url(${project.image})`,
              opacity: isMobile ? 1 : 0,
              transform: isMobile
                ? "none"
                : `translateX(${index % 2 === 0 ? "-50px" : "50px"})`,
            }}
            ref={(el: HTMLDivElement | null) =>
              (projectsRefs.current[index] = el)
            }
            data-index={index}
            onClick={() => openModal(project)}
          >
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="technologies">🛠️ {project.technologies}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal (si jamais tu veux l’utiliser plus tard) */}
      {modalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </Container>
  );
};

export default Projects;

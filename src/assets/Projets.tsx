import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";


const projects = [
  {
    id: 1,
    title: "Journée Porte Ouverte (JPO)",
    description: "Site web interactif pour la journée porte ouverte de l'université, permettant aux visiteurs de découvrir les différentes formations et services.",
    technologies: "React, SpringBoot, H2, SQL",
    image: "images/sae501.png",
    figmaLink: "https://www.figma.com/design/stg7baNWJei3pr99RJ5eli/Maquette?node-id=0-1&t=VPOWdSwrrih9n2FL-1",
  },
  {
    id: 2,
    title: "Hakoshi",
    description: "Plateforme de gestion de stock et de suivi des commandes pour un commerce de sushi.",
    technologies: "Angular, Symfony, SQL",
    image: "images/sae401.png",
    figmaLink: "https://www.figma.com/design/T09ITGulXjBEqKCvg3gFOV/SAE-401?node-id=0-1&t=XAx6fjaZgmzUqKvL-1",
  },
  {
    id: 3,
    title: "Webdoc",
    description: "Documentaire interactif en ligne permettant d'explorer des récits multimédias sur le musée de la grande guerre de Meaux",
    technologies: "HTML, CSS",
    image: "images/webdoc.png",
    figmaLink: "https://www.figma.com/file/exemple-Webdoc",
  },
  {
    id: 4,
    title: "AC2FL",
    description: "AC2FL est la refonte du site web d’un aéroclub de Frotey, modernisant son design et améliorant l’expérience utilisateur.",
    technologies: "PHP, Angular, Bootstrap",
    image: "images/AC2FL.png",
    figmaLink: "https://www.figma.com/file/exemple-AC2FL",
  },
  {
    id: 5,
    title: "Xspace",
    description: "Site Xspace est un site web pour une entreprise fictive de téléportation offrant une alternative écologique aux sauts en parachute traditionnels, sans avion.",
    technologies: "HTML, CSS, Photoshop",
    image: "images/xspace.png",
    figmaLink: "https://www.figma.com/design/hQyMiNojSlVPkt6Q5inp4M/Untitled?node-id=0-1&t=7Z4Y4ZsVs5ZvfC0g-1",
  },
  {
    id: 6,
    title: "Site de Réservation de Matériels",
    description: "Système de réservation en ligne pour le prêt de matériel multimédia.",
    technologies: "HTML, CSS, PHP, MySQL",
    image: "images/SRM.png",
    figmaLink: "https://www.figma.com/file/exemple-SRM",
  },
];

const Projects = () => {
  const projectsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [isMobile, setIsMobile] = useState(false); // État pour savoir si l'écran est mobile

  useEffect(() => {
    // Détection de la taille de l'écran
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Si la largeur est inférieure à 768px
    };

    // Initialiser la vérification de la taille
    handleResize();

    // Ajouter un écouteur d'événements pour redimensionner
    window.addEventListener("resize", handleResize);

    // Supprimer l'écouteur lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Si ce n'est pas un écran mobile, on applique l'animation GSAP
    if (!isMobile) {
      // Animation du titre avec GSAP
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "bounce.out" }
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animation depuis la gauche ou la droite en fonction de l'index
              gsap.to(entry.target, {
                opacity: 1,
                x: 0, // Rétablir la position à la normale
                duration: 0.6,
                ease: "power3.out",
              });
            } else {
              // Animation de départ, à gauche pour les éléments impairs et à droite pour les éléments pairs
              gsap.to(entry.target, {
                opacity: 0,
                x: entry.target.dataset.index % 2 === 0 ? -200 : 200, // Déplacement vers la gauche ou la droite en fonction de l'index
                duration: 0.6,
                ease: "power3.out",
              });
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
  }, [isMobile]); // L'effet se déclenche quand la taille de l'écran change

  return (
    <Container fluid className="projects-container">
      <h2 ref={titleRef} className="projects-title">PROJETS</h2>
      <Row className="g-0">
        {projects.map((project, index) => (
          <Col
            key={project.id}
            xs={12} md={6}  // Chaque projet occupe 100% de la largeur sur les petits écrans et 50% sur les moyens
            className="project"
            style={{
              backgroundImage: `url(${project.image})`,
              opacity: isMobile ? 1 : 0, // Affichage normal sur mobile
              transform: isMobile ? "none" : `translateX(${index % 2 === 0 ? '-50px' : '50px'})`,
            }}
            ref={(el: HTMLDivElement | null) => (projectsRefs.current[index] = el)}
            data-index={index} // On ajoute l'index au data attribut pour déterminer la direction
            onClick={() => window.open(project.figmaLink, "_blank")}
          >
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="technologies">🛠️ {project.technologies}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;

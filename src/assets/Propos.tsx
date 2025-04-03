import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myPhoto from "/my-photo.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const aboutRef = useRef(null);
  const photoRef = useRef(null); // Référence pour la photo

  useEffect(() => {
    // Animation pour la photo : déplacement vertical
    gsap.to(photoRef.current, {
      y: 20,
      duration: 3,
      repeat: -1, // Animation infinie
      yoyo: true, // Reviens en arrière
      ease: "power2.inOut",
    });

    // Effet d'opacité lors du scroll sur la photo
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Animation d'éclatement des bulles
  const handleClick = (index: number) => {
    const bubbleElement = document.getElementById(`bubble-${index}`);
    if (bubbleElement) {
      bubbleElement.style.animation = "none";

      gsap.to(bubbleElement, {
        opacity: 0,
        duration: 0,
        ease: "power2.inOut",
        onComplete: () => {
          setTimeout(() => {
            gsap.to(bubbleElement, {
              opacity: 0.7,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => {
                bubbleElement.style.animation = "floatBubbles 6s infinite ease-in-out";
              },
            });
          }, 1000);
        },
      });
    }
  };

  return (
    <Container fluid className="py-5" id="propos-container" ref={aboutRef}>
      <Row className="d-flex align-items-center">
        {/* Colonne de gauche avec la photo et les bulles */}
        <Col md={6} className="d-flex justify-content-center position-relative">
          <div className="photo-container">
            <img
              src={myPhoto}
              alt="Ma photo"
              className="about-photo floating"
              ref={photoRef} // Référence à la photo pour l'animation verticale
            />
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                id={`bubble-${index}`}
                className={`bubble-about bubble${index}`}
                onClick={() => handleClick(index)}
                style={{
                  animation: `floatBubbles ${6 + Math.random() * 2}s infinite ease-in-out ${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </Col>

        {/* Colonne de droite avec le texte */}
        <Col md={6} id="text-propos">
          <h2 className="about-title">About me :</h2>
          <p className="about-text">
            Je suis Développeur Front-end et Back-end passionné par la création
            d'expériences utilisateur. J'aime travailler avec des
            technologies modernes et relever des défis techniques pour créer des
            applications web robustes et réactives.
          </p>
          <p className="about-text">
            Mon parcours m'a permis de travailler sur divers projets, et je
            suis toujours en quête de nouvelles compétences et d'opportunités pour
            évoluer dans le domaine du développement. Je suis aussi un
            autodidacte motivé par l'innovation et la performance.
          </p>
          <a href="/public/Hamelin_Remy_CV.pdf"
          target="_blank"
          rel="noopener noreferrer">
          <Button variant="primary" className="about-button">
            Télécharger mon CV
          </Button>
          </a>

        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

const FirstPage: React.FC = () => {
  const bubblesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animation des textes au scroll
    gsap.fromTo(
      ".text-anim",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5,
        onComplete: () => {
          // Après l'apparition, on active le ScrollTrigger
          gsap.to(".text-anim", {
            opacity: 1,
          });
        },
      }
    );

    if (bubblesRef.current) {
      // Animation des bulles existantes
      gsap.to(".bubble", {
        y: -1000,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bubblesRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []); // Ajout du tableau de dépendances vide pour exécuter l'effet une seule fois

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100" id="first-page-container">
      <Row className="w-100 d-flex flex-column align-items-center position-relative row-first">
        <Col className="text-center">
          <p id="name" className="text-anim">RÉMY HAMELI</p>
        </Col>
        <Col className="text-center">
          <p id="typing" className="text-anim">Développeur Front & Back-end</p>
        </Col>
      </Row>

      {/* Section des bulles */}
      <section className="sticky" ref={bubblesRef}>
        <div className="bubbles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bubble"></div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FirstPage;

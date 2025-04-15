import React, { useState, useEffect } from "react";
import '../styles/veille.css';

const techWatchSites = [
  {
    id: 1,
    name: "Dribbble",
    description:
      "Une plateforme où les designers UX/UI partagent leurs créations et s'inspirent des tendances.",
    link: "https://www.dribbble.com",
    image: "images/dribbble.png",
  },
  {
    id: 2,
    name: "Wix",
    description:
      "Un outil intuitif permettant de créer des sites web avec des designs modernes et responsives.",
    link: "https://fr.wix.com/",
    image: "images/wix.png",
  },
  {
    id: 3,
    name: "Behance",
    description:
      "Un réseau social pour les designers, où l'on découvre des projets UX/UI innovants.",
    link: "https://www.behance.net/",
    image: "images/behance.png",
  },
];

const TechWatchSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techWatchSites.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="tech-watch-slider">
      <h2 className="title">🌐 Veille Technologique UX/UI</h2>
      <div className="slider-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {techWatchSites.map((site) => (
            <div key={site.id} className="slide">
              <img src={site.image} alt={site.name} className="site-image" />
              <h3>{site.name}</h3>
              <p className="description">{site.description}</p>
              <a href={site.link} target="_blank" rel="noopener noreferrer">
                Visiter le site
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="indicators">
        {techWatchSites.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TechWatchSlider;

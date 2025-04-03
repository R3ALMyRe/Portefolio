import React, { useState, useEffect } from "react";

const techWatchSites = [
    {
      id: 1,
      name: "Dribbble",
      description: "Une plateforme où les designers UX/UI partagent leurs créations et s'inspirent des tendances.",
      link: "https://www.dribbble.com",
      image: "/dribbble.png",
    },
    {
      id: 2,
      name: "Wix",
      description: "Un outil intuitif permettant de créer des sites web avec des designs modernes et responsives.",
      link: "https://fr.wix.com/",
      image: "/wix.png",
    },
    {
      id: 3,
      name: "Behance",
      description: "Un réseau social pour les designers, où l'on découvre des projets UX/UI innovants.",
      link: "https://www.behance.net/",
      image: "/behance.png",
    },
  ];

const TechWatchSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techWatchSites.length);
    }, 5000); // Change tous les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tech-watch-slider">
      <h2 className="title">🌐 Veille Technologique UX/UI</h2>
      <div className="slider-container">
        {techWatchSites.map((site, index) => (
          <div
            key={site.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={site.image} alt={site.name} className="site-image" />
            <h3>{site.name}</h3>
            <p>{site.description}</p>
            <a href={site.link} target="_blank" rel="noopener noreferrer">
              Visiter le site
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechWatchSlider;

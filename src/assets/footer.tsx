import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/R3ALMyRe" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/r%C3%A9my-hamelin/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="tel:+33651444121">
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;

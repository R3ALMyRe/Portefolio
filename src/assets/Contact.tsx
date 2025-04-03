import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com"; // Importer EmailJS

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null); // Temps de la dernière soumission
  const SUBMIT_INTERVAL = 30 * 1000; // Intervalle de soumission (30 secondes)

  useEffect(() => {
    gsap.from(contactRef.current, {
      opacity: 1, // L'opacité commence à 1
      y: 50, // Vous pouvez ajuster ou supprimer le mouvement vertical
      duration: 0.5, // Durée plus courte pour un effet plus rapide
      ease: "power3.out",
    });

    // Vérification du temps de soumission précédant stocké dans localStorage
    const storedSubmitTime = localStorage.getItem("lastSubmitTime");
    if (storedSubmitTime) {
      setLastSubmitTime(Number(storedSubmitTime));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentTime = Date.now();
    // Vérification si la soumission est trop rapide
    if (lastSubmitTime && currentTime - lastSubmitTime < SUBMIT_INTERVAL) {
      setStatus("Veuillez attendre 30s avant de renvoyer un message.");
      return; // Empêche l'envoi du formulaire si le temps écoulé est trop court
    }

    // Envoi de l'email via EmailJS
    emailjs
      .sendForm("service_gmail", "template_1", e.target as HTMLFormElement, "JJC76SV2utuZlWDoW")
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message envoyé avec succès !");
          localStorage.setItem("lastSubmitTime", currentTime.toString()); // Sauvegarde du temps de soumission dans localStorage
          setLastSubmitTime(currentTime); // Mettez à jour le temps de la dernière soumission
        },
        (error) => {
          console.log(error.text);
          setStatus("Une erreur est survenue. Réessayez.");
        }
      );
  };

  return (
    <Container className="contact-container" ref={contactRef}>
      <h2 className="contact-title">Contactez-moi</h2>
      <p className="contact-subtitle p-contact">Je serais ravi de discuter avec vous !</p>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control className="form-input"
                type="text"
                placeholder="Votre nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className="form-input"
                type="email"
                placeholder="Votre email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                className="message form-input"
                as="textarea"
                rows={4}
                placeholder="Votre message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="btn-grp">
            <Button variant="primary" type="submit" className="contact-btn">
              Envoyer
            </Button>
            </Form.Group>
          </Form>
          {status && <p className="p-contact">{status}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

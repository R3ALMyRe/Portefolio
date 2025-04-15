import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/navbar.css';

function MyNavbar() {
    return (
        <Navbar expand="lg" className="navbar" fixed="top">
            <Container id="navbar">
                <Navbar.Brand href="/">
                    <img src="/Logo.svg" alt="logo" style={{ width: '100px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <img 
                        src="/menu.svg" 
                        alt="Menu" 
                        style={{ width: '30px', height: '30px' }} 
                    />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link as={Link} to="propos-container" smooth={true} duration={300} className="navig">À propos</Nav.Link>
                    <Nav.Link as={Link} to="projects-container" smooth={true} duration={300} className="navig">Projets</Nav.Link>
                    <Nav.Link as={Link} to="contact-container" smooth={true} duration={300} className="navig">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;

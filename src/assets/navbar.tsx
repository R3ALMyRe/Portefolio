import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
    return (
        <Navbar expand="lg">
            <Container id="navbar">
                <Navbar.Brand href="/">
                    <img src="../public/Logo.svg" alt="logo" style={{ width: '100px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <img 
                        src="../public/menu.svg" 
                        alt="Menu" 
                        style={{ width: '30px', height: '30px' }} 
                    />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="navig" href="/home">À propos</Nav.Link>
                        <Nav.Link className="navig" href="/about">Compétences</Nav.Link>
                        <Nav.Link className="navig" href="/projects">Projets</Nav.Link>
                        <Nav.Link className="navig" href="/contacts">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;

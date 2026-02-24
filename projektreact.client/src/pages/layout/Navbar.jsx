import { Link } from 'react-router-dom';
import { Navbar, Container, Image, Form, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Brand>
                    <Link to="/" className="d-block">
                        <Image src="/image1.png" className="logo" />
                    </Link>
                </Navbar.Brand>
                <Link to="/" className="projektreact">ProjektReact</Link>
                <Navbar.Collapse id="navbar-nav">
                    <Form className="d-flex ms-auto">
                        <Form.Control
                            type="search"
                            placeholder="Szukaj"
                            className="me-2"
                            aria-label="Szukaj"
                        />
                        <Button variant="outline-primary">Szukaj</Button>
                    </Form>
                </Navbar.Collapse>
                <Link to="/" className="btn btn-primary ms-2">
                    <FaUser /> Profil - Adam Pawlak
                </Link>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
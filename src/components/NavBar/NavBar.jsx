// import { CartWidget } from '../CartWidget/CartWidget.jsx'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CarWidget/CartWidget';
import FavWidget from '../FavWidget/FavWidget';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Link to="/">TurboEscala</Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Link to="/productos/Camiones">Camiones</Link>
                    <Link to="/productos/Camionetas">Camionetas</Link>
                    <Link to="/productos/Autos">Autos</Link>
                    <Link to="/productos/Accesorios">Accesorios</Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>

                <Nav>
                    <CartWidget/>
                    <FavWidget />
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar
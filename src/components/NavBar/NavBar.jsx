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
            <Link to="/">RuedasEnEscalas</Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Link to="/productos/Camiones">Camiones</Link>
                    <Link to="/productos/Camionetas">Camionetas</Link>
                    <Link to="/productos/Autos">Autos</Link>
                    <Link to="/productos/Accesorios">Accesorios</Link>
                    <Link to="/mispedidos">Mis Pedidos</Link>
                </Nav>
                
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
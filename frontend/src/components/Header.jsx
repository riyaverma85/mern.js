import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" id="top">
                <Container>
                    <Navbar.Brand href="#home" id="title">Myweb</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home" className='head'>Home</Nav.Link>
                        <Nav.Link as={Link} to="registration" className='head'>Registration</Nav.Link>
                        <Nav.Link as={Link} to="login" className='head'>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default Header;
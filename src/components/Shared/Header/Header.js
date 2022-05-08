import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect className='bg-dark' expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Perfume-Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" as={Link} to='/home'>Home</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link href="#inventory" as={Link} to='/inventory'>Inventory</Nav.Link>
                                    <Nav.Link href="#addItem" as={Link} to='/addItem'>Add Item</Nav.Link>
                                </>
                            }

                            <Nav.Link href="#blogs" as={Link} to='/blogs'>Blogs</Nav.Link>
                            {
                                user ? <button onClick={handleSignOut}>SignOut</button> : <Nav.Link herf="#login" as={Link} to='/login'> login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react'
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap'
import BlogApp from '../assets/blog.png'

const Header = () => {
    return (
        <div className='header'>

            <Navbar sticky='top' collapseOnSelect expand="lg" className="navbar-main ">
                <Container>
                    <Navbar.Brand href="#home"><img className='logo-img' src={BlogApp} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='header-link' href="#features">About</Nav.Link>
                            <Nav.Link className='header-link' href="#pricing">Pricing</Nav.Link>
                            <Nav.Link className='header-link' href="#pricing">Contact</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <Button className='register-btn'>Register</Button>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button className='login-btn'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header




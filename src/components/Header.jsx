import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap'
import BlogApp from '../assets/blog.png'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const showUserName = () => {
        return `${user?.user?.firstName} ${user?.user?.lastName}`
    }
    const showProfileImage = () => {
        if (user?.user?.profilePicture) {
            return (
                <div>
                    <img src={user?.user?.profilePicture} />
                </div>
            )

        } else {
            return (
                <div className='profile-container'>
                    <div className='profile-avatar'>
                        <span>{user?.user?.firstName?.[0]}</span>
                        <span>{user?.user?.lastName?.[0]}</span>
                    </div>
                </div>

            )

        }
    }
    return (
        <div className='header'>

            <Navbar sticky='top' collapseOnSelect expand="lg" className="navbar-main ">
                <Container>
                    <Navbar.Brand href="/"><img className='logo-img' src={BlogApp} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='header-link' href="/about">About</Nav.Link>
                            <Nav.Link className='header-link' href="/pricing">Pricing</Nav.Link>
                            <Nav.Link className='header-link' href="/contact">Contact</Nav.Link>


                        </Nav>
                        {user ? (
                            <Nav className='profile-nav'>
                                <Nav.Link href="/#">
                                    <div className='header-link'>
                                        {showUserName()}
                                    </div>
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/login">
                                    <div >
                                        {showProfileImage()}
                                    </div>
                                </Nav.Link>
                            </Nav>
                        ) : (
                            <Nav>
                                <Nav.Link href="/register">
                                    <Button className='register-btn'>Register</Button>
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/login">
                                    <Button className='login-btn'>Login</Button>
                                </Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    )
}

export default Header




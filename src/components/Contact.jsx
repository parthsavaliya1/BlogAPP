import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row, Stack } from 'react-bootstrap'
import logoImage from '../assets/blogfooter.png'
import logo from '../assets/blog.png'
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LOGIN_USER } from '../utils/Query';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const Contact = () => {


    const [contactData, setContactData] = useState([{
        name: "",
        email: "",
        message: ""
    }])

    const handleUserData = (e, name) => {
        const value = e?.target?.value;

        setContactData({
            ...userData,
            [name]: value
        })
    }




    return (
        <Container >
            <Row className='section-2'>
                <Col >
                    <h1 className='content-1 about-us-content'>
                        Get in Touch
                    </h1>
                    <h1 className='content-4'>
                        We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
                    </h1>
                </Col>
            </Row>
            <Row className='contact-form-row'>
                <Col md={6} className='contact-left-col'>
                    <div>

                        <div>
                            {/* Video element added */}
                            <video autoPlay loop muted className='left-video'>
                                <source src='https://media.istockphoto.com/id/1143681097/video/female-hands-interact-hud-hologram-contact-us.mp4?s=mp4-640x640-is&k=20&c=FQiitNgw4A7rbdjvtfNau1RqbAtJU3HaIHSNEyjnK1c=' type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='login-right-col'>
                    <div className='right-div'>

                        <div className='sign-in'>
                            CONTACT US
                        </div>
                        <div className='login-form'>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='form-label'>Name<span className='required'>*</span></Form.Label>
                                    <InputGroup>

                                        <Form.Control value={contactData?.name} onChange={(e) => handleUserData(e, 'name')} className='contact-input' type="text" placeholder="Enter Name" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='form-label'>Email<span className='required'>*</span></Form.Label>
                                    <InputGroup>

                                        <Form.Control value={contactData?.email} onChange={(e) => handleUserData(e, 'email')} className='contact-input' type="email" placeholder="Enter Email" />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='form-label'>Message<span className='required'>*</span></Form.Label>
                                    <InputGroup>

                                        <Form.Control style={{ height: '100px' }}
                                            as={"textarea"} value={contactData?.message}
                                            onChange={(e) => handleUserData(e, 'message')} className='contact-input' placeholder='Enter Message' />
                                    </InputGroup>
                                </Form.Group>
                            </Form>
                        </div>

                        <div className='login-form-btn'>
                            <Button color='#278378' className='signin-btn'>Contact Us</Button>
                        </div>

                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Contact

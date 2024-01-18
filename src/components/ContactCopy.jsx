import React, { useState } from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

const Contact = () => {
    const [contactData, setContactData] = useState([{
        name: "",
        email: "",
        message: ""
    }])

    const handleUserData = (e, name) => {
        const value = e?.target?.value;

        setUserData({
            ...userData,
            [name]: value
        })
    }
    return (
        <Container>
            <Row className='section-2'>
                <Col>
                    <h1 className='content-1'>Get in Touch</h1>
                    <h1 className='content-6'>We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</h1>
                </Col>
            </Row>
            <Row className='contact-us-form'>
                <Col md={6}>
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
                </Col>

            </Row>
        </Container>
    )
}

export default Contact
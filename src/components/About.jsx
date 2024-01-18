import React from 'react'
import { Col, Container, Row, Button, Accordion } from 'react-bootstrap'
import { aboutContent, priceFaqArray, pricingPlan } from '../utils/Constant'

const About = () => {
  return (
    <Container className='about-us-page'>
      <Row className='section-2 about-us-1'>
        <Col>
          <h1 className='content-1 about-us-content'>
            Welcome to BlogAPP!
          </h1>
          <h1 className='content-4'>
            At BlogAPP, we envision a world where every individual's unique voice is heard. We believe that through the art of blogging, we can foster a global community of storytellers, thinkers, and creators. Our platform is more than a space for words; it's a canvas for your ideas and a stage for your narratives.
          </h1>
        </Col>
      </Row>
      <Row className='section-3'>

        <div className='grid-container-2'>
          <div className='blog-home-section'>
            <div className='section-title'>
              Our Story

            </div>
            <div className='section-content'>
              BlogAPP was born out of a passion for connecting people through meaningful content. Our founders, avid bloggers themselves, recognized the need for a platform that not only simplified the blogging experience but also celebrated the diversity of voices in the online space. What started as an idea has now evolved into a thriving community of bloggers from all walks of life.
            </div>
          </div>
          <div>
            <img className='about-img' src='https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg' />
          </div>
        </div>
        <div className='grid-container-2'>
          <div>
            <img className='about-img' src='https://cdn.pixabay.com/photo/2020/03/06/08/00/laptop-4906312_1280.jpg' />
          </div>
          <div className='blog-home-section'>
            <div className='section-title'>
              Our Mission


            </div>
            <div className='section-content'>
              Our mission is to democratize content creation. We strive to break down barriers and make blogging accessible to everyone. Whether you're a professional writer, a hobbyist, or someone with a unique perspective to share, BlogAPP is your canvas. We're on a mission to empower you to express yourself freely, without limitations.
            </div>
          </div>

        </div>
      </Row>
      <Row className='section-2'>
        <Row>
          <Col>
            <h2 className='faq'>What Sets Us Apart
            </h2>
          </Col>
        </Row>
        <Row className='faq-list'>
          <Accordion defaultActiveKey="0" flush>
            {aboutContent?.map((faq, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header className="faq-question">{faq?.title}</Accordion.Header>
                <Accordion.Body>
                  {faq?.description}
                </Accordion.Body>
              </Accordion.Item>
            ))}


          </Accordion>
        </Row>

      </Row>
      <Row className='section-1'>
        <Col>
          <h1 className='content-1 about-us-content'>
            Embark on Your Blogging Journey

          </h1>
          <h1 className='content-5'>
            Ready to share your story with the world? Join BlogAPP today, and let your voice be heard. From creating your first blog post to connecting with fellow bloggers, your journey starts here. Sign up now, and let the adventure begin.

          </h1>

          <h5 className='content-6'>
            Thank you for choosing BlogAPP. We can't wait to see the incredible stories you'll bring to life.


          </h5>
        </Col>
      </Row>
    </Container>
  )
}

export default About
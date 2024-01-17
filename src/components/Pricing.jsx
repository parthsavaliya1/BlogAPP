import React from 'react'
import { Col, Container, Row, Button, Accordion } from 'react-bootstrap'
import { priceFaqArray, pricingPlan } from '../utils/Constant'

const Pricing = () => {
  return (
    <Container>
      <Row className='section-1'>
        <Col>
          <h1 className='content-1'>
            Welcome to BlogAPP!
          </h1>
          <h1 className='content-2'>
            Explore our pricing plans to find the best fit for your needs.
          </h1>
        </Col>
      </Row>
      <Row className='section-2'>
        <Row>
          <Col>
            <h1 className='blog-main'>Pricing Plan</h1>
          </Col>
        </Row>

        <div className='grid-container-price'>

          {pricingPlan?.map((price, inx) => (
            <div key={inx} className='card price-card' xs={12} md={4} lg={3}>
              <div className='card-main'>
                <div>
                  <div className='blog-title'>
                    {price?.title}
                  </div>
                  <div className='price'>
                    {`$${price?.cost}/month`}
                  </div>
                  <hr />
                  <ul className='price-desc-list'>
                    {price?.desc?.map((de, index) => (
                      <li className='price-desc' key={index}>{de}</li>
                    ))}
                  </ul>


                </div>
              </div>
            </div>
          ))}

        </div>
        <div className='text-center'>
          <Button className='started-btn'>
            Subscribe
          </Button>
        </div>

      </Row>
      <Row className='section-3'>
        <Row>
          <Col>
            <h2 className='faq'>Frequently Asked Questions (FAQs)
            </h2>
          </Col>
        </Row>
        <Row className='faq-list'>
          <Accordion defaultActiveKey="0" flush>
            {priceFaqArray?.map((faq, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header className="faq-question">{faq?.question}</Accordion.Header>
                <Accordion.Body>
                  {faq?.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}


          </Accordion>
        </Row>

      </Row>
    </Container>
  )
}

export default Pricing
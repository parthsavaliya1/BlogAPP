import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Container>
                <Row className='section-1'>
                    <Col>
                        <h1 className='content-1'>
                            You're not alone.
                        </h1>
                        <h1 className='content-2'>
                            Learn from other leaders that are serving in the trenches.
                        </h1>
                        <Button className='started-btn'>
                            Get Started
                        </Button>
                    </Col>
                </Row>
                <Row className='section-2'>
                    <Row>
                        <Col>
                            <h1 className='blog-main'>Our Blog</h1>
                        </Col>
                    </Row>

                    <div className='grid-container'>

                        {[1, 2, 3, 4, 5].map((blog, index) => (
                            <div className='card' xs={12} md={4} lg={3}>
                                <div className='card-main'>
                                    <div>
                                        <div className='blog-title'>
                                            My First Blog
                                        </div>
                                        <div className='blog-date-time'>
                                            <div className='blog-date'>
                                                11/12/1998
                                            </div>
                                            <div className='blog-time'>
                                                {`-4 minutes`}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='blog-content'>
                                            {`                                    XY sorunu, asıl probleminize yardım aramaktansa bu problemi çözmek için denediğiniz hatalı çözüm hakkında yardım aramaktır. Bu durum hem yardım isteyenler hem de yardım edecekler açısından oldukça zaman ve enerji kaybına yol açıyor. Biraz daha detaylandırmak gerekirse:`}
                                        </div>
                                        <div className='blog-tags'>
                                            <span className='blog-tag'>
                                                English
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </Row>
                <Row className='section-3'>
                    <Col>
                        <h1 className='content-1'>
                            Create a blog.
                        </h1>
                        <h3 className='content-3'>
                            Generate revenue from your content with BlogAPP Member Areas
                        </h3>
                    </Col>
                    <div className='grid-container-2'>
                        <div className='blog-home-section'>
                            <div className='section-title'>
                                Sell premium content
                            </div>
                            <div className='section-content'>
                                Whether you’re a chef selling recipes and cooking videos or a financial planner sharing newsletters and podcasts, Squarespace has the tools you need to sell exclusive content on your blog.
                            </div>
                        </div>
                        <div>
                            <img src='https://media-www.sqspcdn.com/images/pages/tour/member-areas/engage/promote-500w.jpg' />
                        </div>
                    </div>
                    <div className='grid-container-2'>
                        <div>
                            <img src='https://media-www.sqspcdn.com/images/pages/tour/member-areas/engage/integrate-500w.jpg' />
                        </div>
                        <div className='blog-home-section'>
                            <div className='section-title'>
                                Create a paid newsletter

                            </div>
                            <div className='section-content'>
                                Use Member Areas to manage lists, send newsletters, and connect with your blog readers—all from one place.
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home
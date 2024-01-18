import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { GET_ALL_POST } from '../utils/Query';
import { calculateTimeDifference, formatDate } from '../admin/utils';

const Home = () => {
    const [allPost, setAllPost] = useState([])
    const { loading, error, data } = useQuery(GET_ALL_POST);
    useEffect(() => {
        if (data) {
            setAllPost(data.posts);
        }
    }, [data]);
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

                        {allPost?.map((blog, index) => (
                            <div key={index} className='card' xs={12} md={4} lg={3}>
                                <div className='card-main'>
                                    <div>
                                        <div className='blog-title'>
                                            {blog?.title}
                                        </div>
                                        <div className='blog-date-time'>
                                            <div className='blog-date'>
                                                {formatDate(blog?.createdAt)}
                                            </div>
                                            <div className='blog-time'>
                                                {`${calculateTimeDifference(blog?.createdAt)}`}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='blog-content'>
                                            <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
                                        </div>
                                        <div className='blog-tags'>
                                            {blog?.tags?.length > 0 && blog?.tags?.map((tg, index) => (
                                                <span key={index} className='blog-tag'>
                                                    {tg}
                                                </span>
                                            ))}

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
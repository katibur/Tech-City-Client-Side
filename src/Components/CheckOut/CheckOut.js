import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const CheckOut = () => {
    const { title, details, image_url, videos, rating, author, enrolled } = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Row className='w-75 mx-auto'>
                <Col className='text-center'>
                    <Card className='mx-auto border p-2 mb-5'>
                        <h2>Course Name: <span className='fw-bold'> {title}</span></h2>
                        <Card.Header className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex'>
                                <Image
                                    className='me-2'
                                    roundedCircle
                                    src={author?.img}
                                    style={{ height: '60px' }}
                                ></Image>
                                <div>
                                    <p className='mb-0'><span className='fw-bold'>Course Instructor: </span>{author?.name}</p>
                                    <small><span className='fw-bold'>Released On: </span>{author?.published_date}</small>
                                </div>
                            </div>
                        </Card.Header>

                        <Image src={image_url} className='my-2'></Image>
                        <div className='text-start'>
                            <h5>Details:</h5>
                            <p>{details}</p>
                            <br />

                            <div className='d-flex align-items-center'>
                                <h5 className='me-2'>Rating: </h5>
                                <h5>{rating.number}</h5>
                            </div>
                            <div className='d-flex'>
                                <h5 className='me-2'>Total Enrolled: </h5>
                                <h5>{enrolled}</h5>
                            </div>

                            <div className='d-flex'>
                                <h5 className='me-2'>Total Videos: </h5>
                                <h5>{videos}</h5>
                            </div>
                        </div>
                        <Button><Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to='/'>Back To Home</Link></Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CheckOut;
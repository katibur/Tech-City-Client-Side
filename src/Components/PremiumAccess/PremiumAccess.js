import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const PremiumAccess = () => {
    const course = useLoaderData();

    const { _id, title } = course;

    const checkoutHandler = () => {
        toast.success('Subscription Successful.');
    }

    return (
        <div>
            <Header></Header>
            <div className='mx-auto text-center'>
                <h2 className='mb-5'>Our Plans For <span className='fw-bold'>{title}</span></h2>
                <Row className='mx-auto'>
                    <Col lg='3' className='mx-auto mb-5'>
                        <Card >
                            <h1 className='bg-primary text-white py-2'>Free</h1>
                            <div className='text-start ms-3'>
                                <h5><FaCheck></FaCheck> Ads will appear.</h5>
                                <h5><FaCheck></FaCheck> Video resolution 480p MAX.</h5>
                                <h5><FaCheck></FaCheck> Can not watch more than 3hour/day.</h5>
                                <h5><FaCheck></FaCheck> Can not share the videos.</h5>
                                <h5><FaCheck></FaCheck> All contents will not appear.</h5>
                                <br />
                            </div>

                            <Button onClick={checkoutHandler} className='btn btn-info'><Link to={`/checkout/${_id}`} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Checkout</Link></Button>
                        </Card>
                    </Col>

                    <Col lg='3' className='mx-auto mb-5'>
                        <Card>
                            <h1 className='bg-primary text-white py-2'>$ 9/<small>month</small></h1>
                            <div className='text-start ms-3'>
                                <h5><FaCheck></FaCheck> Ads will appear frequently.</h5>
                                <h5><FaCheck></FaCheck> Video resolution 1080p MAX.</h5>
                                <h5><FaCheck></FaCheck> Can not watch more than 6hour/day.</h5>
                                <h5><FaCheck></FaCheck> Can not share all of the videos.</h5>
                                <h5><FaCheck></FaCheck> A few contents will not appear.</h5>
                                <br />
                            </div>

                            <Button onClick={checkoutHandler} className='btn btn-info'><Link to={`/checkout/${_id}`} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Checkout</Link></Button>
                        </Card>
                    </Col>


                    <Col lg='3' className='mx-auto mb-5'>
                        <Card>
                            <h1 className='bg-primary text-white py-2'>$ 99/<small>year</small></h1>
                            <div className='text-start ms-3'>
                                <h5><FaCheck></FaCheck> Ads will not appear.</h5>
                                <h5><FaCheck></FaCheck> Get videos of high resolution more than 1080p.</h5>
                                <h5><FaCheck></FaCheck> Watch more than 6hour/day.</h5>
                                <h5><FaCheck></FaCheck> Can share all the videos.</h5>
                                <h5><FaCheck></FaCheck> All contents will appear.</h5>
                                <br />
                            </div>

                            <Button onClick={checkoutHandler} className='btn btn-info'><Link to={`/checkout/${_id}`} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Checkout</Link></Button>
                        </Card>
                    </Col>

                </Row>

            </div>
        </div>
    );
};

export default PremiumAccess;
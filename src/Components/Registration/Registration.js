import React from 'react';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col lg='5' className='ms-5 px-5 py-3 rounded' style={{ backgroundColor: '#CCFFFF' }}>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='photoURL' type="text" placeholder="Enter Photo URL" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    <p className='fw-bold'>Already Have An Account? <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></p>
                </Col>


                <Col>

                </Col>
            </Row>
        </div>
    );
};

export default Login;
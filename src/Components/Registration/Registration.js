import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Registration = () => {

    const [error, setError] = useState('');

    const [accepted, setAccepted] = useState(false);

    const { createUser } = useContext(AuthContext);

    const registrationHandler = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setError('');
                form.reset();
            })
            .catch(error => {
                console.error('error: ', error);
                setError(error.message);
            })
    }

    const handleTerms = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div>
            <Header></Header>
            <Row>
                <Col lg='5' className='px-5 py-3 rounded' style={{ backgroundColor: '#CCFFFF' }}>
                    <Form onSubmit={registrationHandler}>

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

                        <Form.Text className="text-danger fw-bold">
                            <p>  {error}</p>
                        </Form.Text>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={handleTerms}
                                type="checkbox"
                                label={<>
                                    Accept <Link to='/t&c' style={{ textDecoration: 'none' }}>Terms And Conditions</Link>
                                </>} />
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!accepted}>
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

export default Registration;
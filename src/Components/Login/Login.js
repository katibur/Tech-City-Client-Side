import React, { useContext } from 'react';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { providerLogIn, createUser } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        providerLogIn(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => console.error('error: ', error))
    }

    const handleGithubSignin = (event) => {
        event.preventDefault();
        providerLogIn(gitHubProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => console.error('error: ', error))
    }

    const formHandler = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => console.error('error: ', error))

    }


    return (
        <div>
            <Header></Header>
            <Row>
                <Col lg='5' className='px-4 py-3 rounded' style={{ backgroundColor: '#CCFFFF' }}>
                    <Form onSubmit={formHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Text className="text-danger fw-bold">

                        </Form.Text>

                        <Button variant="primary" type="submit" className="mb-3">
                            Login
                        </Button>
                    </Form>

                    <ButtonGroup vertical>
                        <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log In With Google</Button>

                        <Button onClick={handleGithubSignin} className='mb-2' variant="outline-dark"><FaGithub></FaGithub> Log In With Github</Button>
                    </ButtonGroup>
                    <p className='fw-bold'>Don't Have Any Account? <Link style={{ textDecoration: 'none' }} to='/register'>Sign Up</Link></p>
                </Col>


                <Col>

                </Col>
            </Row>
        </div >
    );
};

export default Login;
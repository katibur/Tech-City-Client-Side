import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Header from '../Header/Header';

import Form from 'react-bootstrap/Form';


const Profile = () => {

    const { user, logOut } = useContext(AuthContext);

    // const handleLogOut = () => {
    //     logOut()
    //         .then(res => {
    //             <Navigate to='/login'></Navigate>
    //         })
    //         .catch(error => console.error('error: ', error))
    // }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        logOut()
            .then(res => {
                form.reset();
                <Navigate to='/login'></Navigate>
            })
            .catch(error => console.error('error: ', error))
    }


    return (
        <div>
            <Header></Header>

            <Form className='mx-auto w-75' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email || ''} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control defaultValue={user?.displayName || ''} type="text" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control defaultValue={user?.photoURL || ''} type="text" placeholder="photoURL" />
                </Form.Group>

                {
                    user?.uid ? <div><br />
                        <Button type="submit" className='btn btn-primary mb-3'>Log Out</Button>
                    </div>
                        : <div>
                            <h1>Please Log In To See Your Profile</h1>
                            <Button className='btn btn-primary'><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>Login</Link></Button>
                        </div>
                }

            </Form>

        </div>
    );
};

export default Profile;
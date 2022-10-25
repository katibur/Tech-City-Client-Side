import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const TermsAndConditions = () => {
    return (
        <div>
            <Header></Header>
            <Card style={{ width: '80%' }} className='mx-auto text-center'>
                <ListGroup variant="flush">
                    <ListGroup.Item>We will not spy on you but you can not do anyhting bad.</ListGroup.Item>
                    <ListGroup.Item>You can not undo enrollment.</ListGroup.Item>
                    <ListGroup.Item>We may have your information.</ListGroup.Item>
                    <ListGroup.Item> <p className='mx-auto'>Go back to <Link to='/register' style={{ textDecoration: 'none' }}>Registration</Link></p></ListGroup.Item>
                </ListGroup>
            </Card>

        </div>
    );
};

export default TermsAndConditions;
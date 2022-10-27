import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const TermsAndConditions = () => {
    const { myStyle } = useContext(AuthContext);
    return (
        <div style={myStyle}>
            <Header></Header>
            <Card style={{ width: '80%' }} className='mx-auto my-5 text-center'>
                <ListGroup variant="flush">
                    <ListGroup.Item>We will not spy on you but you can not do anyhting bad.</ListGroup.Item>
                    <ListGroup.Item>You can not undo enrollment.</ListGroup.Item>
                    <ListGroup.Item>We may have your information.</ListGroup.Item>
                    <ListGroup.Item> <p className='mx-auto'>Go back to <Link to='/register' style={{ textDecoration: 'none' }}>Registration</Link></p></ListGroup.Item>
                </ListGroup>
            </Card>
            <Footer></Footer>
        </div>
    );
};

export default TermsAndConditions;
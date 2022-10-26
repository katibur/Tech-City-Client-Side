import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-secondary text-white py-3'>
            <Row className='mx-auto text-center mb-3'>
                <Col className='d-flex align-items-center justify-content-center mx-3'>
                    <Link className='mx-3' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to='/'>Home</Link>

                    <Link className='mx-3' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} >About</Link>

                    <Link className='mx-3' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} >Services</Link>

                    <Link className='mx-3' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} >Contact</Link>
                </Col>
            </Row>

            <Row className='mx-auto text-center'>
                <Col className='d-flex align-items-center justify-content-center mx-3'>

                    <Link className='mx-3 text-primary' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}><FaFacebook></FaFacebook></Link>

                    <Link className='mx-3 text-warning' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}><FaInstagram></FaInstagram></Link>

                    <Link className='mx-3 text-danger' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}><FaYoutube></FaYoutube></Link>
                </Col>
            </Row>

        </div>
    );
};

export default Footer;
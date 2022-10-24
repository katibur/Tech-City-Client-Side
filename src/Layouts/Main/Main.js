import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import LeftSideSharedNav from '../../Components/LeftSideSharedNav/LeftSideSharedNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3' sm='2'>
                        <LeftSideSharedNav></LeftSideSharedNav>
                    </Col>
                    <Col lg='9' sm='10'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
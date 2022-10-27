import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import LeftSideSharedNav from '../../Components/LeftSideSharedNav/LeftSideSharedNav';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Main = () => {

    const { myStyle } = useContext(AuthContext);

    return (
        <div style={myStyle}>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSideSharedNav></LeftSideSharedNav>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
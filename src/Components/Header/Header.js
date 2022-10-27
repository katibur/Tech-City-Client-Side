import React, { useContext, useState } from 'react';
import { Button, Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link } from 'react-router-dom';


const Header = () => {

    const { user, myStyle, toggleTheme } = useContext(AuthContext);
    const [status, setStatus] = useState(false);

    const themeHandler = () => {
        toggleTheme();

    }

    return (
        <div style={myStyle}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='mb-4'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://roboticsandautomationnews.com/wp-content/uploads/2018/09/smart-city-copy.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Tech-City
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} className='me-4' to="/" >Courses</Link>

                            <Link className='me-4' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to='/faq' >FAQ</Link>

                            <Link className='me-4' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/blog" >Blog</Link>
                        </Nav>
                        <Nav>

                            <Nav.Link >
                                {
                                    user?.uid ?
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="link-tooltip-2">{user?.displayName}</Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (
                                                <Link to='/profile'
                                                    variant="light"
                                                    {...triggerHandler}
                                                    className="d-inline-flex align-items-center"
                                                >
                                                    {user?.photoURL ? <Image
                                                        style={{ height: '30px' }}
                                                        ref={ref}
                                                        roundedCircle
                                                        src={user?.photoURL}
                                                    /> : <FaUser></FaUser>}

                                                </Link>
                                            )}
                                        </OverlayTrigger> :
                                        <Button className='btn btn-info'> <Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/login" >Log In</Link></Button>
                                }

                            </Nav.Link>
                            <Nav.Link>
                                <Button onClick={themeHandler} style={myStyle}><span style={{ fontWeight: 'bold' }} onClick={() => setStatus(!status)}>
                                    {`${status ? 'Dark' : 'Light'}`}</span></Button>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;
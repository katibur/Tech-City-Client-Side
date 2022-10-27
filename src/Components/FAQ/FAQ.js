import React, { useContext } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Carousel from 'react-bootstrap/Carousel';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

import faq1 from '../../images/faq1.jpg';
import faq2 from '../../images/faq2.jpg';
import faq3 from '../../images/faq3.jpg';
import faq4 from '../../images/faq4.jpg';

const FAQ = () => {

    const { myStyle } = useContext(AuthContext);

    return (
        <div style={myStyle}>
            <Header></Header>
            <div
                className="mb-5 h-100 w-75 mx-auto"><h2>A few Frequently Asked Questions:.</h2>

                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={faq1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={faq2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={faq3}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={faq4}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FAQ;
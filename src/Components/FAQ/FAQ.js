import React, { useContext } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Carousel from 'react-bootstrap/Carousel';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

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
                            src="https://images.slideplayer.com/26/8545736/slides/slide_6.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.slideplayer.com/25/8044572/slides/slide_2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.slideplayer.com/16/4975762/slides/slide_2.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.slideplayer.com/20/5934595/slides/slide_3.jpg"
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
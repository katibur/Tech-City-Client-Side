import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

import { useReactToPrint } from 'react-to-print'

const CourseCategories = () => {

    const categories = useLoaderData();



    const downloadRef = useRef();
    const handleDownload = useReactToPrint({
        content: () => downloadRef.current
    })


    return (
        <div ref={downloadRef}>
            <Card style={{ width: 'auto' }}>

                <Card.Header className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                    <Card.Title><span className='fw-bolder'>Course Name: </span>{categories[0].title}</Card.Title>
                    <div>
                        <Button onClick={handleDownload}><FaDownload></FaDownload></Button>
                    </div>
                </Card.Header>

                <Card.Img variant="top" src={categories[0].image_url} />

                <Card.Body>

                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                        <div>
                            <span className='fw-bold'>Course Instructor: </span>{categories[0].author.name}
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                        <div>
                            <span className='fw-bold'>Released On: </span> {categories[0].author.published_date}
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                        <div>
                            <span className='fw-bold'>Total Videos:  {categories[0].videos}</span>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3 mb-3'>
                        <div>
                            <span className='fw-bold'>Enrolled: </span>
                            {categories[0].enrolled}
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3 mb-3'>
                        <div>
                            <Image
                                className='me-2'
                                roundedCircle
                                src={categories[0].author?.img}
                                style={{ height: '30px' }}
                            ></Image>
                            <span className='fw-bold'> Welcome To This Course</span>
                        </div>
                    </div>

                    <Card.Text>
                        <span className='fw-bolder'>Course Details: </span>
                        {categories[0].details}
                    </Card.Text>
                    <div>
                        <Link to={`/premium/${categories[0]._id}`}><Button variant="primary">Get Premimum Access</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCategories;
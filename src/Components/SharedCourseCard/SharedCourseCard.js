import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

import { useReactToPrint } from 'react-to-print'

const SharedCourseCard = () => {

    const course = useLoaderData();
    console.log(course);

    const { _id, title, image_url, author, enrolled, details, videos } = course;

    const downloadRef = useRef();
    const handleDownload = useReactToPrint({
        content: () => downloadRef.current
    })

    return (
        <div ref={downloadRef}>
            <Card style={{ width: 'auto' }}>

                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                        <div>
                            <span className='fw-bold'>Course Instructor: </span>{author.name}
                        </div>

                        <div>
                            <Button onClick={handleDownload}><FaDownload></FaDownload></Button>
                        </div>

                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                        <div>
                            <span className='fw-bold'>Released On: </span> {author.published_date}
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                        <div>
                            <span className='fw-bold'>Total Videos:  {videos}</span>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3 mb-3'>
                        <div>
                            <span className='fw-bold'>Enrolled: </span>
                            {enrolled}
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3 mb-3'>
                        <div>
                            <Image
                                className='me-2'
                                roundedCircle
                                src={author?.img}
                                style={{ height: '30px' }}
                            ></Image>
                            <span className='fw-bold'> Welcome To This Course</span>
                        </div>
                    </div>
                </Card.Header>

                <Card.Img variant="top" src={image_url} />

                <Card.Body>
                    <Card.Title><span className='fw-bolder'>Course Name: </span>{title}</Card.Title>
                    <Card.Text>
                        <span className='fw-bolder'>Course Details: </span>
                        {details}
                    </Card.Text>
                    <div>
                        <Link to={`/premium/${_id}`}><Button variant="primary">Get Premimum Access</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SharedCourseCard;
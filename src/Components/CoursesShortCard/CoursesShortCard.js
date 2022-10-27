import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CoursesShortCard = ({ course }) => {

    const { _id, title, details, image_url, author, rating, enrolled } = course;



    return (
        <div >
            <Card className='mb-4'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            className='me-2'
                            roundedCircle
                            src={author?.img}
                            style={{ height: '60px' }}
                        ></Image>
                        <div>
                            <p className='mb-0'><span className='fw-bold'>Course Instructor: </span>{author?.name}</p>
                            <small><span className='fw-bold'>Released On: </span>{author?.published_date}</small>
                        </div>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                    <div>
                        <FaStar className='text-warning me-1'></FaStar>
                        {rating?.number}
                    </div>
                    <div>
                        <Link to={`/course/${_id}`}><Button variant="primary">More Details</Button></Link>
                    </div>
                    <div>
                        <span className='fw-bold'>Enrolled: </span>
                        {enrolled}
                    </div>
                </Card.Footer>

            </Card>
        </div>
    );
};

export default CoursesShortCard;
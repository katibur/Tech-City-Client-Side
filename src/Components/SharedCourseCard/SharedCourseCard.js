import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SharedCourseCard = () => {

    const course = useLoaderData();
    console.log(course);

    const { _id, title, image_url, author, enrolled, details, videos } = course;


    return (
        <div>
            <Card style={{ width: 'auto', height: '200px' }}>
                <Card.Img variant="top" src={image_url} />
                <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                    <div>
                        <span className='fw-bold'>Course Instructor: </span>{author.name}
                    </div>

                    <div>
                        <span className='fw-bold'>Released On: </span> {author.published_date}
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                    <div>
                        <span className='fw-bold'>Total Videos: </span> {videos}
                    </div>
                    <div>
                        <span className='fw-bold'>Enrolled: </span>
                        {enrolled}
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div>
                        <Link to={`/course/${_id}`}><Button variant="primary">Get Premimum Access</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SharedCourseCard;
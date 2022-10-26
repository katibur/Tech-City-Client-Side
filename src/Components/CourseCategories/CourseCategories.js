import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CourseCategories = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" src={categories[0].image_url} />
                <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                    <div>
                        <span className='fw-bold'>Course Instructor: </span>{categories[0].author.name}
                    </div>

                    <div>
                        <span className='fw-bold'>Released On: </span> {categories[0].author.published_date}
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                    <div>
                        <span className='fw-bold'>Total Videos: </span> {categories[0].videos}
                    </div>
                    <div>
                        <span className='fw-bold'>Enrolled: </span>
                        {categories[0].enrolled}
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{categories[0].title}</Card.Title>
                    <Card.Text>
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
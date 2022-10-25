import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesShortCard from '../CoursesShortCard/CoursesShortCard';


const Home = () => {

    const courses = useLoaderData();

    return (
        <div>
            {
                courses.map(course => <CoursesShortCard
                    key={course._id}
                    course={course}
                ></CoursesShortCard>)
            }
        </div>
    );
};

export default Home;
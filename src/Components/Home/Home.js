import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import CoursesShortCard from '../CoursesShortCard/CoursesShortCard';


const Home = () => {

    const courses = useLoaderData();

    const { myStyle } = useContext(AuthContext);

    return (
        <div style={myStyle}>
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
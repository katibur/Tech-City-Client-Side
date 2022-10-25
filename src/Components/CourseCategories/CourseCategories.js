import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCategories = () => {

    const categories = useLoaderData();
    console.log(categories)

    return (
        <div>
            <h3>{categories[0].title}</h3>

        </div>
    );
};

export default CourseCategories;
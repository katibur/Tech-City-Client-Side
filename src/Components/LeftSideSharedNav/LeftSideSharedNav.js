import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideSharedNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('https://tech-city-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <h4>Total Courses:  {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link style={{ textDecoration: 'none' }} to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div >
    );
};

export default LeftSideSharedNav;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideSharedNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3>Here You Can Find Our Courses.</h3>
            <h4>Total Courses:  {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideSharedNav;
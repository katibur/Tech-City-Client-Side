import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideSharedNav.css';

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
                    categories.map(category => <div
                        key={category.id}

                    >
                        <Link className='left-side-nav' style={{
                            textDecoration: 'none',
                            display: 'flex',
                            borderRadius: '20px',
                            padding: '10px',
                            marginBottom: '10px',
                            fontSize: 'large',
                            fontWeight: 'bold'
                        }}
                            to={`/category/${category.id}`}>{category.name}</Link>
                    </div>)
                }
            </div>
        </div >
    );
};

export default LeftSideSharedNav;
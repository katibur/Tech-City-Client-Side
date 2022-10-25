import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import CourseCategories from "../../Components/CourseCategories/CourseCategories";
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Main from "../../Layouts/Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <CourseCategories></CourseCategories>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-categories/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <h1>404 Error</h1>
    }
]);
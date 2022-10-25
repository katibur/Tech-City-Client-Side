import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import CourseCategories from "../../Components/CourseCategories/CourseCategories";
import CoursesShortCard from "../../Components/CoursesShortCard/CoursesShortCard";
import Home from "../../Components/Home/Home";
import SharedCourseCard from "../../Components/SharedCourseCard/SharedCourseCard";
import Main from "../../Layouts/Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tech-city-server.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <CourseCategories></CourseCategories>,
                loader: ({ params }) => fetch(`https://tech-city-server.vercel.app/course-categories/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <SharedCourseCard></SharedCourseCard>,
                loader: ({ params }) => fetch(`https://tech-city-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <h2>No FAQ This Time.</h2>
            }
        ]
    },
    {
        path: '*',
        element: <h1>404 Error</h1>
    }
]);
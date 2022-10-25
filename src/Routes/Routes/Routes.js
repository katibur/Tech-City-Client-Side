import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import CourseCategories from "../../Components/CourseCategories/CourseCategories";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Profile from "../../Components/Profile/Profile";
import Registration from "../../Components/Registration/Registration";
import SharedCourseCard from "../../Components/SharedCourseCard/SharedCourseCard";
import TermsAndConditions from "../../Components/TermsAndConditions/TermsAndConditions";
import Main from "../../Layouts/Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><CourseCategories></CourseCategories></PrivateRoute>,
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
                element: <div className="fw-bolder bg-info px-5 py-4 mx-auto rounded"><h2>No FAQ This Time.</h2></div>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
    },
    {
        path: '/register',
        element: <Registration></Registration>
    },
    {
        path: '/t&c',
        element: <TermsAndConditions></TermsAndConditions>
    },

    {
        path: '*',
        element: <h1>404 Error</h1>
    }
]);
import { createBrowserRouter } from "react-router-dom";
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
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CourseCategories></CourseCategories>
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>
            }
        ]
    }
]);
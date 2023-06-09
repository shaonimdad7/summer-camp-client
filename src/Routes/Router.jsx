import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClassPage from "../Pages/AllClassPage/AllClassPage";
import InstractorPage from "../Pages/InstructorPage/InstractorPage";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <AllClassPage></AllClassPage>
            },
            {
                path: 'instractor',
                element: <InstractorPage></InstractorPage>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
]);

import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClassPage from "../Pages/AllClassPage/AllClassPage";
import InstractorPage from "../Pages/InstructorPage/InstractorPage";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DasBoard from "../Layout/DasBoard";
import MyClass from "../Pages/DashBoard/MyClass/MyClass";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import MyClassInstra from "../Pages/DashBoard/MyClassIns/MyClassInstra";
import Payment from "../Pages/DashBoard/Payment/Payment";
import EnrollClass from "../Pages/DashBoard/EnrollClass/EnrollClass";



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
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DasBoard></DasBoard></PrivateRoute>,
        children: [
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'additem',
                element: <AddItem></AddItem>
            },
            {
                path: 'myclasses',
                element: <MyClassInstra></MyClassInstra>
            },
            {
                path: 'history',
                element: <Payment></Payment>
            },
            {
                path: 'enrollclass',
                element: <EnrollClass></EnrollClass>
            }
        ]
    }
]);

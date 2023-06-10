import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Instructors from '../pages/Instructors/Instructors';
import SeeClasses from '../pages/Instructors/SeeClasses';
import AllClasses from '../pages/AllClasses/AllClasses';
import Dashboard from '../layouts/Dashboard/Dashboard';
import SelectedClass from '../pages/Dashboard/SelectedClass';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/instractors',
            element:<Instructors></Instructors>
        },
        {
            path: '/instructor/:email',
            element:<SeeClasses></SeeClasses>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/instructor/${params?.email}`)
        },
        {
            path: '/allClasses',
            element:<AllClasses></AllClasses>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
      ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'selectedClass',
                element: <SelectedClass></SelectedClass>
            }
        ]
    }
  ]);

export default router;
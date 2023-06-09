import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Instructors from '../pages/Instructors/Instructors';
import SeeClasses from '../pages/Instructors/SeeClasses';

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
            path: '/seeClass',
            element:<SeeClasses></SeeClasses>
        },
        {
            path: '/classes',
            element:<p>classes</p>
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
  ]);

export default router;
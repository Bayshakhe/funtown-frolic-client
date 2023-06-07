import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: 'error',
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/instractors',
            element:<p>instractors</p>
        },
        {
            path: '/classes',
            element:<p>classes</p>
        },
      ]
    },
  ]);

export default router;
import React from 'react';
import Header from '../../shared/Headers/Header';
import Footer from '../../shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className='min-h-[calc(100vh-100px)] mx-auto pt-16'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
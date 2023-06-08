import React from 'react';
import Header from '../../shared/Headers/Header';
import Footer from '../../shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Header></Header>
            <div className='min-h-[calc(100vh-100px)] mx-auto '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
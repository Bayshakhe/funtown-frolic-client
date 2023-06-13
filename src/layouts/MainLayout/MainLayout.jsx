import React, { useState } from 'react';
import Header from '../../shared/Headers/Header';
import Footer from '../../shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [darkTheme, setDarkTheme] = useState(false)
    return (
        <div className={` ${darkTheme ? 'bg-slate-800' : 'bg-white'}`}>
            <div className='max-w-screen-2xl mx-auto'>
            <Header setDarkTheme={setDarkTheme}></Header>
            <div className='min-h-[calc(100vh-100px)] mx-auto pt-16'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
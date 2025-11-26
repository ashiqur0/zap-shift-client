import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';

const RootLayout = () => {
    return (
        <div className='md:max-w-7xl md:mx-auto mx-4 pt-5'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;
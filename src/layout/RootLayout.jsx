import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;
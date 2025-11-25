import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../UI/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default RootLayout;
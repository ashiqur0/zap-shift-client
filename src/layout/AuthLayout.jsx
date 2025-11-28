import React from 'react';
import Logo from '../components/logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div>
            <div className={'pt-5 pl-5'}>
                <Logo />
            </div>

            <div className='flex md:flex-row gap-5 flex-col mt-30 md:max-w-7xl md:mx-auto min-h-screen'>
                <div className='md:w-1/2 md:mx-auto'>
                    <Outlet />
                </div>

                <div className='md:w-1/2'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
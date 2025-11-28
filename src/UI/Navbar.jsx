import React from 'react';
import Logo from '../components/logo/Logo';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/services'>Services</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/coverage'>Coverage</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/pricing'>Pricing</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/blog'>Blog</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 rounded-2xl flex items-center md:px-6">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
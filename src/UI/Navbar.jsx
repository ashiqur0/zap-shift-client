import React from 'react';
import Logo from '../components/logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import arrowIcon from '../assets/arrow.jpg'

const Navbar = () => {

    const { logOut, user } = useAuth();

    const links = <>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/services'>Services</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/coverage'>Coverage</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/pricing'>Pricing</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/blog'>Blog</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/contact'>Contact</NavLink></li>
        <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/send_parcel'>Send Parcel</NavLink></li>

        {
            user && <>
                <li><NavLink className={'px-2 py-1 rounded-2xl bg-white'} to='/dashboard/my-parcels'>My Parcel</NavLink></li>
            </>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

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
            <div className="md:flex hidden navbar-end">
                <div className='flex items-center gap-2'>
                    {
                        user ? <Link onClick={handleLogOut} className='w-27 btn bg-primary text-xl text-[#1F1F1F] font-bold rounded-xl'>Log Out</Link> : <>
                            <Link to={'/login'} className='w-27 btn border border-gray-200 text-xl font-bold rounded-xl'>Sign In</Link>

                        </>
                    }
                    <Link to={'/rider'} className='flex items-center'>
                        <p className='w-32 btn bg-primary text-xl text-[#1F1F1F] font-bold rounded-xl'>Be a rider</p>
                        <img src={arrowIcon} className={`rounded-full w-10`} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
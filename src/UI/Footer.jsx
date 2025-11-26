import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../components/logo/Logo';
import linkedinIcon from '../assets/social/linkedin.jpg'
import twitterIcon from '../assets/social/x.jpg'
import facebookIcon from '../assets/social/facebook.jpg'
import youtubeIcon from '../assets/social/youtube.jpg'

const Footer = () => {
    const links = <>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/coverage'>Coverage</NavLink></li>
        <li><NavLink to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink to='/pricing'>Pricing</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <footer className="footer footer-horizontal footer-center p-4 py-8 md:p-11 md:mb-10 mb-3 bg-black rounded-xl md:rounded-4xl">
            <aside className=''>
                <Logo color='white' />
                <p className='text-[1rem] mt-4 overflow-hidden  md:max-w-175 mx-5 text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </aside>

            <div className='w-full border-t border-b border-dashed border-secondary'>
                <ul className='py-8 flex flex-wrap justify-center md:justify-between gap-7 font-medium text-white'>
                    {links}
                </ul>
            </div>

            <div className='my-0 flex justify-between gap-5'>
                <img src={linkedinIcon} className='rounded-full' alt="" />
                <img src={twitterIcon} className='rounded-full' alt="" />
                <img src={facebookIcon} className='rounded-full' alt="" />
                <img src={youtubeIcon} className='rounded-full' alt="" />
            </div>
        </footer>
    );
};

export default Footer;
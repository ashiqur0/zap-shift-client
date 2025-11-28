import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';

const Logo = ({color='black'}) => {
    return (
        <Link to={'/'} className='flex items-end'>
            <img className='md:w-8 w-7 h-auto' src={logo}></img>
            <h3 className={`md:text-2xl text-xl font-bold -ms-2 text-${color}`}>ZapShift</h3>
        </Link>
    );
};

export default Logo;
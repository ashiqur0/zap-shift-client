import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';

const Logo = ({color='black'}) => {
    return (
        <Link to={'/'} className='flex items-end'>
            <img className='w-8 h-auto' src={logo}></img>
            <h3 className={`text-2xl font-bold -ms-2 text-${color}`}>ZapShift</h3>
        </Link>
    );
};

export default Logo;
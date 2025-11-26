import React from 'react';
import logo from '../../assets/logo.png';

const Logo = ({color='black'}) => {
    return (
        <div className='flex items-end'>
            <img src={logo}></img>
            <h3 className={`text-3xl font-bold -ms-2 text-${color}`}>ZapShift</h3>
        </div>
    );
};

export default Logo;
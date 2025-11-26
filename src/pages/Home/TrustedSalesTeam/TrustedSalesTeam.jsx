import React from 'react';
import casioLogo from './TrustedSalesTeam/casio.png'
import amazon from './TrustedSalesTeam/amazon.png'
import monstar from './TrustedSalesTeam/monstar.png'
import star from './TrustedSalesTeam/star.png'
import starpeople from './TrustedSalesTeam/starpeople.png'
import randstad from './TrustedSalesTeam/randstad.png'

const TrustedSalesTeam = () => {
    return (
        <div className='mb-20 md: max-w-275 mx-auto'>
            <h1 className='md:text-3xl text-2xl font-extrabold text-secondary text-center'>We've helped thousands of sales teams</h1>

            <div className='md:flex grid md:grid-cols-6 grid-cols-2 justify-between space-y-5 items-center mt-10'>
                <img src={casioLogo} className='max-sm:h-4 w-auto' alt="" />
                <img src={amazon} className='max-sm:h-4 w-auto' alt="" />
                <img src={monstar} className='max-sm:h-4 w-auto' alt="" />
                <img src={star} className='max-sm:h-4 w-auto' alt="" />
                <img src={starpeople} className='max-sm:h-4 w-auto' alt="" />
                <img src={randstad} className='max-sm:h-4 w-auto' alt="" />
            </div>
        </div>
    );
};

export default TrustedSalesTeam;
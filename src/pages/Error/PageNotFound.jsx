import React from 'react';
import errorImg from '../../assets/error/pageNotFound.png'
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div className='md: max-w-7xl md:mx-auto mx-3 min-h-screen '>
            <div className='bg-white rounded-2xl p-20 my-10 flex flex-col items-center justify-center'>
                <img src={errorImg} alt="" />

                <Link to={'/'} className='btn bg-primary w-30 rounded-xl'>Go Home</Link>
            </div>
        </div>
    );
};

export default PageNotFound;
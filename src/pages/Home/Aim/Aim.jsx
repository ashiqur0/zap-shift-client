import React from 'react';
import merchantbg from '../../../assets/merchantbg.png';
import locationmerchant from '../../../assets/location-merchant.png';

const Aim = () => {
    return (
        <div className='bg-secondary rounded-3xl md:pl-10 px-4 pb-10 mb-20 md:max-w-275 mx-auto'>
            <img src={merchantbg} className='' alt="" />

            <div className='flex flex-col-reverse md:flex-row items-start'>
                <div className='md:-mt-15 mt:10'>
                    <h1 className='md:text-5xl text-2xl font-extrabold text-white md:max-w-175 mt-10 md:mt-0'>Merchant and Customer Satisfaction is Our First Priority</h1>

                    <p className='text-white md:max-w-150 mt-5'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>

                    <div className='flex md:flex-row flex-col items-center gap-5 mt-8 md:font-bold md:text-xl'>
                        <button className='w-full px-4 py-2 bg-primary rounded-3xl'>Become a Merchant</button>
                        <button className='w-full border px-4 py-1.5 border-primary text-white rounded-3xl'>Earn with ZapShift Courier</button>
                    </div>
                </div>
                <img src={locationmerchant} className='md:w-90' alt="" />
            </div>
        </div>
    );
};

export default Aim;
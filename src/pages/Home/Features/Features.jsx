import React from 'react';
import liveTracking from '../../../assets/liveTracking.png';
import safeDelivery from '../../../assets/safeDelivery.png';

const Features = () => {
    return (
        <div className='mb-20 border-t border-b border-dashed border-secondary py-20 space-y-5 md:max-w-275 mx-auto'>
            <div className='p-8 bg-white rounded-xl flex md:flex-row flex-col items-center gap-10'>
                <img src={liveTracking} alt="" />
                <div className='pl-12 border-l border-dashed border-secondary'>
                    <h1 className='text-2xl font-extrabold text-secondary'>Live Parcel Tracking</h1>
                    <p className='text-txt mt-4'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>

            <div className='p-8 bg-white rounded-xl flex md:flex-row flex-col items-center gap-10'>
                <img src={safeDelivery} alt="" />
                <div className='pl-12 border-l border-dashed border-secondary'>
                    <h1 className='text-2xl font-extrabold text-secondary'>100% Safe Delivery</h1>
                    <p className='text-txt mt-4'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
            
            <div className='p-8 bg-white rounded-xl flex md:flex-row flex-col items-center gap-10'>
                <img src={safeDelivery} alt="" />
                <div className='pl-12 border-l border-dashed border-secondary'>
                    <h1 className='text-2xl font-extrabold text-secondary'>24/7 Call Center Support</h1>
                    <p className='text-txt mt-4'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
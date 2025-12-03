import React from 'react';
import { useForm } from "react-hook-form";
import rider from '../../../assets/agent-pending.png'

const Rider = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSendParcel = data => {
        console.log(data);
    }

    return (
        <div className='md:max-w-7xl md:mx-auto p-15 bg-white my-20 rounded-2xl'>
            <h1 className='md:text-3xl text-2xl text-secondary font-extrabold'>Be A Rider Page</h1>
            <p className='text-txt mt-5 w-1/2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

            <h1 className='text-2xl font-extrabold text-secondary mt-12'>Tell us about yourself</h1>

            <div className='flex md:flex-row justify-between items-center flex-col w-full'>
                <form onSubmit={handleSubmit(handleSendParcel)} className='w-1/2'>
                    <div className='w-full'>
                        <fieldset className="fieldset w-full">

                            <label className="label mt-4 text-[14px] text-black">Your Name</label>
                            <input
                                type="text"
                                {...register('riderName')}
                                className="input w-5/7"
                                placeholder='Your Name'
                            />

                            <label className="label mt-4 text-[14px] text-black">Driving License Number</label>
                            <input
                                type="text"
                                {...register('license')}
                                className="input w-5/7"
                                placeholder='Driving License Number'
                            />

                            <label className="label mt-4 text-[14px] text-black">Your Email</label>
                            <input
                                type="text"
                                {...register('riderEmail')}
                                className="input w-5/7"
                                placeholder='Your Email'
                            />

                            <label className="label mt-4 text-[14px] text-black">Your Region</label>
                            <input
                                type="text"
                                {...register('senderRegion')}
                                className="input w-5/7"
                                placeholder='Select Your Region'
                            />

                            <label className="label mt-4 text-[14px] text-black">Your District</label>
                            <input
                                type="text"
                                {...register('senderDistrict')}
                                className="input w-5/7"
                                placeholder='Select Your District'
                            />

                            <label className="label mt-4 text-[14px] text-black">Bike Brand Model and Year</label>
                            <input
                                type="text"
                                {...register('bikeBrandModelYear')}
                                className="input w-5/7"
                                placeholder='Bike Brand Model and Year'
                            />

                            <label className="label mt-4 text-[14px] text-black">Bike Registration Number</label>
                            <input
                                type="text"
                                {...register('bikeRegistrationNumber')}
                                className="input w-5/7"
                                placeholder='Bike Registration Number'
                            />

                            <label className="label mt-4 text-[14px] text-black">Tell Us About Yourself</label>
                            <input
                                type="text"
                                {...register('aboutRider')}
                                className="input w-5/7"
                                placeholder='Tell Us About Yourself'
                            />
                        </fieldset>
                    </div>

                    <button type="submit" className='btn btn-primary text-black w-80 mt-8'>Proceed to Confirm Booking</button>
                </form>

                <div className='grid grid-1 items-center'>
                    <img src={rider} className='' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Rider;
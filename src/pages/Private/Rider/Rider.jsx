import React from 'react';
import { useForm, useWatch } from "react-hook-form";
import rider from '../../../assets/agent-pending.png'
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';

const Rider = () => {

    const {
        register,
        handleSubmit,
        control,
        // formState: { errors }
    } = useForm();

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const serviceCenters = useLoaderData();
    const regionsDuplicates = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicates)];

    const riderRegion = useWatch({ control, name: 'region' });

    const districtsByRegion = region => {
        const districtsByRegions = serviceCenters.filter(center => center.region === region);
        const districts = districtsByRegions.map(d => d.district);
        return districts;
    }

    const handleBeARider = data => {
        console.log(data);

        const rider = {
            name: data.name,
            license: data.license,
            email: data.email,
            region: data.region,
            district: data.district,
            nid: data.nid,
            phone: data.phone,
            bike: data.bike,
            registration: data.registration,
            about: data.about
        }

        axiosSecure.post('/riders', rider)
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <div className='md:max-w-7xl md:mx-auto p-15 bg-white my-20 rounded-2xl'>
            <h1 className='md:text-3xl text-2xl text-secondary font-extrabold'>Be A Rider Page</h1>
            <p className='text-txt mt-5 w-1/2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

            <h1 className='text-2xl font-extrabold text-secondary mt-12'>Tell us about yourself</h1>

            <div className='flex md:flex-row justify-between items-center flex-col w-full'>
                <form onSubmit={handleSubmit(handleBeARider)} className='w-1/2'>
                    <div>
                        <fieldset className="fieldset">
                            <label className="label mt-4 text-[14px] text-black">Your Name</label>
                            <input
                                type="text"
                                {...register('name')}
                                defaultValue={user?.displayName}
                                className="input w-full"
                                placeholder='Your Name'
                            />

                            <label className="label mt-4 text-[14px] text-black">Driving License Number</label>
                            <input
                                type="text"
                                {...register('license')}
                                className="input w-full"
                                placeholder='Driving License Number'
                            />

                            <label className="label mt-4 text-[14px] text-black">Your Email</label>
                            <input
                                type="email"
                                {...register('email')}
                                defaultValue={user?.email}
                                className="input w-full"
                                placeholder='Your Email'
                            />

                            {/* rider region */}
                            <fieldset className="fieldset mt-4">
                                <legend className="fieldset-legend w-full">Your Regions</legend>
                                <select {...register('region')} defaultValue="Select Region" className="select w-full">
                                    <option disabled={true}>Select Region</option>
                                    {
                                        regions.map((region, index) => <option key={index} value={region}>{region}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* <label className="label mt-4 text-[14px] text-black">Sender District</label> */}
                            <fieldset className="fieldset mt-4">
                                <legend className="fieldset-legend w-full">Your District</legend>
                                <select {...register('district')} defaultValue="Select Region" className="select w-full">
                                    <option disabled={true}>Select District</option>
                                    {
                                        districtsByRegion(riderRegion).map((region, index) => <option key={index} value={region}>{region}</option>)
                                    }
                                </select>
                            </fieldset>

                            <label className="label mt-4 text-[14px] text-black">NID</label>
                            <input
                                type="text"
                                {...register('nid')}
                                className="input w-full"
                                placeholder='NID'
                            />

                            <label className="label mt-4 text-[14px] text-black">Phone No</label>
                            <input
                                type="text"
                                {...register('phone')}
                                className="input w-full"
                                placeholder='Phone No'
                            />

                            <label className="label mt-4 text-[14px] text-black">Bike Brand Model and Year</label>
                            <input
                                type="text"
                                {...register('bike')}
                                className="input w-full"
                                placeholder='Bike Brand Model and Year'
                            />

                            <label className="label mt-4 text-[14px] text-black">Bike Registration Number</label>
                            <input
                                type="text"
                                {...register('registration')}
                                className="input w-full"
                                placeholder='Bike Registration Number'
                            />

                            <label className="label mt-4 text-[14px] text-black">Tell Us About Yourself</label>
                            <input
                                type="text"
                                {...register('about')}
                                className="input w-full"
                                placeholder='Tell Us About Yourself'
                            />
                        </fieldset>
                    </div>

                    <button type="submit" className='btn btn-primary text-black w-80 mt-8'>Apply as a rider</button>
                </form>

                <div className='grid grid-1 items-center'>
                    <img src={rider} className='' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Rider;
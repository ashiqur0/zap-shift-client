import React from 'react';
import { useForm } from "react-hook-form";
import { useLoaderData } from 'react-router';

const SendParcel = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const serviceCenters = useLoaderData();
    const regionsDuplicates = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicates)];

    const senderRegion = watch('senderRegion');
    // console.log(senderRegion);

    const districtsByRegion = region => {
        const districtsByRegions = serviceCenters.filter(center => center.region === region);
        const districts = districtsByRegions.map(d => d.district);
        // console.log(districts);
        return districts;
    }

    const handleSendParcel = data => {
        console.log(data);
    }

    return (
        <div className='md:max-w-7xl md:mx-auto my-20'>
            <h1 className='md:text-3xl text-2xl font-extrabold text-secondary'>Send Parcel page</h1>
            <h1 className='text-2xl font-extrabold text-secondary mt-12'>Enter Your Parcel Details</h1>

            <form onSubmit={handleSubmit(handleSendParcel)} className='p-4 text-black'>
                {/* parcel type */}
                <div>
                    <label className="label mr-4 text-secondary font-semibold">
                        <input
                            type="radio"
                            {...register('parcelType')}
                            value="document"
                            className="radio"
                        />
                        Document
                    </label>

                    <label className="label mt-4 text-secondary font-semibold">
                        <input
                            type="radio"
                            {...register('parcelType')}
                            value="non-document"
                            className="radio"
                        />
                        Non-Document
                    </label>
                </div>


                {/* parcel info: name, weight*/}
                <div className='grid grid-cols-1 md:grid-cols-2 my-8 gap-10'>
                    <fieldset className="fieldset">
                        <label className="label mt-4 text-[14px] text-black">Parcel Name</label>
                        <input
                            type="text"
                            {...register('parcelName')}
                            className="input w-full"
                            placeholder='Parcel Name'
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label mt-4 text-[14px] text-black">Parcel Weight</label>
                        <input
                            type="number"
                            {...register('parcelWeight')}
                            className="input w-full"
                            placeholder='Parcel Weight'
                        />
                    </fieldset>
                </div>

                {/* two column */}
                <div className='grid grid-cols-1 md:grid-cols-2 my-8 gap-10'>
                    {/* sender details */}
                    <div>
                        <h3 className='md:text-2xl text-xl text-secondary font-semibold'>Sender Details</h3>
                        <fieldset className="fieldset">
                            <label className="label mt-4 text-[14px] text-black">Sender Name</label>
                            <input
                                type="text"
                                {...register('senderName')}
                                className="input w-full"
                                placeholder='Sender Name'
                            />

                            <label className="label mt-4 text-[14px] text-black">Sender Email</label>
                            <input
                                type="email"
                                {...register('senderEmail')}
                                className="input w-full"
                                placeholder='Sender Email'
                            />

                            
                            {/* sender region */}
                            <fieldset className="fieldset mt-4">
                                <legend className="fieldset-legend w-full">Sender Regions</legend>
                                <select {...register('senderRegion')} defaultValue="Select Region" className="select w-full">
                                    <option disabled={true}>Select Region</option>
                                    {
                                        regions.map((region, index) => <option key={index} value={region}>{region}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* <label className="label mt-4 text-[14px] text-black">Sender District</label> */}
                            <fieldset className="fieldset mt-4">
                                <legend className="fieldset-legend w-full">Sender District</legend>
                                <select {...register('senderDistrict')} defaultValue="Select Region" className="select w-full">
                                    <option disabled={true}>Select District</option>
                                    {
                                        districtsByRegion(senderRegion).map((region, index) => <option key={index} value={region}>{region}</option>)
                                    }
                                </select>
                            </fieldset>

                            <label className="label mt-4 text-[14px] text-black">Address</label>
                            <input
                                type="text"
                                {...register('senderAddress')}
                                className="input w-full"
                                placeholder='Address'
                            />

                            <label className="label mt-4 text-[14px] text-black">Sender Phone No</label>
                            <input
                                type="text"
                                {...register('senderPhone')}
                                className="input w-full"
                                placeholder='Sender Phone No'
                            />

                            <label className="label mt-4 text-[14px] text-black">Pickup Instruction</label>
                            <input
                                type="text"
                                {...register('pickup_instruction')}
                                className="input w-full"
                                placeholder='Pickup Instruction'
                            />
                        </fieldset>
                    </div>

                    {/* receiver details */}
                    <div>
                        <h3 className='md:text-2xl text-xl text-secondary font-semibold'>Receiver Details</h3>
                        <fieldset className="fieldset">
                            <label className="label mt-4 text-[14px] text-black">Receiver Name</label>
                            <input
                                type="text"
                                {...register('receiverName')}
                                className="input w-full"
                                placeholder='Receiver Name'
                            />

                            <label className="label mt-4 text-[14px] text-black">Receiver Email</label>
                            <input
                                type="email"
                                {...register('receiverEmail')}
                                className="input w-full"
                                placeholder='Receiver Email'
                            />
                            
                            {/* receiver region */}
                            <fieldset className="fieldset w-full mt-4">
                                <legend className="fieldset-legend w-full">Sender Regions</legend>
                                <select {...register('receiverRegion')} defaultValue="Select Region" className="select w-full">
                                    <option disabled={true}>Select Region</option>
                                    {
                                        regions.map((region, index) => <option key={index} value={region}>{region}</option>)
                                    }
                                </select>
                                {/* <span className="label">Optional</span> */}
                            </fieldset>

                            <label className="label mt-4 text-[14px] text-black">Receiver District</label>
                            <input
                                type="text"
                                {...register('receiverDistrict')}
                                className="input w-full"
                                placeholder='Receiver District'
                            />

                            <label className="label mt-4 text-[14px] text-black">Address</label>
                            <input
                                type="text"
                                {...register('receiverAddress')}
                                className="input w-full"
                                placeholder='Address'
                            />

                            <label className="label mt-4 text-[14px] text-black">Receiver Phone No</label>
                            <input
                                type="text"
                                {...register('receiverPhone')}
                                className="input w-full"
                                placeholder='Receiver Phone No'
                            />

                            <label className="label mt-4 text-[14px] text-black">Pickup Instruction</label>
                            <input
                                type="text"
                                {...register('pickup_instruction')}
                                className="input w-full"
                                placeholder='Pickup Instruction'
                            />
                        </fieldset>
                    </div>
                </div>

                <p className='mb-10'>* PickUp Time 4pm-7pm Approx.</p>

                <button type="submit" className='btn btn-primary text-black w-80'>Proceed to Confirm Booking</button>
            </form >
        </div >
    );
};

export default SendParcel;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const AboutUs = () => {
    const aboutUs = useLoaderData();
    const [data, setData] = useState(null);
    const [value, setValue] = useState(null);

    const handleSetData = (value) => {
        if (value === 'Story') {
            setData(aboutUs.Story);
            setValue('Story')
        }
        else if (value === 'Mission') {
            setData(aboutUs.Mission);
            setValue('Mission')
        }
        else if (value === 'Success') {
            setData(aboutUs.Success);
            setValue('Success')
        }
        else if (value === 'Team_Others') {
            setData(aboutUs.Team_Others);
            setValue('Team_Others')
        }
    }

    return (
        <div className='md: max-w-7xl md:mx-auto mx-3 min-h-screen '>
            <div className='bg-white rounded-2xl p-15 my-10'>
                <h1 className='text-2xl md:text-3xl text-secondary font-extrabold'>About Us</h1>
                <p className='text-txt w-1/2 mt-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

                <div className='mt-5 pt'>
                    <div className='flex items-center py-10 gap-10'>
                        <h4
                            onClick={() => handleSetData('Story')}
                            className={`text-xl font-semibold text-txt cursor-pointer ${(value == 'Story' || value == null) && 'text-lime-800'}`}
                        >Story</h4>

                        <h4 onClick={() => handleSetData('Mission')} className={`text-xl font-semibold text-txt cursor-pointer ${value === 'Mission' && 'text-lime-800'}`}>Mission</h4>

                        <h4 onClick={() => handleSetData('Success')} className={`text-xl font-semibold text-txt cursor-pointer ${value === 'Success' && 'text-lime-800'}`}>Success</h4>

                        <h4 onClick={() => handleSetData("Team_Others")} className={`text-xl font-semibold text-txt cursor-pointer ${value === 'Team_Others' && 'text-lime-800'}`}>Team & Others</h4>
                    </div>

                    <div className='flex flex-col gap-5 text-txt'>
                        <p>{data === null ? aboutUs.Story[0] : data[0]}</p>
                        <p>{data === null ? aboutUs.Story[1] : data[1]}</p>
                        <p>{data === null ? aboutUs.Story[2] : data[2]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
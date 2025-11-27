import React, { useEffect, useState } from 'react';
import service from '../../../assets/service.png';

const OurServices = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/ourServices.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className='mb-20 md:p-20 p-5 bg-secondary md:rounded-4xl rounded-2xl'>
            <h1 className='text-center text-white font-extrabold md:text-3xl text-2xl'>Our Services</h1>

            <p className='text-center text-white md:max-w-175 mx-auto py-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

            <div className='grid md:grid-cols-3 grid-cols-1 justify-between items-center gap-5'>
                {
                    data.map(d => <div key={d.title} className='bg-white p-5 h-70 rounded-xl text-secondary text-center flex flex-col items-center space-y-4 hover:bg-primary'>
                        <img src={service} className='w-20 h-auto bg-gray-200 rounded-full p-3' />
                        <h3 className='text-xl font-bold'>{d.title}</h3>
                        <p className='text-[#606060]'>{d.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurServices;
import React, { useEffect, useState } from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import image from '../../../assets/bookingIcon.png'

const HowItWorks = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/howitworks.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className='my-20'>
            <h1 className='text-secondary font-extrabold text-2xl md:text-3xl mb-5'>How it Works</h1>

            <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                {
                    data.map(d => <div key={d.id} className='bg-white p-5 rounded-xl text-secondary'>
                        <img src={image} className='mb-5' alt="" />
                        <h3 className='text-xl font-bold'>{d.title}</h3>
                        <p className='text-[#606060]'>{d.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HowItWorks;
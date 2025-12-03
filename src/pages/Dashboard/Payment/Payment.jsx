import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useParams } from 'react-router';
import Loading from '../../../components/loading/Loading';

const Payment = () => {

    const axiosSecure = useAxiosSecure();
    const { parcelId } = useParams();
    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    });

    if (isLoading) return <Loading />

    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>Payment Page</h1>
            <h1>Please pay for: {parcel.cost}</h1>
            <button className='btn btn-sm btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;
import React from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {

    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                })
        }
    }, [sessionId, axiosSecure]);

    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>Payment Success Page</h1>

            <Link to={'/dashboard/my-parcels'} className='btn btn-primary text-black'>My Parcel</Link>
        </div>
    );
};

export default PaymentSuccess;
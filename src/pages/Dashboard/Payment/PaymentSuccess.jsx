import React from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';

const PaymentSuccess = () => {

    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                    setPaymentInfo({
                        transactionId: res.data.transactionId,
                        trackingId: res.data.trackingId
                    })
                })
        }
    }, [sessionId, axiosSecure]);

    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>Payment Success Page</h1>

            <p>Your transaction id = {paymentInfo.transactionId}</p>
            <p>Your tracking id = {paymentInfo.trackingId}</p>

            <Link to={'/dashboard/my-parcels'} className='btn btn-primary text-black'>My Parcel</Link>
        </div>
    );
};

export default PaymentSuccess;
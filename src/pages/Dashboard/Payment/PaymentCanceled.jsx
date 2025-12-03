import React from 'react';
import { Link } from 'react-router';

const PaymentCanceled = () => {
    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>Payment is Canceled Please Try Again</h1>
            <Link to={'/dashboard/my-parcels'} className='btn btn-primary text-black'>Try Again</Link>
        </div>
    );
};

export default PaymentCanceled;
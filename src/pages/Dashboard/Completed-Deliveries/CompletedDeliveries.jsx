import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompletedDeliveries = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user.email, 'parcel_delivered'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`);
            return res.data;
        }
    });

    const calculatePayout = parcel => {
        if (parcel.senderDistrict === parcel.receiverDistrict) return Math.round(parcel.cost * 0.04);
        else return Math.round(parcel.cost * 0.08);
    }

    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>Completed Deliveries Page</h1>
            <h1>Completed Deliveries ({parcels.length})</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Delivery Cost</th>
                            <th>Payout</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>${parcel.cost}</td>
                                <td>${calculatePayout(parcel)}</td>
                                <td>
                                    <button className='btn btn-sm btn-primary text-black'>Cash out</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedDeliveries;
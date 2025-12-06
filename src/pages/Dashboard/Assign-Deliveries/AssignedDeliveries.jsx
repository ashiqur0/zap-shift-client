import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user.email, 'driver_assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`);
            return res.data;
        }
    });

    const handleAcceptDelivery = parcel => {
        const statusInfo = { deliveryStatus: 'rider_arriving' };
        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for accepting",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }

    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>Assign Deliveries Page</h1>
            <p>Assigned Delivery for me({parcels.length})</p>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Sender District</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.senderDistrict}</td>
                                <td>
                                    <button
                                        onClick={() => handleAcceptDelivery(parcel)}
                                        className='btn btn-sm btn-primary text-black'
                                    >Accept
                                    </button>

                                    <button
                                        className='btn btn-sm btn-warning text-black ml-3'
                                    >Cancel
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignedDeliveries;
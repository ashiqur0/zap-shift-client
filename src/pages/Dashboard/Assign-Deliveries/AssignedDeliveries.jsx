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

    const handleDeliveryStatusUpdate = (parcel, status) => {
        const statusInfo = { 
            deliveryStatus: status,
            riderId: parcel.riderId,
            trackingId: parcel.trackingId
         };

        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Delivery status updated with ${status.split('_').join(' ')}`,
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
                                    {
                                        parcel.deliveryStatus === 'driver_assigned' && <>
                                            <button
                                                onClick={() => handleDeliveryStatusUpdate(parcel, 'rider_arriving')}
                                                className='btn btn-sm btn-primary text-black'
                                            >Accept
                                            </button>

                                            <button
                                                className='btn btn-sm btn-warning text-black ml-3'
                                            >Cancel
                                            </button>
                                        </> || <span>Accepted</span>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_picked_up')}
                                        className='btn btn-sm btn-primary text-black'
                                    >Mark As Pikup
                                    </button>

                                    <button
                                        onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_delivered')}
                                        className='btn btn-sm btn-primary text-black ml-3'
                                    >Mark As Delivered
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
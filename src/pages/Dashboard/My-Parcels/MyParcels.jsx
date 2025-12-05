import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaEdit } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data;
        }
    });

    const handleParcelDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }

        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        window.location.assign(res.data.url);
    }

    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>All My Parcels({parcels.length})</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='grid grid-cols-21 text-center'>
                            <th className='col-span-2'>Si. No.</th>
                            <th className='col-span-3'>Parcel Name</th>
                            <th className='col-span-2'>Cost</th>
                            <th className='col-span-3'>Payment Status</th>
                            <th className='col-span-4'>Tracking Id</th>
                            <th className='col-span-3'>Delivery Status</th>
                            <th className='col-span-4'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id} className='grid grid-cols-21 text-center'>
                                <th className='col-span-2'>{index + 1}</th>
                                <td className='col-span-3'>{parcel.parcelName}</td>
                                <td className='col-span-2'>{parcel.cost}</td>
                                <td className='col-span-3'>
                                    {
                                        parcel.paymentStatus === 'paid' ? <span className='text-green-500'>Paid</span> :
                                            <button onClick={() => handlePayment(parcel)} className='btn btn-sm btn-primary text-black'>Pay</button>
                                    }
                                </td>
                                <td className='col-span-4'>{parcel.trackingId}</td>
                                <td className='col-span-3'>{parcel.deliveryStatus}</td>
                                <td className='col-span-4 space-x-4'>
                                    <button className='btn btn-square hover:bg-primary'><FaMagnifyingGlass />
                                    </button>
                                    <button className='btn btn-square hover:bg-primary'><FaEdit /></button>
                                    <button onClick={() => handleParcelDelete(parcel._id)} className='btn btn-square hover:bg-primary'><FaRegTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import Swal from 'sweetalert2';

const ApproveRiders = () => {

    const axiosSecure = useAxiosSecure();

    const { data: riders = [], refetch } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })

    const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email: rider.email };

        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Rider's status has been updated",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }

    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>Approve Rider Page</h1>

            <h2>Total Rider: {riders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Si no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) => <tr key={rider._id}>
                                <th>{index + 1}</th>
                                <th>{rider.name}</th>
                                <th>{rider.email}</th>
                                <th>{rider.district}</th>
                                <th className={`${(rider.status === 'approved' && 'text-green-500') || (rider.status === 'cancelled' && 'text-red-500') }`}>{rider.status}</th>
                                <th>
                                    <button
                                        onClick={() => updateRiderStatus(rider, 'approved')}
                                        className='btn btn-sm'
                                    ><FaUserCheck />
                                    </button>

                                    <button
                                        onClick={() => updateRiderStatus(rider, 'cancelled')}
                                        className='btn btn-sm'
                                    ><IoPersonRemoveSharp />
                                    </button>

                                    <button
                                        className='btn btn-sm'
                                    ><FaTrashAlt />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;
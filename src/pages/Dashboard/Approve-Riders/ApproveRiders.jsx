import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveSharp } from 'react-icons/io5';

const ApproveRiders = () => {

    const axiosSecure = useAxiosSecure();

    const { data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })

    const handleApproval = id => {
        console.log(id);
        
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
                            riders.map((rider, index) => <tr>
                                <th>{index + 1}</th>
                                <th>{rider.name}</th>
                                <th>{rider.email}</th>
                                <th>{rider.district}</th>
                                <th>{rider.status}</th>
                                <th>
                                    <button
                                        onClick={() => handleApproval(rider._id)}
                                        className='btn btn-sm'
                                        ><FaUserCheck />
                                    </button>

                                    <button
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
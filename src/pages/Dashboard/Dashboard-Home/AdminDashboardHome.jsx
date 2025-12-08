import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AdminDashboardHome = () => {

    const axiosSecure = useAxiosSecure()

    const { data: deliveryStats = [] } = useQuery({
        queryKey: ['delivery-status-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels/delivery-status/stats');
            return res.data;
        }
    })

    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>Admin Dashboard Home Page ({deliveryStats.length})</h1>

            <div className="stats shadow">
                {
                    deliveryStats.map(stat => <div className="stat mt-10" key={stat._id}>
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title text-2xl">{stat._id}</div>
                        <div className="stat-value">{stat.count}</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AdminDashboardHome;
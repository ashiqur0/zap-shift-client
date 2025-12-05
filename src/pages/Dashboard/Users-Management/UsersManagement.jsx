import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from "react-icons/fi";
import Swal from 'sweetalert2';
import { useState } from 'react';

const UsersManagement = () => {

    const [searchText, setSearchText] = useState('');

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/?searchText=${searchText}`);
            return res.data;
        }
    });

    const handleSetUserRole = (user, role) => {
        const roleInfo = { role: role };

        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} marked as ${role}`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }

    return (
        <div className='md:max-w-7xl md:mx-auto p-4'>
            <h1>Users management page</h1>
            <h3>Total users({users.length})</h3>

            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input onChange={(e) => setSearchText(e.target.value)} type="search" className="grow" placeholder="Search" />
            </label>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Actions</th>
                            <th>Others Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.displayName}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        user.role === 'admin' ?
                                            <button
                                                className='bg-red-300 btn btn-sm'
                                                onClick={() => handleSetUserRole(user, 'user')}
                                            ><FiShieldOff />
                                            </button> :

                                            <button
                                                className='bg-green-400 btn btn-sm'
                                                onClick={() => handleSetUserRole(user, 'admin')}
                                            ><FaUserShield />
                                            </button>
                                    }
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;
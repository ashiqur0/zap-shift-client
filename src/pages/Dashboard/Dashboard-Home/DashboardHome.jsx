import React from 'react';
import useRole from '../../../hooks/useRole';
import Loading from '../../../components/loading/Loading';
import AdminDashboardHome from './AdminDashboardHome';
import RiderDashboardHome from './RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome';

const DashboardHome = () => {

    const { role, roleLoading } = useRole();

    if (roleLoading) return <Loading />
    if (role === 'admin') return <AdminDashboardHome />
    else if (role === 'rider') return <RiderDashboardHome />

    return <UserDashboardHome />
};

export default DashboardHome;
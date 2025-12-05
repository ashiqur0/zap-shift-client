import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/loading/Loading';
import Forbidden from '../components/Forbidden/Forbidden';
import { Navigate } from 'react-router';

const AdminRoute = ({ children }) => {

    const { loading } = useAuth();
    const { role, roleLoading } = useRole();

    if (loading || roleLoading) return <Loading />
    if (role !== 'admin') return <Navigate to='/forbidden' />

    return children;
};

export default AdminRoute;
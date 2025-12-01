import React from 'react';
import AuthContext from '../context/AuthContext';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if (loading) return <Loading />
    if (!user) return <Navigate to={'/login'} state={location.pathname}></Navigate>

    return children;
};

export default PrivateRoute;
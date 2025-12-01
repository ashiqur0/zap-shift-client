import React from 'react';
import AuthContext from '../context/AuthContext';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if (loading) return <span className="loading loading-spinner text-accent"></span>

    if (!user) return <Navigate to={'/login'} state={location.pathname}></Navigate>

    return children;
};

export default PrivateRoute;
import React from 'react';
import AuthContext from '../context/AuthContext';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if (loading) return <span className="loading loading-spinner text-accent"></span>

    if (!user) return <Navigate to={'/login'}></Navigate>

    return children;
};

export default PrivateRoute;
import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/loading/Loading';
import Forbidden from '../components/Forbidden/Forbidden';

const UserRoute = ({ children }) => {

    const { loading } = useAuth();
        const { role, roleLoading } = useRole();
    
        if (loading || roleLoading) return <Loading />
        if (role !== 'user') return <Forbidden />
    
        return children;
};

export default UserRoute;
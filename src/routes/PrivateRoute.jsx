import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const lacation = useLocation()

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return {children}
    }
    else{
        return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
};

export default PrivateRoute;
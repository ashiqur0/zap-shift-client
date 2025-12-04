import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxiosSecure = () => {

    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        // interceptor request
        const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
            config.headers.Authorization = `Berar ${user?.accessToken}`;
            return config;
        });

        // interceptor response
        const resInterceptor = axiosSecure.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            // console.log(error);

            const statuscode = error.status;
            if (statuscode === 401 || statuscode === 403) {
                logOut()
                    .then(() => {
                        navigate('/login');
                    })
            }

            return Promise.reject(error);
        })

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }

    }, [user, logOut, navigate])

    return axiosSecure;
};

export default useAxiosSecure;
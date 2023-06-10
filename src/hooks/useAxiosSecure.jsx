import React, { useEffect } from 'react';
import useAuth from './useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        axiosSecure.interceptors.request(config => {
            const token = `Bearer ${localStorage.getItem('access_token')}`
            if(token){
                config.headers.Authorization = token
            }
            return config
        })

        axiosSecure.interceptors.response(response => response, async error => {
            if(error.response && error.response.status === 401 || error.response.status === 403){
                await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        })
    },[logOut, navigate])
    
};

export default useAxiosSecure;
import React, { useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';


const LoginSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        if (token) {
            sessionStorage.setItem('authToken', token);
            navigate('/');
        }
    }, [location, history]);

    return (
        <div>
            <h1>Login Successful</h1>
            <p>Redirecting...</p>
        </div>
    );
};

export default LoginSuccess;

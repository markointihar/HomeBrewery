import { useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';


const LoginSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const email = params.get('email');
        if (email) {
            sessionStorage.setItem('authToken', email);
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

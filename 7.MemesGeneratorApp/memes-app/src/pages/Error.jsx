import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = function () {
    const navigate = useNavigate();
    return (
        <div className='error-page'>
            <h1>Oops, Something went wrong!</h1>
            <button onClick={() => navigate('/')}>Redirect to Home</button>
        </div>
    );
};

export default ErrorPage;

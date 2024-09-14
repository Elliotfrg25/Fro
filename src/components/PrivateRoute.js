import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = localStorage.getItem('token'); // Verifica si el usuario está autenticado

    return (
        isAuthenticated ? <Element {...rest} /> : <Navigate to="/signin" />
    );
};

export default PrivateRoute;



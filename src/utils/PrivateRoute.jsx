import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roleRequired }) => {
    const token = localStorage.getItem("token") || localStorage.getItem("huntertoken");
    const role = localStorage.getItem("role");

    if (!token) {
        return <Navigate to="/Login" />;
    }
    if (role !== roleRequired) {
        console.log(`Accès refusé. Vous n'êtes pas un ${roleRequired}.`);
        return <Navigate to="/Login" />;
    }

    return children;
};

export default PrivateRoute;

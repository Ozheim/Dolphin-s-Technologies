import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [companyName, setCompanyName] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [role, setRole] = useState(null);
    const [userId, setUserId] = useState(null);
    const [hunterId, setHunterId] = useState(null);

    useEffect(() => {
        const storedCompanyName = localStorage.getItem('companyName');
        const storedName = localStorage.getItem('name');
        const storedRole = localStorage.getItem('role');
        const storedEmail = localStorage.getItem('email');
        const storedUserId = localStorage.getItem('_id');
        const storedHunterId = localStorage.getItem('hunter_id');

        if (storedCompanyName) setCompanyName(storedCompanyName);
        if (storedName) setName(storedName);
        if (storedEmail) setEmail(storedEmail);
        if (storedRole) setRole(storedRole);
        if (storedUserId) setUserId(storedUserId);
        if (storedHunterId) setHunterId(storedHunterId);
    }, []);


    const logout = () => {
        setCompanyName(null);
        setName(null);
        setUserId(null);
        setEmail(null);
        setRole(null);
        localStorage.removeItem('companyName');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('role');
        localStorage.removeItem('huntertoken');
        localStorage.removeItem('token');
        localStorage.removeItem('_id');
    };

    return (
        <AuthContext.Provider value={{ companyName, setCompanyName ,email, setEmail , name, setName, role, setRole, userId, setUserId, hunterId, setHunterId, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

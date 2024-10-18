import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [companyName, setCompanyName] = useState(null);
    const [name, setName] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const storedCompanyName = localStorage.getItem('companyName');
        const storedName = localStorage.getItem('name');
        const storedRole = localStorage.getItem('role');

        if (storedCompanyName) {
            setCompanyName(storedCompanyName);
        }
        if (storedName) {
            setName(storedName);
        }
        if (storedRole) {
            setRole(storedRole);
        }
    }, []);

    const logout = () => {
        setCompanyName(null);
        setName(null);
        setRole(null);
        localStorage.removeItem('companyName');
        localStorage.removeItem('name');
        localStorage.removeItem('role');
        localStorage.removeItem('huntertoken');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ companyName, setCompanyName, name, setName, role, setRole, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

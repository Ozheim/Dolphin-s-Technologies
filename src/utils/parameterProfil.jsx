import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../utils/AuthContext.jsx';
import axios from "axios";

const ParameterProfil = () => {
    const [users, setUsers] = useState([]);
    const UserId = localStorage.getItem('userId');
    const { name, email } = useContext(AuthContext);
    console.log(UserId);

    useEffect(() => {
        const fetchParams = async () => {
            try {
                const token = localStorage.getItem("token");

                const resUsers = await axios.get(`https://app-59a0866c-f942-465a-a8b0-39a7f75184c6.cleverapps.io/api/users/${UserId}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                console.log('Réponse API :', resUsers.data);
                if (resUsers.data) {
                    setUsers(resUsers.data);
                }
            }
            catch (error) {
                console.log("Erreur lors de la récupération ", error);
            }
        };

        fetchParams();
    }, [UserId]);
    return (
        <div>
            {name ? (
                <div>
                    <p>{users.name}</p>
                    <p>{users.email}</p>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};

export default ParameterProfil;
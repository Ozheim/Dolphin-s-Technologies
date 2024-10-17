import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [hunters, sethunters] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");

                const resUsers = await axios.get("http://localhost:5000/api/allUser", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                console.log('Réponse API :', resUsers.data);
                if (resUsers.data && resUsers.data.length) {
                    setUsers(resUsers.data);
                } else {
                    console.log("Aucun utilisateur trouvé.");
                }

                const resHunter = await axios.get("http://localhost:5000/api/allHunters", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                console.log('Réponse API :', resHunter.data);
                if (resHunter.data && resHunter.data.length) {
                    sethunters(resHunter.data);
                } else {
                    console.log("Aucun Hunter trouvé.");
                }

            } catch (error) {
                console.log("Erreur lors de la récupération des utilisateurs ou hunters:", error.response ? error.response.data.message : error.message);
            }
        };
        fetchUsers();
    }, []);

    const handleDeleteUser = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:5000/api/deleteUser/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            console.log("Erreur lors de la suppression de l'utilisateur:", error.response ? error.response.data.message : error.message);
        }
    };

    const handleDeleteHunter = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:5000/api/deleteHunter/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            sethunters(hunters.filter(hunters => hunters._id !== id));
        } catch (error) {
            console.log("Erreur lors de la suppression de l'hunter:", error.response ? error.response.data.message : error.message);
        }
    };

    if ((!users || users.length === 0) && (!hunters || hunters.length === 0)) {
        return <div>Chargement des utilisateurs et des headhunters...</div>;
    }

    return (
        <div>
            <h1>Tableau de Bord Admin</h1>
            <h2>Utilisateurs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Rôle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleDeleteUser(user._id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>HeadHunters</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom d'entreprise</th>
                        <th>Email</th>
                        <th>Créé à </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {hunters.map(hunter => (
                        <tr key={hunter._id}>
                            <td>{hunter.companyName}</td>
                            <td>{hunter.email}</td>
                            <td>{hunter.createdAt}</td>
                            <td>
                                <button onClick={() => handleDeleteHunter(hunter._id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default AdminDashboard;

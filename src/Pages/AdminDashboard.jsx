import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import "../Styles/Pages/AdminDashboard.scss"
import Header from "../Component/Header.jsx";
import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {
    const location = useLocation();

    const [users, setUsers] = useState([]);
    const [hunters, sethunters] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");

                const resUsers = await axios.get("https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/allUser", {
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

                const resHunter = await axios.get("https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/allHunters", {
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
            await axios.delete(`https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/deleteUser/${id}`, {
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
            await axios.delete(`https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/deletesHunter/${id}`, {
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
    const isAdminPage = location.pathname === '/admin/dashboard';

    return (
        <div>
            <Header className={classNames({ 'header-black': isAdminPage, 'header': !isAdminPage })} />
            <div className='admin-container'>
                <h1>Tableau de Bord Admin</h1>
                <div className='user-container'>
                    <h2>Utilisateurs</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Rôle</th>
                                <th>Supprimer</th>
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
                </div>
                <div className='hunter-container'>
                    <h2>HeadHunters</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom d'entreprise</th>
                                <th>Email</th>
                                <th>Créé à </th>
                                <th>Supprimer</th>
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
            </div>
        </div>
    );
};


export default AdminDashboard;

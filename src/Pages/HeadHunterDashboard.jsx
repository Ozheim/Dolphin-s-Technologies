import React, { useEffect, useState, useContext } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import axios from "axios"
import "../Styles/Pages/HeadHunterDashBoard.scss";
import classNames from 'classnames';

const HeadHunterDashboard = () => {
    const [hunter] = useState([]);
    const [offers, setOffers] = useState([]);
    const companyName = localStorage.getItem('companyName');
    const huntertoken = localStorage.getItem("huntertoken");

    const role = localStorage.getItem('role');

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const resUsers = await axios.get("https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/getOffers", {
                    headers: {
                        "Authorization": `Bearer ${huntertoken}`
                    }
                });
                console.log('Réponse API :', resUsers.data);
                if (resUsers.data && resUsers.data.length) {
                    setOffers(resUsers.data);
                } else {
                    console.log("No offers");
                }
            } catch (error) {
                console.log("Erreur lors de la récupération des offres:", error.response ? error.response.data.message : error.message);
            }
        };
        fetchOffers();
    }, [huntertoken]);

    const handleDeleteOffer = async (id) => {
        try {
            await axios.delete(`https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/deleteOffer/${id}`, {
                headers: {
                    "Authorization": `Bearer ${huntertoken}`
                }
            });
            setOffers(offers.filter(offers => offers._id !== id));
        } catch (error) {
            console.log("Erreur lors de la suppression de l'offre:", error.response ? error.response.data.message : error.message);
        }
    };
    if ((!offers || offers.length === 0)) {
        return <div>Chargement des offres...</div>;
    }
    return (
        <>
            <Header companyName={companyName} role={role} className={classNames({ 'header-red': 1 })} />
            <div className='user-container'>
                <h2>Vos Offres ! </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Entreprise</th>
                            <th>Salaire</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map(offer => (
                            <tr key={offer._id}>
                                <td>{offer.title}</td>
                                <td>{offer.company}</td>
                                <td>{offer.salary}</td>
                                <td>
                                    <button onClick={() => handleDeleteOffer(offer._id)}>Supprimer</button>
                                </td>
                                <td>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer className={classNames({ 'ocean-red': 1, 'ocean': 1 })} isHeadhunterPage={1} />
        </>
    );
};
export default HeadHunterDashboard;

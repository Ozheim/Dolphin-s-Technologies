import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import "../Styles/Pages/HeadHunterDashBoard.scss";

const HeadHunterDashBoard = () => {
    const [hunter, setHunter] = useState([]);

    useEffect(() => {
        const fetchHunter = async () => {
            try {
                const token = localStorage.getItem("huntertoken");
                const id = localStorage.getItem("hunterId"); 
                
                const reshunter = await axios.get(`http://localhost:5000/api/headhunters/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}` 
                    }
                });

                console.log('API Response:', reshunter.data);

                if (reshunter.data && reshunter.data.length) {
                    setHunter(reshunter.data);
                } else {
                    console.log("No hunter found.");
                }
            } catch (error) {
                console.log("Error fetching hunters:", error.response ? error.response.data.message : error.message);
            }
        };
        
        fetchHunter();
    }, []);

    return (
        <>
            <Header />
            <div className="dashboard-container">
                <div className="informations-card">
                    {hunter.map(h => (
                        <h1 key={id}>{h.companyName}</h1> 
                    ))}
                </div>
                <div className="annonces">
                    <h1>Your Posted Jobs</h1>
                    <div className="offercards">
                        <h2>Title</h2>
                        <p>Location</p>
                        <p>Description</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HeadHunterDashBoard;
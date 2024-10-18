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
                const id = localStorage.getItem("huntertoken");
                
                if (!id) {
                    console.log("token no fund ");
                    return;
                }

                const reHunter = await axios.get(`http://localhost:5000/api/findHunters/${id}`, { // Added the missing "/"
                    headers: {
                        "Authorization": `Bearer ${token}` 
                    }
                });

                console.log('API Response:', reHunter.data);

                if (reHunter.data && reHunter.data.length) {
                    setHunter(reHunter.data);
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
                        <h1 key={h._id}>{h.companyName}</h1> 
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
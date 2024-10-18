import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import "../Styles/Pages/HeadHunterDashBoard.scss";

const HeadHunterDashBoard = () => {
    const [hunter, setHunter] = useState([]);

    useEffect(() => {
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
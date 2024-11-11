import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import FooterTransitionDown from "../utils/FooterTransitonDown";
import "../Styles/Pages/CreateOffer.scss";

const CreateOffer = () => {
    const companyName = localStorage.getItem('companyName');
    const role = localStorage.getItem('role');
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [applyLink, setApplyLink] = useState('');
    const [jobType, setJobType] = useState('Full-time');

    const locationPath = useLocation();

    useEffect(() => {
        FooterTransitionDown();
    }, []);
    const isHeadhunterPage = locationPath.pathname === "/CreateOffer";

    const Offer = async (e) => {
        e.preventDefault();

        try {
            const requirementsArray = requirements.split(',').map(req => req.trim());
            const salaryNumber = Number(salary);
            const salaryValue = isNaN(salaryNumber) ? salary : salaryNumber;
            const token = localStorage.getItem("huntertoken");
            console.log("Token envoyé avec la requête :", token);
            const response = await axios.post("https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/jobs", {

                title,
                company,
                location,
                salary: salaryValue,
                description,
                requirements: requirementsArray,
                applyLink,
                jobType,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("huntertoken")}`,
                },
            });

            console.log("Offre d'emploi créée :", response.data);
        } catch (error) {
            console.error("Erreur lors de la création de l'offre :", error);
        }
    };


    return (
        <div>
            <Header companyName={companyName} role={role} className={classNames({ 'header-red': isHeadhunterPage, 'header': !isHeadhunterPage })} />
            <div className="container2">
                <form className="form" onSubmit={Offer}>
                    <h1>Créer une offre</h1>
                    <div className="left">
                        <div className="title">
                            <label htmlFor="offerTitle">Titre de l'offre</label>
                            <input type="text" id="offerTitle" name="offerTitle" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="company">
                            <label htmlFor="offerCompany">Entreprise</label>
                            <input type="text" id="offerCompany" name="offerCompany" onChange={(e) => setCompany(e.target.value)} />
                        </div>
                        <div className="location">
                            <label htmlFor="offerLocation">Localisation</label>
                            <input type="text" id="offerLocation" name="offerLocation" onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <div className="salary">
                            <label htmlFor="offerSalary">Salaire</label>
                            <input type="text" id="offerSalary" name="offerSalary" onChange={(e) => setSalary(e.target.value)} />
                        </div>
                        <div className="jobType">
                            <label htmlFor="offerJobType">Type de contrat</label>
                            <select id="offerJobType" name="offerJobType" onChange={(e) => setJobType(e.target.value)}>
                                <option value="Full-time">Temps plein</option>
                                <option value="Part-time">Temps partiel</option>
                                <option value="Contract">Contractuel</option>
                                <option value="Internship">Stage</option>
                            </select>
                        </div>
                    </div>
                    <div className="right">
                        <div className="description">
                            <label htmlFor="offerDescription">Description</label>
                            <textarea id="offerDescription" name="offerDescription" onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="requirements">
                            <label htmlFor="offerRequirements">Exigences </label>
                            <textarea id="offerRequirements" name="offerRequirements" placeholder="séparées par des virgules" onChange={(e) => setRequirements(e.target.value)} />
                        </div>
                        <div className="applyLink">
                            <label htmlFor="offerApplyLink">Postuler sur un site externe </label>
                            <input type="text" id="offerApplyLink" name="offerApplyLink" onChange={(e) => setApplyLink(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit">GO !</button>
                </form>
            </div>
            <Footer className={classNames({ 'ocean-red': isHeadhunterPage, 'ocean': !isHeadhunterPage })} isHeadhunterPage={isHeadhunterPage} />

        </div>
    );
};

export default CreateOffer;

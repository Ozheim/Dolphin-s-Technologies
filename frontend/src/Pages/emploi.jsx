import Navigation from "../Component/Navigation";
import Header from "../Component/Header";
import FooterTransitionDownJobPage from "../utils/FooterTransitionDownJobPage.jsx";
import React, { useState, useEffect } from 'react';
import "../Styles/Components/FooterTransition.scss";
import Footer from "../Component/Footer";
import "../Styles/Pages/JobPage.scss";
import axios from "axios";

const Emploi = () => {
  const [jobs, setJobs] = useState([]);
  const [JobDescritpion, setJobDescription] = useState(null); 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des jobs :", error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    FooterTransitionDownJobPage();
  }, []);

  const JobClick = (job) => {
    setJobDescription(job); 
  };

  return (
    <div>
      <Header />
      <Navigation />
      <div className="job-page-container">
        <div className="list-of-jobs">
          {jobs.map(job => (
            <div
              key={job._id}
              className="job-card"
              onClick={() => JobClick(job)}
            >
              <h2>{job.title}</h2>
            </div>
          ))}
        </div>
        <div className="description">
          {JobDescritpion ? (
            <div>
              <h3>Description du poste</h3>
              <p>{JobDescritpion.description}</p>
            </div>
          ) : (
            <p>Sélectionnez un job pour voir la description.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Emploi;

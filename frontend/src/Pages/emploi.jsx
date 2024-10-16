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

  const JobClick = (jobId) => {
    setJobDescription(jobId);
  };

  return (
    <div>
      <Header />
      <Navigation />
      <div className="job-page-container">
        <div className="list-of-jobs">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="job-card"
              onClick={() => JobClick(job._id)}
            >
              <h2>{job.title}</h2> 
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
          ))} 
        </div>

        <div className="description">
          <div className="div_class_to_fixed">
          {jobs.map((job) => (
            job._id === JobDescritpion ? (
              <div key={job._id}>
                <div>
                  <h2>{job.title}</h2> 
                  <p>{job.salary}</p>
                  <p>{job.JobType}</p>
                  <button><a href="../CreateOffer">Postulez maintenant !</a></button>
              </div>
                <h3>Description du poste</h3>
                <p>{job.jobType}</p>
                <p>{job.description}</p>
                <p></p>
              </div>
            ) : null
          ))}
            </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Emploi;


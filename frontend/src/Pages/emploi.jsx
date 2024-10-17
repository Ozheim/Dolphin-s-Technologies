import Header from "../Component/Header";
import FooterTransitionDownJobPage from "../utils/FooterTransitionDownJobPage.jsx";
import {Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "../Styles/Components/FooterTransition.scss";
import Footer from "../Component/Footer";
import "../Styles/Pages/JobPage.scss";
import axios from "axios";

const Emploi = () => {
  const [jobs, setJobs] = useState([]);
  const [jobDescription, setJobDescription] = useState(null);  
  const [search, setSearch] = useState("");

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

  const handleJobClick = (jobId) => {
    setJobDescription(jobId);
  };


  const filteredJobs = jobs.filter((job) => {
    if (search === "") {
      return job; // 
    } 
    else if (job.title.toLowerCase().includes(search.toLowerCase())) {
      return job; 
    }
    else if (job.location.toLowerCase().includes(search.toLowerCase())) {
      return job; 
    }
    else if (job.company.toLowerCase().includes(search.toLowerCase())) {
      return job; 
    }
    return null;
  });

  return (
    <div>
      <Header />
      <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher un job par intitulé, nom de l'entreprise ou location ..."
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <div className="job-page-container">
        <div className="list-of-jobs">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job._id}
                className="job-card"
                onClick={() => handleJobClick(job._id)} // Corrected function name
              >
                <h2>{job.title}</h2>
                <p>{job.company}</p>
                <p>{job.location}</p>
              </div>
            ))
          ) : (
            <p>Aucun job trouvé</p>
          )}
        </div>
        <div className="description">
          <div className="div_class_to_fixed">
          {jobs.map((job) => (
            job._id === JobDescription ? (
              <div key={job._id}>
                <div>
                  <h2>{job.title}</h2> 
                  <p>{job.salary}</p>
                  <p>{job.JobType}</p>
                  <button>
                   <Link to={`/ApplyPage?id=${job._id}`}>Postulez maintenant !</Link>
                   </button>
              </div>
                <h3>Description du poste</h3>
                <p>{job.jobType}</p>
                <p>{job.requirements}</p>
                <p>{job.description}</p>
                <p></p>
              </div>
            ) : null
          ))}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Emploi;
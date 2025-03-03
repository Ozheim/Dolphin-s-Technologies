import React, { useEffect, useState } from 'react';
import "../Styles/Components/JobsList.scss";
import axios from "axios";

const JobsList = () => {

  const [blog, setBlogs] = useState([]);

 useEffect(() => {
  const fetchJobs = async () => {
    try {
      const response = await axios.get("https://app-59a0866c-f942-465a-a8b0-39a7f75184c6.cleverapps.io/api/jobs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des jobs :", error);
    }
  };
  fetchJobs();
}, []);

    return (
    <div className='container-job-list'>
      <div>
      <h1>Jobs List</h1>
      {
        blog.length === 0 ? <p>Chargement...</p> : null
      }
      <h2>{blog.length} Offres d'emploi</h2>
      </div>
      <div className="jobs-container">
        {
          blog.map(job => {
            return (
              <div key={job._id} className="job-card">
                <h2>{job.title}</h2>
                <p>{job.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default JobsList;

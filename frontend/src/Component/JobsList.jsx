import React, { useEffect, useState } from 'react';
import "../Styles/Components/JobsList.scss";

const JobsList = () => {

  const [blog, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])

  return (
    <div className='container'>
      <h1>Jobs List</h1>
      {
        blog.length === 0 ? <p>Chargement...</p> : null
      }
      <h2>{blog.length} Offres d'emploi</h2>
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

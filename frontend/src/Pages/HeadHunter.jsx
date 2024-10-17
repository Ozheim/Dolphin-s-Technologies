import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5173/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des offres d\'emploi', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchTerm, jobs]);

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher par titre ou localisation..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <li key={job._id}>
              <h2>{job.title}</h2>
              <p>{job.location}</p>
              <p>{job.description}</p>
            </li>
          ))
        ) : (
          <p>Aucun résultat trouvé.</p>
        )}
      </ul>
    </div>
  );
};

export default JobSearch;
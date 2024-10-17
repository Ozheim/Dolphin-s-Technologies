import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ApplyPage = () => {
  const location = useLocation();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // Récupère la query string
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id'); // Récupère l'id dans la query string

  useEffect(() => {
    const getOneJob = async () => {
      try {
        console.log("je requete");
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.log("Erreur lors de la récupération du job :", error);
      } finally {
        setLoading(false); // Désactive le chargement une fois que la requête est terminée
      }
    };
    
    getOneJob(); // On lance la requête ici
  }, [id]);

  if (loading) {
    // Affiche le rond de chargement pendant la requête
    return <div>Loading...</div>;
  }

  return (
    <div>
      {job ? (
        <div>
          <h1>{job.title}</h1>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>{job.description}</p>
          <p>{job.jobType}</p>
          <p>{job.requirements}</p>
        </div>
      ) : (
        <p>Aucun job trouvé.</p>
      )}
    </div>
  );
};

export default ApplyPage;

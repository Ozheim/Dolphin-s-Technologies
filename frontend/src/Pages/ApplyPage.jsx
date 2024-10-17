import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/Pages/ApplyPage.scss";
import Header from "../Component/Header.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faMoneyBill,faClock } from '@fortawesome/free-solid-svg-icons';



const ApplyPage = () => {
  const location = useLocation();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [Email,setEmail] = useState(null);
  const [phone, setPhone] =useState(null);
  const [linkedin, setLinkedin] = useState(null);
  
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id'); 

  /****************************** post function for form  ********************************/

  const postForm = ()=>{
    try{

      const post = axios.post("http://localhost:5000/api/form",{
        name,
        firstName,
        Email,
        phone,
        linkedin,

      },
      {headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`,

      },
      });
      console.log("merci d'avoir postulé", post.data)
      
    }catch(error){
      console.log("erreur : ", error)
    }
  }


/********************************  function to get job with id as parameter    *******************************/


  useEffect(() => {
    const getOneJob = async () => {
      try {
        console.log("je requete");
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.log("Erreur lors de la récupération du job :", error);
      } finally {
        setLoading(false); 
      }
    };
    getOneJob(); 
  }, [id]);

  if (loading) {
   
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header/>
      {job ? (
        <div className="apply-job-container">
        <div className="form-container">
          <form action="post">
            <div>
            <label htmlFor="LastName">Votre Nom</label>
            <input type="text" id="LastName" name="name" placeholder="votre nom" required onChange={(e)=> {setName(e.target.value)}}/>
            </div>
            <div>
            <label htmlFor="FirstName">Votre Prénom</label>
            <input type="text" id="FirstName" name="firstName" placeholder="votre Prénom" required onChange={(e)=>{setFirstName(e.target.value)}}/>
            </div>
            <div>
            <label htmlFor="Mail">Votre Email</label>
            <input type="text" id="email" name="email" placeholder="mail@mail.com" required onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div>
            <label htmlFor="tel">votre numéro de téléphone</label>
            <input type="tel" id="phone" name="phone" placeholder="Télephone" maxLength={10}required onChange={(e)=> setPhone(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="link">Lien Linkedin</label>
            <input type="text" name="link" id="link" placeholder="votre linkedin"required onChange={(e)=> setLinkedin(e.target.value)}/>
            </div>
            <button type="button" id="submit-button-applyPage" onClick={postForm}>Envoyer</button>
          </form>
        </div>
        <div className="job-main">
          <div className="job-card-apply-page">
          <h1>{job.title}</h1>
          <h2>{job.company}</h2>
          <p id="location-job"><FontAwesomeIcon icon={faLocationDot} />{job.location}</p>
          <p id="salary-job"><FontAwesomeIcon icon={faMoneyBill} />{job.salary}</p>
          <p id="job-type"><FontAwesomeIcon icon={faClock} />{job.jobType}</p>
          <h3>Le poste</h3>
          <p id="description-job">{job.description}</p>
          <h3>Pré-requis</h3>
          <p id="requirements-job">{job.requirements}</p>
          </div>
        </div>
        </div>
      ) : (
        <p>Aucun job trouvé.</p>
      )}
    </div>
  );
};

export default ApplyPage;

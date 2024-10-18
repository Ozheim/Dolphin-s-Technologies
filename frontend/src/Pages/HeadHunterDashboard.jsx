import React, { useEffect, useState, useContext } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
<<<<<<< HEAD
import axios from "axios"
import { AuthContext } from "../utils/AuthContext.jsx";
import "../Styles/Pages/HeadHunterDashBoard.scss";

const HeadHunterDashBoard = () => {
  const { companyName } = useContext(AuthContext);
  const { hunterId } = useContext(AuthContext);
  console.log(companyName);
  const [jobsById, setJobsById] = useState([]);
=======
import classNames from 'classnames';
import "../Styles/Pages/HeadHunterDashBoard.scss";

const HeadHunterDashBoard = () => {
    const [hunter, setHunter] = useState([]);
    const companyName = localStorage.getItem('companyName');
    const role = localStorage.getItem('role');
>>>>>>> 7eca5097e18336a25f13acf212830625ef811879

  const id = hunterId

  useEffect(() => {
      const fetchJobsbyID = async () => {
          try {
              const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
              setJobsById(response.data);
          } catch (error) {
              console.error("Erreur lors de la récupération des jobs :", error);
          }
      };
      fetchJobsbyID();
    }, []);
<<<<<<< HEAD
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="informations-card">
          <div>
            <div className="hunter_container">
              <h2>{companyName}</h2>
            </div>
          </div>
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
=======

    return (
        <>
            <Header companyName={companyName} role={role} className={classNames({ 'header-red': 1 })} />
            <div className="dashboard-container">
                <div className="informations-card">
                    {hunter.map(h => (
                        <h1 key={h._id}>{h.companyName}</h1>
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
            <Footer className={classNames({ 'ocean-red': 1, 'ocean': 1})} isHeadhunterPage={1} />

        </>
    );
>>>>>>> 7eca5097e18336a25f13acf212830625ef811879
};
export default HeadHunterDashBoard;

import "../Styles/Pages/Home.scss";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import React, { useEffect, useState } from 'react';
import "../Styles/Components/JobsList.scss";
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [blog, setBlogs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/jobs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des jobs :", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <Header />
      <div className="opportunity-container">
        <p>Bienvenue sur Dolphin Technologies !</p>
        <h1 className="h1-home">Notre job, vous aider à choisir le vôtre parmi {blog.length} offres</h1>
        <Link to="/emploi">
          <p id="plus-button">Voir plus !</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

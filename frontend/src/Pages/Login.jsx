import "../Styles/Pages/Login.scss";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import React, { useEffect, useState } from 'react';
import FooterTransitionDown from "../utils/FooterTransitonDown";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    FooterTransitionDown();
  }, []);

  const Connexion = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post("http://localhost:5000/api/login", {
            email,
            password,
        });

        console.log('Réponse API :', res.data);

        const { token, userId, role } = res.data;

        if (!token || !role) {
            throw new Error('Données manquantes dans la réponse API');
        }

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        if (role === 'admin') {
            navigate('/admin/dashboard');
        } else if (role === 'headhunter') {
            navigate('/CreateOffer');
        } else {
            navigate(`/emploi/${userId}`);
        }

        console.log("Utilisateur connecté", role);
    } catch (error) {
        console.log("Erreur : ", error.response ? error.response.data.message : error.message);
    }
};

  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={Connexion}>
          <h1>Connexion</h1>
          <div className="name">
            <label htmlFor="userName">Adresse Email</label>
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="userPassword">Mot de passe</label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">GO !</button>
          <p>
            Vous n'avez pas encore de compte ? <a href="signin">Inscrivez-vous</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

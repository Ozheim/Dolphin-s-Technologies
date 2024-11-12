import "../Styles/Pages/Login.scss";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import React, { useEffect, useState, useContext } from 'react';
import FooterTransitionDown from "../utils/FooterTransitonDown";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext.jsx';

const Login = () => {

  /************************************  use effect used to resolve overflow conflict  ************************************************************/
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.style.margin = "0";
    htmlElement.style.overflow = "hidden";


    return () => {
      htmlElement.style.margin = "";
      htmlElement.style.overflow = "";
    };
  }, []);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setName, setRole } = useContext(AuthContext);

  useEffect(() => {
    FooterTransitionDown();
  }, []);

  const Connexion = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/login", {
        email,
        password,
      }, {
  headers: { "Content-Type": "application/json" }});
      console.log('Réponse API :', res.data);

      const { token, userId, role, name } = res.data;

      if (!token || !role || !name) {
        throw new Error('Données manquantes dans la réponse API');
      }
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);

      // Mettre à jour le contexte
      setName(name);
      setRole(role);

      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else if (role === 'headhunter') {
        navigate('/CreateOffer');
      } else {
        navigate(`/emploi`);
        // navigate(`/emploi/${userId}`);
      }

      console.log("Utilisateur connecté", role);
    } catch (error) {
      console.log("Erreur : ", error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="container-login">
        <div className="wrapper-login">
          <form className="login-form" onSubmit={Connexion}>
            <h1 className="login-title">Connexion</h1>
            
            <div className="input-group">
              <label className="input-label" htmlFor="userName">Adresse Email</label>
              <input
                className="login-input"
                type="text"
                id="userName"
                name="userName"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="userPassword">Mot de passe</label>
              <input
                className="login-input"
                type="password"
                id="userPassword"
                name="userPassword"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-button">GO !</button>
            
            <p className="signup-message">
              Vous n'avez pas encore de compte ? <a className="signup-link" href="signin">Inscrivez-vous</a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

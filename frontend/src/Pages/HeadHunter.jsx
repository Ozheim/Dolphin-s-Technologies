import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import FooterTransitionDown from "../utils/FooterTransitonDown";
import Footer from "../Component/Footer";
import { AuthContext } from '../utils/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import Header from "../Component/Header";
import "../Styles/Components/FooterTransition.scss";
import "../Styles/Pages/HeadHunterLogin.scss";
import axios from "axios";

const HeadHunter = () => {

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.style.margin = "0";
    htmlElement.style.overflow = "hidden";

    return () => {
      htmlElement.style.margin = "";
      htmlElement.style.overflow = "";
    };
  }, []);

  const navigate = useNavigate();
  const { setCompanyName, setRole } = useContext(AuthContext);
  const location = useLocation();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  useEffect(() => {
    FooterTransitionDown();
  }, []);

  const headHunterHired = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/loginHunters", {
        email,
        password,
      });
      const companyName = response.data.headhunter.companyName;

      setCompanyName(companyName);
      setRole('headhunter');

      const { huntertoken } = response.data;

      localStorage.setItem("huntertoken", huntertoken);
      localStorage.setItem("role", 'headhunter');
      localStorage.setItem("companyName", companyName);

      console.log("Connexion réussie, token reçu :", huntertoken);
      navigate('/CreateOffer');
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  const isHeadhunterPage = location.pathname === '/HeadHunter' || location.pathname === "/DashBoardHeadHunter";

 return (
  <div>
    <Header className={classNames({ 'header-red': isHeadhunterPage, 'header': !isHeadhunterPage })} />
    <div className="container-login-headHunter">
      <div className="wrapper-login-headHunter">
        <form className="login-form-headHunter">
          <h1 className="login-title-headHunter">Connexion</h1>
          
          <div className="input-group-headHunter">
            <label className="input-label-headHunter" htmlFor="userName">Nom d'utilisateur</label>
            <input type="text" className="login-input-headHunter" id="userName" name="userName" onChange={(e) => setemail(e.target.value)} />
          </div>
          
          <div className="input-group-headHunter">
            <label className="input-label-headHunter" htmlFor="userPassword">Mot de passe</label>
            <input type="password" className="login-input-headHunter" id="userPassword" name="userPassword" onChange={(e) => setpassword(e.target.value)} />
          </div>
          
          <button type="submit" className="login-button-headHunter" onClick={headHunterHired}>GO !</button>
          
          <p className="signup-message-headHunter">
            Vous n'avez pas encore de compte ? <a className="signup-link-headHunter" href="signinHeadHunter">Inscrivez-vous</a>
          </p>
        </form>
      </div>
    </div>
    <Footer className={classNames({ 'ocean-red': isHeadhunterPage, 'ocean': !isHeadhunterPage })} isHeadhunterPage={isHeadhunterPage} />
  </div>
);


};

export default HeadHunter;

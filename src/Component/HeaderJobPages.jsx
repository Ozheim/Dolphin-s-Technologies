import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';
import FooterTransitionNoWave from "../utils/FooterTransitionUpFromNoWave.jsx";
import "../Styles/Components/Header.scss";
import { useNavigate } from "react-router-dom";


const HeaderJobPages = (props) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <div className={`header ${props.className || ''}`} style={props.style}>
      <div>
        <a href="/">
          <img src={Logo} alt="logo" className="logo" />
        </a>
      </div>
      <ul>
        <button className="header-list" onClick={() => FooterTransitionNoWave("HeadHunter", navigate)}>
          Accès recruteur
        </button>
        <button className="header-list" onClick={() => FooterTransitionNoWave("Emploi", navigate)}>
          Emploi
        </button>
        <button className="connexion-link" onClick={() => FooterTransitionNoWave("UserDashboard", navigate)}>
          <FontAwesomeIcon icon={faUser} /> {userName ? userName : "Connexion"}
        </button>
      </ul>
    </div>
  );
};

export default HeaderJobPages;

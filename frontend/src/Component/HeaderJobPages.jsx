import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';
import FooterTransitionNoWave from "../utils/FooterTransitionUpFromNoWave.jsx";
import "../Styles/Components/Header.scss";

const HeaderJobPages = (props) => {
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
        <button className="header-list" onClick={() => FooterTransitionNoWave("HeadHunter")}>
          Accès recruteur
        </button>
        <button className="header-list" onClick={() => FooterTransitionNoWave("Emploi")}>
          Emploi
        </button>
        <button className="connexion-link" onClick={() => FooterTransitionNoWave("Login")}>
          <FontAwesomeIcon icon={faUser} /> {userName ? userName : "Connexion"}
        </button>
      </ul>
    </div>
  );
};

export default HeaderJobPages;

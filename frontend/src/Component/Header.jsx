import React, { useRef, useContext } from 'react';
import { AuthContext } from '../utils/AuthContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import classNames from 'classnames';
import Logo from "../assets/logo.png";
import FooterTransition from '../utils/FooterTransition';
import "../Styles/Components/Header.scss";
import soundFile from '../assets/sound_effect.mp3';

const Header = (props) => {
  const { companyName, name, role, logout } = useContext(AuthContext);
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const displayName = role === 'headhunter' ? companyName : name;

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleUserClick = () => {
    if (displayName) {
      if (role === 'headhunter') {
        navigate('/HeadHunterDashBoard');
      } else {
        FooterTransition("UserDashboard", navigate);
      }
    } else {
      FooterTransition("Login", navigate);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="header-container">
      <div className={classNames('header', props.className)} style={props.style}>
        <div>
          <a href="/" onClick={handleClick}>
            <img src={Logo} alt="logo" className="logo" />
          </a>
          <audio ref={audioRef} src={soundFile} />
        </div>
        <ul>
          {role !== 'headhunter' ? (
            <>
              <button className="header-list" onClick={() => FooterTransition("HeadHunter", navigate)}>
                Accès recruteur
              </button>
            </>
          ) : (
            <button className="header-list" onClick={() => FooterTransition("CreateOffer", navigate)}>
              Créer une offre
            </button>
          )}

          <button className="header-list" onClick={() => FooterTransition("Emploi", navigate)}>
            Emploi
          </button>

          {displayName ? (
            <>
              <button className="connexion-link" onClick={handleUserClick}>
                <FontAwesomeIcon icon={faUser} /> {displayName}
              </button>
              <button className="logout-link" onClick={handleLogout}>
                Déconnexion
              </button>
            </>
          ) : (
            <button className="connexion-link" onClick={handleUserClick}>
              <FontAwesomeIcon icon={faUser} /> Connexion
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;


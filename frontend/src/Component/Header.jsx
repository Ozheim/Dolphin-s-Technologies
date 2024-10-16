import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Logo from '../assets/logo.png';
import FooterTransition from '../utils/FooterTransition';
import '../Styles/Components/Header.scss';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className={classNames('header', props.className)} style={props.style}>
        <div>
          <a href="/"><img src={Logo} alt="logo" className="logo" /></a>
        </div>
        <ul>
          <button className="header-list" onClick={() => FooterTransition("HeadHunter")}>
            Accès recruteur
          </button>
          <button className="header-list" onClick={() => FooterTransition("Emploi")}>
            Emploi
          </button>
          <button className="connexion-link" onClick={() => FooterTransition("Login")}>
            <FontAwesomeIcon icon={faUser} /> Connexion
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

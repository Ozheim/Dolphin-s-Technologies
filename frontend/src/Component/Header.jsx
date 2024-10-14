<<<<<<< HEAD

import Logo from "../assets/logo.png";
import "../Styles/Components/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    return (
        <div className="header-container">
            <div className="header">
                <div>
                    <a href="../Home"><img src={Logo} alt="logo" className="logo" /></a>
                </div>
                <ul>
                    <li><a href="../HeadHunter" className="header-list">Accès recruteur</a></li>
                    <li><a href="../emploi" className="header-list">Emploi</a></li>
                    <li><a href="../Login" className="connexion-link"><FontAwesomeIcon icon={faUser} />Connexion</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
=======
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
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <ul>
          <button className="header-list" onClick={() => FooterTransition("HeadHunter")}>
            Accès recruteur
          </button>
          <button className="header-list" onClick={() => FooterTransition("Home")}>
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
>>>>>>> 8213e2af8e9ed9b0dd0612d3ba782ce2819e518e

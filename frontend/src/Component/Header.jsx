import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png';
import FooterTransition from '../utils/FooterTransition';
import '../Styles/Components/Header.scss';
import soundFile from '../assets/sound_effect.mp3';

const Header = (props) => {
  const [userName, setUserName] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => {
        console.log("Audio is playing");
        setTimeout(() => {
          window.location.href = "/";
        }, 400);
      }).catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
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
          <button className="header-list" onClick={() => FooterTransition("HeadHunter")}>
            Accès recruteur
          </button>
          <button className="header-list" onClick={() => FooterTransition("Emploi")}>
            Emploi
          </button>
          <button className="connexion-link" onClick={() => FooterTransition("Login")}>
            <FontAwesomeIcon icon={faUser} /> {userName ? userName : "Connexion"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

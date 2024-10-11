
import Logo from "../assets/logo.png";
import "../Styles/Components/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import FooterTransition from "../utils/FooterTransition.jsx";
import { useState } from "react";


const Header = () =>{
      const [path, setPath] = useState(null); 

  const Navigation = (newPath) => {
    setPath(newPath); 
  };
    

    return(
        <div className="header-container">
        <div className="header">
            <div>
                <img src={Logo} alt="logo" className="logo"/>
            </div>
            <ul>
                <button className="header-list" onClick={() => FooterTransition("HeadHunter")}>
                Accès recruteur
                </button>
                <button className="header-list" onClick={() => FooterTransition("Home")}>Emploi</button>
                <button className="connexion-link" onClick={() => FooterTransition("Login")}><FontAwesomeIcon icon={faUser}/>Connexion</button>
                
            </ul>
        </div>
        </div>
    )
}   

export default Header;
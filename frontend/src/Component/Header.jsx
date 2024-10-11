
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
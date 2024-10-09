import Logo from "../assets/logo.png";
import "../Styles/Components/Header.scss";

const Header = () =>{

    return(
        <div className="header">
            <div>
                <img src={Logo} alt="logo" className="logo"/>
            </div>
            <ul>
                <li><a href="../Login.jsx">Mon compte</a></li>
                <li><a href="../accèsRecruteur">Accès Recruteur</a></li>
                <li><a href="../emploi">Emploi</a></li>
                <li><a href="../signup">SignUp</a></li>
                <li><a href=""></a></li>
            </ul>
        </div>
    )
}

export default Header;
import { useContext } from "react";
import { AuthContext } from '../utils/AuthContext.jsx';
import "../Styles/Pages/userdashboard.scss";
import ParameterProfil from "../utils/parameterProfil.jsx";
import UserApplication from "../utils/UserApplication.jsx";

const UserDashboard = () => {
  const { name } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <a href="#"><i className="fas fa-cog"></i> Paramètres</a>
        <a href="#"><i className="fas fa-briefcase"></i> Mes Candidatures</a>
        <a href="#"><i className="fas fa-sign-out-alt"></i> Déconnexion</a>
      </div>
      <div className="content">
        <div className="header-Dashboard">
          <div className="user-info">
            <span className="hello">Bonjour {name}! comment ca va ?</span>
          </div>
        </div>
        <div className="card">
          <h3>Bienvenue sur ton Dashboard</h3>
          <p>C'est ici que tu peux gérer toutes tes candidatures et tes paramètres.</p>
        </div>
        <div className="card">
          <h3>Paramètres</h3>
          <ParameterProfil/>
        </div>
        <div className="card">
          <h3>Mes candidatures:</h3>
          <UserApplication/>  
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

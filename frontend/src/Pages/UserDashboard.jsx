import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../utils/AuthContext.jsx';
import "../Styles/Pages/userdashboard.scss";

const UserDashboard = () => {
  const { name, userId } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  console.log(userId);

  useEffect(() => {
    fetch("http://localhost:5000/api/allUser")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error =>
        console.error("Erreur lors de la récupération des données : ", error)
      )
  }, [])
  return (
    <div>
      <div className="user_container">
        <div className="main-title">
          <img src={""} alt="your picture"/>
          <h1>bonjour {name}! Comment ca va? </h1>
        </div>
          <ul>
            <li><button className="button-userDashboard">Paramètres</button></li>
            <li><button className="button-userDashboard">Mes candidatures</button></li>
          </ul>
        </div>
        <div>
            
          
        </div>
    </div>
  );
};

export default UserDashboard;
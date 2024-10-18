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
        <span>Nom d'utilisateur</span>
        <h2>{userId}</h2>
        <span>Adresse e-mail</span>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
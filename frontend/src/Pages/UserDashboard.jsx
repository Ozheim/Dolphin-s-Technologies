import { useEffect, useState } from "react";
import "../Styles/Pages/userdashboard.scss";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);

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

        {users.map((user) => (
          <div key={user._id} className="job-card">
            <span>Nom d'utilisateur</span>
            <h2>{user.name}</h2>
            <span>Adresse e-mail</span>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
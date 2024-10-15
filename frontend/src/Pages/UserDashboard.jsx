import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Pages/userdashboard.scss";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/user")
      .then((response) => {
        setUsers(response.data); 
        setLoading(false); // 
      })
      .catch((err) => {
       
      });
  }, []);

  return (
    <div>
      
      {loading ? <p>Chargement...</p> : null}

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
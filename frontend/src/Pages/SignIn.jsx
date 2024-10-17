import "../Styles/Pages/signin.scss"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { useState } from "react";
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const signUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/createUsers",
        data: { name, email, password },
      })
      localStorage.setItem("huntertoken", response.data.huntertoken)
      console.log("user log")

    } catch (error) {
      console.log("erreur : ", error)
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <form action="">
          <h1>Inscription</h1>
          <div className="name">
            <label for="userName">Nom d'utilisateur</label>
            <input type="text" id="userName" name="userName" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="email">
            <label for="userEmail">E-mail</label>
            <input type="text" id="userEmail" name="userEmail" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="password">
            <label for="userPassword">Mot de passe</label>
            <input type="text" id="userPassword" name="userPassword" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="check-input">
            <input type="checkbox" name="checked" id="checked" required />
            <span>Cochez pour accepter les termes et conditions</span>
          </div>
          <button type="sumbit" onClick={signUp}>GO !</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};


export default SignIn;
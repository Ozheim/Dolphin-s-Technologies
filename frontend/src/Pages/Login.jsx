import "../Styles/Pages/Login.scss";
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import React, { useEffect, useState } from 'react';
import FooterTransitionDown from "../utils/FooterTransitonDown";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  useEffect(() => {
    FooterTransitionDown();
  }, []);

  const Connexion = async (e) => {

    e.preventDefault();

    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/login",
        data: { email, password },
      });
      localStorage.setItem("token", res.data.token);
      console.log("user created")
      navigate()
    } catch (error) {
      console.log("mes erreurs: ", error)
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <form action="">
          <h1>Connexion</h1>
          <div className="name">
            <label for="userName">Adresse Email</label>
            <input type="text" id="userName" name="userName" onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="password">
            <label for="userPassword">Mot de passe</label>
            <input type="password" id="userPassword" name="userPassword" onChange={(e) => setpassword(e.target.value)} />
          </div>
          <button type="submit" onClick={Connexion}>GO !</button>
          <p>
            Vous n'avez pas encore de compte ? <a href="signin">Inscrivez-vous</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Login;

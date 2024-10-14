import "../Styles/Pages/Login.scss";
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import React, { useEffect } from 'react';
import FooterTransitionDown from "../utils/FooterTransitonDown";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
      useEffect(() => {
        FooterTransitionDown();
    }, []);

    const Connexion = async (e) =>{

        e.preventDefault();

        try{
          const res = await axios({
              method: "post",
              url: "http://localhost:5173/api/login",
              data: {email,password},

          });
          localStorage.setItem("token",res.data.token);
  
        } catch(error){
          console.log("mes erreurs: " ,error)
        } 

    }
    
  return (
    <div>
      <Header/>
      <div className="container">
        <form action="">
        <h1>Connexion</h1>
        <div className="name">
          <label for="userName">Nom d'utilisateur</label>
          <input type="text" id="userName" name="userName" />
        </div>
        <div className="password">
          <label for="userPassword">Mot de passe</label>
          <input type="password" id="userPassword" name="userPassword" />
        </div>
        <button type="sumbit" onClick={Connexion}>GO !</button>
        <p>
          Vous n'avez pas encore de compte ? <a href="signin">Inscrivez-vous</a>
        </p>
        </form>
      </div>
      <Footer/>
    </div>
  );
};
export default Login;

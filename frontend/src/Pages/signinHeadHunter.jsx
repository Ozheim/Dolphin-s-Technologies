import "../Styles/Pages/signin.scss";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import classNames from 'classnames';
import axios from "axios";
import React, { useState,useEffect } from "react";


const SigninHeadHunter = () => {

  
 useEffect(() => {
        const htmlElement = document.documentElement;
        htmlElement.style.margin = "0";
        htmlElement.style.overflow = "hidden";

 
        return () => {
            htmlElement.style.margin = "";
            htmlElement.style.overflow = "";
        };
    }, []);
  const [companyName, setCompanyName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const inscriptionHeadHunter = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/hunters",
        data: { companyName, email, password },
      });
      localStorage.setItem("huntertoken", response.data.huntertoken);
      console.log("hunter created");
      Navigate()
    }
    catch (error) {
      console.log("mes erreurs: ", error)
    }
  }

  const isSigninHeadHunter = location.pathname === "/signinHeadHunter";
  return (
    <div>
      <Header className={classNames({ 'header-red': isSigninHeadHunter, 'header': !isSigninHeadHunter })} />
      <div className="container">
        <form action="">

          <h1>Inscription</h1>

          <div className="name">
            <label for="userName">Nom d'utilisateur</label>
            <input type="text" id="userName" name="userName" onChange={(e) => setCompanyName(e.target.value)} />
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
          <button type="sumbit" onClick={inscriptionHeadHunter}>GO !</button>
        </form>
      </div>
      <Footer className={classNames({ 'ocean-red': isSigninHeadHunter, 'ocean': !isSigninHeadHunter })} isSigninHeadHunter={isSigninHeadHunter} />
    </div>
  )

}

export default SigninHeadHunter;
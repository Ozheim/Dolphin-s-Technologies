import "../Styles/Pages/signinHeadHunter.scss";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import classNames from 'classnames';
import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SigninHeadHunter = () => {
  const Navigate = useNavigate()
  
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
        url: "https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/hunters",
        data: { companyName, email, password },
      });
      localStorage.setItem("huntertoken", response.data.huntertoken);
      console.log("hunter created");
      Navigate("/Signin")
    }
    catch (error) {
      console.log("mes erreurs: ", error)
    }
  }

  const isSigninHeadHunter = location.pathname === "/signinHeadHunter";
 return (
  <div>
    <Header className={classNames({ 'header-red': isSigninHeadHunter, 'header': !isSigninHeadHunter })} />
    <div className="container-signin-headHunter">
      <div className="wrapper-signin-headHunter">
        <form className="signin-form-headHunter">
          <h1 className="signin-title-headHunter">Inscription</h1>

          <div className="input-group-headHunter">
            <label className="input-label-headHunter" htmlFor="userName">nom utilisateur</label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="signin-input-headHunter"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="input-group-headHunter">
            <label className="input-label-headHunter" htmlFor="userEmail">E-mail</label>
            <input
              type="text"
              id="userEmail"
              name="userEmail"
              className="signin-input-headHunter"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group-headHunter">
            <label className="input-label-headHunter" htmlFor="userPassword">Mot de passe</label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              className="signin-input-headHunter"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="check-input-headHunter">
            <input type="checkbox" name="checked" id="checked" required />
            <span className="checkbox-label-headHunter">Cochez pour accepter les termes et conditions</span>
          </div>

          <button type="submit" className="signin-button-headHunter" onClick={inscriptionHeadHunter}>GO !</button>
        </form>
      </div>
    </div>
    <Footer className={classNames({ 'ocean-red': isSigninHeadHunter, 'ocean': !isSigninHeadHunter })} isSigninHeadHunter={isSigninHeadHunter} />
  </div>
);



}

export default SigninHeadHunter;
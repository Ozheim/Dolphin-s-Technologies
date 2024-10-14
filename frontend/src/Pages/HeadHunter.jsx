import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames'; 
import FooterTransitionDown from "../utils/FooterTransitonDown";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "../Styles/Components/FooterTransition.scss";
import "../Styles/Pages/HeadHunter.scss";

const HeadHunter = () => {
    const location = useLocation();
     const [email, setemail] = useState();
     const [password, setpassword] = useState();

    useEffect(() => {
        FooterTransitionDown();
    }, []);

    const isHeadhunterPage = location.pathname === '/HeadHunter';

    return (
      <div>
        <Header className={classNames({ 'header-red': isHeadhunterPage, 'header': !isHeadhunterPage })} />
        <div>
        <div className="container">
        <form action="">
        <h1>Connexion</h1>
        <div className="name">
          <label for="userName">Nom d'utilisateur</label>
          <input type="text" id="userName" name="userName" onChange={(e)=> setemail(e.target.value)} />
        </div>
        <div className="password">
          <label for="userPassword">Mot de passe</label>
          <input type="password" id="userPassword" name="userPassword" onChange={(e)=> setpassword(e.target.value)} />
        </div>
        <button type="submit">GO !</button>
        <p>
          Vous n'avez pas encore de compte ? <a href="signin">Inscrivez-vous</a>
        </p>
        </form>
      </div>

    </div>
        <Footer className={classNames({ 'ocean-red': isHeadhunterPage, 'ocean': !isHeadhunterPage })} isHeadhunterPage={isHeadhunterPage} />
      </div>
    );
};

export default HeadHunter;

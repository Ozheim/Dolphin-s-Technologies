import Navigation from "../Component/Navigation";
import Header from "../Component/Header";
import FooterTransitionDownJobPage from "../utils/FooterTransitionDownJobPage.jsx";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames'; 
import "../Styles/Components/FooterTransition.scss";
import Footer from "../Component/Footer";


const Emploi = () => {

      useEffect(() => {
        FooterTransitionDownJobPage();
    }, []);
    return(
        <div>
            <Header/>
            <Navigation/>
            <Footer/>
        </div>
    )
}


export  default Emploi; 